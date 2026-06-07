const state = {
  aircraft: [],
  filtered: [],
  search: "",
  page: 1,
  pageSize: 24,
  filters: {
    type: "",
    country: "",
    era: "",
    status: ""
  }
};
const NOT_RECORDED = "Not listed";

const els = {
  heroSearchForm: document.querySelector("#hero-search-form"),
  heroSearch: document.querySelector("#hero-search"),
  search: document.querySelector("#search-input"),
  type: document.querySelector("#type-filter"),
  country: document.querySelector("#country-filter"),
  era: document.querySelector("#era-filter"),
  status: document.querySelector("#status-filter"),
  reset: document.querySelector("#reset-filters"),
  countryFlagFilters: document.querySelector("#country-flag-filters"),
  grid: document.querySelector("#aircraft-grid"),
  resultCount: document.querySelector("#result-count"),
  detailSection: document.querySelector("#detail"),
  detailContent: document.querySelector("#detail-content"),
  pagination: document.querySelector("#pagination"),
  statTotal: document.querySelector("#stat-total"),
  statCountries: document.querySelector("#stat-countries"),
  statTypes: document.querySelector("#stat-types"),
  flagTrack: document.querySelector("#flag-track"),
  cardTemplate: document.querySelector("#aircraft-card-template")
};

const COUNTRY_FLAGS = {
  Brazil: { code: "br" },
  China: { code: "cn" },
  France: { code: "fr" },
  Germany: { code: "de" },
  India: { code: "in" },
  Israel: { code: "il" },
  Italy: { code: "it" },
  "Multinational Europe": { code: "eu" },
  Pakistan: { code: "pk" },
  Russia: { code: "ru" },
  "Soviet Union": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20the%20Soviet%20Union.svg" },
  Sweden: { code: "se" },
  "United Kingdom": { code: "gb" },
  "United States": { code: "us" }
};

function flagAsset(flag) {
  if (!flag) return null;
  if (flag.url) return { src: flag.url, srcset: "" };
  return {
    src: `https://flagcdn.com/${flag.code}.svg`,
    srcset: `https://flagcdn.com/w320/${flag.code}.png 1x, https://flagcdn.com/w640/${flag.code}.png 2x`
  };
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function compactDesignation(value) {
  return normalize(value).replace(/[^a-z0-9]/g, "");
}

function designationTokens(item) {
  const values = [item.id, item.name, ...(item.alternative_names || [])];
  return values.flatMap((value) => {
    const text = normalize(value);
    const compact = compactDesignation(value);
    const matches = text.match(/\b(?:[a-z]{1,3}\/)?[a-z]{1,4}[-\s]?\d+[a-z]{0,3}\b/g) || [];
    return [compact, ...matches.map(compactDesignation)];
  });
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function splitValues(value) {
  return String(value || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setOptions(select, values, label) {
  select.innerHTML = `<option value="">${label}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function aircraftSearchText(item) {
  return [
    ...designationTokens(item),
    item.name,
    item.alternative_names?.join(" "),
    item.nato_reporting_name,
    item.country_of_origin,
    item.manufacturer,
    item.role,
    item.aircraft_type,
    item.era,
    item.status,
    item.engine_type,
    item.speed_category,
    item.short_summary
  ]
    .map(normalize)
    .join(" ");
}

function applyFilters() {
  const query = normalize(state.search);
  const compactQuery = compactDesignation(state.search);
  state.filtered = state.aircraft.filter((item) => {
    const searchText = aircraftSearchText(item);
    const matchesSearch = !query || searchText.includes(query) || (compactQuery && searchText.includes(compactQuery));
    const matchesType = !state.filters.type || item.aircraft_type === state.filters.type;
    const matchesCountry =
      !state.filters.country || splitValues(item.country_of_origin).includes(state.filters.country) || item.country_of_origin === state.filters.country;
    const matchesEra = !state.filters.era || splitValues(item.era).includes(state.filters.era) || item.era === state.filters.era;
    const matchesStatus = !state.filters.status || item.status === state.filters.status;
    return matchesSearch && matchesType && matchesCountry && matchesEra && matchesStatus;
  });
  state.page = 1;
  syncCountryFlagFilters();
  renderGrid();
}

function renderGrid() {
  els.grid.innerHTML = "";
  const totalPages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * state.pageSize;
  const visibleAircraft = state.filtered.slice(start, start + state.pageSize);
  els.resultCount.textContent = `${state.filtered.length} aircraft found, page ${state.page} of ${totalPages}`;

  if (!state.filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No aircraft match the current search and filters.";
    els.grid.append(empty);
    renderPagination();
    return;
  }

  visibleAircraft.forEach((item) => {
    const fragment = els.cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".aircraft-card");
    const link = fragment.querySelector(".card-link");
    const thumb = fragment.querySelector(".thumb");
    const type = fragment.querySelector(".type-pill");
    const status = fragment.querySelector(".status-pill");
    const title = fragment.querySelector("h3");
    const summary = fragment.querySelector("p");

    link.href = `aircraft.html?id=${encodeURIComponent(item.id)}`;
    if (item.images?.[0]?.url) {
      thumb.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.42)), url("${item.images[0].url}")`;
    }
    type.textContent = item.aircraft_type;
    status.textContent = item.status;
    title.textContent = item.name;
    summary.textContent = item.short_summary;
    fragment.querySelector(".origin").textContent = item.country_of_origin;
    fragment.querySelector(".first-flight").textContent = item.first_flight;
    card.dataset.id = item.id;
    els.grid.append(fragment);
  });
  renderPagination();
}

function renderPagination() {
  if (!els.pagination) return;
  const totalPages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
  if (totalPages <= 1) {
    els.pagination.innerHTML = "";
    return;
  }

  els.pagination.innerHTML = `
    <button type="button" data-page="prev" ${state.page === 1 ? "disabled" : ""}>Previous</button>
    <span>Page ${state.page} of ${totalPages}</span>
    <button type="button" data-page="next" ${state.page === totalPages ? "disabled" : ""}>Next</button>
  `;
}

function infoRows(item) {
  return [
    ["Country of origin", item.country_of_origin],
    ["Manufacturer", item.manufacturer],
    ["Role", item.role],
    ["Aircraft type", item.aircraft_type],
    ["Era", item.era],
    ["First flight", item.first_flight],
    ["Introduction", item.introduction_date],
    ["Retirement", item.retirement_date || NOT_RECORDED],
    ["Status", item.status],
    ["Number built", item.number_built],
    ["Crew", item.crew],
    ["Engine type", item.engine_type],
    ["Engines", item.engines],
    ["Max speed category", item.max_speed],
    ["Range", item.range],
    ["Combat range", item.combat_range],
    ["Service ceiling", item.service_ceiling],
    ["Carrier capable", item.carrier_capable ? "Yes" : "No"],
    ["Stealth", item.stealth ? "Yes" : "No"],
    ["Armament", item.armament]
  ];
}

function renderRefLinks(refs = []) {
  return refs
    .map((ref) => {
      const index = state.currentFootnoteMap?.get(ref);
      if (!index) return "";
      return `<sup class="ref"><a href="#ref-${escapeHtml(ref)}">[${index}]</a></sup>`;
    })
    .join("");
}

function renderArticleSections(item) {
  state.currentFootnoteMap = new Map((item.footnotes || item.sources || []).map((source, index) => [source.id || `source-${index + 1}`, index + 1]));

  return (item.article_sections || [])
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph.text)}${renderRefLinks(paragraph.refs)}</p>`)
        .join("");
      return `
        <section class="article-section" id="${escapeHtml(section.id)}">
          <h3>${escapeHtml(section.title)}</h3>
          ${paragraphs}
        </section>
      `;
    })
    .join("");
}

function renderFootnotes(item) {
  const footnotes = item.footnotes || item.sources || [];
  return footnotes
    .map((source, index) => {
      const id = source.id || `source-${index + 1}`;
      return `
        <li id="ref-${escapeHtml(id)}">
          <a href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a>
          <span>${escapeHtml(source.publisher || "Source")}. ${escapeHtml(source.note || "")}</span>
        </li>
      `;
    })
    .join("");
}

function renderDetail(id) {
  const item = state.aircraft.find((aircraft) => aircraft.id === id);
  if (!item) {
    els.detailSection.hidden = true;
    return;
  }

  const sourceLinks = item.sources
    .map((source) => `<a class="button secondary" href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a>`)
    .join("");

  const tableRows = infoRows(item)
    .map(([key, value]) => `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(value || "Unknown")}</td></tr>`)
    .join("");

  const image = item.images?.[0]?.url
    ? `style="background-image: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.44)), url('${escapeHtml(item.images[0].url)}')"`
    : "";

  state.currentFootnoteMap = new Map((item.footnotes || item.sources || []).map((source, index) => [source.id || `source-${index + 1}`, index + 1]));

  const toc = (item.article_sections || [])
    .map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`)
    .join("");

  els.detailContent.innerHTML = `
    <div class="wiki-layout">
      <article class="wiki-article">
        <div class="article-lead">
          <div class="pill-row">
            <span class="data-pill">${escapeHtml(item.aircraft_type)}</span>
            <span class="data-pill">${escapeHtml(item.status)}</span>
            <span class="data-pill">${escapeHtml(item.era)}</span>
          </div>
          <h2>${escapeHtml(item.name)}</h2>
          <p>${escapeHtml(item.short_summary)}${renderRefLinks(["fn-main"])}</p>
          <div class="detail-actions">
            <a class="button primary" href="#database">Back to Aircraft</a>
          </div>
        </div>

        <nav class="toc" aria-label="Article contents">
          <strong>Contents</strong>
          ${toc}
        </nav>

        ${renderArticleSections(item)}

        <section class="article-section references-section" id="references">
          <h3>References</h3>
          <ol class="references">${renderFootnotes(item)}</ol>
        </section>
      </article>

      <aside class="infobox">
        <div class="detail-image" ${image}></div>
        <h3>${escapeHtml(item.name)}</h3>
        <table class="info-table">${tableRows}</table>
        <h3>Sources</h3>
        <div class="detail-actions">${sourceLinks}</div>
      </aside>
    </div>
  `;
  els.detailSection.hidden = false;
  els.detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateRoute() {
  const hash = window.location.hash;
  const match = hash.match(/^#aircraft\/(.+)$/);
  if (match) {
    renderDetail(match[1]);
  }
}

function setupFilters() {
  setOptions(els.type, unique(state.aircraft.map((item) => item.aircraft_type)), "All types");
  setOptions(
    els.country,
    unique(state.aircraft.flatMap((item) => splitValues(item.country_of_origin))),
    "All origins"
  );
  setOptions(els.era, unique(state.aircraft.flatMap((item) => splitValues(item.era))), "All eras");
  setOptions(els.status, unique(state.aircraft.map((item) => item.status)), "All statuses");
}

function renderFlagMarquee() {
  if (!els.flagTrack) return;
  const countries = unique(state.aircraft.flatMap((item) => splitValues(item.country_of_origin)));
  const flagItems = countries
    .map((country) => {
      const flag = COUNTRY_FLAGS[country];
      if (!flag) return "";
      const asset = flagAsset(flag);
      if (!asset) return "";
      const srcset = asset.srcset ? ` srcset="${escapeHtml(asset.srcset)}"` : "";
      return `
        <span class="flag-chip" title="${escapeHtml(country)}">
          <img
            src="${escapeHtml(asset.src)}"${srcset}
            alt="${escapeHtml(country)} flag"
            loading="eager"
            decoding="async"
            referrerpolicy="no-referrer"
          >
        </span>
      `;
    })
    .join("");
  els.flagTrack.innerHTML = `${flagItems}${flagItems}`;
}

function renderCountryFlagFilters() {
  if (!els.countryFlagFilters) return;
  const countries = unique(state.aircraft.flatMap((item) => splitValues(item.country_of_origin)));
  const items = countries
    .map((country) => {
      const asset = flagAsset(COUNTRY_FLAGS[country]);
      if (!asset) return "";
      const srcset = asset.srcset ? ` srcset="${escapeHtml(asset.srcset)}"` : "";
      return `
        <button
          type="button"
          class="country-flag-button"
          data-country="${escapeHtml(country)}"
          title="${escapeHtml(country)}"
          aria-label="${escapeHtml(country)}"
        >
          <img
            src="${escapeHtml(asset.src)}"${srcset}
            alt=""
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
          >
        </button>
      `;
    })
    .join("");
  els.countryFlagFilters.innerHTML = items;
  syncCountryFlagFilters();
}

function syncCountryFlagFilters() {
  if (!els.countryFlagFilters) return;
  const activeCountry = state.filters.country;
  els.countryFlagFilters.querySelectorAll("[data-country]").forEach((button) => {
    const isActive = button.dataset.country === activeCountry;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function initHeroGlobe() {
  const canvas = document.querySelector("#hero-globe-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let radius = 0;
  let dpr = 1;
  let starPoints = [];

  const resize = () => {
    width = Math.max(canvas.clientWidth, 1);
    height = Math.max(canvas.clientHeight, 1);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    radius = Math.min(width, height) * 0.33;
    starPoints = Array.from({ length: 170 }, (_, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / 170);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.cos(phi),
        z: radius * Math.sin(theta) * Math.sin(phi)
      };
    });
  };

  const rotatePoint = (point, rotation) => {
    let { x, y, z } = point;

    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    [x, z] = [x * cosY - z * sinY, x * sinY + z * cosY];

    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    [y, z] = [y * cosX - z * sinX, y * sinX + z * cosX];

    const cosZ = Math.cos(rotation.z);
    const sinZ = Math.sin(rotation.z);
    [x, y] = [x * cosZ - y * sinZ, x * sinZ + y * cosZ];

    return { x, y, z };
  };

  const projectPoint = (point) => {
    const perspective = 1 + point.z / (radius * 3.8);
    return {
      x: width / 2 + point.x * perspective,
      y: height / 2 + point.y * perspective,
      z: point.z
    };
  };

  const drawPath = (points, rotation, frontAlpha, backAlpha, lineWidth = 1) => {
    for (let index = 0; index < points.length; index += 1) {
      const current = projectPoint(rotatePoint(points[index], rotation));
      const next = projectPoint(rotatePoint(points[(index + 1) % points.length], rotation));
      const alpha = (current.z + next.z) * 0.5 >= 0 ? frontAlpha : backAlpha;
      context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      context.lineWidth = lineWidth;
      context.beginPath();
      context.moveTo(current.x, current.y);
      context.lineTo(next.x, next.y);
      context.stroke();
    }
  };

  const latitudePoints = (latitude) => {
    const points = [];
    const lat = (latitude * Math.PI) / 180;
    for (let step = 0; step < 96; step += 1) {
      const angle = (step / 96) * Math.PI * 2;
      points.push({
        x: radius * Math.cos(angle) * Math.cos(lat),
        y: radius * Math.sin(lat),
        z: radius * Math.sin(angle) * Math.cos(lat)
      });
    }
    return points;
  };

  const longitudePoints = (longitude) => {
    const points = [];
    const lon = (longitude * Math.PI) / 180;
    for (let step = 0; step < 96; step += 1) {
      const angle = (step / 96) * Math.PI * 2;
      points.push({
        x: radius * Math.cos(angle) * Math.cos(lon),
        y: radius * Math.sin(angle),
        z: radius * Math.cos(angle) * Math.sin(lon)
      });
    }
    return points;
  };

  const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
  resize();
  resizeObserver?.observe(canvas);
  window.addEventListener("resize", resize, { passive: true });

  const baseRotation = { x: 0.42, y: 0, z: -0.24 };
  let previousTime = performance.now();

  const animate = (time) => {
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    baseRotation.y += delta * 0.42;
    baseRotation.z = -0.24 + Math.sin(time * 0.00024) * 0.03;

    context.clearRect(0, 0, width, height);

    const radial = context.createRadialGradient(width / 2, height / 2, radius * 0.14, width / 2, height / 2, radius * 1.1);
    radial.addColorStop(0, "rgba(255,255,255,0.06)");
    radial.addColorStop(0.55, "rgba(255,255,255,0.02)");
    radial.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = radial;
    context.beginPath();
    context.arc(width / 2, height / 2, radius * 1.08, 0, Math.PI * 2);
    context.fill();

    context.strokeStyle = "rgba(255,255,255,0.28)";
    context.lineWidth = 1.2;
    context.beginPath();
    context.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    context.stroke();

    [-60, -30, 0, 30, 60].forEach((latitude) => {
      drawPath(latitudePoints(latitude), baseRotation, latitude === 0 ? 0.36 : 0.28, 0.08, latitude === 0 ? 1.3 : 1);
    });

    [0, 30, 60, 90, 120, 150].forEach((longitude) => {
      drawPath(longitudePoints(longitude), baseRotation, 0.28, 0.08, longitude % 90 === 0 ? 1.25 : 1);
    });

    context.fillStyle = "rgba(255,255,255,0.34)";
    starPoints.forEach((point) => {
      const projected = projectPoint(rotatePoint(point, baseRotation));
      const size = projected.z >= 0 ? 1.6 : 0.9;
      context.fillRect(projected.x, projected.y, size, size);
    });

    const axisTop = projectPoint(rotatePoint({ x: 0, y: -radius * 1.15, z: 0 }, { ...baseRotation, z: baseRotation.z + 0.5 }));
    const axisBottom = projectPoint(rotatePoint({ x: 0, y: radius * 1.15, z: 0 }, { ...baseRotation, z: baseRotation.z + 0.5 }));
    context.strokeStyle = "rgba(255,255,255,0.16)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(axisTop.x, axisTop.y);
    context.lineTo(axisBottom.x, axisBottom.y);
    context.stroke();

    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
}

function setupEvents() {
  els.heroSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.search = els.heroSearch.value.trim();
    els.search.value = state.search;
    applyFilters();
    window.location.hash = "database";
  });

  els.heroSearch.addEventListener("input", () => {
    state.search = els.heroSearch.value.trim();
    els.search.value = state.search;
    applyFilters();
  });

  els.search.addEventListener("input", () => {
    state.search = els.search.value.trim();
    els.heroSearch.value = state.search;
    applyFilters();
  });

  [
    [els.type, "type"],
    [els.country, "country"],
    [els.era, "era"],
    [els.status, "status"]
  ].forEach(([select, key]) => {
    select.addEventListener("change", () => {
      state.filters[key] = select.value;
      applyFilters();
    });
  });

  els.reset.addEventListener("click", () => {
    state.search = "";
    state.filters = { type: "", country: "", era: "", status: "" };
    els.search.value = "";
    els.heroSearch.value = "";
    [els.type, els.country, els.era, els.status].forEach((select) => {
      select.value = "";
    });
    applyFilters();
  });

  els.countryFlagFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-country]");
    if (!button) return;
    const selectedCountry = button.dataset.country;
    state.filters.country = state.filters.country === selectedCountry ? "" : selectedCountry;
    els.country.value = state.filters.country;
    applyFilters();
  });

  els.pagination?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-page]");
    if (!button) return;
    const totalPages = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
    if (button.dataset.page === "prev") state.page = Math.max(1, state.page - 1);
    if (button.dataset.page === "next") state.page = Math.min(totalPages, state.page + 1);
    renderGrid();
    document.querySelector("#database")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setupRevealAnimations() {
  const revealVisibleItems = () => {
    const min = window.innerHeight * 0.12;
    const max = window.innerHeight * 0.88;
    document.querySelectorAll(".reveal:not(.visible)").forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < max && rect.bottom > min) {
        item.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  window.addEventListener("scroll", revealVisibleItems, { passive: true });
  window.addEventListener("resize", revealVisibleItems);
  requestAnimationFrame(revealVisibleItems);
}

async function init() {
  try {
    const response = await fetch("data/aircraft.json");
    if (!response.ok) throw new Error(`Could not load data: ${response.status}`);
    state.aircraft = await response.json();
    state.filtered = [...state.aircraft];
    els.statTotal.textContent = state.aircraft.length;
    els.statCountries.textContent = unique(state.aircraft.flatMap((item) => splitValues(item.country_of_origin))).length;
    els.statTypes.textContent = unique(state.aircraft.map((item) => item.aircraft_type)).length;
    setupFilters();
    renderFlagMarquee();
    renderCountryFlagFilters();
    setupEvents();
    renderGrid();
  } catch (error) {
    els.resultCount.textContent = "Aircraft data failed to load.";
    els.grid.innerHTML = `<div class="empty-state">${error.message}</div>`;
  }

  initHeroGlobe();
  setupRevealAnimations();
}

init();
