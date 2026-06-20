const grid = document.querySelector("#country-index-grid");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

function renderCountries() {
  const profiles = [...(window.MILIPEDIA_COUNTRY_PROFILES || MILIPEDIA_COUNTRY_PROFILES || [])].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  grid.innerHTML = profiles
    .map((profile) => {
      const asset = flagAsset(profile.flag);
      if (!asset) return "";
      const srcset = asset.srcset ? ` srcset="${escapeHtml(asset.srcset)}"` : "";
      const style = ` style="--flag-focus:${escapeHtml(asset.position)};"`;
      return `
        <a class="country-index-card" href="country.html?id=${encodeURIComponent(profile.id)}">
          <img
            src="${escapeHtml(asset.src)}"${srcset}
            alt="Flag of ${escapeHtml(profile.name)}"${style}
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
          >
          <span>${escapeHtml(profile.power)}</span>
          <strong>${escapeHtml(profile.name)}</strong>
          <p>${escapeHtml(profile.summary)}</p>
        </a>
      `;
    })
    .join("");
}

renderCountries();
