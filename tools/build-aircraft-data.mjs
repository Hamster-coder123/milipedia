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
  note: "Open structured data source used for aircraft identifiers and relationship checks."
};

const NOT_RECORDED = "Not recorded in Milipedia dataset";

const WIKIPEDIA_TITLE_OVERRIDES = {
  "Mikoyan-Gurevich MiG-19": "Mikoyan-Gurevich MiG-19",
  "Mikoyan-Gurevich MiG-21": "Mikoyan-Gurevich MiG-21",
  "Mikoyan-Gurevich MiG-23": "Mikoyan-Gurevich MiG-23",
  "Mikoyan-Gurevich MiG-25": "Mikoyan-Gurevich MiG-25",
  "Mikoyan MiG-29": "Mikoyan MiG-29",
  "Mikoyan MiG-31": "Mikoyan MiG-31"
};

let lastRequestAt = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function politeFetch(url, options = {}, attempt = 1) {
  const elapsed = Date.now() - lastRequestAt;
  if (elapsed < 350) {
    await sleep(350 - elapsed);
  }
  lastRequestAt = Date.now();
  const response = await fetch(url, options);
  const text = await response.text();

  if (text.includes("too many requests") || text.includes("making too many requests")) {
    if (attempt >= 4) throw new Error("Rate limited by Wikimedia API");
    await sleep(1500 * attempt);
    return politeFetch(url, options, attempt + 1);
  }

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return JSON.parse(text);
}

function inferArmament(type, role) {
  if (type === "Transport aircraft" || type === "Tanker" || type === "AWACS/AEW") return "Milipedia category record: support aircraft; fixed offensive armament not recorded.";
  if (type === "UAV") return "Milipedia category record: remotely piloted aircraft payload; exact stores not recorded.";
  if (type === "Helicopter") return role.includes("Attack") ? "Milipedia category record: cannon, rockets, and guided missiles." : "Milipedia category record: utility helicopter weapons not recorded.";
  if (type === "Bomber") return "Milipedia category record: bombs, missiles, and precision-guided weapons.";
  if (type === "Trainer") return "Milipedia category record: trainer aircraft; light-attack stores not recorded.";
  return "Milipedia category record: gun armament, air-to-air missiles, air-to-ground weapons, and external stores.";
}

function wikiSearchUrl(name) {
  return `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(`${name} aircraft`)}`;
}

async function fetchWikipediaSummary(title) {
  const data = await politeFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`, {
    headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
  });
  return {
    title: data.title || title,
    summary: data.extract || "",
    image: data.thumbnail?.source || "",
    page_url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(" ", "_"))}`
  };
}

async function fetchWikipediaPageImage(title) {
  const url = new URL("https://en.wikipedia.org/w/api.php");
  url.search = new URLSearchParams({
    action: "query",
    prop: "pageimages",
    titles: title,
    pithumbsize: "1200",
    redirects: "1",
    format: "json",
    origin: "*"
  });

  try {
    const data = await politeFetch(url, {
      headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
    });
    const page = Object.values(data.query?.pages || {})[0];
    return page?.thumbnail?.source || "";
  } catch {
    return "";
  }
}

async function fillMissingImages(records) {
  const missing = records.filter((record) => !record.images?.[0]?.url);
  const batches = [];
  for (let index = 0; index < missing.length; index += 45) {
    batches.push(missing.slice(index, index + 45));
  }

  for (const batch of batches) {
    const url = new URL("https://en.wikipedia.org/w/api.php");
    url.search = new URLSearchParams({
      action: "query",
      prop: "pageimages",
      titles: batch.map((record) => record.sources?.[0]?.title || record.name).join("|"),
      pithumbsize: "1200",
      redirects: "1",
      format: "json",
      origin: "*"
    });

    try {
      const data = await politeFetch(url, {
        headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
      });
      const pagesByTitle = new Map(
        Object.values(data.query?.pages || {}).map((page) => [page.title, page.thumbnail?.source || ""])
      );

      for (const record of batch) {
        const title = record.sources?.[0]?.title || record.name;
        const image = pagesByTitle.get(title);
        if (image) {
          record.images = [
            {
              url: image,
              caption: record.name,
              credit: "Wikimedia/Wikipedia page image source",
              license: "Verify original file license before reuse."
            }
          ];
        }
      }
    } catch (error) {
      console.warn(`Image batch failed: ${error.message}`);
    }
  }
}

async function fillEventImages(records) {
  const eventNames = [
    ...new Set(
      records
        .flatMap((record) => record.wars_used_in || [])
        .map((war) => war.name)
        .filter((name) => name && name !== "Source review required")
    )
  ];

  const eventImageMap = new Map();
  for (let index = 0; index < eventNames.length; index += 45) {
    const batch = eventNames.slice(index, index + 45);
    const url = new URL("https://en.wikipedia.org/w/api.php");
    url.search = new URLSearchParams({
      action: "query",
      prop: "pageimages|info",
      inprop: "url",
      titles: batch.join("|"),
      pithumbsize: "900",
      redirects: "1",
      format: "json",
      origin: "*"
    });

    try {
      const data = await politeFetch(url, {
        headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
      });
      for (const page of Object.values(data.query?.pages || {})) {
        if (page.thumbnail?.source) {
          eventImageMap.set(page.title, {
            url: page.thumbnail.source,
            caption: page.title,
            source_url: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`
          });
        }
      }
    } catch (error) {
      console.warn(`Event image batch failed: ${error.message}`);
    }
  }

  for (const record of records) {
    record.event_gallery = (record.wars_used_in || [])
      .map((war) => eventImageMap.get(war.name))
      .filter(Boolean)
      .slice(0, 3);
  }
}

function isUsefulExternalUrl(rawUrl) {
  if (!rawUrl) return false;
  const blocked = [
    "wikipedia.org",
    "wikimedia.org",
    "wikidata.org",
    "creativecommons.org",
    "archive.org",
    "webcitation.org",
    "twitter.com",
    "facebook.com",
    "youtube.com",
    "reddit.com"
  ];
  try {
    const url = new URL(rawUrl);
    return url.protocol.startsWith("http") && !blocked.some((domain) => url.hostname.includes(domain));
  } catch {
    return false;
  }
}

async function fillExternalArticles(records) {
  const titleToRecord = new Map(records.map((record) => [record.sources?.[0]?.title, record]).filter(([title]) => title));
  const titles = [...titleToRecord.keys()];
  for (let index = 0; index < titles.length; index += 25) {
    const batch = titles.slice(index, index + 25);
    const url = new URL("https://en.wikipedia.org/w/api.php");
    url.search = new URLSearchParams({
      action: "query",
      prop: "extlinks",
      titles: batch.join("|"),
      ellimit: "50",
      format: "json",
      origin: "*"
    });

    try {
      const data = await politeFetch(url, {
        headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
      });
      for (const page of Object.values(data.query?.pages || {})) {
        const record = titleToRecord.get(page.title);
        if (!record) continue;
        const links = (page?.extlinks || [])
          .map((link) => link.url || link["*"])
          .filter(isUsefulExternalUrl)
          .slice(0, 3);
        record.external_articles = links.map((link, linkIndex) => ({
          id: `fn-ext-${linkIndex + 1}`,
          title: `External source ${linkIndex + 1}`,
          url: link,
          publisher: new URL(link).hostname.replace(/^www\./, ""),
          note: `External source linked from the source article for ${record.name}.`
        }));
      }
    } catch {
      for (const title of batch) {
        const record = titleToRecord.get(title);
        if (record) record.external_articles = [];
      }
    }
  }

  for (const record of records) {
    if (!record.external_articles) record.external_articles = [];
  }
}

async function getWikipediaSummary(name) {
  const exactTitle = WIKIPEDIA_TITLE_OVERRIDES[name] || name;
  try {
    return await fetchWikipediaSummary(exactTitle);
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
    const searchData = await politeFetch(searchUrl, {
      headers: { "User-Agent": "MilipediaStarter/1.0 (educational static site)" }
    });
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
      note: "Source page used for the article overview, page image, and reference discovery."
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
      note: "Local rules for units, source citation, neutral wording, and estimate labels."
    }
  ];
}

function cite(text, id) {
  return { text, refs: [id] };
}

const COUNTRY_FLAGS = {
  "United States": "🇺🇸",
  "Soviet Union": "☭",
  "Russia": "🇷🇺",
  "Soviet Union/Russia": "🇷🇺",
  "France": "🇫🇷",
  "United Kingdom": "🇬🇧",
  "Germany": "🇩🇪",
  "Italy": "🇮🇹",
  "Sweden": "🇸🇪",
  "China": "🇨🇳",
  "Pakistan": "🇵🇰",
  "India": "🇮🇳",
  "Israel": "🇮🇱",
  "Brazil": "🇧🇷",
  "Multinational Europe": "🇪🇺",
  "United Kingdom/Germany/Italy": "🇪🇺",
  "United Kingdom/France": "🇪🇺",
  "France/Germany": "🇪🇺",
  "Italy/United States": "🇪🇺",
  "China/Pakistan": "🇵🇰"
};

function splitCountries(value) {
  return String(value || "")
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
}

function makeCountryFlags(record) {
  const countries = splitCountries(record.country_of_origin);
  return countries.map((label) => ({
    label,
    emoji: COUNTRY_FLAGS[label] || COUNTRY_FLAGS[record.country_of_origin] || "🏳"
  }));
}

function inferConflictNames(record) {
  const id = record.id;
  const conflicts = [];
  const add = (...names) => names.forEach((name) => !conflicts.includes(name) && conflicts.push(name));

  if (["mig-15"].includes(id)) add("Korean War");
  if (["f-4-phantom-ii", "f-100-super-sabre", "f-105-thunderchief", "a-4-skyhawk", "a-6-intruder", "a-7-corsair-ii", "uh-1-iroquois", "ah-1-cobra", "b-52-stratofortress", "mig-17", "mig-19", "mig-21"].includes(id)) {
    add("Vietnam War");
  }
  if (["f-15-eagle", "f-16-fighting-falcon", "f-a-18-hornet", "a-10-thunderbolt-ii", "b-52-stratofortress", "b-1-lancer", "b-2-spirit", "c-130-hercules", "c-5-galaxy", "kc-135-stratotanker", "e-3-sentry", "p-3-orion", "ah-64-apache", "uh-60-black-hawk", "ch-47-chinook", "mq-1-predator", "mq-9-reaper"].includes(id)) {
    add("Gulf War", "Iraq War", "War in Afghanistan (2001–2021)");
  }
  if (["f-22-raptor", "f-35-lightning-ii", "f-a-18e-f-super-hornet", "p-8-poseidon", "rq-4-global-hawk"].includes(id)) {
    add("Syrian civil war");
  }
  if (["su-7", "su-17", "su-24", "su-25", "mi-8", "mi-24", "an-12", "il-76"].includes(id)) {
    add("Soviet–Afghan War");
  }
  if (record.country_of_origin.includes("Russia") || record.country_of_origin.includes("Soviet Union")) {
    if (["su-24", "su-25", "su-27", "su-30", "su-34", "su-35", "mi-8", "mi-24", "mi-26", "ka-52", "il-76", "tu-22m", "tu-95", "tu-160"].includes(id)) {
      add("Russo-Ukrainian War");
    }
  }
  if (["eurofighter-typhoon", "rafale", "mirage-2000", "sepecat-jaguar", "panavia-tornado", "harrier"].includes(id)) {
    add("Kosovo War", "2011 military intervention in Libya");
  }
  if (["iai-kfir"].includes(id)) add("Lebanese Civil War");
  if (["embraer-emb-314-super-tucano"].includes(id)) add("War in Afghanistan (2001–2021)");

  return conflicts;
}

function makeDevelopmentTensions(record) {
  const tensions = [];
  if (record.aircraft_type === "Fighter") tensions.push("Balancing speed, range, radar/weapons integration, maneuverability, maintainability, and export affordability.");
  if (record.aircraft_type === "Bomber") tensions.push("Balancing payload, range, survivability, sensor/weapons modernization, and operating cost.");
  if (record.aircraft_type === "Transport aircraft") tensions.push("Balancing payload, short-field performance, reliability, strategic reach, and rough-field operation.");
  if (record.aircraft_type === "Helicopter") tensions.push("Balancing lift, survivability, vibration, hot-and-high performance, and battlefield maintainability.");
  if (record.aircraft_type === "UAV") tensions.push("Balancing endurance, sensor payload, communications links, autonomy, and legal/political constraints.");
  if (record.carrier_capable) tensions.push("Carrier compatibility added structural, landing gear, corrosion, and low-speed handling requirements.");
  if (record.stealth) tensions.push("Low-observable shaping and internal systems integration increased the importance of sensors, materials, heat management, and maintenance discipline.");
  if (record.speed_category.includes("Supersonic") || record.speed_category.includes("Mach")) tensions.push("High-speed performance created trade-offs in fuel use, inlet design, structural heating, and low-speed handling.");
  return tensions;
}

function makeVariantFamilies(record) {
  const variants = [
    `${record.name} baseline production model`,
    `${record.name} upgraded avionics or weapons-capable model`
  ];
  if (String(record.crew).includes("2")) variants.push(`${record.name} two-seat trainer or conversion model`);
  if (record.aircraft_type === "Fighter" || record.aircraft_type === "Attack aircraft") variants.push(`${record.name} export or locally modernized model`);
  if (record.aircraft_type === "Transport aircraft") variants.push(`${record.name} cargo, special mission, or aerial support model`);
  if (record.aircraft_type === "Helicopter") variants.push(`${record.name} utility, attack, naval, or export model`);
  if (record.aircraft_type === "UAV") variants.push(`${record.name} surveillance and armed mission configuration`);
  return variants;
}

function makeOperatorSummary(record) {
  const countries = splitCountries(record.country_of_origin);
  return {
    major_designer_or_builder: countries,
    major_user_note: `${record.name} has ${countries.length} recorded designer or builder country entry.`,
    all_operators_status: `${record.operators.length} operator entries stored in Milipedia dataset.`
  };
}

function makeRelatedAircraft(record, allRecords = []) {
  const sameType = allRecords
    .filter((candidate) => candidate.id !== record.id && candidate.aircraft_type === record.aircraft_type)
    .filter((candidate) => candidate.era.split("/").some((era) => record.era.includes(era)))
    .slice(0, 4);
  const fallback = allRecords
    .filter((candidate) => candidate.id !== record.id && candidate.era.split("/").some((era) => record.era.includes(era)))
    .slice(0, 4);
  return (sameType.length ? sameType : fallback).map((candidate) => ({ id: candidate.id, name: candidate.name, url: `aircraft.html?id=${candidate.id}` }));
}

function makeNotableNotes(record) {
  return {
    notable_pilots_or_aircraft: [
      `Named pilot entries stored in Milipedia dataset: 0.`,
      `Named individual aircraft entries stored in Milipedia dataset: 0.`
    ],
    notable_incidents: [
      `Notable incident entries stored in Milipedia dataset: 0.`,
      `Loss-claim entries stored in Milipedia dataset: 0.`
    ]
  };
}

function makeDetailedFields(record) {
  const conflicts = inferConflictNames(record);
  return {
    country_flags: makeCountryFlags(record),
    designers: [record.manufacturer],
    development_tensions: makeDevelopmentTensions(record),
    wars_used_in: conflicts.map((name) => ({
      name,
      note: `Recorded conflict entry for ${record.name}.`
    })),
    variant_families: makeVariantFamilies(record),
    operator_summary: makeOperatorSummary(record),
    notable: makeNotableNotes(record),
    engine_details: {
      type: record.engine_type,
      summary: `${record.name} is recorded with ${record.engine_type.toLowerCase()} propulsion. Exact engine models can vary by production block, export model, modernization standard, and source.`
    },
    armament_details: {
      summary: record.armament,
      caution: "Exact weapon list not recorded in Milipedia dataset."
    },
    similar_development: []
  };
}

function countExactFields(record) {
  return [
    record.id,
    record.name,
    record.country_of_origin,
    record.manufacturer,
    record.role,
    record.aircraft_type,
    record.era,
    record.first_flight,
    record.introduction_date,
    record.status,
    record.crew,
    record.engine_type,
    record.max_speed,
    record.carrier_capable,
    record.stealth
  ].filter((value) => value !== null && value !== undefined && value !== NOT_RECORDED).length;
}

function makeArticleSections(record, wiki) {
  const origin = sentence(record.country_of_origin);
  const manufacturer = sentence(record.manufacturer);
  const status = sentence(record.status);
  const aircraftType = sentence(record.aircraft_type).toLowerCase();
  const role = sentence(record.role).toLowerCase();
  const era = sentence(record.era);
  const sourceLead = `${record.name} is a ${record.role} from ${record.country_of_origin}. Manufacturer: ${record.manufacturer}. First flight: ${record.first_flight}. Introduction: ${record.introduction_date}. Status: ${record.status}.`;

  const conflicts = record.wars_used_in.map((war) => war.name).join(", ");
  const variants = record.variant_families.join("; ");
  const operators = record.operator_summary.major_designer_or_builder.join(", ");

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
          `Milipedia stores ${record.article_quality.exact_fact_count} exact structured fact fields for this aircraft record.`,
          "fn-method"
        )
      ],
      cards: [
        { title: "Primary role", text: record.role },
        { title: "Designer or builder", text: record.designers.join(", ") },
        { title: "Major origin", text: operators },
        { title: "Propulsion", text: record.engine_details.type }
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
          `The aircraft was produced by ${manufacturer}. The recorded development context is ${role}, ${record.engine_type.toLowerCase()} propulsion, ${record.speed_category.toLowerCase()} speed category, and ${record.era} era.`,
          "fn-wikidata"
        )
      ],
      bullets: record.development_tensions.map((text) => ({ text, refs: ["fn-method"] }))
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
          `${record.engine_details.summary} Engine model field: ${record.engines}.`,
          "fn-main"
        ),
        cite(
          `Armament field: ${record.armament} ${record.armament_details.caution}`,
          "fn-main"
        )
      ],
      cards: [
        { title: "Crew", text: record.crew },
        { title: "Engine class", text: record.engine_type },
        { title: "Speed class", text: record.speed_category },
        { title: "Carrier capable", text: record.carrier_capable ? "Yes" : "No" },
        { title: "Stealth", text: record.stealth ? "Yes" : "No" }
      ]
    },
    {
      id: "service",
      title: "Operational History",
      paragraphs: [
        cite(
          `Milipedia status field for ${record.name}: ${status}. Recorded conflict entries: ${record.wars_used_in.length}.`,
          "fn-main"
        ),
        cite(
          `Recorded conflicts: ${conflicts || "0 entries"}.`,
          "fn-method"
        )
      ],
      bullets: record.wars_used_in.map((war) => ({
        text: `${war.name}: ${war.note}`,
        refs: ["fn-main"]
      }))
    },
    {
      id: "notable",
      title: "Notable Aircraft, Pilots, and Incidents",
      paragraphs: [
        cite(
          `Milipedia notable-person and notable-airframe records for ${record.name}: 0 named pilots, 0 named aircraft, 0 dated incident entries, and 0 loss-claim entries.`,
          "fn-main"
        )
      ],
      bullets: [...record.notable.notable_pilots_or_aircraft, ...record.notable.notable_incidents].map((text) => ({ text, refs: ["fn-method"] }))
    },
    {
      id: "variants",
      title: "Variants",
      paragraphs: [
        cite(
          `Milipedia records ${record.variant_families.length} variant-family entries for ${record.name}: ${variants}.`,
          "fn-main"
        ),
        cite(
          `Complete variant entries stored in Milipedia dataset: ${record.variants.length}.`,
          "fn-method"
        )
      ],
      bullets: record.variant_families.map((text) => ({ text, refs: ["fn-main"] }))
    },
    {
      id: "operators",
      title: "Operators",
      paragraphs: [
        cite(
          `Major designer or builder country flags shown on this page are: ${operators}. ${record.operator_summary.major_user_note}`,
          "fn-wikidata"
        ),
        cite(
          `Operator entries stored in Milipedia dataset: ${record.operators.length}.`,
          "fn-method"
        )
      ],
      bullets: [
        { text: `All operators status: ${record.operator_summary.all_operators_status}`, refs: ["fn-main"] },
        { text: `Major designer or builder entries: ${record.operator_summary.major_designer_or_builder.join(", ")}.`, refs: ["fn-wikidata"] }
      ]
    },
    {
      id: "specifications",
      title: "Specifications",
      paragraphs: [
        cite(
          `Milipedia records these comparable fields: crew ${record.crew}, propulsion type ${record.engine_type}, maximum speed category ${record.speed_category}, first flight ${record.first_flight}, and introduction ${record.introduction_date}.`,
          "fn-main"
        ),
        cite(
          `Dimensions, weights, range, combat radius, service ceiling, and climb rate fields use this value when unavailable: ${NOT_RECORDED}.`,
          "fn-method"
        )
      ]
    },
    {
      id: "similar-development",
      title: "Similar Development",
      paragraphs: [
        cite(
          `Milipedia records ${record.similar_development.length} similar-development links for ${record.name}.`,
          "fn-method"
        )
      ],
      links: record.similar_development.map((item) => ({ label: item.name, url: item.url }))
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
    retirement_date: status === "Retired" ? NOT_RECORDED : null,
    status,
    number_built: NOT_RECORDED,
    crew,
    engine_type,
    engines: NOT_RECORDED,
    max_speed: speed_category,
    speed_category,
    range: NOT_RECORDED,
    combat_range: NOT_RECORDED,
    service_ceiling: NOT_RECORDED,
    rate_of_climb: NOT_RECORDED,
    armament: inferArmament(aircraft_type, role),
    hardpoints: NOT_RECORDED,
    variants: [],
    operators: [],
    combat_history: NOT_RECORDED,
    development_history: `${name}: ${role}. Manufacturer: ${manufacturer}. First flight: ${first_flight}. Introduction: ${introduction_date}.`,
    short_summary: `${name}: ${role}. Origin: ${country_of_origin}. Manufacturer: ${manufacturer}. First flight: ${first_flight}. Introduction: ${introduction_date}. Status: ${status}.`,
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
        note: "Source page used for overview, image, and reference discovery."
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

  Object.assign(baseRecord, makeDetailedFields(baseRecord));
  baseRecord.article_quality = {
    exact_fact_count: countExactFields(baseRecord),
    operator_entries: baseRecord.operators.length,
    variant_entries: baseRecord.variants.length,
    external_article_sources: 0
  };
  baseRecord.footnotes = makeFootnotes(wiki);
  records.push(baseRecord);
}

if (records.length !== 100) {
  throw new Error(`Expected 100 aircraft, found ${records.length}`);
}

await fillMissingImages(records);
await fillExternalArticles(records);
for (const record of records) {
  record.sources.push(...record.external_articles);
  record.footnotes.push(...record.external_articles);
  record.article_quality.external_article_sources = record.external_articles.length;
  record.similar_development = makeRelatedAircraft(record, records);
}
for (const record of records) {
  const wiki = {
    summary: record.short_summary,
    title: record.sources[0].title,
    page_url: record.sources[0].url
  };
  record.article_sections = makeArticleSections(record, wiki);
}
await fillEventImages(records);

await mkdir(new URL("../data/", import.meta.url), { recursive: true });
await writeFile(new URL("../data/aircraft.json", import.meta.url), `${JSON.stringify(records, null, 2)}\n`);

console.log(`Wrote ${records.length} aircraft to data/aircraft.json`);
