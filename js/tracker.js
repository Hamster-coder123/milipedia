const MILITARY_FEEDS = [
  {
    name: "Airplanes.live",
    url: "https://api.airplanes.live/v2/mil"
  },
  {
    name: "ADSB.lol",
    url: "https://api.adsb.lol/v2/mil"
  }
];
const REFRESH_INTERVAL_MS = 45000;
const JETPHOTOS_READER_URL = "https://r.jina.ai/http://https://www.jetphotos.com/registration/";

const fallbackAircraft = [
  {
    hex: "ae144d",
    flight: "RCH4616",
    r: "05-5143",
    t: "C17",
    dbFlags: 1,
    lat: 53.086324,
    lon: 2.375769,
    alt_baro: 28000,
    gs: 458,
    track: 307,
    seen: 0.2
  },
  {
    hex: "43c5e7",
    flight: "RRR4409",
    r: "ZM413",
    t: "A400",
    dbFlags: 1,
    lat: 51.379532,
    lon: 3.178241,
    alt_baro: 23975,
    gs: 368,
    track: 279,
    seen: 0
  },
  {
    hex: "48d981",
    flight: "PLF104",
    r: "0112",
    t: "B738",
    dbFlags: 1,
    lat: 41.190258,
    lon: 41.142675,
    alt_baro: 38000,
    gs: 364,
    track: 260,
    seen: 0.7
  }
];

const aircraftModels = {
  A139: "Leonardo AW139",
  A332: "Airbus A330-200",
  A400: "Airbus A400M Atlas",
  AS65: "Eurocopter AS365 Dauphin",
  B350: "Beechcraft King Air 350",
  B737: "Boeing 737",
  B738: "Boeing 737-800",
  B742: "Boeing 747-200",
  B762: "Boeing 767-200",
  BE20: "Beechcraft King Air 200",
  C17: "Boeing C-17 Globemaster III",
  C27J: "Leonardo C-27J Spartan",
  C30J: "Lockheed Martin C-130J Super Hercules",
  C560: "Cessna Citation V",
  E3TF: "Boeing E-3 Sentry",
  E390: "Embraer C-390 Millennium",
  EH10: "NHIndustries NH90",
  F900: "Dassault Falcon 900",
  GLEX: "Bombardier Global Express",
  H47: "Boeing CH-47 Chinook",
  H53S: "Sikorsky CH-53E Super Stallion",
  H60: "Sikorsky UH-60 Black Hawk",
  K35R: "Boeing KC-135R Stratotanker",
  LJ35: "Learjet 35",
  P3: "Lockheed P-3 Orion",
  T38: "Northrop T-38 Talon",
  TEX2: "Beechcraft T-6 Texan II"
};

const operatorPrefixes = [
  ["AME", "Spanish Air and Space Force"],
  ["CFC", "Royal Canadian Air Force"],
  ["CNV", "United States Navy"],
  ["FAF", "French Air and Space Force"],
  ["FNY", "French Navy"],
  ["GAF", "German Air Force"],
  ["PAT", "United States Army"],
  ["PLF", "Polish Air Force"],
  ["RCH", "United States Air Force Air Mobility Command"],
  ["RRR", "Royal Air Force"],
  ["SAM", "United States Air Force Special Air Mission"],
  ["SPAR", "United States Air Force"],
  ["TITAN", "United States Air Force"]
];

const els = {
  count: document.querySelector("#tracker-count"),
  panel: document.querySelector("#tracker-panel"),
  refresh: document.querySelector("#tracker-refresh"),
  status: document.querySelector("#tracker-status")
};

const state = {
  aircraft: [],
  markers: new Map(),
  photoCache: new Map(),
  trailPoints: new Map(),
  selectedHex: null,
  hasFitLiveTraffic: false,
  refreshTimer: null,
  map: null,
  trailLayer: null
};

function clean(value) {
  return String(value || "").trim();
}

function valueOrUnknown(value) {
  const text = clean(value);
  return text || "Not published";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function aircraftPosition(aircraft) {
  const lat = Number(aircraft.lat ?? aircraft.lastPosition?.lat);
  const lon = Number(aircraft.lon ?? aircraft.lastPosition?.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return [lat, lon];
}

function headingFor(aircraft) {
  const heading = Number(aircraft.track ?? aircraft.true_heading ?? aircraft.mag_heading ?? aircraft.calc_track);
  return Number.isFinite(heading) ? heading : 0;
}

function formatAltitude(value) {
  if (value === "ground") return "Ground";
  const altitude = Number(value);
  return Number.isFinite(altitude) ? `${Math.round(altitude).toLocaleString()} ft` : "Not published";
}

function formatSpeed(value) {
  const speed = Number(value);
  return Number.isFinite(speed) ? `${Math.round(speed)} kt` : "Not published";
}

function formatRate(value) {
  const rate = Number(value);
  return Number.isFinite(rate) ? `${Math.round(rate).toLocaleString()} ft/min` : "Not published";
}

function formatCoordinate(position) {
  return position ? `${position[0].toFixed(5)}, ${position[1].toFixed(5)}` : "Not published";
}

function jetPhotosRegistration(aircraft) {
  const registration = clean(aircraft.r).toUpperCase();
  if (!registration || registration === "TWR" || registration.length < 3) return "";
  return registration;
}

function jetPhotosUrl(registration) {
  return `https://www.jetphotos.com/registration/${encodeURIComponent(registration)}`;
}

function inferOperator(aircraft) {
  const callsign = clean(aircraft.flight).replace(/\s+/g, "").toUpperCase();
  const prefixMatch = operatorPrefixes.find(([prefix]) => callsign.startsWith(prefix));
  if (prefixMatch) return prefixMatch[1];

  const tail = clean(aircraft.r).toUpperCase();
  if (/^\d{2}-\d{4,5}$/.test(tail)) return "United States military";
  if (/^ZM\d{3}$/.test(tail)) return "Royal Air Force";
  if (/^TK\./.test(tail)) return "Spanish Air and Space Force";
  if (Number(aircraft.dbFlags) & 1) return "Military/state aircraft";
  return "Not published";
}

function modelName(aircraft) {
  const code = clean(aircraft.t).toUpperCase();
  if (!code) return "Not published";
  return aircraftModels[code] ? `${aircraftModels[code]} (${code})` : code;
}

function flightPlan(aircraft) {
  const origin = clean(aircraft.from || aircraft.orig || aircraft.origin);
  const destination = clean(aircraft.to || aircraft.dest || aircraft.destination);
  if (origin || destination) {
    return `${origin || "Unknown"} to ${destination || "Unknown"}`;
  }
  const callsign = clean(aircraft.flight);
  return callsign ? `${callsign}; route not published by ADS-B feed` : "Not published by ADS-B feed";
}

function extractMarkdownField(block, label) {
  const pattern = new RegExp(`\\*\\s+${label}:\\s+\\[?([^\\n\\]]+)`, "i");
  const match = block.match(pattern);
  return match ? clean(match[1].replaceAll("*", "")) : "";
}

function modelTokens(aircraft) {
  return modelName(aircraft)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((token) => token.length >= 4 || /\d/.test(token));
}

function scoreJetPhotosMatch(photo, aircraft) {
  const haystack = `${photo.title} ${photo.aircraft} ${photo.airline}`.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  return modelTokens(aircraft).reduce((score, token) => score + (haystack.includes(token) ? 1 : 0), 0);
}

function parseJetPhotosBlock(photoMatch, block, registration) {
  const byMatch = block.match(/\*   By:\s+\[([^\]]+)\]/i);
  const locationMatch = block.match(/\*   Location:\s+[\s\S]*?\n\n\[([^\]]+)\]/i);
  const location = locationMatch ? clean(locationMatch[1]) : "";

  return {
    imageUrl: photoMatch[2],
    photoUrl: photoMatch[3],
    title: clean(photoMatch[1]),
    aircraft: extractMarkdownField(block, "Aircraft"),
    airline: extractMarkdownField(block, "Airline"),
    serial: extractMarkdownField(block, "Serial #"),
    photoDate: extractMarkdownField(block, "Photo date"),
    uploaded: extractMarkdownField(block, "Uploaded"),
    photographer: byMatch ? clean(byMatch[1]) : "",
    location: location && !location.includes("Image") ? location : "",
    registration
  };
}

function extractJetPhotosPhoto(markdown, registration, aircraft) {
  const photoPattern = /\[!\[Image \d+: ([^\]]+)\]\((https:\/\/cdn\.jetphotos\.com\/400\/[^)]+)\)\]\((https:\/\/www\.jetphotos\.com\/photo\/\d+)\)/g;
  const matches = [...markdown.matchAll(photoPattern)];
  if (!matches.length) return null;

  const candidates = matches.map((photoMatch, index) => {
    const start = photoMatch.index || 0;
    const nextPhotoIndex = matches[index + 1]?.index;
    const block = markdown.slice(start, Number.isFinite(nextPhotoIndex) ? nextPhotoIndex : start + 3000);
    const photo = parseJetPhotosBlock(photoMatch, block, registration);
    return {
      photo,
      score: scoreJetPhotosMatch(photo, aircraft)
    };
  });

  candidates.sort((left, right) => right.score - left.score);
  const best = candidates[0];
  const ambiguousNumericRegistration = /^\d+$/.test(registration) && registration.length <= 4;
  if (ambiguousNumericRegistration && best.score < 2) return null;
  return best.photo;
}

async function findJetPhotosPhoto(aircraft) {
  const registration = jetPhotosRegistration(aircraft);
  if (!registration) return null;
  const cacheKey = `${registration}:${clean(aircraft.t).toUpperCase()}`;
  if (state.photoCache.has(cacheKey)) return state.photoCache.get(cacheKey);

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 12000);
  const request = fetch(`${JETPHOTOS_READER_URL}${encodeURIComponent(registration)}`, {
    cache: "force-cache",
    signal: controller.signal
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`JetPhotos returned ${response.status}`);
      const markdown = await response.text();
      return extractJetPhotosPhoto(markdown, registration, aircraft);
    })
    .catch(() => null)
    .finally(() => window.clearTimeout(timeoutId));

  state.photoCache.set(cacheKey, request);
  return request;
}

function markerIcon(aircraft) {
  const heading = headingFor(aircraft);
  const label = clean(aircraft.t) || "MIL";
  return L.divIcon({
    className: "tracker-aircraft-icon",
    html: `<span class="tracker-plane" style="--heading:${heading}deg" aria-hidden="true"></span><span class="tracker-plane-label">${label}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}

function renderJetPhotosSkeleton(aircraft) {
  const registration = jetPhotosRegistration(aircraft);
  if (!registration) {
    return `
      <div class="tracker-photo tracker-photo--empty">
        <span>No registration available for JetPhotos lookup</span>
      </div>
    `;
  }

  return `
    <div class="tracker-photo tracker-photo--loading" id="tracker-photo">
      <span>Checking JetPhotos for ${escapeHtml(registration)}</span>
      <a href="${escapeHtml(jetPhotosUrl(registration))}" target="_blank" rel="noreferrer">Open JetPhotos</a>
    </div>
  `;
}

function renderJetPhotosPhoto(photo, aircraft) {
  const registration = jetPhotosRegistration(aircraft);
  if (!photo) {
    return `
      <div class="tracker-photo tracker-photo--empty">
        <span>No exact JetPhotos photo found for ${escapeHtml(registration || "this aircraft")}</span>
        ${registration ? `<a href="${escapeHtml(jetPhotosUrl(registration))}" target="_blank" rel="noreferrer">Search JetPhotos</a>` : ""}
      </div>
    `;
  }

  const fallbackImageUrl = photo.imageUrl.replace("/400/", "/full/");

  return `
    <figure class="tracker-photo">
      <a href="${escapeHtml(photo.photoUrl)}" target="_blank" rel="noreferrer">
        <img
          src="${escapeHtml(photo.imageUrl)}"
          data-fallback-src="${escapeHtml(fallbackImageUrl)}"
          alt="${escapeHtml(photo.title || `JetPhotos image for ${photo.registration}`)}"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          referrerpolicy="no-referrer"
        >
      </a>
      <figcaption>
        <span>JetPhotos exact registration</span>
        <a href="${escapeHtml(photo.photoUrl)}" target="_blank" rel="noreferrer">
          ${escapeHtml(photo.photographer ? `Photo by ${photo.photographer}` : "Open photo")}
        </a>
      </figcaption>
    </figure>
  `;
}

async function updateJetPhotosPanel(aircraft) {
  const selectedHex = aircraft.hex;
  const photo = await findJetPhotosPhoto(aircraft);
  if (state.selectedHex !== selectedHex) return;

  const photoSlot = els.panel.querySelector("#tracker-photo-slot");
  if (photoSlot) {
    photoSlot.innerHTML = renderJetPhotosPhoto(photo, aircraft);
    const image = photoSlot.querySelector("img[data-fallback-src]");
    if (image) {
      image.addEventListener(
        "error",
        () => {
          if (image.dataset.fallbackUsed === "true") return;
          image.dataset.fallbackUsed = "true";
          image.src = image.dataset.fallbackSrc;
        },
        { once: true }
      );
      if (image.complete && image.naturalWidth > 0) {
        image.classList.add("is-loaded");
      } else {
        image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
      }
    }
  }

  if (photo) {
    const sourceSlot = els.panel.querySelector("#tracker-jetphotos-specifics");
    if (sourceSlot) {
      const rows = [
        ["JetPhotos aircraft", photo.aircraft],
        ["Serial number", photo.serial],
        ["Listed operator", photo.airline],
        ["Photo date", photo.photoDate],
        ["Photo location", photo.location]
      ].filter(([, value]) => clean(value));

      sourceSlot.innerHTML = rows
        .map(
          ([label, value]) => `
            <div>
              <dt>${escapeHtml(label)}</dt>
              <dd>${escapeHtml(value)}</dd>
            </div>
          `
        )
        .join("");
    }
  }
}

function renderPanel(aircraft) {
  const position = aircraftPosition(aircraft);
  const callsign = valueOrUnknown(aircraft.flight);
  const rows = [
    ["Tail number", valueOrUnknown(aircraft.r)],
    ["Aircraft model", modelName(aircraft)],
    ["Registered to", inferOperator(aircraft)],
    ["Flight plan", flightPlan(aircraft)],
    ["ICAO address", valueOrUnknown(aircraft.hex).toUpperCase()],
    ["Type code", valueOrUnknown(aircraft.t)],
    ["ADS-B source", valueOrUnknown(aircraft.type)],
    ["Squawk", valueOrUnknown(aircraft.squawk)],
    ["Position", formatCoordinate(position)],
    ["Vertical rate", formatRate(aircraft.baro_rate ?? aircraft.geom_rate)]
  ];

  els.panel.innerHTML = `
    <div id="tracker-photo-slot">${renderJetPhotosSkeleton(aircraft)}</div>
    <div class="tracker-panel__header">
      <span>${escapeHtml(valueOrUnknown(aircraft.hex).toUpperCase())}</span>
      <strong>${escapeHtml(callsign)}</strong>
    </div>
    <dl class="tracker-info-list">
      ${rows
        .map(
          ([label, value]) => `
            <div>
              <dt>${escapeHtml(label)}</dt>
              <dd>${escapeHtml(value)}</dd>
            </div>
          `
        )
        .join("")}
    </dl>
    <dl class="tracker-info-list tracker-info-list--jetphotos" id="tracker-jetphotos-specifics"></dl>
    <div class="tracker-live-strip" aria-label="Live aircraft state">
      <span>${formatAltitude(aircraft.alt_baro)}</span>
      <span>${formatSpeed(aircraft.gs)}</span>
      <span>${Math.round(headingFor(aircraft))}&deg;</span>
    </div>
    <p class="tracker-note">
      Position ${position ? `${position[0].toFixed(3)}, ${position[1].toFixed(3)}` : "not published"}.
      Seen ${Number.isFinite(Number(aircraft.seen)) ? `${Number(aircraft.seen).toFixed(1)}s` : "recently"} ago.
    </p>
  `;

  updateJetPhotosPanel(aircraft);
}

function drawTrail(aircraft) {
  state.trailLayer.clearLayers();
  const points = state.trailPoints.get(aircraft.hex) || [];
  if (points.length > 1) {
    L.polyline(points, {
      color: "#ffffff",
      weight: 2,
      opacity: 0.74,
      dashArray: "4 8"
    }).addTo(state.trailLayer);
  }
}

function rememberTrail(aircraft) {
  const position = aircraftPosition(aircraft);
  if (!position || !aircraft.hex) return;
  const points = state.trailPoints.get(aircraft.hex) || [];
  const last = points.at(-1);
  if (!last || last[0] !== position[0] || last[1] !== position[1]) {
    points.push(position);
    state.trailPoints.set(aircraft.hex, points.slice(-10));
  }
}

function syncMarkers(aircraftList) {
  const visibleHexes = new Set();

  aircraftList.forEach((aircraft) => {
    const position = aircraftPosition(aircraft);
    if (!position || !aircraft.hex) return;

    visibleHexes.add(aircraft.hex);
    rememberTrail(aircraft);

    const marker = state.markers.get(aircraft.hex);
    if (marker) {
      marker.setLatLng(position);
      marker.setIcon(markerIcon(aircraft));
      marker.aircraft = aircraft;
      return;
    }

    const nextMarker = L.marker(position, {
      icon: markerIcon(aircraft),
      title: `${valueOrUnknown(aircraft.flight)} ${valueOrUnknown(aircraft.r)}`
    });
    nextMarker.aircraft = aircraft;
    nextMarker.on("click", () => {
      state.selectedHex = aircraft.hex;
      renderPanel(nextMarker.aircraft);
      drawTrail(nextMarker.aircraft);
      state.map.panTo(nextMarker.getLatLng(), { animate: true });
    });
    nextMarker.addTo(state.map);
    state.markers.set(aircraft.hex, nextMarker);
  });

  state.markers.forEach((marker, hex) => {
    if (visibleHexes.has(hex)) return;
    marker.remove();
    state.markers.delete(hex);
  });

  if (!state.hasFitLiveTraffic && state.markers.size) {
    const bounds = L.latLngBounds([...state.markers.values()].map((marker) => marker.getLatLng()));
    const mapSize = state.map.getSize();
    const compact = mapSize.x < 720;
    state.map.fitBounds(bounds, {
      animate: false,
      maxZoom: 4,
      paddingTopLeft: compact ? [18, 34] : [420, 90],
      paddingBottomRight: compact ? [18, Math.round(mapSize.y * 0.39)] : [390, 90]
    });
    if (compact && state.map.getZoom() < 2) {
      state.map.setZoom(2, { animate: false });
    }
    state.hasFitLiveTraffic = true;
  }

  if (state.selectedHex && state.markers.has(state.selectedHex)) {
    const selected = state.markers.get(state.selectedHex).aircraft;
    renderPanel(selected);
    drawTrail(selected);
  }
}

function setStatus(message) {
  els.status.textContent = message;
}

async function loadMilitaryAircraft() {
  els.refresh.disabled = true;
  setStatus("Refreshing military ADS-B feed...");

  try {
    let data = null;
    let sourceName = "";
    let lastError = null;

    for (const feed of MILITARY_FEEDS) {
      try {
        const response = await fetch(feed.url, { cache: "no-store" });
        if (!response.ok) throw new Error(`${feed.name} returned ${response.status}`);
        data = await response.json();
        sourceName = feed.name;
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (!data) throw lastError || new Error("No feed response");

    const aircraft = Array.isArray(data.ac) ? data.ac : [];
    state.aircraft = aircraft.filter((item) => aircraftPosition(item));
    els.count.textContent = `${state.aircraft.length} aircraft live`;
    setStatus(`Live ADS-B positions from ${sourceName}. Updated ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.`);
  } catch (error) {
    state.aircraft = fallbackAircraft;
    els.count.textContent = `${state.aircraft.length} sample aircraft`;
    setStatus(`Live feed unavailable; showing sample military aircraft. ${error.message}`);
  } finally {
    syncMarkers(state.aircraft);
    els.refresh.disabled = false;
  }
}

function initMap() {
  state.map = L.map("tracker-map", {
    zoomControl: false,
    worldCopyJump: true
  }).setView([30, 0], 3);

  L.control.zoom({ position: "bottomleft" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 9,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(state.map);
  state.trailLayer = L.layerGroup().addTo(state.map);
}

function init() {
  if (!window.L) {
    setStatus("Map library failed to load.");
    return;
  }

  initMap();
  els.refresh.addEventListener("click", loadMilitaryAircraft);
  loadMilitaryAircraft();
  state.refreshTimer = window.setInterval(loadMilitaryAircraft, REFRESH_INTERVAL_MS);
}

window.addEventListener("DOMContentLoaded", init);
