const root = document.querySelector("#country-root");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCountryId() {
  return new URLSearchParams(window.location.search).get("id") || "pakistan";
}

function flagAsset(flag) {
  if (flag?.src) {
    return {
      src: flag.src,
      srcset: flag.srcset || "",
      position: flag.position || "center center"
    };
  }
  return null;
}

function countryMatch(profile, aircraft) {
  const origins = String(aircraft.country_of_origin || "")
    .split("/")
    .map((item) => item.trim());
  return profile.aliases.some((alias) => origins.includes(alias));
}

function paragraphs(...items) {
  return items.filter(Boolean).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function list(items = []) {
  return `<ul class="country-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function table(headers, rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
        <tbody>${rows
          .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
          .join("")}</tbody>
      </table>
    </div>
  `;
}

function section(id, title, body) {
  return `<section id="${id}"><h2>${title}</h2>${body}</section>`;
}

function renderConflictSections(profile) {
  return profile.conflicts
    .map(
      ([name, years, text]) => `
        <h3>${escapeHtml(name)}</h3>
        <p><strong>${escapeHtml(years)}.</strong> ${escapeHtml(text)}</p>
      `
    )
    .join("");
}

function renderPrograms(profile) {
  const labels = [
    ["fighters", "Fighters"],
    ["trainers", "Trainers"],
    ["transports", "Transport Aircraft"],
    ["helicopters", "Helicopters"],
    ["drones", "Drones and UAVs"],
    ["weapons", "Missiles and Air-Launched Weapons"],
    ["avionics", "Avionics, Radars, and Electronic Warfare"],
    ["engines", "Engines and Propulsion"],
    ["space", "Space and Satellite Systems"]
  ];
  return labels.map(([key, label]) => `<h3>${label}</h3>${paragraphs(profile.programs[key])}`).join("");
}

function renderOrganizations(profile) {
  return `<div class="country-card-grid">${profile.organizations
    .map(
      ([name, text]) => `
        <article>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(text)}</p>
        </article>
      `
    )
    .join("")}</div>`;
}

function aircraftRows(aircraft) {
  return aircraft.map((item) => [
    `<a href="aircraft.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.name)}</a>`,
    escapeHtml(item.aircraft_type || "Aircraft"),
    escapeHtml(item.role || "Military aircraft"),
    escapeHtml(item.first_flight || "Not listed"),
    escapeHtml(item.status || "Not listed")
  ]);
}

function renderAircraftLinks(profile, aircraft) {
  if (!aircraft.length) {
    return paragraphs(`${profile.name} does not currently have origin-linked aircraft entries in the local aircraft dataset.`);
  }
  return table(["Aircraft", "Type", "Role", "First flight", "Status"], aircraftRows(aircraft));
}

function renderProfile(profile, aircraft) {
  document.title = `${profile.name} Aerospace and Military Aviation | Milipedia`;
  const flag = flagAsset(profile.flag);
  if (!flag) return;
  const srcset = flag.srcset ? ` srcset="${escapeHtml(flag.srcset)}"` : "";
  const style = ` style="--flag-focus:${escapeHtml(flag.position)};"`;
  const stats = [
    ["Role", profile.power],
    ["Aircraft", `${aircraft.length} linked entries`],
    ["Systems", profile.keySystems[0]?.[0] || "Multiple systems"],
    ["Focus", profile.strengths.slice(0, 2).join(" / ")]
  ];
  const toc = [
    ["overview", "Overview"],
    ["geography", "Strategic Geography"],
    ["history", "Early Aviation"],
    ["conflicts", "Wars and Crises"],
    ["alliances", "Political Influence"],
    ["industry", "Domestic Industry"],
    ["programs", "Programs"],
    ["procurement", "Procurement"],
    ["license", "Technology Transfer"],
    ["doctrine", "Doctrine"],
    ["combat-lessons", "Combat Lessons"],
    ["current-industry", "Current Industry"],
    ["inventory", "Inventory"],
    ["drones", "Drones"],
    ["exports", "Exports"],
    ["civil", "Civil Aerospace"],
    ["strengths", "Strengths"],
    ["comparison", "Regional Comparison"],
    ["future", "Future Outlook"],
    ["timeline", "Timeline"],
    ["key-systems", "Key Systems"],
    ["incidents", "Incidents"],
    ["sources", "Sources"]
  ];

  root.className = "country-page";
  root.innerHTML = `
    <header class="country-hero">
      <div class="country-hero__media" aria-hidden="true">
        <img src="${escapeHtml(flag.src)}"${srcset} alt=""${style} decoding="async" referrerpolicy="no-referrer">
      </div>
      <div class="country-hero__content">
        <p class="country-kicker">Country aerospace industry profile</p>
        <h1>
          <img class="country-title-flag" src="${escapeHtml(flag.src)}"${srcset} alt="Flag of ${escapeHtml(profile.name)}"${style} decoding="async" referrerpolicy="no-referrer">
          ${escapeHtml(profile.name)} Aerospace and Military Aviation
        </h1>
        <p>${escapeHtml(profile.summary)}</p>
        <div class="country-stat-grid" aria-label="${escapeHtml(profile.name)} aerospace quick facts">
          ${stats
            .map(
              ([label, value]) => `
                <div>
                  <span class="country-stat-label">${escapeHtml(label)}</span>
                  <strong class="country-stat-value">${escapeHtml(value)}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </header>

    <section class="country-layout">
      <aside class="country-toc" aria-label="Country article sections">
        ${toc.map(([id, label]) => `<a href="#${id}">${escapeHtml(label)}</a>`).join("")}
      </aside>
      <article class="country-article">
        ${section("overview", "1. Overview", paragraphs(profile.summary, `${profile.name} is categorized here as: ${profile.power}.`))}
        ${section("geography", "2. Strategic Geography and Security Needs", paragraphs(profile.geography))}
        ${section("history", "3. Early Aviation History", paragraphs(profile.early))}
        ${section("conflicts", "4. Wars, Conflicts, and Crises That Shaped Development", renderConflictSections(profile))}
        ${section("alliances", "5. Political and Alliance Influence", paragraphs(profile.politics))}
        ${section("industry", "6. Domestic Aerospace Industry", renderOrganizations(profile))}
        ${section("programs", "7. Indigenous Aircraft and Aerospace Programs", renderPrograms(profile))}
        ${section("procurement", "8. Imported Aircraft and Foreign Procurement", paragraphs(profile.procurement) + renderAircraftLinks(profile, aircraft))}
        ${section("license", "9. Licensed Production and Technology Transfer", paragraphs(profile.license))}
        ${section("doctrine", "10. Air Force Development and Doctrine", paragraphs(profile.doctrine))}
        ${section("combat-lessons", "11. Combat Experience and Operational Lessons", paragraphs(profile.combat))}
        ${section("current-industry", "12. Current Military Aerospace Industry", paragraphs(profile.current))}
        ${section("inventory", "13. Current Military Aircraft Inventory", paragraphs(profile.inventory))}
        ${section("drones", "14. Drone and Unmanned Aircraft Development", paragraphs(profile.drones))}
        ${section("exports", "15. Aerospace Exports", paragraphs(profile.exports))}
        ${section("civil", "16. Civil Aerospace Connection", paragraphs(profile.civil))}
        ${section("strengths", "17. Strengths and Weaknesses", `<h3>Strengths</h3>${list(profile.strengths)}<h3>Weaknesses</h3>${list(profile.weaknesses)}`)}
        ${section("comparison", "18. Regional Comparison", paragraphs(profile.comparison))}
        ${section("future", "19. Future Outlook", paragraphs(profile.future))}
        ${section("timeline", "20. Timeline", table(["Year", "Event"], profile.timeline.map(([year, event]) => [escapeHtml(year), escapeHtml(event)])))}
        ${section("key-systems", "21. Key Aircraft and Systems Table", table(["Aircraft/System", "Type", "Role in National Aerospace History"], profile.keySystems.map(([name, type, role]) => [escapeHtml(name), escapeHtml(type), escapeHtml(role)])))}
        ${section("incidents", "22. Notable Incidents, Turning Points, and Lessons", list(profile.incidents))}
        ${section("summary", "23. Summary Assessment", paragraphs(`${profile.name}'s aerospace position is best understood through its strongest capabilities: ${profile.strengths.join(", ")}. Its largest constraints are: ${profile.weaknesses.join(", ")}. ${profile.future}`))}
        ${section("sources", "Sources", `<ol>${profile.sources
          .map(([title, url]) => `<li><a href="${escapeHtml(url)}">${escapeHtml(title)}</a>. Source note for ${escapeHtml(profile.name)} aerospace and military aviation profile.</li>`)
          .join("")}</ol>`)}
      </article>
    </section>
  `;
}

async function initCountryPage() {
  const profiles = window.MILIPEDIA_COUNTRY_PROFILES || MILIPEDIA_COUNTRY_PROFILES || [];
  const profile = profiles.find((item) => item.id === getCountryId());
  if (!profile) {
    root.innerHTML = `<div class="empty-state">Country profile not found. <a href="countries.html">Open Countries</a>.</div>`;
    return;
  }

  let aircraft = [];
  try {
    const response = await fetch("data/aircraft.json?v=country-pages-v1");
    if (response.ok) {
      const data = await response.json();
      aircraft = data.filter((item) => countryMatch(profile, item));
    }
  } catch (error) {
    aircraft = [];
  }
  renderProfile(profile, aircraft);
}

initCountryPage();
