const grid = document.querySelector("#country-index-grid");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function flagSrc(flag) {
  if (flag?.url) return flag.url;
  return `https://flagcdn.com/${flag?.code || "un"}.svg`;
}

function renderCountries() {
  const profiles = [...(window.MILIPEDIA_COUNTRY_PROFILES || MILIPEDIA_COUNTRY_PROFILES || [])].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  grid.innerHTML = profiles
    .map(
      (profile) => `
        <a class="country-index-card" href="country.html?id=${encodeURIComponent(profile.id)}">
          <img src="${escapeHtml(flagSrc(profile.flag))}" alt="Flag of ${escapeHtml(profile.name)}">
          <span>${escapeHtml(profile.power)}</span>
          <strong>${escapeHtml(profile.name)}</strong>
          <p>${escapeHtml(profile.summary)}</p>
        </a>
      `
    )
    .join("");
}

renderCountries();
