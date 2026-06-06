import { mkdir, writeFile } from "node:fs/promises";

const aircraft = [
  ["f-4-phantom-ii", "McDonnell Douglas F-4 Phantom II", "United States", "McDonnell Douglas", "Multirole fighter", "Fighter", "Cold War", "1958", "1960", "Retired", "Jet", "Supersonic", false, false, "2"],
  ["f-5-freedom-fighter-tiger-ii", "Northrop F-5", "United States", "Northrop", "Light fighter", "Fighter", "Cold War", "1959", "1962", "Active/retired by operator", "Jet", "Supersonic", false, false, "1 or 2"],
  ["f-8-crusader", "Vought F-8 Crusader", "United States", "Vought", "Carrier-based fighter", "Fighter", "Cold War", "1955", "1957", "Retired", "Jet", "Supersonic", true, false, "1"],
  ["f-14-tomcat", "Grumman F-14 Tomcat", "United States", "Grumman", "Fleet defense fighter", "Fighter", "Cold War", "1970", "1974", "Active/retired by operator", "Jet", "Supersonic", true, false, "2"],
  ["f-15-eagle", "McDonnell Douglas F-15 Eagle", "United States", "McDonnell Douglas / Boeing", "Air superiority fighter", "Fighter", "Cold War/Modern", "1972", "1976", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["f-16-fighting-falcon", "General Dynamics F-16 Fighting Falcon", "United States", "General Dynamics / Lockheed Martin", "Multirole fighter", "Fighter", "Cold War/Modern", "1974", "1978", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["f-a-18-hornet", "McDonnell Douglas F/A-18 Hornet", "United States", "McDonnell Douglas / Boeing", "Carrier-capable multirole fighter", "Fighter", "Modern", "1978", "1983", "Active/retired by operator", "Jet", "Supersonic", true, false, "1 or 2"],
  ["f-a-18e-f-super-hornet", "Boeing F/A-18E/F Super Hornet", "United States", "Boeing", "Carrier-based multirole fighter", "Fighter", "Modern", "1995", "1999", "Active", "Jet", "Supersonic", true, false, "1 or 2"],
  ["f-22-raptor", "Lockheed Martin F-22 Raptor", "United States", "Lockheed Martin / Boeing", "Stealth air superiority fighter", "Fighter", "Modern", "1997", "2005", "Active", "Jet", "Supersonic", false, true, "1"],
  ["f-35-lightning-ii", "Lockheed Martin F-35 Lightning II", "United States", "Lockheed Martin", "Stealth multirole fighter", "Fighter", "Modern", "2006", "2015", "Active", "Jet", "Supersonic", true, true, "1"],
  ["f-100-super-sabre", "North American F-100 Super Sabre", "United States", "North American Aviation", "Fighter-bomber", "Fighter", "Cold War", "1953", "1954", "Retired", "Jet", "Supersonic", false, false, "1"],
  ["f-102-delta-dagger", "Convair F-102 Delta Dagger", "United States", "Convair", "Interceptor", "Fighter", "Cold War", "1953", "1956", "Retired", "Jet", "Supersonic", false, false, "1"],
  ["f-104-starfighter", "Lockheed F-104 Starfighter", "United States", "Lockheed", "Interceptor", "Fighter", "Cold War", "1954", "1958", "Retired", "Jet", "Supersonic", false, false, "1 or 2"],
  ["f-105-thunderchief", "Republic F-105 Thunderchief", "United States", "Republic Aviation", "Fighter-bomber", "Attack aircraft", "Cold War", "1955", "1958", "Retired", "Jet", "Supersonic", false, false, "1 or 2"],
  ["a-4-skyhawk", "Douglas A-4 Skyhawk", "United States", "Douglas Aircraft", "Carrier-capable attack aircraft", "Attack aircraft", "Cold War", "1954", "1956", "Active/retired by operator", "Jet", "Subsonic", true, false, "1 or 2"],
  ["a-6-intruder", "Grumman A-6 Intruder", "United States", "Grumman", "All-weather attack aircraft", "Attack aircraft", "Cold War", "1960", "1963", "Retired", "Jet", "Subsonic", true, false, "2"],
  ["a-7-corsair-ii", "LTV A-7 Corsair II", "United States", "Ling-Temco-Vought", "Carrier-capable attack aircraft", "Attack aircraft", "Cold War", "1965", "1967", "Retired", "Jet", "Subsonic", true, false, "1"],
  ["a-10-thunderbolt-ii", "Fairchild Republic A-10 Thunderbolt II", "United States", "Fairchild Republic", "Close air support aircraft", "Attack aircraft", "Modern", "1972", "1977", "Active", "Jet", "Subsonic", false, false, "1"],
  ["b-52-stratofortress", "Boeing B-52 Stratofortress", "United States", "Boeing", "Strategic bomber", "Bomber", "Cold War/Modern", "1952", "1955", "Active", "Jet", "Subsonic", false, false, "5"],
  ["b-1-lancer", "Rockwell B-1 Lancer", "United States", "Rockwell International / Boeing", "Strategic bomber", "Bomber", "Modern", "1974", "1986", "Active", "Jet", "Supersonic", false, false, "4"],
  ["b-2-spirit", "Northrop Grumman B-2 Spirit", "United States", "Northrop Grumman", "Stealth strategic bomber", "Bomber", "Modern", "1989", "1997", "Active", "Jet", "Subsonic", false, true, "2"],
  ["c-130-hercules", "Lockheed C-130 Hercules", "United States", "Lockheed / Lockheed Martin", "Tactical airlifter", "Transport aircraft", "Cold War/Modern", "1954", "1956", "Active", "Turboprop", "Subsonic", false, false, "3-5"],
  ["c-5-galaxy", "Lockheed C-5 Galaxy", "United States", "Lockheed", "Strategic airlifter", "Transport aircraft", "Cold War/Modern", "1968", "1970", "Active", "Jet", "Subsonic", false, false, "7"],
  ["c-17-globemaster-iii", "Boeing C-17 Globemaster III", "United States", "McDonnell Douglas / Boeing", "Strategic/tactical airlifter", "Transport aircraft", "Modern", "1991", "1995", "Active", "Jet", "Subsonic", false, false, "3"],
  ["kc-135-stratotanker", "Boeing KC-135 Stratotanker", "United States", "Boeing", "Aerial refueling tanker", "Tanker", "Cold War/Modern", "1956", "1957", "Active", "Jet", "Subsonic", false, false, "3-4"],
  ["e-2-hawkeye", "Grumman E-2 Hawkeye", "United States", "Grumman / Northrop Grumman", "Carrier-based AEW aircraft", "AWACS/AEW", "Cold War/Modern", "1960", "1964", "Active", "Turboprop", "Subsonic", true, false, "5"],
  ["e-3-sentry", "Boeing E-3 Sentry", "United States", "Boeing", "Airborne warning and control", "AWACS/AEW", "Modern", "1972", "1977", "Active", "Jet", "Subsonic", false, false, "13-19"],
  ["p-3-orion", "Lockheed P-3 Orion", "United States", "Lockheed", "Maritime patrol aircraft", "Reconnaissance aircraft", "Cold War/Modern", "1959", "1962", "Active/retired by operator", "Turboprop", "Subsonic", false, false, "11"],
  ["p-8-poseidon", "Boeing P-8 Poseidon", "United States", "Boeing", "Maritime patrol aircraft", "Reconnaissance aircraft", "Modern", "2009", "2013", "Active", "Jet", "Subsonic", false, false, "9"],
  ["u-2-dragon-lady", "Lockheed U-2", "United States", "Lockheed", "High-altitude reconnaissance aircraft", "Reconnaissance aircraft", "Cold War/Modern", "1955", "1956", "Active", "Jet", "Subsonic", false, false, "1"],
  ["sr-71-blackbird", "Lockheed SR-71 Blackbird", "United States", "Lockheed", "Strategic reconnaissance aircraft", "Reconnaissance aircraft", "Cold War", "1964", "1966", "Retired", "Jet", "Mach 3+", false, false, "2"],
  ["t-38-talon", "Northrop T-38 Talon", "United States", "Northrop", "Supersonic jet trainer", "Trainer", "Cold War/Modern", "1959", "1961", "Active", "Jet", "Supersonic", false, false, "2"],
  ["t-6-texan-ii", "Beechcraft T-6 Texan II", "United States", "Beechcraft", "Basic trainer", "Trainer", "Modern", "1998", "2001", "Active", "Turboprop", "Subsonic", false, false, "2"],
  ["ah-1-cobra", "Bell AH-1 Cobra", "United States", "Bell Helicopter", "Attack helicopter", "Helicopter", "Cold War/Modern", "1965", "1967", "Active/retired by operator", "Turboshaft", "Subsonic", false, false, "2"],
  ["ah-64-apache", "Boeing AH-64 Apache", "United States", "Hughes / McDonnell Douglas / Boeing", "Attack helicopter", "Helicopter", "Modern", "1975", "1986", "Active", "Turboshaft", "Subsonic", false, false, "2"],
  ["uh-1-iroquois", "Bell UH-1 Iroquois", "United States", "Bell Helicopter", "Utility helicopter", "Helicopter", "Cold War/Modern", "1956", "1959", "Active/retired by operator", "Turboshaft", "Subsonic", false, false, "1-4"],
  ["uh-60-black-hawk", "Sikorsky UH-60 Black Hawk", "United States", "Sikorsky", "Utility helicopter", "Helicopter", "Modern", "1974", "1979", "Active", "Turboshaft", "Subsonic", false, false, "2-4"],
  ["ch-47-chinook", "Boeing CH-47 Chinook", "United States", "Boeing Vertol", "Transport helicopter", "Helicopter", "Cold War/Modern", "1961", "1962", "Active", "Turboshaft", "Subsonic", false, false, "3"],
  ["ch-53-sea-stallion", "Sikorsky CH-53 Sea Stallion", "United States", "Sikorsky", "Heavy-lift helicopter", "Helicopter", "Cold War/Modern", "1964", "1966", "Active/retired by operator", "Turboshaft", "Subsonic", false, false, "3-5"],
  ["v-22-osprey", "Bell Boeing V-22 Osprey", "United States", "Bell / Boeing", "Tiltrotor transport", "Tiltrotor", "Modern", "1989", "2007", "Active", "Tiltrotor", "Subsonic", false, false, "3-4"],
  ["mq-1-predator", "General Atomics MQ-1 Predator", "United States", "General Atomics", "Remotely piloted UAV", "UAV", "Modern", "1994", "1995", "Retired", "Piston", "Subsonic", false, false, "Remote crew"],
  ["mq-9-reaper", "General Atomics MQ-9 Reaper", "United States", "General Atomics", "Remotely piloted UAV", "UAV", "Modern", "2001", "2007", "Active", "Turboprop", "Subsonic", false, false, "Remote crew"],
  ["rq-4-global-hawk", "Northrop Grumman RQ-4 Global Hawk", "United States", "Northrop Grumman", "High-altitude UAV", "UAV", "Modern", "1998", "2001", "Active", "Jet", "Subsonic", false, false, "Remote crew"],
  ["mig-15", "Mikoyan-Gurevich MiG-15", "Soviet Union", "Mikoyan-Gurevich", "Jet fighter", "Fighter", "Cold War", "1947", "1949", "Retired", "Jet", "Subsonic", false, false, "1"],
  ["mig-17", "Mikoyan-Gurevich MiG-17", "Soviet Union", "Mikoyan-Gurevich", "Jet fighter", "Fighter", "Cold War", "1950", "1952", "Retired", "Jet", "Subsonic/transonic", false, false, "1"],
  ["mig-19", "Mikoyan-Gurevich MiG-19", "Soviet Union", "Mikoyan-Gurevich", "Supersonic fighter", "Fighter", "Cold War", "1952", "1955", "Retired", "Jet", "Supersonic", false, false, "1"],
  ["mig-21", "Mikoyan-Gurevich MiG-21", "Soviet Union", "Mikoyan-Gurevich", "Interceptor/fighter", "Fighter", "Cold War", "1955", "1959", "Active/retired by operator", "Jet", "Supersonic", false, false, "1"],
  ["mig-23", "Mikoyan-Gurevich MiG-23", "Soviet Union", "Mikoyan-Gurevich", "Swing-wing fighter", "Fighter", "Cold War", "1967", "1970", "Active/retired by operator", "Jet", "Supersonic", false, false, "1"],
  ["mig-25", "Mikoyan-Gurevich MiG-25", "Soviet Union", "Mikoyan-Gurevich", "Interceptor/reconnaissance aircraft", "Fighter", "Cold War", "1964", "1970", "Active/retired by operator", "Jet", "Mach 3 class", false, false, "1"],
  ["mig-29", "Mikoyan MiG-29", "Soviet Union", "Mikoyan", "Air superiority/multirole fighter", "Fighter", "Modern", "1977", "1983", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["mig-31", "Mikoyan MiG-31", "Soviet Union", "Mikoyan", "Interceptor", "Fighter", "Modern", "1975", "1981", "Active", "Jet", "Supersonic", false, false, "2"],
  ["su-7", "Sukhoi Su-7", "Soviet Union", "Sukhoi", "Fighter-bomber", "Attack aircraft", "Cold War", "1955", "1959", "Retired", "Jet", "Supersonic", false, false, "1"],
  ["su-17", "Sukhoi Su-17", "Soviet Union", "Sukhoi", "Swing-wing fighter-bomber", "Attack aircraft", "Cold War", "1966", "1970", "Active/retired by operator", "Jet", "Supersonic", false, false, "1"],
  ["su-24", "Sukhoi Su-24", "Soviet Union", "Sukhoi", "Tactical bomber", "Bomber", "Cold War/Modern", "1967", "1974", "Active", "Jet", "Supersonic", false, false, "2"],
  ["su-25", "Sukhoi Su-25", "Soviet Union", "Sukhoi", "Close air support aircraft", "Attack aircraft", "Modern", "1975", "1981", "Active", "Jet", "Subsonic", false, false, "1"],
  ["su-27", "Sukhoi Su-27", "Soviet Union", "Sukhoi", "Air superiority fighter", "Fighter", "Modern", "1977", "1985", "Active", "Jet", "Supersonic", false, false, "1"],
  ["su-30", "Sukhoi Su-30", "Russia", "Sukhoi", "Multirole fighter", "Fighter", "Modern", "1989", "1996", "Active", "Jet", "Supersonic", false, false, "2"],
  ["su-33", "Sukhoi Su-33", "Russia", "Sukhoi", "Carrier-based fighter", "Fighter", "Modern", "1987", "1998", "Active", "Jet", "Supersonic", true, false, "1"],
  ["su-34", "Sukhoi Su-34", "Russia", "Sukhoi", "Strike fighter", "Bomber", "Modern", "1990", "2014", "Active", "Jet", "Supersonic", false, false, "2"],
  ["su-35", "Sukhoi Su-35", "Russia", "Sukhoi", "Multirole fighter", "Fighter", "Modern", "2008", "2014", "Active", "Jet", "Supersonic", false, false, "1"],
  ["su-57", "Sukhoi Su-57", "Russia", "Sukhoi", "Stealth multirole fighter", "Fighter", "Modern", "2010", "2020", "Active", "Jet", "Supersonic", false, true, "1"],
  ["yak-38", "Yakovlev Yak-38", "Soviet Union", "Yakovlev", "Carrier-based VTOL attack aircraft", "Attack aircraft", "Cold War", "1971", "1976", "Retired", "Jet", "Subsonic", true, false, "1"],
  ["yak-130", "Yakovlev Yak-130", "Russia", "Yakovlev", "Advanced jet trainer/light attack aircraft", "Trainer", "Modern", "1996", "2010", "Active", "Jet", "Subsonic", false, false, "2"],
  ["tu-95", "Tupolev Tu-95", "Soviet Union", "Tupolev", "Strategic bomber", "Bomber", "Cold War/Modern", "1952", "1956", "Active", "Turboprop", "Subsonic", false, false, "6-7"],
  ["tu-22m", "Tupolev Tu-22M", "Soviet Union", "Tupolev", "Supersonic strategic/maritime bomber", "Bomber", "Cold War/Modern", "1969", "1972", "Active", "Jet", "Supersonic", false, false, "4"],
  ["tu-160", "Tupolev Tu-160", "Soviet Union/Russia", "Tupolev", "Supersonic strategic bomber", "Bomber", "Modern", "1981", "1987", "Active", "Jet", "Supersonic", false, false, "4"],
  ["il-76", "Ilyushin Il-76", "Soviet Union", "Ilyushin", "Strategic airlifter", "Transport aircraft", "Cold War/Modern", "1971", "1974", "Active", "Jet", "Subsonic", false, false, "5"],
  ["an-12", "Antonov An-12", "Soviet Union", "Antonov", "Military transport aircraft", "Transport aircraft", "Cold War", "1957", "1959", "Active/retired by operator", "Turboprop", "Subsonic", false, false, "5-6"],
  ["an-22", "Antonov An-22", "Soviet Union", "Antonov", "Heavy military transport aircraft", "Transport aircraft", "Cold War/Modern", "1965", "1967", "Active/retired by operator", "Turboprop", "Subsonic", false, false, "5-6"],
  ["mi-8", "Mil Mi-8", "Soviet Union", "Mil", "Utility helicopter", "Helicopter", "Cold War/Modern", "1961", "1967", "Active", "Turboshaft", "Subsonic", false, false, "3"],
  ["mi-24", "Mil Mi-24", "Soviet Union", "Mil", "Attack/transport helicopter", "Helicopter", "Cold War/Modern", "1969", "1972", "Active", "Turboshaft", "Subsonic", false, false, "2-3"],
  ["mi-26", "Mil Mi-26", "Soviet Union/Russia", "Mil", "Heavy-lift helicopter", "Helicopter", "Modern", "1977", "1983", "Active", "Turboshaft", "Subsonic", false, false, "5"],
  ["ka-52", "Kamov Ka-52", "Russia", "Kamov", "Attack helicopter", "Helicopter", "Modern", "1997", "2011", "Active", "Turboshaft", "Subsonic", false, false, "2"],
  ["eurofighter-typhoon", "Eurofighter Typhoon", "Multinational Europe", "Eurofighter Jagdflugzeug GmbH", "Multirole fighter", "Fighter", "Modern", "1994", "2003", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["rafale", "Dassault Rafale", "France", "Dassault Aviation", "Multirole fighter", "Fighter", "Modern", "1986", "2001", "Active", "Jet", "Supersonic", true, false, "1 or 2"],
  ["mirage-iii", "Dassault Mirage III", "France", "Dassault Aviation", "Interceptor/fighter", "Fighter", "Cold War", "1956", "1961", "Active/retired by operator", "Jet", "Supersonic", false, false, "1 or 2"],
  ["mirage-f1", "Dassault Mirage F1", "France", "Dassault Aviation", "Fighter", "Fighter", "Cold War", "1966", "1973", "Active/retired by operator", "Jet", "Supersonic", false, false, "1"],
  ["mirage-2000", "Dassault Mirage 2000", "France", "Dassault Aviation", "Multirole fighter", "Fighter", "Modern", "1978", "1984", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["sepecat-jaguar", "SEPECAT Jaguar", "United Kingdom/France", "SEPECAT", "Attack aircraft", "Attack aircraft", "Cold War/Modern", "1968", "1973", "Active/retired by operator", "Jet", "Supersonic", false, false, "1 or 2"],
  ["panavia-tornado", "Panavia Tornado", "United Kingdom/Germany/Italy", "Panavia Aircraft GmbH", "Strike/interdictor aircraft", "Bomber", "Cold War/Modern", "1974", "1979", "Active/retired by operator", "Jet", "Supersonic", false, false, "2"],
  ["harrier", "Hawker Siddeley Harrier", "United Kingdom", "Hawker Siddeley", "V/STOL attack aircraft", "Attack aircraft", "Cold War", "1967", "1969", "Retired", "Jet", "Subsonic", false, false, "1"],
  ["bae-hawk", "BAE Systems Hawk", "United Kingdom", "Hawker Siddeley / BAE Systems", "Advanced jet trainer", "Trainer", "Modern", "1974", "1976", "Active", "Jet", "Subsonic", false, false, "2"],
  ["saab-35-draken", "Saab 35 Draken", "Sweden", "Saab", "Fighter/interceptor", "Fighter", "Cold War", "1955", "1960", "Retired", "Jet", "Supersonic", false, false, "1"],
  ["saab-37-viggen", "Saab 37 Viggen", "Sweden", "Saab", "Multirole combat aircraft", "Fighter", "Cold War", "1967", "1971", "Retired", "Jet", "Supersonic", false, false, "1 or 2"],
  ["jas-39-gripen", "Saab JAS 39 Gripen", "Sweden", "Saab", "Multirole fighter", "Fighter", "Modern", "1988", "1996", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["mb-339", "Aermacchi MB-339", "Italy", "Aermacchi", "Jet trainer/light attack aircraft", "Trainer", "Modern", "1976", "1979", "Active", "Jet", "Subsonic", false, false, "2"],
  ["c-27j-spartan", "Alenia C-27J Spartan", "Italy/United States", "Alenia Aermacchi / Leonardo", "Tactical airlifter", "Transport aircraft", "Modern", "1999", "2006", "Active", "Turboprop", "Subsonic", false, false, "3"],
  ["a400m-atlas", "Airbus A400M Atlas", "Multinational Europe", "Airbus Defence and Space", "Military transport aircraft", "Transport aircraft", "Modern", "2009", "2013", "Active", "Turboprop", "Subsonic", false, false, "3-4"],
  ["nh90", "NHIndustries NH90", "Multinational Europe", "NHIndustries", "Medium utility helicopter", "Helicopter", "Modern", "1995", "2007", "Active", "Turboshaft", "Subsonic", false, false, "2-4"],
  ["eurocopter-tiger", "Eurocopter Tiger", "France/Germany", "Eurocopter / Airbus Helicopters", "Attack helicopter", "Helicopter", "Modern", "1991", "2003", "Active", "Turboshaft", "Subsonic", false, false, "2"],
  ["chengdu-j-7", "Chengdu J-7", "China", "Chengdu Aircraft Corporation", "Fighter", "Fighter", "Cold War/Modern", "1966", "1967", "Active/retired by operator", "Jet", "Supersonic", false, false, "1"],
  ["chengdu-j-10", "Chengdu J-10", "China", "Chengdu Aircraft Corporation", "Multirole fighter", "Fighter", "Modern", "1998", "2005", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["shenyang-j-11", "Shenyang J-11", "China", "Shenyang Aircraft Corporation", "Air superiority fighter", "Fighter", "Modern", "1998", "1998", "Active", "Jet", "Supersonic", false, false, "1"],
  ["chengdu-j-20", "Chengdu J-20", "China", "Chengdu Aerospace Corporation", "Stealth air superiority fighter", "Fighter", "Modern", "2011", "2017", "Active", "Jet", "Supersonic", false, true, "1"],
  ["xian-h-6", "Xi'an H-6", "China", "Xi'an Aircraft Industrial Corporation", "Strategic bomber", "Bomber", "Cold War/Modern", "1959", "1969", "Active", "Jet", "Subsonic", false, false, "4"],
  ["xian-y-20", "Xi'an Y-20", "China", "Xi'an Aircraft Industrial Corporation", "Strategic airlifter", "Transport aircraft", "Modern", "2013", "2016", "Active", "Jet", "Subsonic", false, false, "3"],
  ["jf-17-thunder", "CAC/PAC JF-17 Thunder", "China/Pakistan", "CAC / Pakistan Aeronautical Complex", "Multirole fighter", "Fighter", "Modern", "2003", "2007", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["hal-tejas", "HAL Tejas", "India", "Hindustan Aeronautics Limited", "Light multirole fighter", "Fighter", "Modern", "2001", "2015", "Active", "Jet", "Supersonic", false, false, "1 or 2"],
  ["iai-kfir", "IAI Kfir", "Israel", "Israel Aerospace Industries", "Multirole fighter", "Fighter", "Cold War/Modern", "1973", "1975", "Active/retired by operator", "Jet", "Supersonic", false, false, "1 or 2"],
  ["embraer-emb-314-super-tucano", "Embraer EMB 314 Super Tucano", "Brazil", "Embraer", "Trainer/light attack aircraft", "Trainer", "Modern", "1999", "2003", "Active", "Turboprop", "Subsonic", false, false, "1 or 2"]
];

const BASE_SOURCE = {
  title: "Wikidata Query Service",
  url: "https://query.wikidata.org/",
  note: "Recommended open structured data source for future automated enrichment."
};

function inferArmament(type, role) {
  if (type === "Transport aircraft" || type === "Tanker" || type === "AWACS/AEW") return "Usually unarmed or mission-dependent defensive systems.";
  if (type === "UAV") return "Mission payload varies by variant and operator.";
  if (type === "Helicopter") return role.includes("Attack") ? "Cannons, rockets, missiles, and guided weapons depending on variant." : "Mission-dependent door guns or defensive weapons.";
  if (type === "Bomber") return "Bombs, missiles, or precision-guided weapons depending on variant and era.";
  if (type === "Trainer") return "Usually unarmed or fitted for light attack/training stores depending on variant.";
  return "Guns, missiles, bombs, rockets, and guided weapons depending on variant and operator.";
}

function wikiSearchUrl(name) {
  return `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(`${name} aircraft`)}`;
}

async function fetchWikipediaSummary(title) {
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`, {
    headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
  });
  if (!response.ok) throw new Error(`Summary failed: ${response.status}`);
  const data = await response.json();
  return {
    title: data.title || title,
    summary: data.extract || "",
    image: data.thumbnail?.source || "",
    page_url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`
  };
}

async function getWikipediaSummary(name) {
  try {
    return await fetchWikipediaSummary(name);
  } catch {
    // Fall back to search only if an exact page title is not available.
  }

  const searchUrl = new URL("https://en.wikipedia.org/w/api.php");
  searchUrl.search = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: `${name} aircraft`,
    format: "json",
    origin: "*"
  });

  try {
    const searchResponse = await fetch(searchUrl, {
      headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
    });
    if (!searchResponse.ok) throw new Error(`Search failed: ${searchResponse.status}`);
    const searchData = await searchResponse.json();
    const title = searchData?.query?.search?.[0]?.title;
    if (!title) throw new Error("No title");

    return await fetchWikipediaSummary(title);
  } catch {
    return {
      title: name,
      summary: "",
      image: "",
      page_url: wikiSearchUrl(name)
    };
  }
}

function sentence(value) {
  return String(value || "").replace(/\.$/, "");
}

function makeFootnotes(wiki) {
  return [
    {
      id: "fn-main",
      title: wiki.title,
      url: wiki.page_url,
      publisher: "Wikipedia",
      note: "Used for the starter overview, source discovery, and cross-checking. Milipedia should verify detailed specifications against primary or specialist sources."
    },
    {
      id: "fn-wikidata",
      title: "Wikidata Query Service",
      url: "https://query.wikidata.org/",
      publisher: "Wikidata",
      note: "Open structured-data source recommended for automated identifiers, relationships, manufacturers, operators, and dates."
    },
    {
      id: "fn-method",
      title: "Milipedia data accuracy rules",
      url: "MILIPEDIA_PLAN.md#16-data-accuracy-rules",
      publisher: "Milipedia",
      note: "Local rules for neutral wording, estimates, variant differences, and source handling."
    }
  ];
}

function cite(text, id) {
  return { text, refs: [id] };
}

function makeArticleSections(record, wiki) {
  const origin = sentence(record.country_of_origin);
  const manufacturer = sentence(record.manufacturer);
  const status = sentence(record.status);
  const aircraftType = sentence(record.aircraft_type).toLowerCase();
  const role = sentence(record.role).toLowerCase();
  const era = sentence(record.era);
  const sourceLead = wiki.summary
    ? wiki.summary
    : `${record.name} is a post-1945 production military aircraft included in the Milipedia starter database.`;

  return [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        cite(sourceLead, "fn-main"),
        cite(
          `${record.name} is categorized in Milipedia as a ${aircraftType} with the primary role of ${role}. Its country of origin is listed as ${origin}, and the manufacturer is recorded as ${manufacturer}.`,
          "fn-wikidata"
        ),
        cite(
          `The entry is intentionally written in neutral encyclopedia language. Variant-specific figures, disputed claims, and classified performance estimates should be checked against the cited sources before being treated as final.`,
          "fn-method"
        )
      ]
    },
    {
      id: "development",
      title: "Development",
      paragraphs: [
        cite(
          `${record.name} first flew in ${record.first_flight} and entered service or was introduced around ${record.introduction_date}. Those dates place it in the ${era} aviation context.`,
          "fn-main"
        ),
        cite(
          `The aircraft was produced by ${manufacturer}. In later Milipedia data passes, this section should separate original design requirements, prototype development, production blocks, export versions, and major modernization programs.`,
          "fn-wikidata"
        )
      ]
    },
    {
      id: "design",
      title: "Design and Capabilities",
      paragraphs: [
        cite(
          `The recorded crew requirement is ${record.crew}, with ${record.engine_type.toLowerCase()} propulsion and a broad speed category of ${record.speed_category}.`,
          "fn-main"
        ),
        cite(
          `Milipedia currently records carrier capability as ${record.carrier_capable ? "yes" : "no"} and stealth characteristics as ${record.stealth ? "yes" : "no"}. These fields describe broad capability categories rather than full technical performance.`,
          "fn-method"
        ),
        cite(
          `Armament is summarized as: ${record.armament} Exact weapon compatibility can differ significantly by variant, operator, upgrade package, and time period.`,
          "fn-main"
        )
      ]
    },
    {
      id: "service",
      title: "Operational History",
      paragraphs: [
        cite(
          `The current Milipedia status for ${record.name} is ${status}. For aircraft with long service lives, this may vary by operator because some air forces retire a type while others continue to fly upgraded variants.`,
          "fn-main"
        ),
        cite(
          `Operational claims should be handled carefully. Combat history, loss claims, and performance comparisons should be attributed to dated sources and kept separate from propaganda, marketing language, or unsourced assertions.`,
          "fn-method"
        )
      ]
    },
    {
      id: "variants",
      title: "Variants",
      paragraphs: [
        cite(
          `${record.name} may include multiple production blocks, export models, trainer versions, reconnaissance versions, or local upgrade programs. Detailed variant lists should be added only when each variant can be sourced.`,
          "fn-main"
        )
      ]
    },
    {
      id: "operators",
      title: "Operators",
      paragraphs: [
        cite(
          `Operator data is intentionally conservative in this starter build. Future versions should list current and former operators separately, with dates where available and special notes for license-built or locally upgraded aircraft.`,
          "fn-wikidata"
        )
      ]
    },
    {
      id: "specifications",
      title: "Specifications",
      paragraphs: [
        cite(
          `This starter entry records core comparable fields: crew ${record.crew}, propulsion type ${record.engine_type}, maximum speed category ${record.speed_category}, first flight ${record.first_flight}, and introduction ${record.introduction_date}.`,
          "fn-main"
        ),
        cite(
          `Detailed dimensions, weights, range, combat radius, service ceiling, and climb rate should be stored by exact variant. Milipedia should avoid mixing prototype, export, and modernized figures in a single unqualified table.`,
          "fn-method"
        )
      ]
    }
  ];
}

const records = [];

for (const item of aircraft) {
  const [
    id,
    name,
    country_of_origin,
    manufacturer,
    role,
    aircraft_type,
    era,
    first_flight,
    introduction_date,
    status,
    engine_type,
    speed_category,
    carrier_capable,
    stealth,
    crew
  ] = item;

  const wiki = await getWikipediaSummary(name);
  const baseRecord = {
    id,
    name,
    alternative_names: [],
    nato_reporting_name: null,
    country_of_origin,
    manufacturer,
    role,
    aircraft_type,
    era,
    first_flight,
    introduction_date,
    retirement_date: status === "Retired" ? "See source" : null,
    status,
    number_built: "See source",
    crew,
    engine_type,
    engines: "See source",
    max_speed: speed_category,
    speed_category,
    range: "See source",
    combat_range: "See source",
    service_ceiling: "See source",
    rate_of_climb: "See source",
    armament: inferArmament(aircraft_type, role),
    hardpoints: "See source",
    variants: [],
    operators: [],
    combat_history: "Add sourced operational history in a later data pass.",
    development_history: wiki.summary || "Add sourced development history in a later data pass.",
    short_summary: wiki.summary || `${name} is a post-1945 production military aircraft included in the Milipedia starter database.`,
    carrier_capable,
    stealth,
    images: wiki.image
      ? [
          {
            url: wiki.image,
            caption: name,
            credit: "Wikimedia/Wikipedia thumbnail source",
            license: "Verify original file license before reuse."
          }
        ]
      : [],
    sources: [
      {
        id: "fn-main",
        title: wiki.title,
        url: wiki.page_url,
        publisher: "Wikipedia",
        note: "Starter reference page. Verify exact specifications against primary or specialist sources before publishing detailed figures."
      },
      {
        id: "fn-wikidata",
        ...BASE_SOURCE,
        publisher: "Wikidata"
      },
      {
        id: "fn-method",
        title: "Milipedia data accuracy rules",
        url: "MILIPEDIA_PLAN.md#16-data-accuracy-rules",
        publisher: "Milipedia",
        note: "Local rules for neutral wording, estimates, variant differences, and source handling."
      }
    ]
  };

  baseRecord.footnotes = makeFootnotes(wiki);
  baseRecord.article_sections = makeArticleSections(baseRecord, wiki);
  records.push(baseRecord);
}

if (records.length !== 100) {
  throw new Error(`Expected 100 aircraft, found ${records.length}`);
}

await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/aircraft.json", import.meta.url), `${JSON.stringify(records, null, 2)}\n`);

console.log(`Wrote ${records.length} aircraft to data/aircraft.json`);
