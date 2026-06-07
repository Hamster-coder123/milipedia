const articleRoot = document.querySelector("#aircraft-article");
const NOT_LISTED = "Not listed";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAircraftId() {
  return new URLSearchParams(window.location.search).get("id");
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
    ["Retirement", item.retirement_date || NOT_LISTED],
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

function createFootnoteMap(item) {
  return new Map(usableSources(item).map((source, index) => [source.id || `source-${index + 1}`, index + 1]));
}

function renderRefLinks(refs = [], footnoteMap) {
  return refs
    .map((ref) => {
      const index = footnoteMap.get(ref);
      if (!index) return "";
      return `<sup class="ref"><a href="#ref-${escapeHtml(ref)}">[${index}]</a></sup>`;
    })
    .join("");
}

function usableSources(item) {
  return (item.footnotes || item.sources || []).filter((source) => {
    const id = source.id || "";
    const publisher = source.publisher || "";
    const url = source.url || "";
    return id !== "fn-method" && publisher !== "Milipedia" && !url.startsWith("MILIPEDIA_PLAN");
  });
}

function sourceMap(item) {
  return new Map(usableSources(item).map((source, index) => [source.id || `source-${index + 1}`, index + 1]));
}

function isUsefulText(text) {
  const value = String(text || "").trim();
  if (!value) return false;
  return ![
    /^Exact structured fact fields:/i,
    /^Named pilots listed:/i,
    /^Named individual aircraft listed:/i,
    /^Notable incidents listed:/i,
    /^Loss claims listed:/i,
    /^0 operator entries listed\./i,
    /^Exact weapon list:\s*Not listed\.?$/i
  ].some((pattern) => pattern.test(value));
}

function renderArticleSections(item, footnoteMap) {
  return (item.article_sections || [])
    .map((section) => {
      const paragraphs = (section.paragraphs || [])
        .filter((paragraph) => isUsefulText(paragraph.text))
        .map((paragraph) => `<p>${escapeHtml(paragraph.text)}${renderRefLinks(paragraph.refs, footnoteMap)}</p>`)
        .join("");
      const usefulBullets = (section.bullets || []).filter((bullet) => isUsefulText(bullet.text || bullet));
      const bullets = usefulBullets.length
        ? `<ul class="article-list">${usefulBullets.map((bullet) => `<li>${escapeHtml(bullet.text || bullet)}${renderRefLinks(bullet.refs, footnoteMap)}</li>`).join("")}</ul>`
        : "";
      const cards = section.cards?.length
        ? `<div class="fact-card-grid">${section.cards
            .map(
              (card) => `
                <article class="fact-card">
                  <strong>${escapeHtml(card.title)}</strong>
                  <span>${escapeHtml(card.text)}</span>
                </article>
              `
            )
            .join("")}</div>`
        : "";
      const links = section.links?.length
        ? `<div class="related-links">${section.links
            .map((link) => `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`)
            .join("")}</div>`
        : "";
      return `
        <section class="article-section" id="${escapeHtml(section.id)}">
          <h2>${escapeHtml(section.title)}</h2>
          ${paragraphs}
          ${bullets}
          ${cards}
          ${links}
        </section>
      `;
    })
    .join("");
}

function renderFootnotes(item) {
  const footnotes = usableSources(item);
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

function splitCountryNames(value) {
  return String(value || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

function flagCode(country) {
  const codes = {
    "United States": "us",
    Italy: "it"
  };
  return codes[country] || "";
}

function renderFlag(country) {
  const code = flagCode(country);
  if (!code) return escapeHtml(country);
  return `<img class="inline-flag" src="https://flagcdn.com/w40/${code}.png" srcset="https://flagcdn.com/w80/${code}.png 2x" alt="Flag of ${escapeHtml(country)}">`;
}

function renderFlagBadge(country) {
  return `<span class="flag-badge" title="${escapeHtml(country)}">${renderFlag(country)}${escapeHtml(country)}</span>`;
}

function renderTitleFlags(item) {
  const countries = item.country_flags?.length
    ? item.country_flags.map((flag) => flag.label).filter(Boolean)
    : splitCountryNames(item.country_of_origin);
  const uniqueCountries = [...new Set(countries)];
  return uniqueCountries.length ? `<span class="title-flags">${uniqueCountries.map(renderFlagBadge).join("")}</span>` : "";
}

function fieldValue(value) {
  const text = String(value || "").trim();
  return text && text !== NOT_LISTED ? text : "";
}

function renderFact(label, value) {
  const text = fieldValue(value);
  return text ? `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(text)}.</p>` : "";
}

function renderTopOverview(item) {
  const mainImage = item.images?.[0];
  const countries = splitCountryNames(item.country_of_origin);
  const countryText = countries.length
    ? countries.map((country) => `${renderFlag(country)} ${escapeHtml(country)}`).join(" ")
    : escapeHtml(item.country_of_origin || NOT_LISTED);
  const variants = (item.variant_families || item.variants || []).slice(0, 5).map((variant) => escapeHtml(variant.name || variant)).join("; ");
  const similar = (item.similar_development || []).slice(0, 5).map((link) => escapeHtml(link.name || link)).join("; ");
  return `
    <section class="f16-top-overview" aria-labelledby="quick-overview">
      <figure>
        ${
          mainImage?.url
            ? `<img class="overview-image" src="${escapeHtml(mainImage.url)}" alt="${escapeHtml(mainImage.caption || item.name)}">`
            : ""
        }
        ${mainImage?.caption ? `<figcaption>${escapeHtml(mainImage.caption)}${mainImage.credit ? `. ${escapeHtml(mainImage.credit)}` : ""}</figcaption>` : ""}
      </figure>
      <div class="f16-overview-groups">
        <section class="f16-overview-group">
          <h3 id="quick-overview">Quick Overview</h3>
          ${renderFact("Aircraft name", item.name)}
          ${renderFact("Alternative names", item.alternative_names?.join("; "))}
          ${renderFact("NATO reporting name", item.nato_reporting_name)}
          ${renderFact("Aircraft type", item.aircraft_type)}
        </section>
        <section class="f16-overview-group">
          <h3>Role and Origin</h3>
          ${renderFact("Role", item.role)}
          ${renderFact("Era", item.era)}
          ${renderFact("Status", item.status)}
          <p><strong>National origin:</strong> ${countryText}.</p>
        </section>
        <section class="f16-overview-group">
          <h3>Companies and Designers</h3>
          ${renderFact("Manufacturer", item.manufacturer)}
          ${renderFact("Designer / design bureau", (item.designers || []).join("; "))}
          ${renderFact("Development history", item.development_history)}
        </section>
        <section class="f16-overview-group">
          <h3>Dates and Production</h3>
          ${renderFact("First flight", item.first_flight)}
          ${renderFact("Introduction", item.introduction_date)}
          ${renderFact("Retirement", item.retirement_date)}
          ${renderFact("Number built", item.number_built)}
        </section>
        <section class="f16-overview-group">
          <h3>Systems and Performance</h3>
          ${renderFact("Crew", item.crew)}
          ${renderFact("Engines", item.engines || item.engine_details?.summary)}
          ${renderFact("Max speed", item.max_speed)}
          ${renderFact("Range", item.range)}
          ${renderFact("Combat range", item.combat_range)}
          ${renderFact("Service ceiling", item.service_ceiling)}
        </section>
        <section class="f16-overview-group">
          <h3>Weapons and Related Aircraft</h3>
          ${renderFact("Armament", item.armament_details?.summary || item.armament)}
          ${renderFact("Hardpoints", item.hardpoints)}
          ${renderFact("Main variants", variants)}
          ${renderFact("Similar development", similar)}
        </section>
      </div>
    </section>
  `;
}

function renderTemplateStyles() {
  return `
    <style>
      .f16-layout {
        grid-template-columns: minmax(0, 1fr);
      }

      .f16-layout .wiki-article {
        width: min(1120px, 100%);
        margin: 0 auto;
      }

      .f16-article .inline-flag {
        display: inline-block;
        width: 28px;
        height: 19px;
        object-fit: cover;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 2px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.24);
        vertical-align: -3px;
      }

      .f16-top-overview {
        display: grid;
        grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
        gap: 18px;
        margin-top: 26px;
        border: 1px solid var(--line);
        border-radius: 24px;
        padding: 16px;
        background: #050505;
      }

      .f16-top-overview figure {
        margin: 0;
      }

      .f16-top-overview img.overview-image {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 11;
        object-fit: cover;
        border-radius: 16px;
      }

      .f16-top-overview figcaption {
        margin-top: 10px;
        color: var(--soft);
        font-size: 0.88rem;
        line-height: 1.45;
      }

      .f16-overview-groups {
        display: grid;
        gap: 16px;
        align-content: start;
      }

      .f16-overview-group {
        border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        padding-bottom: 14px;
      }

      .f16-overview-group:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      .f16-overview-group h3 {
        margin: 0 0 8px;
        font-size: 1.05rem;
      }

      .f16-overview-group p {
        margin: 0 0 6px;
        font-size: 0.96rem;
        line-height: 1.55;
      }

      .f16-overview-group p:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 820px) {
        .f16-top-overview {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `;
}

function renderGallery(item) {
  const galleryItems = [
    ...(item.images || []).map((image) => ({
      url: image.url,
      caption: image.caption || item.name,
      source_url: item.sources?.[0]?.url || image.url,
      credit: image.credit
    })),
    ...(item.event_gallery || [])
  ].filter((image) => image.url);
  if (!galleryItems.length) return "";
  return `
    <section class="article-section event-gallery-section" id="gallery">
      <h2>Gallery</h2>
      <div class="event-gallery">${galleryItems
        .map(
          (imageItem) => `
            <figure>
              <img src="${escapeHtml(imageItem.url)}" alt="${escapeHtml(imageItem.caption)}" loading="lazy">
              <figcaption>${escapeHtml(imageItem.caption)}${imageItem.credit ? `. ${escapeHtml(imageItem.credit)}` : ""}<br><a href="${escapeHtml(imageItem.source_url || imageItem.url)}">Source page</a></figcaption>
            </figure>
          `
        )
        .join("")}</div>
    </section>
  `;
}

function isAmericanAircraft(item) {
  return splitCountryNames(item.country_of_origin).includes("United States");
}

function renderAmericanArticle(item) {
  const footnoteMap = sourceMap(item);
  const tocSections = [
    ...(item.article_sections || []).map((section) => ({ id: section.id, title: section.title })),
    { id: "gallery", title: "Gallery" },
    { id: "sources", title: "Sources" }
  ];
  const toc = tocSections
    .filter((section) => section.id !== "gallery" || (item.images?.length || item.event_gallery?.length))
    .map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`)
    .join("");
  document.title = `${item.name} - Milipedia`;
  articleRoot.innerHTML = `
    <div class="wiki-layout template-layout f16-layout">
      ${renderTemplateStyles()}
      <article class="wiki-article template-article f16-article">
        <div class="article-lead">
          <div class="pill-row">
            <span class="data-pill">${escapeHtml(item.aircraft_type)}</span>
            <span class="data-pill">${escapeHtml(item.status)}</span>
            <span class="data-pill">${escapeHtml(item.country_of_origin)}</span>
          </div>
          <h1 class="article-title"><span>${escapeHtml(item.name)}</span>${renderTitleFlags(item)}</h1>
          ${renderTopOverview(item)}
          <p>${escapeHtml(item.short_summary)}${renderRefLinks(["fn-main"], footnoteMap)}</p>
          <div class="detail-actions">
            <a class="button primary" href="index.html#database">Back to Aircraft</a>
            <a class="button secondary" href="index.html?compare=${encodeURIComponent(item.id)}#compare">Compare this aircraft</a>
          </div>
        </div>

        <nav class="toc" aria-label="Article contents">
          <strong>Contents</strong>
          ${toc}
        </nav>

        ${renderArticleSections(item, footnoteMap)}
        ${renderGallery(item)}

        <section class="article-section references-section" id="sources">
          <h2>Sources</h2>
          <ol class="references">${renderFootnotes(item)}</ol>
        </section>
      </article>
    </div>
  `;
}

function renderArticle(item) {
  const footnoteMap = createFootnoteMap(item);
  const tableRows = infoRows(item)
    .map(([key, value]) => `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(value || NOT_LISTED)}</td></tr>`)
    .join("");
  const sourceLinks = item.sources
    .map((source) => `<a class="button secondary" href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a>`)
    .join("");
  const toc = (item.article_sections || [])
    .map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`)
    .join("");
  const image = item.images?.[0]?.url
    ? `style="background-image: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.44)), url('${escapeHtml(item.images[0].url)}')"`
    : "";
  const flags = item.country_flags?.length
    ? `<span class="title-flags">${item.country_flags
        .map((flag) => `<span class="flag-badge" title="${escapeHtml(flag.label)}"><span>${escapeHtml(flag.emoji)}</span>${escapeHtml(flag.label)}</span>`)
        .join("")}</span>`
    : "";
  const eventGallery = item.event_gallery?.length
    ? `<section class="article-section event-gallery-section" id="event-images">
        <h3>Images from Related Events</h3>
        <div class="event-gallery">${item.event_gallery
          .map(
            (imageItem) => `
              <figure>
                <img src="${escapeHtml(imageItem.url)}" alt="${escapeHtml(imageItem.caption)}" loading="lazy">
                <figcaption>${escapeHtml(imageItem.caption)}<br><a href="${escapeHtml(imageItem.source_url)}">Source event page</a></figcaption>
              </figure>
            `
          )
          .join("")}</div>
      </section>`
    : "";

  document.title = `${item.name} - Milipedia`;
  articleRoot.innerHTML = `
    <div class="wiki-layout">
      <article class="wiki-article">
        <div class="article-lead">
          <div class="pill-row">
            <span class="data-pill">${escapeHtml(item.aircraft_type)}</span>
            <span class="data-pill">${escapeHtml(item.status)}</span>
            <span class="data-pill">${escapeHtml(item.era)}</span>
          </div>
          <h1 class="article-title"><span>${escapeHtml(item.name)}</span>${flags}</h1>
          <p>${escapeHtml(item.short_summary)}${renderRefLinks(["fn-main"], footnoteMap)}</p>
          <div class="detail-actions">
            <a class="button primary" href="index.html#database">Back to Aircraft</a>
            <a class="button secondary" href="index.html?compare=${encodeURIComponent(item.id)}#compare">Compare this aircraft</a>
          </div>
        </div>

        <nav class="toc" aria-label="Article contents">
          <strong>Contents</strong>
          ${toc}
        </nav>

        ${renderArticleSections(item, footnoteMap)}
        ${eventGallery}

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
}

const STATIC_ARTICLE_TEMPLATES = {
  "f-16-fighting-falcon": {
    title: "General Dynamics F-16 Fighting Falcon - Milipedia",
    path: "data/f16-template.html?v=aircraft-labels"
  },
  "f-4-phantom-ii": {
    title: "McDonnell Douglas F-4 Phantom II - Milipedia",
    path: "data/f4-template.html?v=aircraft-labels"
  },
  "f-15-eagle": {
    title: "McDonnell Douglas F-15 Eagle - Milipedia",
    path: "data/f15-template.html?v=f15-expanded"
  }
};

async function renderStaticTemplate(template) {
  const response = await fetch(template.path);
  if (!response.ok) throw new Error(`Could not load article template: ${response.status}`);
  document.title = template.title;
  articleRoot.innerHTML = await response.text();
}

async function initArticlePage() {
  const id = getAircraftId();
  if (!id) {
    articleRoot.innerHTML = `<div class="empty-state">No aircraft selected. <a href="index.html#database">Open Aircraft</a>.</div>`;
    return;
  }

  try {
    const response = await fetch("data/aircraft.json");
    if (!response.ok) throw new Error(`Could not load data: ${response.status}`);
    const aircraft = await response.json();
    const item = aircraft.find((entry) => entry.id === id);
    if (!item) {
      articleRoot.innerHTML = `<div class="empty-state">Aircraft not found. <a href="index.html#database">Open Aircraft</a>.</div>`;
      return;
    }
    const staticTemplate = STATIC_ARTICLE_TEMPLATES[id];
    if (staticTemplate) {
      await renderStaticTemplate(staticTemplate);
      return;
    }
    if (isAmericanAircraft(item)) {
      renderAmericanArticle(item);
      return;
    }
    renderArticle(item);
  } catch (error) {
    articleRoot.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
  }
}

initArticlePage();
