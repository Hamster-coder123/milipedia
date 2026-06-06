const articleRoot = document.querySelector("#aircraft-article");

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
    ["Retirement", item.retirement_date || "Not retired / varies by operator"],
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
  return new Map((item.footnotes || item.sources || []).map((source, index) => [source.id || `source-${index + 1}`, index + 1]));
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

function renderArticleSections(item, footnoteMap) {
  return (item.article_sections || [])
    .map((section) => {
      const paragraphs = section.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph.text)}${renderRefLinks(paragraph.refs, footnoteMap)}</p>`)
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

function renderArticle(item) {
  const footnoteMap = createFootnoteMap(item);
  const tableRows = infoRows(item)
    .map(([key, value]) => `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(value || "Unknown")}</td></tr>`)
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
          <h1 class="article-title">${escapeHtml(item.name)}</h1>
          <p>${escapeHtml(item.short_summary)}${renderRefLinks(["fn-main"], footnoteMap)}</p>
          <div class="detail-actions">
            <a class="button primary" href="index.html#database">Back to Database</a>
            <a class="button secondary" href="index.html?compare=${encodeURIComponent(item.id)}#compare">Compare this aircraft</a>
          </div>
        </div>

        <nav class="toc" aria-label="Article contents">
          <strong>Contents</strong>
          ${toc}
        </nav>

        ${renderArticleSections(item, footnoteMap)}

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

async function initArticlePage() {
  const id = getAircraftId();
  if (!id) {
    articleRoot.innerHTML = `<div class="empty-state">No aircraft selected. <a href="index.html#database">Open the database</a>.</div>`;
    return;
  }

  try {
    const response = await fetch("data/aircraft.json");
    if (!response.ok) throw new Error(`Could not load data: ${response.status}`);
    const aircraft = await response.json();
    const item = aircraft.find((entry) => entry.id === id);
    if (!item) {
      articleRoot.innerHTML = `<div class="empty-state">Aircraft not found. <a href="index.html#database">Open the database</a>.</div>`;
      return;
    }
    renderArticle(item);
  } catch (error) {
    articleRoot.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
  }
}

initArticlePage();
