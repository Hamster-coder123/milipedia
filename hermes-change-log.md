# Hermes Agent Change Log

## Schedule

* Branch: hermes-agent
* Run frequency: once every hour
* Duration: 2 weeks
* Maximum runs: 336
* Start date: 2026-06-29
* End date: 2026-07-13

### Run 1 — 2026-06-29 18:52:13 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Lockheed SR-71 Blackbird (id: sr-71-blackbird)
* Reason selected: The generated SR-71 page was much sparser than the F-16 reference page, with only three generic footnotes, no real operators or variants, no detailed specifications beyond broad placeholders, and generic armament text that incorrectly implied weapons.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, missing detailed development/design/operators/timeline content, missing official sources, and generic "gun/missile/external stores" wording inappropriate for an unarmed reconnaissance aircraft.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Lead overview with dense fact groups; article-section ordering; concise sourced paragraphs; specifications-first technical phrasing; variants, operators, operational history, notable events, comparison, strengths/limitations, timeline, sources, and related-links coverage; neutral caveats for uncertain or overbroad public claims; internal aircraft link style using aircraft.html?id=...

#### Changes Made

* Expanded the SR-71 entry in data/aircraft.json from a sparse generated page into a fuller Milipedia article data record.
* Corrected top-level facts: manufacturer as Lockheed Skunk Works, role as long-range high-altitude strategic reconnaissance, retirement status, number built, engines, range, ceiling, no-weapons armament, and related aircraft.
* Replaced generic gun/missile armament language with accurate unarmed reconnaissance wording.
* Added official/reference sources from the National Museum of the U.S. Air Force, NASA Dryden, Lockheed Martin, and a supplementary Wikipedia orientation source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Notable Events and Records, Public Perception, Comparison, Strengths and Limitations, Timeline, and Related Pages.
* Added verified technical details for first flight, service entry, retirement, J58 engines, Mach 3+ speed, range, ceiling, dimensions, loaded weight, 1976 speed/altitude records, and NASA research use.
* Added USAF and NASA operator coverage.
* Added Blackbird-family variants and related aircraft: A-12, YF-12A, SR-71A, SR-71B, and SR-71C.
* Added public-perception caveats to avoid overstating "invulnerable" or fighter-like claims.
* Added internal link to the existing Lockheed U-2 page and a database return link.
* Omitted unsupported details about exact mission sensor packages because configurations varied by aircraft, period, and mission.

#### Files Modified

* data/aircraft.json — Expanded the SR-71 Blackbird aircraft page data and sources.
* hermes-change-log.md — Created the cumulative Hermes run log and recorded this run.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changed only the SR-71 entry, and hermes-change-log.md was newly created.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the SR-71 entry section list, footnotes, armament correction, and article quality fields.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraph style, specifications emphasis, comparison, timeline, sources, and related-page patterns within the JSON-rendered article system.
5. Internal link check — Verified aircraft.html?id=u-2-dragon-lady points to an existing aircraft id in data/aircraft.json; external reference URLs retained as source links.
6. Secret/token check — Ran grep over the intended diff for API keys, tokens, passwords, private keys, and credential patterns. Matches for ordinary words such as "secret" in historical prose were reviewed as false positives; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, changed files, SR-71 section coverage, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Lockheed SR-71 Blackbird
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Some SR-71 mission sensor details vary by aircraft, period, and mission, so exact sensor package tables were intentionally omitted.
* The rendered data-driven page is less visually bespoke than the static F-16 template, but it now follows the same article order and density available within data/aircraft.json.

### Run 2 — 2026-06-29 19:03:33 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Boeing P-8 Poseidon (id: p-8-poseidon)
* Reason selected: The generated P-8 page was one of the sparsest unedited aircraft entries, with only generic Wikipedia/Wikidata/method sources, no real operators or variants, missing dimensions/range/ceiling/engine detail, and generic fighter-style armament text.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, generic "gun/air-to-air missiles/external stores" wording, sparse specifications, and short generated sections.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview; article-section ordering from overview through development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related links; short sourced paragraphs; card-style key facts; internal aircraft.html?id=... links; cautious notes where public facts vary by variant, operator, or upgrade increment.

#### Changes Made

* Expanded the P-8 Poseidon entry in data/aircraft.json into a fuller Milipedia article data record while keeping the existing JSON-rendered page structure.
* Corrected top-level facts for manufacturer, role, aircraft type, first flight, U.S. Navy IOC, engines, maximum speed, range/station time, service ceiling, mission stores, and summary text.
* Replaced misleading generic gun/air-to-air missile wording with P-8-specific public mission-store language: Mk 54 torpedoes, Harpoon, sonobuoys, and search-and-rescue stores, with a caution that loadouts vary.
* Added official/manufacturer sources from Boeing and NAVAIR, retained Wikipedia as supplementary orientation only, and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Notable Events and Program Milestones, Comparison, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added verified technical details for CFM56-7BE engines, 27,300 lb thrust per engine, 123.6 ft wingspan, about 129.5-129.6 ft length, 42.1 ft height, 189,200 lb maximum gross takeoff weight, 490-knot maximum speed, 41,000 ft ceiling, and 1,200+ nmi plus 4+ hours on station.
* Added operator/customer coverage for the United States, Australia, United Kingdom, India, Norway, New Zealand, Republic of Korea, Germany, Canada, and Singapore where supported by Boeing/public sources, with delivery-status caveats.
* Added variant coverage for P-8A, P-8I Neptune, and Increment 3 Block 2 upgrade context.
* Added related internal links to Lockheed P-3 Orion and Northrop Grumman RQ-4 Global Hawk, plus the database return link.
* Removed the sparse generated Syrian civil war event gallery from the P-8 entry because it was not useful for this maritime patrol page and could imply conflict-specific certainty not supported by the new official-source framing.
* Omitted exact current fleet totals, detailed mission-system configuration tables, and operator-specific weapons clearances because those facts change by delivery status, upgrade increment, and national configuration.

#### Files Modified

* data/aircraft.json — Expanded only the Boeing P-8 Poseidon aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 2 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the P-8 Poseidon entry, and hermes-change-log.md adds this Run 2 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed P-8 sections, footnotes, article quality fields, event_gallery cleanup, and corrected armament wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specifications emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=p-3-orion and aircraft.html?id=rq-4-global-hawk target existing aircraft ids in data/aircraft.json; external Boeing 737 link is intentionally external.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, P-8 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Boeing P-8 Poseidon
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Boeing and public reference pages use evolving delivery/customer language, so exact current fleet totals and delivery status by operator were intentionally not made into fixed force-count tables.
* Exact P-8 mission-system fits and weapons clearances vary by operator and upgrade increment; the page uses cautious public-source wording instead of unsupported configuration tables.


### Run 3 — 2026-06-29 20:03:36 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Lockheed C-5 Galaxy / C-5M Super Galaxy (id: c-5-galaxy)
* Reason selected: The C-5 entry was a sparse generated transport page with no real operators, no variants, no external article sources, incomplete dimensions/range/engine/cargo data, and generic short sections far below the density of the F-16 reference page.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no C-5M modernization detail, no cargo-compartment table, no basing/operator coverage, no variant explanations, and minimal service history.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification/infobox emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the C-5 Galaxy entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered page structure.
* Updated top-level facts for name, alternative names, manufacturer, role, type, first flight, introduction, active C-5M status, crew, engines, speed, range, heavy-cargo mission profile, armament, development history, combat/service history, variants, operators, and summary text.
* Added official/reference sources from the U.S. Air Force and Lockheed Martin, retained Wikipedia only as supplementary orientation, and kept the Milipedia accuracy-rules source.
* Replaced sparse generated source lists, footnotes, and external_articles with C-5-specific source metadata.
* Added and expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for F-138/CF6-80C2-L1F engines, 51,250 lb thrust per engine, 222 ft 9 in wingspan, 247 ft 10 in length, 65 ft 1 in height, 143 ft 9 in cargo-compartment length, 36 pallet positions, 281,001 lb maximum cargo, 840,000 lb maximum takeoff weight, 518 mph speed, and published C-5M range profiles.
* Added C-5A, C-5B, C-5C Space Cargo Modified, and C-5M Super Galaxy variant coverage.
* Added U.S. Air Force operator coverage, including official basing locations listed in the USAF fact sheet.
* Added operational-history context for the Yom Kippur War airlift, Desert Storm, Operation Allied Force, Iraq/Afghanistan/global contingency logistics, and peacetime rapid global mobility.
* Added comparison context against the existing C-130 Hercules, C-17 Globemaster III, and KC-135 Stratotanker pages.
* Added strengths/limitations and timeline sections to better match F-16-style article density.
* Omitted exact tail-by-tail current fleet accounting, detailed accident history, and variant-specific mission equipment not clearly supported by the official public sources used in this run.

#### Files Modified

* data/aircraft.json — Expanded only the Lockheed C-5 Galaxy / C-5M Super Galaxy aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 3 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the C-5 Galaxy entry, and hermes-change-log.md adds this Run 3 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed C-5 sections, footnotes, external_articles, article quality fields, variants/operators, and unarmed transport wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification-table emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=c-130-hercules, aircraft.html?id=c-17-globemaster-iii, and aircraft.html?id=kc-135-stratotanker target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, C-5 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Lockheed C-5 Galaxy
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Public sources describe C-5A/B/C/M production, conversion, retirement, and basing status in ways that can vary by date; the page uses cautious wording and avoids exact current tail-by-tail fleet accounting.
* Detailed accident history and mission-specific defensive equipment were not expanded in this run because the primary official fact sheet used here focuses on mission, modernization, and specifications rather than those topics.

### Run 4 — 2026-06-29 21:01:30 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Bell Boeing V-22 Osprey (id: v-22-osprey)
* Reason selected: The V-22 entry was the sparsest unedited aircraft record found in the comparison pass, with no real operators, no real variants, no external article sources, incomplete specifications, generic fighter-style armament, and only generated overview/development/design/service sections.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no MV-22/CV-22/CMV-22 distinction, no shipboard/tiltrotor design detail, no payload/range/dimension data, and inaccurate generic gun/missile/external-store wording.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the V-22 Osprey entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, alternative names, manufacturer, role, type, first flight, introduction/service dates, active status, crew, engines, range, combat radius, armament, carrier/shipboard capability, development history, combat/service history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic fighter-style armament with V-22-specific defensive/mission-dependent wording, including the USAF CV-22 ramp-mounted .50-caliber machine gun statement.
* Added official/manufacturer sources from Boeing and the U.S. Air Force, retained Wikipedia as supplementary orientation only, and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for Rolls-Royce AE1107C / Liberty engines, 6,150-plus shaft horsepower per engine, 57.3 ft fuselage length, 84.6 ft rotor-turning width, 18.4 ft stowed width, 38.1 ft rotor diameter, 52,600 lb VTOL gross weight, 60,500 lb CV-22 self-deployment gross weight, 500 nmi CV-22 combat radius, and 10,000 lb / 24-seat / 32-floor-loaded payload figures where source-supported.
* Added variant coverage for MV-22B, CV-22B, CMV-22B, and Japanese MV-22 configurations.
* Added operator coverage for the United States Marine Corps, United States Air Force, United States Navy, and Japan Ground Self-Defense Force.
* Added mission-context coverage for assault support, special operations, carrier logistics, search and rescue, medical evacuation, humanitarian assistance, disaster relief, and shipboard stowage.
* Added comparison context against the existing CH-47 Chinook, C-130 Hercules, UH-60 Black Hawk, and F-35 Lightning II pages.
* Omitted exact all-variant inventory counts, detailed mishap-by-mishap safety analysis, and sensor/countermeasure configuration tables because those facts vary by variant, date, and service and need dedicated dated sources.

#### Files Modified

* data/aircraft.json — Expanded only the Bell Boeing V-22 Osprey aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 4 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the V-22 Osprey entry, and hermes-change-log.md adds this Run 4 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed V-22 sections, footnotes, external_articles, article quality fields, variants/operators, and defensive armament wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=ch-47-chinook, aircraft.html?id=c-130-hercules, aircraft.html?id=uh-60-black-hawk, and aircraft.html?id=f-35-lightning-ii target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, V-22 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Bell Boeing V-22 Osprey
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Boeing and USAF publish some V-22 specification values differently by family versus CV-22 variant, so the page identifies source/variant context rather than forcing a single universal value.
* Exact current inventory totals, readiness status, detailed mishap analysis, and mission-system/countermeasure fits were not expanded in this run because they vary by service, date, and configuration and need dedicated dated sources.

### Run 5 — 2026-06-30 00:03:43 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Boeing C-17 Globemaster III (id: c-17-globemaster-iii)
* Reason selected: The C-17 entry was a sparse unedited transport page with no real operators, no real variants, no external article sources, incomplete specifications, generic generated sections, and missing short-field/payload/operator/service context despite being a major Milipedia aircraft page.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no engine/range/ceiling/dimension/payload detail, no U.S. basing or international operator coverage, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the C-17 Globemaster III entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for alternative names, role, aircraft type, first flight, operational introduction, status, number built/operating caveat, crew, engines, speed, range, service ceiling, payload-oriented armament wording, hardpoints, development history, combat/service history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic sparse transport wording with C-17-specific unarmed airlift language covering troops, cargo, vehicles, pallets, airdrop loads, aeromedical evacuation, rear-ramp loading, and short-field operations.
* Added official/manufacturer/operator sources from the U.S. Air Force, Boeing, and the Royal Australian Air Force; retained Wikipedia only as supplementary orientation and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Configurations, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for F117-PW-100 / PW2040 engines, 40,440 lb thrust per engine, 174 ft length, 169 ft 10 in / 169.8 ft wingspan, 55 ft 1 in height, 88 ft cargo-compartment length, 585,000 lb maximum takeoff weight, 170,900 lb maximum payload, 45,000 ft service ceiling, 450 kt / Mach 0.74 cruise, 2,400 nmi heavy-payload range, 6,200+ nmi no-payload range, and 3,500 ft short-field runway capability.
* Added variant/configuration coverage for C-17A Globemaster III, export C-17A, and block/sustainment-upgraded aircraft.
* Added operator coverage for the United States, United Kingdom, Australia, Canada, India, Qatar, United Arab Emirates, Kuwait, and the multinational Strategic Airlift Capability / Heavy Airlift Wing.
* Added operational-history context for the first production delivery, first operational squadron, Operations Enduring Freedom and Iraqi Freedom, global contingency airlift, airdrop, aeromedical evacuation, humanitarian relief, and disaster response.
* Added comparison context against the existing C-130 Hercules, C-5 Galaxy, Il-76, and KC-135 Stratotanker pages.
* Omitted detailed mishap history, classified/variable defensive systems, exact current base-by-base readiness, and national communications fits because those facts vary by date and configuration or require dedicated dated sources.

#### Files Modified

* data/aircraft.json — Expanded only the Boeing C-17 Globemaster III aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 5 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the C-17 Globemaster III entry, and hermes-change-log.md adds this Run 5 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed C-17 sections, sources, footnotes/external articles, article quality fields, variants/operators, and unarmed transport wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=c-130-hercules, aircraft.html?id=c-5-galaxy, aircraft.html?id=il-76, and aircraft.html?id=kc-135-stratotanker target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, C-17 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Boeing C-17 Globemaster III
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Boeing's current public page reports 275 aircraft operating worldwide, while total production and current fleet counts can be expressed differently by source and date; the page uses cautious wording rather than a fixed current inventory table.
* Defensive systems, exact current readiness/base details, national communications fits, and mishap history were not expanded in this run because they vary by aircraft, operator, date, or require dedicated dated sources.

### Run 6 — 2026-06-30 01:01:43 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Mil Mi-26 Halo (id: mi-26)
* Reason selected: The Mi-26 entry was one of the sparsest unedited aircraft records found in the comparison pass, with no real operators, no complete variants, no external article sources, missing payload/range/engine/ceiling details, and generic generated sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no Mi-26T/T2/T2V modernization detail, no 20-ton payload/ramp/external-lift explanation, no meaningful operator coverage, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the Mi-26 entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, alternative names, NATO reporting name, manufacturer/production lineage, role, type, first flight, introduction, active status, number-built caveat, crew, engines, maximum speed, range, ceiling, unarmed transport role, hardpoints/external sling-load wording, development history, service history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced sparse utility-helicopter wording with Mi-26-specific heavy-lift language covering 20-ton cargo, rear loading doors, internal and external loads, disaster response, medical evacuation, firefighting, fuel transport, and remote logistics.
* Added manufacturer-release/industry/civil-cargo sources from Vertical Magazine/Russian Helicopters, Helicopter Industry, and Air Charter Service; retained Wikipedia only as supplementary orientation and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Modernization, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for two D-136 class turboshaft engines, Mi-26T2/T2V modernization context, approximately 20-ton cargo capability, 56-ton maximum takeoff weight, 183 mph maximum speed, 158 mph cruise speed, 497 mile normal-load range, 1,193 mile ferry range, and 15,092 ft altitude figure where source-supported.
* Added representative variant coverage for Mi-26, Mi-26T, Mi-26T2, Mi-26T2V, Mi-26S, Mi-26MS, and Mi-26TP.
* Added representative operator coverage for Russia, the Soviet Union, India, Algeria, and civil heavy-lift operators with caveats about dated fleet counts.
* Added comparison context against the existing CH-47 Chinook, CH-53 Sea Stallion, Il-76, and An-22 pages.
* Omitted fixed current fleet totals, detailed combat-loss tables, and operator-by-operator active-inventory counts because those facts vary by source/date and need dedicated dated verification.

#### Files Modified

* data/aircraft.json — Expanded only the Mil Mi-26 Halo aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 6 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json, hermes-change-log.md, and a temporary helper script were present; only the intended two files were staged for commit after removing the helper script.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the Mi-26 entry, and hermes-change-log.md adds this Run 6 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed Mi-26 sections, sources, footnotes/external articles, article quality fields, variants/operators, and unarmed heavy-lift wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=ch-47-chinook, aircraft.html?id=ch-53-sea-stallion, aircraft.html?id=il-76, and aircraft.html?id=an-22 target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, Mi-26 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Mil Mi-26 Halo
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Mi-26 active fleet totals, export inventory status, combat loss details, and exact operator-by-operator serviceability vary by date and source, so the page uses representative operator categories and cautious wording rather than fixed current inventory tables.
* Some performance figures are specifically sourced to Mi-26T2 reporting; the page labels them as representative rather than universal to every Mi-26 variant.

### Run 7 — 2026-06-30 02:04:09 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Xi'an Y-20 Kunpeng (id: xian-y-20)
* Reason selected: The Y-20 entry was the sparsest unedited aircraft record found in the comparison pass, with no real operators, no variants, no external article sources, missing payload/range/engine/tanker context, and generic generated sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no Y-20B/YY-20 coverage, no strategic-airlift mission history, sparse specifications, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the Y-20 entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, alternative names, manufacturer/AVIC lineage, role, aircraft type, first flight, service entry, active/in-production status, crew, engine family, speed class, range, ceiling, armament, hardpoints/cargo-ramp wording, development history, service history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic transport placeholders with Y-20-specific heavy strategic airlift language covering personnel, heavy equipment, pallets, relief supplies, rear-ramp loading, air mobility, humanitarian response, and tanker derivatives.
* Added official/reference sources from the PRC Ministry of National Defense / China Military Online and Xinhua, plus Airforce Technology for public technical overview; retained Wikipedia only as supplementary orientation and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Modernization, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for three-person crew, approximately 200-220 tonne maximum takeoff weight range, about 66 tonne payload, high-wing/T-tail/rear-ramp layout, early D-30KP-2-class engines, WS-20-powered Y-20B reporting, and unarmed cargo/tanker mission equipment.
* Added variant coverage for baseline Y-20, Y-20B, YY-20 / Y-20U tanker, and unconfirmed special-mission concepts with cautionary wording.
* Added operator coverage for the People's Liberation Army Air Force and PLA Air Force tanker units while avoiding unsourced export-operator or fixed current-inventory claims.
* Added operational-history context for July 2016 commissioning, COVID-19 medical/supply transport, overseas pandemic-supply flights, Moscow honor-guard transport, Caucasus-2020 exercise transport, Shenzhou-12 logistics, and SCO Peace Mission 2021.
* Added comparison context against the existing C-17 Globemaster III, C-5 Galaxy, Il-76, and An-22 pages.
* Omitted exact current fleet totals, exact unit assignments, firm export claims, and unconfirmed special-mission variants because public data varies by source/date or needs more specific verification.

#### Files Modified

* data/aircraft.json — Expanded only the Xi'an Y-20 Kunpeng aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 7 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the Y-20 entry, and hermes-change-log.md adds this Run 7 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed Y-20 sections, sources, footnotes/external articles, article quality fields, variants/operators, and unarmed transport/tanker wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=c-17-globemaster-iii, aircraft.html?id=c-5-galaxy, aircraft.html?id=il-76, and aircraft.html?id=an-22 target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, Y-20 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Xi'an Y-20 Kunpeng
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Y-20 current fleet totals, exact unit assignments, detailed engine-fit distribution, export status, and special-mission derivative status vary by source/date, so the page uses cautious wording rather than fixed current inventory or variant tables.
* Some public technical values differ between Ministry of National Defense wording and aviation-reference data; the page records approximate ranges and source caveats rather than forcing one exact figure.

### Run 8 — 2026-06-30 03:04:42 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: McDonnell Douglas F-4 Phantom II (id: f-4-phantom-ii)
* Reason selected: The F-4 entry was a sparse unedited aircraft record despite being a major fighter page; it had no real operator entries, no complete variants, no external article sources, missing engine/range/ceiling/hardpoint detail, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, generic armament language, missing J79 technical detail, no Navy/Air Force/Marine Corps/export operator coverage, no real Vietnam/service-history depth, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; short sourced paragraphs; card-style key facts; specification emphasis within the JSON renderer; cautious public-source caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the F-4 Phantom II entry in data/aircraft.json into a fuller Milipedia article data record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for alternative names, manufacturer lineage, role, aircraft type, first flight, service-introduction period, retirement/status caveats, production total, crew, J79 engine family, speed, range, combat-radius caveat, service ceiling, armament, hardpoints, development history, combat/service history, summary, variants, operators, and article-quality counts.
* Replaced generic fighter armament wording with F-4-specific public-source language covering AIM-7 Sparrow, AIM-9 Sidewinder, external stores, early missile-only assumptions, gun pods, and later internal-gun F-4E aircraft.
* Added official/museum/reference sources from the Naval History and Heritage Command / National Naval Aviation Museum, Hill Aerospace Museum, and the National Museum of the U.S. Air Force; retained Wikipedia only as supplementary orientation and kept the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for two General Electric J79 afterburning turbojets, representative F-4N and F-4C engine thrust, 38 ft 4 7/8 in wingspan, about 58 ft 3 in length, 16 ft 3 in height, 1,433-1,485 mph maximum-speed figures, 2,000-2,300 mile range figures, 56,100-62,000 ft ceiling figures, and up to about 16,000-18,000 lb external stores depending on source/variant.
* Added variant coverage for early F-4A/F4H, F-4B/F-4N, F-4C/F-4D, F-4E, RF-4C/RF-4E, British Spey-powered Phantoms, and QF-4 target drones.
* Added operator coverage for the United States, United Kingdom, Germany, Japan, Israel, Iran, and representative other export users with caution that current fleet counts and statuses are date-sensitive.
* Added operational-history context for Vietnam War air-superiority/strike/reconnaissance use, Cold War air defense, later export service, QF-4 target-drone use, and the design lessons that influenced later F-14/F-15/F-16/F/A-18-era fighters.
* Added comparison context against the existing F-16 Fighting Falcon, F-15 Eagle, F-14 Tomcat, and F-8 Crusader pages.
* Omitted exact current export-fleet totals, detailed combat-loss tables, all national modernization blocks, and fixed radar/electronic-warfare fits because those facts vary by date, operator, and variant and need dedicated dated sources.

#### Files Modified

* data/aircraft.json — Expanded only the McDonnell Douglas F-4 Phantom II aircraft page data and sources.
* hermes-change-log.md — Appended the cumulative Run 8 log entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed diff/stat; data/aircraft.json changes are limited to the F-4 Phantom II entry, and hermes-change-log.md adds this Run 8 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed F-4 sections, sources, footnotes/external articles, article quality fields, variants/operators, and F-4-specific armament wording.
4. F-16 style comparison — Inspected data/f16-template.html and copied its dense lead, section order, sourced paragraphs, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-page patterns within the JSON article system.
5. Internal link check — Verified aircraft.html?id=f-16-fighting-falcon, aircraft.html?id=f-15-eagle, aircraft.html?id=f-14-tomcat, and aircraft.html?id=f-8-crusader target existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were added.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, diff check, intended files only, F-4 was not previously edited by Hermes, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand McDonnell Douglas F-4 Phantom II
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* The National Museum of the U.S. Air Force F-4C page was retained as an official source, but automated extraction returned mostly navigation text in this run; detailed technical figures were therefore based primarily on the Naval Aviation Museum and Hill Aerospace Museum pages.
* F-4 variant/operator details are unusually broad; exact current export inventory, national modernization blocks, radar fits, weapons clearances, and combat-loss tables were intentionally omitted or described cautiously.

### Run 9 — 2026-06-30 04:03:38 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Grumman A-6 Intruder (id: a-6-intruder)
* Reason selected: The A-6 entry was a generated, relatively sparse aircraft page compared with the F-16 reference, with no variant records, no operator records, only generic Wikipedia/Wikidata/method sources, broad placeholder specifications, and generic gun/air-to-air missile/external-store wording inappropriate for the Intruder's actual attack-aircraft role.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, missing detailed development/design/avionics/operators/timeline content, missing official or museum sources, and incomplete dimensions, engine, range, ceiling, armament, and service-history details.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and quick-fact style; section order from overview through development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related links; concise technical prose; cautious source-qualified specifications; internal aircraft.html?id=... related-link style; neutral wording for variant-, loadout-, and mission-dependent facts.

#### Changes Made

* Expanded the Grumman A-6 Intruder entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered page system.
* Corrected top-level facts for manufacturer, role, first flight, service introduction, U.S. Navy/Marine Corps retirement timing, production total, crew arrangement, J52 engines, speed, range, service ceiling, hardpoints, and mission-specific armament.
* Replaced generic fighter-style armament wording with A-6-specific attack stores language and an explicit note that the Intruder was not a fighter and had no internal gun.
* Added reliable museum/naval-aviation sources from the National Naval Aviation Museum, USS Midway Museum, The Museum of Flight, and Valiant Air Command, while retaining Wikipedia only as supplementary orientation.
* Added structured variant records for A-6A, A-6B, A-6C, KA-6D, A-6E, A-6F, and the related EA-6B Prowler derivative.
* Added U.S. Navy and U.S. Marine Corps operator records and clarified that foreign A-6 attack-variant operators are not normally listed.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Strengths and Limitations, Comparison, Timeline, and Sources and Notes.
* Added verified technical details for the DIANE navigation/attack system, A-6E TRAM upgrades, side-by-side crew concept, carrier suitability, five external stations, 18,000 lb public stores capacity, 54 ft 9 in length, 53 ft wingspan, 16 ft 2 in height, 560-knot sea-level speed, and 42,400 ft service ceiling.
* Added combat/use context for Vietnam, Lebanon/Libya-era crisis operations, Operation Praying Mantis, Operation Desert Storm, and Bosnia-related operations with cautious wording.
* Added internal comparison links to A-4 Skyhawk, A-7 Corsair II, F-14 Tomcat, F/A-18 Hornet, and F/A-18E/F Super Hornet.
* Removed the generated event gallery from the A-6 entry because it was not useful or source-specific for the improved article.
* Omitted exact squadron-by-squadron service tables, detailed nuclear configurations, and single definitive range/loadout figures because public sources vary by variant, mission profile, and stores configuration.

#### Files Modified

* data/aircraft.json — Expanded only the Grumman A-6 Intruder aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 9.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the A-6 Intruder entry, and hermes-change-log.md gained this cumulative run entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the A-6 entry section list, sources, variants, operators, armament correction, and article-quality fields.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for A-4 Skyhawk, A-7 Corsair II, F-14 Tomcat, F/A-18 Hornet, and F/A-18E/F Super Hornet point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Grumman A-6 Intruder
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Public A-6 range and payload figures vary by source, loadout, profile, and whether a source is describing ferry range or combat radius, so the page uses cautious ranges and notes rather than a single universal figure.
* Detailed squadron histories, exact mission loadouts, and nuclear-delivery configurations were intentionally omitted for safe scope and source-certainty reasons.

### Run 10 — 2026-06-30 05:03:33 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Kamov Ka-52 Alligator (id: ka-52)
* Reason selected: The Ka-52 entry was the sparsest unedited aircraft page found in the comparison pass, with no real operators, no real variants, no external article sources, incomplete specifications, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no Ka-52M/Ka-52K coverage, no detailed avionics/weapons/sensor discussion, no meaningful operator notes, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview lead; article-section order covering overview, development, design, specifications, variants/operators, operational history, weapons systems, comparison, strengths/limitations, timeline, sources, and related pages; concise technical prose; specification-card emphasis within the JSON renderer; cautious variant-specific caveats; internal aircraft.html?id=... related-link style.

#### Changes Made

* Expanded the Kamov Ka-52 entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, alternative names, NATO reporting name, manufacturer/production lineage, role, type, first flight, introduction, active/modernization status, contract/production caveat, crew, engines, speed, range, ceiling, climb rate, hardpoints, combat history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic cannon/rocket/missile wording with Ka-52-specific armament language covering the 2A42 30 mm cannon, Vikhr/Ataka ATGMs, S-8/S-13 rockets, Igla-V missiles, Product 305E context, and Ka-52K maritime weapons caveats.
* Added reference sources from Airforce Technology, Army Recognition, Naval Technology, and a supplementary Wikipedia orientation source, while keeping the Milipedia accuracy-rules source.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Modernization, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added verified public technical details for side-by-side two-person crew, coaxial rotor layout, K-37-800M ejection-seat system, 14.5 m rotor diameter, approximately 4.9 m height, 10,400-10,800 kg maximum takeoff weight depending source, VK-2500 / TV3-117-family engine caveat, 300 km/h maximum speed, 260 km/h cruise speed, 460 km practical range, about 1,100-1,110 km ferry range, 5,500 m operational ceiling, and about 16 m/s climb rate.
* Added variant coverage for Ka-52 Alligator, Ka-52M, Ka-52K Katran, and Ka-50 Black Shark lineage context.
* Added representative operator/customer coverage for Russia and source-caveated Egypt/Ka-52K context without fixed current inventory totals.
* Added comparison and related internal links to AH-64 Apache, AH-1 Cobra, Mil Mi-24, Sukhoi Su-25, and UH-60 Black Hawk where applicable.
* Omitted exact current fleet totals, precise Ka-52M block equipment, confirmed export delivery counts, tail-by-tail losses, and combat-effectiveness claims because those facts are date-sensitive, disputed, or require narrower sources.

#### Files Modified

* data/aircraft.json — Expanded only the Kamov Ka-52 Alligator aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 10.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the Ka-52 entry, and hermes-change-log.md gained this cumulative Run 10 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the Ka-52 entry section list, sources, variants, operators, armament wording, and article-quality fields.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for AH-64 Apache, AH-1 Cobra, Mil Mi-24, Sukhoi Su-25, and UH-60 Black Hawk point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Kamov Ka-52 Alligator
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Public Ka-52 specifications differ slightly by source and by baseline, Ka-52M, or Ka-52K configuration, so the page labels source-dependent ranges rather than forcing one universal figure.
* Current fleet totals, exact Ka-52M equipment fits, export delivery status, combat loss counts, and effectiveness claims were intentionally omitted or caveated because they are date-sensitive or disputed.

### Run 11 — 2026-06-30 06:01:51 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Yakovlev Yak-130 Mitten (id: yak-130)
* Reason selected: The Yak-130 entry was the sparsest unedited aircraft page in the comparison pass, with no real operator records, no real variants, only one generic external source, missing engine/range/ceiling/dimension/stores details, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 1 generic external article source, engines/range/ceiling/hardpoints not listed, no Yak/AEM-130 or Yak-130M context, no operator notes, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and quick-fact style; section order covering overview, development, design, specifications, variants/operators, operational history, weapons systems, comparison, strengths/limitations, timeline, sources, and related pages; concise source-qualified technical prose; card-style fact emphasis within the JSON renderer; internal aircraft.html?id=... related-link style; cautious notes for variant-, operator-, and loadout-dependent facts.

#### Changes Made

* Expanded the Yakovlev Yak-130 entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, NATO reporting name, alternative names, manufacturer/production lineage, role, aircraft type, first-flight chronology, service introduction, active/export status, crew, engine family, speed, range, combat radius, service ceiling, climb rate, hardpoints, development history, operational role, short summary, variants, operators, related aircraft, and article-quality counts.
* Replaced sparse "not listed" propulsion, range, ceiling, and stores fields with representative public data for two AI-222-25 turbofans, about 1,060 km/h maximum speed, 1,600 km internal-fuel range, 2,100-2,300 km ferry range, about 555 km combat radius, 12,500 m ceiling, and about 3,000 kg stores capacity.
* Added reference sources from Rosoboronexport for Yak-130/Yak-130M context, WeaponSystems.net for representative specifications and armament, and Wikipedia only as supplementary orientation for chronology/operator discovery.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Related Development, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added variant/context coverage for Yak/AEM-130 / Yak-130D, baseline Yak-130, export aircraft, Yak-130M, and the Aermacchi M-346 related-development split.
* Added representative operator coverage for Russia, Algeria, Belarus, Myanmar, and other reported export users/customers with date-sensitive fleet-count caveats.
* Added training/light-combat role discussion, including programmable modern cockpit training, fighter lead-in use, external stores, gun pod, R-73-class missiles, rockets, bombs, guided bombs, and external tanks.
* Added internal related/comparison links to T-38 Talon, BAE Hawk, MB-339, Su-25, and Su-57.
* Omitted exact current fleet totals, detailed accident/loss tables, and operator-specific weapons clearances because those facts are date-sensitive or require narrower dated sources.

#### Files Modified

* data/aircraft.json — Expanded only the Yakovlev Yak-130 Mitten aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 11.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the Yak-130 entry, and hermes-change-log.md gained this cumulative Run 11 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the Yak-130 entry section list, sources, variants, operators, armament wording, and article-quality fields.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for T-38 Talon, BAE Hawk, MB-339, Su-25, and Su-57 point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Yakovlev Yak-130 Mitten
* Commit hash: Pending until commit is created; final hash is reported in the scheduled-run response.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Public Yak-130 inventory totals, operator status, loss claims, and exact export weapons clearances are date-sensitive; the page uses representative operator entries and cautious wording rather than fixed fleet tables.
* Rosoboronexport pages were useful as official current product references, but automated extraction returned mostly navigation text in this run; representative technical figures were therefore based primarily on WeaponSystems.net and treated as source-dependent.

### Run 12 — 2026-06-30 07:03:23 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Chengdu J-7 / F-7 Airguard (id: chengdu-j-7)
* Reason selected: The Chengdu J-7 entry was the sparsest unedited aircraft page in the comparison pass, with no real operator records, no real variants, no external article sources, missing engine/range/ceiling/dimension/hardpoint data, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, generic armament wording, no MiG-21 derivation detail beyond a simple summary, no export-family/operator coverage, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and quick-fact style; section order covering overview, development, design, specifications, variants/operators, operational history, weapons systems, comparison, strengths/limitations, timeline, sources, and related pages; concise source-qualified technical prose; card-style fact emphasis within the JSON renderer; internal aircraft.html?id=... related-link style; cautious notes for variant-, operator-, and loadout-dependent facts.

#### Changes Made

* Expanded the Chengdu J-7 / F-7 Airguard entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for name, alternative names, NATO reporting name, manufacturer/production lineage, role, aircraft type, first-flight chronology, introduction, China/export retirement-status caveats, production scale, crew, engine family, speed, range, combat range, service ceiling, climb rate, hardpoints, armament, development history, operational role, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic fighter armament wording with J-7/F-7-specific language covering 30 mm cannon, short-range air-to-air missiles, rocket pods, unguided bombs, external stores, and variant/operator caveats.
* Added Air Force Technology as the primary technical/program source for representative specifications, armament, development, variants, operators, and production-scale data; retained Wikipedia only as supplementary orientation for chronology, MiG-21 derivation, NATO reporting name, and operator discovery.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added representative public technical details for one WP-7 / Liyang Wopen-13F-family turbojet, 44.1 kN dry thrust / 65.17 kN afterburning thrust source context, 14.88 m length, 8.32 m wingspan, 4.10 m height, 9,100 kg maximum takeoff weight, 2,120 km/h maximum speed, 850 km combat range, 2,000 km ferry range, 17,800 m service ceiling, 155 m/s climb rate, and five hardpoints.
* Added variant/context coverage for early J-7/J-7I, J-7II/J-7B, F-7M Airguard, F-7P/F-7PG Skybolt, F-7BG/F-7BGI, FT-7 trainer, and J-7E/J-7G families.
* Added representative operator coverage for China, Pakistan, Bangladesh, North Korea, Iran, and grouped export operators including Myanmar, Sri Lanka, Sudan, Zimbabwe, Tanzania, Nigeria, Namibia, Egypt, and others with date-sensitive inventory caveats.
* Added internal related/comparison links to MiG-21, Chengdu J-10, JF-17 Thunder, Shenyang J-11, and Northrop F-5.
* Omitted exact current fleet totals, national retirement dates, detailed accident/loss tables, and operator-specific radar/weapons clearances because those facts vary by date, subvariant, source, and national configuration.

#### Files Modified

* data/aircraft.json — Expanded only the Chengdu J-7 / F-7 Airguard aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 12.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the Chengdu J-7 entry, and hermes-change-log.md gained this cumulative Run 12 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the J-7 entry section list, sources, variants, operators, armament wording, article-quality fields, and source caveats.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/weapons/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for MiG-21, Chengdu J-10, JF-17 Thunder, Shenyang J-11, and Northrop F-5 point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Chengdu J-7 / F-7 Airguard
* Commit hash: Pending until commit is created; final hash is reported in the scheduled-run response.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Public J-7/F-7 inventory status, exact national retirement dates, radar fits, and weapons clearances are date-sensitive and vary by subvariant/operator, so the page uses representative operator entries and cautious wording rather than fixed current fleet tables.
* Air Force Technology was the main detailed technical source available in this run; Wikipedia was retained only as supplementary orientation and not used alone for precise technical claims.

### Run 13 — 2026-06-30 08:01:52 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Fairchild Republic A-10 Thunderbolt II (id: a-10-thunderbolt-ii)
* Reason selected: The A-10 entry was one of the sparsest unedited aircraft pages in the comparison pass, with no real operator records, no real variants, no external article sources, missing engine/range/ceiling/dimension/hardpoint data, generic armament wording, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no A-10C modernization detail, no GAU-8/survivability/austere-operations coverage, sparse specifications, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and quick-fact style; section order covering overview, development, design, specifications, variants/operators, operational history, weapons systems, comparison, strengths/limitations, timeline, sources, and related pages; concise source-qualified technical prose; card-style fact emphasis within the JSON renderer; internal aircraft.html?id=... related-link style; cautious notes for variant-, inventory-, and software-dependent facts.

#### Changes Made

* Expanded the Fairchild Republic A-10 Thunderbolt II entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for alternative names, role, first-flight chronology, introduction, active/divestment status, production/inventory caveats, crew, TF34 engines, speed, range, service ceiling, hardpoints, armament, development history, combat history, short summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic fighter-style armament wording with A-10-specific language covering the GAU-8/A 30 mm seven-barrel gun, eleven pylons, 16,000 lb stores capacity, AGM-65 Mavericks, guided/unguided bombs, rockets, pods, countermeasures, and AIM-9 self-defense missiles.
* Added official/reference sources from the U.S. Air Force and the National Museum of the U.S. Air Force, plus Air & Space Forces Magazine for A-10C modernization/current-force context; retained Wikipedia only as supplementary orientation.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Modernization, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public technical details for two General Electric TF34-GE-100 turbofans, 9,065 lb thrust per engine, 53 ft 4 in length, 57 ft 6 in wingspan, 14 ft 8 in height, 51,000 lb maximum takeoff weight, 420 mph / Mach 0.56 speed, 800 mile range, 45,000 ft ceiling, and eleven external stations.
* Added variant/context coverage for YA-10A, A-10A, OA-10A, and A-10C Precision Engagement aircraft.
* Added representative operator coverage for the U.S. Air Force active component, Air National Guard, and Air Force Reserve Command with date-sensitive inventory/unit caveats.
* Added operational-history context for Operation Desert Storm, Operation Noble Anvil, Afghanistan, Iraq, later CENTCOM deployments, and the Paul Johnson Desert Storm rescue-support aircraft preserved by the National Museum.
* Added internal related/comparison links to Su-25, SEPECAT Jaguar, A-7 Corsair II, F-16 Fighting Falcon, and F-35 Lightning II.
* Removed the generated event gallery from the A-10 entry because it was not source-specific and duplicated broad conflict labels rather than adding useful article content.
* Omitted fixed current fleet totals, unit-by-unit basing, definitive retirement dates, and exhaustive weapons-clearance tables because those facts are date-sensitive and vary by budget year, software suite, unit, and source.

#### Files Modified

* data/aircraft.json — Expanded only the Fairchild Republic A-10 Thunderbolt II aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 13.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the A-10 Thunderbolt II entry, and hermes-change-log.md gained this cumulative Run 13 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the A-10 entry section list, sources, variants, operators, armament wording, article-quality fields, and source caveats.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/weapons/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for Su-25, SEPECAT Jaguar, A-7 Corsair II, F-16 Fighting Falcon, and F-35 Lightning II point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Fairchild Republic A-10 Thunderbolt II
* Commit hash: Pending until commit is created; final hash is reported in the scheduled-run response.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* A-10 current inventory totals, exact unit locations, retirement plans, and software/weapons clearances are date-sensitive, so the page uses cautious wording rather than fixed current fleet or clearance tables.
* Public maximum-speed figures differ by source/measurement context; the page records the official USAF 420 mph value and notes that other references list higher contextual figures.

### Run 14 — 2026-06-30 09:04:18 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Dassault Mirage III (id: mirage-iii)
* Reason selected: The Mirage III entry was one of the sparsest unedited aircraft pages in the comparison pass, with no real operator records, no real variant records, no external article sources, missing engine/range/ceiling/dimension/hardpoint data, generic armament wording, and generated placeholder sections far below the F-16 reference density.
* Previous condition: Placeholder-like generated entry with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no Mirage IIIC/IIIE/IIIR breakdown, no French/export operator context, no combat-history depth, and only generic overview/development/design/service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and quick-fact style; section order covering overview, development, design, specifications, variants/operators, operational history, weapons systems, comparison, strengths/limitations, timeline, sources, and related pages; concise source-qualified technical prose; card-style fact emphasis within the JSON renderer; internal aircraft.html?id=... related-link style; cautious notes for variant-, operator-, and loadout-dependent facts.

#### Changes Made

* Expanded the Dassault Mirage III entry in data/aircraft.json into a fuller Milipedia article record while preserving the existing JSON-rendered aircraft-page structure.
* Updated top-level facts for alternative names, role, first-flight chronology, introduction, French retirement/export status, production totals, crew, SNECMA Atar engine family, Mach 2 speed class, ceiling, armament, hardpoints, development history, combat history, summary, variants, operators, related aircraft, and article-quality counts.
* Replaced generic fighter armament wording with Mirage III-specific family-level language covering DEFA 30 mm cannon, short-range air-to-air missiles, bombs, rockets, tanks, reconnaissance stores, and variant/operator caveats.
* Added official/manufacturer and operator sources from Dassault Aviation and the Royal Australian Air Force, plus Wikipedia only as supplementary orientation for broad operator/combat discovery.
* Added/expanded sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Derivatives, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public source-supported details for Mirage III 001 first flight, Mirage IIIA Mach 2 milestone, Mirage IIIC first production-standard flight and French operational service, French delivery totals, 1,401 Mirage III/5/50 family aircraft in 90 versions, 21-country service, and approximate 3 million family flying hours.
* Added representative specification anchors from Dassault for the Mirage IIIA: 8.22 m span, 14.20 m length, 5,340 kg unladen weight, Mach 2 level-flight performance, and 16,500 m / 54,100 ft practical ceiling, while cautioning that operational specifications vary by subvariant.
* Added variant coverage for Mirage III 001 / IIIA, IIIB/IIID, IIIC, IIIE, IIIR/IIIRD, Mirage 5/50, and later III NG / EX development efforts.
* Added representative operator coverage for France, Israel, Australia, South Africa, Pakistan, Argentina, and grouped export users with date-sensitive status caveats.
* Added internal related/comparison links to Mirage F1, Mirage 2000, IAI Kfir, F-104 Starfighter, and MiG-21.
* Omitted fixed current fleet totals, exact national retirement dates, detailed victory/loss tables, and universal weapons/range figures because those facts vary by date, variant, operator, and modernization program.

#### Files Modified

* data/aircraft.json — Expanded only the Dassault Mirage III aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative record for Run 14.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were intended modified files.
2. git diff — Reviewed the diff; data/aircraft.json changed only the Mirage III entry, and hermes-change-log.md gained this cumulative Run 14 entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the Mirage III entry section list, sources, variants, operators, armament wording, article-quality fields, and source caveats.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, development/design/specifications/variants/operators/operational-history/weapons/comparison/timeline/source ordering within the JSON article renderer.
5. Internal link check — Verified internal aircraft.html?id= links for Mirage F1, Mirage 2000, IAI Kfir, F-104 Starfighter, and MiG-21 point to existing aircraft IDs.
6. Secret/token check — Ran a credential-pattern scan over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credentials; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, exactly one aircraft entry changed, internal links valid, git diff --check clean, and no main-branch edits.

#### Commit

* Commit message: Hermes hourly update: expand Dassault Mirage III
* Commit hash: Pending until commit is created; final hash is reported in the scheduled-run response.

#### Issues or Uncertainties

* Commit hash cannot be embedded in the committed change log without changing the commit hash again; the final hash is reported in the scheduled-run response.
* Mirage III specifications and weapons vary substantially by Mirage IIIC, IIIE, IIIR, Mirage 5/50, export subvariant, and national modernization program, so the page uses source-labeled representative figures and cautious wording rather than one universal table.
* The official RAAF PDF was identified as a useful operator source, but automated extraction failed in this run; Australian-specific details were therefore kept high-level pending future human/source review.

### Run 15 — 2026-06-30 10:03:01 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Northrop T-38 Talon (id: t-38-talon)
* Reason selected: The T-38 entry was one of the shortest unedited aircraft records compared with the F-16 reference, with no complete operator or variant entries, sparse placeholder specifications, generic training/fighter wording, and only one external article source counted in article_quality.
* Previous condition: Generated-style page with 15 exact fact fields, 0 operator entries, 0 variant entries, missing detailed development/design/specification/operator/operational-history coverage, and generic article sections that did not explain the Talon's trainer, test-support, NASA, Thunderbirds, or sustainment context.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview, technical fact cards, section order from overview through development/design/specifications/variants/operators/operational history/comparison/timeline/sources/related pages, concise sourced paragraphs, cautious notes around variant-specific details, and internal aircraft.html?id=... related-page links.

#### Changes Made

* Expanded the T-38 Talon record in data/aircraft.json from a sparse generated entry into a fuller Milipedia article-style aircraft page.
* Corrected top-level facts for manufacturer, role, first flight, introduction, crew, engines, maximum speed, range, service ceiling, number built, combat-history framing, and unarmed/training-store armament.
* Added official and museum sources from the U.S. Air Force and Hill Aerospace Museum, while retaining Wikipedia only as supplementary orientation and Milipedia rules for cautious wording.
* Added detailed sections for Overview, Development History and Upgrades, Design and Capabilities, Specifications, Variants, Operators and Training Roles, Operational History and Notable Use, Strengths and Limitations, Comparison, Timeline, Sources and Notes, and Related Pages.
* Added T-38-specific technical details including two General Electric J85-GE-5 afterburning turbojets, 812 mph/Mach 1.08 at sea level, above-55,000-ft ceiling, 1,093-mile range, 46 ft 4 in length, 25 ft 3 in wingspan, and 12,093 lb maximum takeoff weight.
* Added variant coverage for T-38A, AT-38B, and T-38C, including the Avionics Upgrade Program and practice-bomb-training caveat.
* Added operator/role coverage for Air Education and Training Command, USAF Test Pilot School/Air Force Materiel Command, NASA, U.S. Navy historical/training context, and Euro-NATO training use.
* Added operational-history context for undergraduate pilot training, pilot-instructor training, test support, NASA astronaut/chase use, and Thunderbirds use beginning in 1974.
* Added comparison and related-page links to Northrop F-5, F-16, F-15, F-22, and A-10 pages.
* Omitted the 2014 USAF inventory as a current top-level fact because it may not represent the present fleet.

#### Files Modified

* data/aircraft.json — Expanded the Northrop T-38 Talon page data, sources, sections, specifications, variants, operators, and internal links.
* hermes-change-log.md — Appended the cumulative Run 15 entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed diff/stat; data/aircraft.json changed the T-38 Talon entry and hermes-change-log.md appended this run entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the T-38 entry section list, sources, variant/operator counts, unarmed armament wording, and summary.
4. F-16 style comparison — Inspected data/f16-template.html and followed its dense overview, technical card/specification emphasis, section ordering, neutral tone, source formatting, and related-page linking style within the JSON-rendered article system.
5. Internal link check — Verified aircraft.html?id=f-5-freedom-fighter-tiger-ii, f-16-fighting-falcon, f-15-eagle, f-22-raptor, and a-10-thunderbolt-ii point to existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific grep over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credential names; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, selected page not previously edited by Hermes, no main-branch edits, and diff reviewed before commit.

#### Commit

* Commit message: Hermes hourly update: expand Northrop T-38 Talon
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* The U.S. Air Force fact sheet's inventory value is marked current as of January 2014, so it was not used as a present-day fleet total.
* Wikipedia was used only as a supplementary orientation source for production/relationship context; official USAF and Hill Aerospace Museum sources were preferred for article substance.
* The committed change log cannot contain the final commit hash without changing that hash; the final scheduled-run response reports it separately.

### Run 16 — 2026-06-30 11:03:51 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Sukhoi Su-35 (id: su-35)
* Reason selected: The Su-35 entry was the sparsest unedited aircraft page by comparison against the F-16 reference, with no operator entries, no variant entries, no external article sources counted, placeholder-style specifications, and generic generated sections despite the aircraft's complex Su-27M/Su-35S development history.
* Previous condition: Generated-style page with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no detailed specifications, generic armament wording, no meaningful development/design/variants/operators/weapons coverage, and only broad Russo-Ukrainian War service text.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview, technical fact cards, section order from overview through development/design/specifications/variants/operators/operational history/comparison/strengths/timeline/sources/related pages, concise sourced paragraphs, cautious notes around variant-specific details, source/reference IDs, and aircraft.html?id=... internal related-page links.

#### Changes Made

* Expanded the Sukhoi Su-35 record in data/aircraft.json from a sparse generated entry into a fuller Milipedia article-style aircraft page.
* Corrected and expanded top-level facts for alternative names, NATO reporting name, Soviet/Russian origin, manufacturer, role, first-flight dates, introduction date, number-built caveat, engines, maximum speed, range, service ceiling, armament, hardpoints, development history, operator summary, engine details, and armament details.
* Added Rosoboronexport, Mitchell Institute, Wikipedia supplementary orientation, and Milipedia method sources, with Rosoboronexport retained as an official product-listing source and Mitchell Institute used for compact public technical data.
* Added external article links for Rosoboronexport and Mitchell Institute.
* Added detailed sections for Overview, Development History, Design and Capabilities, Specifications, Variants, Operators, Operational History, Weapons Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added Su-35-specific technical details including AL-41F-1S thrust-vectoring engines, Irbis-E radar caveat, 71.9 ft length, 48.2 ft wingspan, 19.4 ft height, 37,479 lb empty weight, 76,059 lb maximum takeoff weight, 1,290 kt maximum speed, 850-2,430 nmi range caveat, and 59,060 ft ceiling.
* Added variant coverage for Su-27M / original Su-35, Su-37, Su-35UB, Su-35S, and export Su-35 configurations.
* Added operator coverage for Russian Aerospace Forces, People's Liberation Army Air Force, and Algerian Air Force, with date-sensitive inventory and delivery caveats.
* Added weapons-system coverage for GSh-301 cannon, RVV/R-27/R-37-class air-to-air missiles, Kh-31/Kh-35/Kh-38/Kh-59-class air-to-surface missiles, KAB/AB-series bombs, and S-8/S-13/S-25 rockets as representative public examples.
* Added operational-history context for Russian service, Chinese export service, and broad Russo-Ukrainian War use while avoiding unsupported loss, kill, inventory, and radar-performance claims.
* Added comparison and related-page links to Su-27, Su-30, Su-34, Su-57, MiG-29, Shenyang J-11, F-15, and F-16 pages.
* Omitted or caveated exact current Russian inventory, detailed combat loss counts, radar detection guarantees, kill claims, and unconfirmed customer negotiations.

#### Files Modified

* data/aircraft.json — Expanded the Sukhoi Su-35 page data, sources, sections, specifications, variants, operators, weapons coverage, caveats, and internal links.
* hermes-change-log.md — Appended the cumulative Run 16 entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed diff/stat; data/aircraft.json changed the Su-35 entry and hermes-change-log.md appended this run entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the Su-35 entry section list, sources, variant/operator counts, top-level fields, caveats, and summary.
4. F-16 style comparison — Inspected data/f16-template.html and followed its dense overview, technical card/specification emphasis, section ordering, neutral tone, source formatting, and related-page linking style within the JSON-rendered article system.
5. Internal link check — Verified aircraft.html?id=su-27, su-30, su-34, su-57, mig-29, shenyang-j-11, f-15-eagle, and f-16-fighting-falcon point to existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific grep over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credential names; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, selected page not previously edited by Hermes, no main-branch edits, and diff reviewed before commit.

#### Commit

* Commit message: Hermes hourly update: expand Sukhoi Su-35
* Commit hash: Pending until commit is created; final hash is reported in the scheduled-run response.

#### Issues or Uncertainties

* Rosoboronexport's official Su-35 page was reachable but navigation-heavy in automated extraction, so detailed specifications were cross-checked with Mitchell Institute public technical data and Wikipedia was retained only as supplementary orientation.
* Russian aircraft inventory, wartime loss/kill claims, radar detection figures, and some export/customer reports are date-sensitive or contested; the page uses cautious wording and omits unsupported fixed claims.
* The committed change log cannot contain the final commit hash without changing that hash; the final scheduled-run response reports it separately.

### Run 17 — 2026-06-30 12:01:59 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Lockheed U-2 Dragon Lady (id: u-2-dragon-lady)
* Reason selected: The U-2 entry was the sparsest unedited aircraft page in the comparison pass, with placeholder generated text, no real operator entries, no real variant entries, missing specifications, generic weapons wording for an unarmed reconnaissance aircraft, and far less development/design/mission-system/operational-history density than the F-16 reference.
* Previous condition: Generated-style page with 15 exact fact fields, 0 operator entries, 0 variant entries, two low-detail external links, no U-2S/TU-2S specifications, no F118 engine or sensor coverage, no Cold War/Cuban Missile Crisis context, and no careful caveats for fleet size, retirement timing, or classified payloads.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview, technical fact cards, section order from overview through development/design/specifications/variants/operators/operational history/mission systems/comparison/strengths/timeline/sources/related pages, concise source-qualified paragraphs, cautious notes around variant-specific and date-sensitive details, and aircraft.html?id=... internal related-page links.

#### Changes Made

* Expanded the Lockheed U-2 record in data/aircraft.json from a sparse generated entry into a fuller Milipedia article-style aircraft page.
* Corrected top-level facts for name, alternative names, Skunk Works manufacturer context, ISR role, first-flight/introduction chronology, status caveat, crew, F118-101 engine, speed, range, service ceiling, unarmed payload-centered armament, operators, variants, development history, combat/operational history, and summary.
* Replaced generic fighter-style armament text with U-2-specific unarmed reconnaissance wording covering sensor, camera, radar, signals-intelligence, and communications payloads.
* Added official and reliable sources from the U.S. Air Force, Lockheed Martin, Air and Space Forces Magazine, and the National Museum of the U.S. Air Force, retaining Wikipedia only as supplementary orientation.
* Added/expanded sections for Overview, Development History and Modernization, Design and Capabilities, Specifications, Variants and Related Models, Operators, Operational History and Notable Use, Sensors/Avionics/Mission Systems, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added public U-2S/TU-2S specifications including one GE F118-101 engine, 17,000 lb thrust, 105 ft wingspan, 63 ft length, 16 ft height, 16,000 lb empty weight, 40,000 lb maximum takeoff weight, 2,950 gal fuel capacity, 5,000 lb payload, 410 mph speed, more than 7,000 mile range, and above-70,000-ft ceiling.
* Added variant coverage for U-2A/C, U-2R, TR-1A, U-2S, TU-2S, and NASA ER-2.
* Added operator/context coverage for the U.S. Air Force, historical CIA use, and NASA ER-2 research aircraft, with date-sensitive inventory caveats.
* Added operational-history context for early Soviet reconnaissance, the 1960 Francis Gary Powers shootdown, Cuban Missile Crisis imagery, Korea, Balkans, Afghanistan, Iraq, and peacetime disaster/search-and-rescue support.
* Added internal related/comparison links to SR-71 Blackbird, RQ-4 Global Hawk, P-3 Orion, P-8 Poseidon, E-3 Sentry, and MQ-9 Reaper.
* Omitted exact classified sensor performance, current deployment locations, definitive retirement dates, and a single current fleet total because those facts are classified, date-sensitive, or source-dependent.

#### Files Modified

* data/aircraft.json — Expanded only the Lockheed U-2 Dragon Lady page data, sources, sections, specifications, variants, operators, mission systems, and internal links.
* hermes-change-log.md — Appended the cumulative Run 17 entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before commit, only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed diff/stat; data/aircraft.json changed only the U-2 Dragon Lady entry and hermes-change-log.md appended this run entry.
3. File review — Parsed data/aircraft.json with python3 -m json.tool; reviewed the U-2 entry section list, sources, variant/operator counts, unarmed payload wording, mission-system caveats, and summary.
4. F-16 style comparison — Inspected data/f16-template.html and followed its dense overview, technical card/specification emphasis, section ordering, neutral tone, source formatting, and related-page linking style within the JSON-rendered article system.
5. Internal link check — Verified aircraft.html?id=sr-71-blackbird, rq-4-global-hawk, p-3-orion, p-8-poseidon, e-3-sentry, and mq-9-reaper point to existing aircraft ids in data/aircraft.json.
6. Secret/token check — Ran credential-specific grep over the staged diff for API keys, tokens, passwords, private keys, GitHub tokens, and AWS credential names; no credentials were found.
7. Final review before commit — Confirmed branch hermes-agent, JSON validity, only intended files staged, selected page not previously edited by Hermes, no main-branch edits, and diff reviewed before commit.

#### Commit

* Commit message: Hermes hourly update: expand Lockheed U-2 Dragon Lady
* Commit hash: Pending until commit is created; final hash is reported in the run output.

#### Issues or Uncertainties

* The committed change log cannot contain the final commit hash without changing that hash; the final scheduled-run response reports it separately.
* U-2 fleet size, retirement timing, sensor fits, deployment locations, and collection performance are date-sensitive and/or classified, so the page uses cautious wording and omits precise unsupported claims.
* Automated extraction of the National Museum U-2A page failed, but its search-result summary and known official museum page were retained only as conservative historical/source context; USAF and Lockheed sources were preferred for article substance.

### Run 18 — 2026-06-30 13:03:25 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Mikoyan MiG-31 (id: mig-31)
* Reason selected: It was one of the sparsest unedited aircraft entries when compared with the F-16 reference page: only 9 generic article sections, no concrete variant entries, no operator entries, no external article sources, and many "Not listed" specification fields.
* Previous condition: Placeholder-like generated content with generic overview/development/design text, no NATO reporting name, no detailed radar/avionics/weapons discussion, no real operators, no concrete variants, sparse specifications, and Wikipedia/Wikidata/method sources only.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead/overview style; article-section order moving from overview to development, design/capabilities, service history, variants, operators, specifications, strengths/limitations, and related links; compact cards for key facts; paragraph plus bullet/card structure; cautious source references through `refs`; internal `aircraft.html?id=...` links for related aircraft.

#### Changes Made

* Expanded the MiG-31 top-level data fields with NATO reporting name, alternate names, origin/manufacturer details, first-flight/introduction dates, engine, speed, range, combat range, ceiling, climb-rate, hardpoint/loadout caveats, development summary, and short summary.
* Added specialist/supplementary sources from Airforce Technology, Deagel, Wikipedia, and the local Milipedia accuracy rules, then mirrored them into `footnotes` and `external_articles` in the existing source style.
* Replaced placeholder article sections with a F-16-like dense structure: Overview, Development History, Design and Capabilities, Radar/Avionics/Weapons, Operational History, Variants, Operators, Specifications, Strengths and Limitations, and Similar Development and Related Pages.
* Added detailed discussion of MiG-25 lineage, long-range Soviet/Russian air-defence mission, two-crew cockpit, Zaslon phased-array radar, datalinks, R-33/R-37-family missile context, MiG-31BM modernization, and MiG-31K/I missile-carrier caveats.
* Added concrete variant entries for baseline/P, B/BS, BM/BSM, E, M, D/S, and K/I families with references and cautious wording where designations vary across sources.
* Added operator entries for Russia, historical Kazakhstan service, and the cancelled/proposed Syria order.
* Added representative specifications using ranges where sources differ, with explicit caveats about mission profile and variant differences.
* Updated related internal links to existing Milipedia IDs: MiG-25, Su-27, F-15 Eagle, and Tu-22M.
* Omitted precise combat kill/loss claims and uncertain current inventory totals because open-source figures are fluid or not independently verified.

#### Files Modified

* data/aircraft.json — Expanded exactly one aircraft entry, `mig-31`, with sourced content, variants, operators, specifications, and article sections.
* hermes-change-log.md — Appended this cumulative Run 18 entry.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Before staging, only `data/aircraft.json` was modified; after log update, intended files were `data/aircraft.json` and `hermes-change-log.md`.
2. git diff — Reviewed the aircraft JSON diff; it changed one entry, `mig-31`, and added this log entry.
3. File review — `python3 -m json.tool data/aircraft.json >/dev/null` passed; selected entry showed 10 article sections, 7 variants, 3 operators, and 3 external articles.
4. F-16 style comparison — Compared against `data/f16-template.html` and followed its dense overview, section sequencing, cards/bullets, references, and related-page style within the JSON renderer's supported fields.
5. Internal link check — Parsed `aircraft.html?id=...` links in the updated MiG-31 entry; all target IDs exist in `data/aircraft.json`.
6. Secret/token check — Credential-specific scan of the staged diff was run before commit; no secrets or private credentials were found.
7. Final review before commit — Confirmed branch, intended files only, one changed aircraft entry, valid JSON, no whitespace errors, complete log entry, and no direct main edits.

#### Commit

* Commit message: Hermes hourly update: expand Mikoyan MiG-31
* Commit hash: Pending until commit creation; final hash reported in run response.

#### Issues or Uncertainties

* Airforce Technology, Deagel, and Wikipedia differ slightly on exact introduction year/date, production total, service ceiling, wingspan, and range definitions; the page uses ranges or explicitly notes source/variant differences rather than forcing a single exact number.
* Current inventory and combat-use/loss claims were intentionally not quantified because publicly available figures are fluid and may require human review.

### Run 19 — 2026-06-30 14:01:33 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Shenyang J-11 (id: shenyang-j-11)
* Reason selected: It was the sparsest unedited aircraft page found by scoring non-Hermes-updated entries, with no operator entries, no variant entries, no external article sources, generic armament wording, and many "Not listed" specification fields.
* Previous condition: Placeholder-like generated article with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no detailed development/design/variant/operator/operational-history content, and missing engine/range/ceiling/dimension details.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview; article-section order covering development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; concise technical paragraphs with source references; neutral caveats for variant-specific or uncertain facts; internal aircraft link style using aircraft.html?id=...

#### Changes Made

* Expanded the Shenyang J-11 entry from a generated sparse page into a fuller Milipedia article data record.
* Added alternative names, NATO reporting names, role refinement, engine details, range, combat-range caveat, ceiling caveat, climb-rate data, hardpoints, armament details, and a fuller short summary.
* Replaced generic weapon wording with variant-cautious J-11/J-11B-family armament coverage, including the 30 mm GSh-30-1 cannon and representative PL/R-series missiles.
* Added reliable external sources from Airforce Technology and the Mitchell Institute, with Wikipedia retained only as a supplementary orientation source.
* Added sections for Overview, Development History, Design and Capabilities, Avionics and Weapons Systems, Specifications, Variants, Operators, Operational History, Comparison, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added variant coverage for J-11/J-11A, J-11B, J-11BS, J-11BH/J-11BSH, and J-11BG/J-11D while marking modernized-variant details as date-sensitive.
* Added operator coverage for the PLAAF and reported PLANAF service-branch use without inventing export operators.
* Added internal links to existing Su-27, Su-30, Su-35, Chengdu J-10, Chengdu J-20, and F-15 Eagle pages.
* Omitted or caveated uncertain facts about exact active inventory, exact production totals, radar fit by batch, WS-10 fit by batch, PL-15 compatibility by variant, and individual intercept/combat incidents.

#### Files Modified

* data/aircraft.json — Expanded the Shenyang J-11 aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative Run 19 record.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Verified before commit that only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed final diff and confirmed the aircraft JSON change was limited to the Shenyang J-11 entry plus the log entry.
3. File review — Parsed data/aircraft.json successfully with python3 -m json.tool and reviewed the updated Shenyang J-11 sections, fields, sources, operators, variants, caveats, and links.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, section coverage, technical phrasing, specification/variant/operator emphasis, timeline, sources, and related-page style within the JSON article renderer.
5. Internal link check — Parsed data/aircraft.json IDs and verified all aircraft.html?id=... links in the updated Shenyang J-11 entry target existing local IDs.
6. Secret/token check — Ran credential-specific checks over the staged diff; no API keys, tokens, passwords, private keys, .env data, or credentials were found.
7. Final review before commit — Confirmed branch, JSON validity, intended file set, one-entry aircraft diff, no main-branch edit, no unrelated files, and completed change log entry.

#### Commit

* Commit message: Hermes hourly update: expand Shenyang J-11
* Commit hash: Pending until commit completes; final hash is reported in the run result.

#### Issues or Uncertainties

* Official Chinese manufacturer or air-force pages were not located during this run, so Airforce Technology and Mitchell Institute were used as the main technical sources and Wikipedia only as supplementary orientation.
* Public sources differ on some performance figures, especially service ceiling; the entry records the discrepancy rather than forcing a single unsupported value.
* Exact active inventory, production total, radar fit, WS-10 fit by batch, and latest missile compatibility are date-sensitive and should be rechecked before future stronger claims.

### Run 20 — 2026-06-30 15:03:44 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Antonov An-12 (id: an-12)
* Reason selected: It was the sparsest unedited aircraft page found in the scoring pass, with no operator entries, no variant entries, no external article sources, generic generated sections, missing engine/range/ceiling/dimension/payload detail, and placeholder-like "Not listed" values.
* Previous condition: Generated transport stub with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, no real development/variant/operator/operational-history detail, no An-12BP/Y-8/special-mission context, and only broad support-aircraft armament wording.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview; section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; concise sourced technical paragraphs; card-style fact summaries; neutral caveats for variant-specific or source-conflicting figures; internal aircraft link style using aircraft.html?id=...

#### Changes Made

* Expanded the Antonov An-12 entry from a sparse generated page into a fuller Milipedia article data record.
* Added alternative names, NATO reporting name Cub, manufacturer/production context, first-flight date, role/type refinement, engine details, range, maximum speed/caution, service ceiling, payload, defensive armament, and fuller summary text.
* Added official manufacturer source from Antonov plus Air Charter Service and The Aviation Zone as supplementary technical/cargo references; retained Wikipedia only as supplementary orientation.
* Added sections for Overview, Development History, Design and Capabilities, Specifications, Variants and Special Missions, Operators, Operational History, Comparison and Role Context, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added An-12/An-12B/An-12BP, Cub-A/B, Cub-C/D, and Shaanxi Y-8 variant-family coverage with cautions around special-mission equipment.
* Added representative operator coverage for Soviet military transport aviation, post-Soviet users, India, China/Y-8 development, and civil cargo users without inventing a fixed current fleet table.
* Added operational-history context for polar and Antarctic missions, airborne exercises, Pamir high-mountain airdrops, Afghanistan support flights, Chernobyl cleanup tasks, and Antonov-recorded world records.
* Added internal links to existing C-130 Hercules, Il-76, An-22, and Xi'an Y-20 pages.
* Removed the generic Soviet-Afghan event-gallery image and replaced it with an Antonov Company gallery image for the An-12.
* Omitted exact current worldwide fleet totals, every historical operator, accident-by-accident history, and classified/aircraft-specific ELINT/ECM equipment details because public sources vary or require dedicated dated verification.

#### Files Modified

* data/aircraft.json — Expanded only the Antonov An-12 aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative Run 20 record.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Verified before commit that only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed diff/stat and aircraft diff; data/aircraft.json changes are limited to the Antonov An-12 entry, and hermes-change-log.md adds this Run 20 entry.
3. File review — Parsed data/aircraft.json successfully with python3 -m json.tool and reviewed the updated An-12 fields, sections, sources, variants, operators, caveats, and links.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, article-section coverage, technical/source phrasing, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-link style within the JSON renderer.
5. Internal link check — Parsed data/aircraft.json IDs and verified all aircraft.html?id=... links in the updated An-12 entry target existing local IDs.
6. Secret/token check — Ran credential-specific checks over the staged diff; no API keys, tokens, passwords, private keys, .env data, or credentials were found.
7. Final review before commit — Confirmed branch, JSON validity, diff check, intended file set, one-entry aircraft diff, no main-branch edit, no unrelated files, and completed change log entry.

#### Commit

* Commit message: Hermes hourly update: expand Antonov An-12
* Commit hash: Pending until commit completes; final hash is reported in the run result.

#### Issues or Uncertainties

* Manufacturer and supplementary references differ on exact production total, maximum speed, range, and payload depending on whether they describe the whole An-12 family, An-12BP, civil freighter configuration, or maximum-fuel versus maximum-payload conditions; the page labels those contexts rather than forcing one unsupported value.
* Exact current worldwide fleet counts, all operators, detailed accident history, and special-mission electronics fits were not exhaustively enumerated because they are date-sensitive or aircraft-specific and need dedicated verification.

### Run 21 — 2026-06-30 16:04:18 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Sukhoi Su-27 (id: su-27)
* Reason selected: It was the shortest unedited aircraft entry found during sparse-candidate scoring, with no operator entries, no variant entries, no external article sources, generic generated prose, many "Not listed" fields, and no detailed design/weapons/variant/operator/operational-history treatment.
* Previous condition: Placeholder-like generated fighter article with 15 exact fact fields, 0 operator entries, 0 variant entries, 0 external article sources, unspecified engines/range/ceiling/hardpoints, generic armament, and minimal sections compared with the F-16 reference page.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense lead overview; article-section order covering overview, development, design, specifications, variants, operators, operational history, comparison, strengths/limitations, timeline, sources, and related pages; concise sourced technical paragraphs; card-style fact summaries; neutral caveats for variant-specific/source-conflicting figures; internal aircraft link style using aircraft.html?id=...

#### Changes Made

* Expanded the Sukhoi Su-27 entry from a sparse generated page into a fuller Milipedia article data record.
* Added alternative names, NATO reporting name Flanker, Soviet/Russian origin context, production/status caveats, first-flight date, role refinement, engine details, range, combat-radius caveat, ceiling caveat, climb-rate data, hardpoints, and a fuller short summary.
* Replaced generic weapon wording with variant-cautious Su-27-family armament coverage, including the 30 mm GSh-30-1 cannon, R-27/AA-10, R-73/AA-11, rockets, bombs, stores stations, radar/IRST, helmet sight, and countermeasures context.
* Added sources from Airforce Technology and the National Museum of the U.S. Air Force, with Wikipedia retained only as supplementary orientation and Milipedia data rules for caveats.
* Added sections for Overview, Development History, Design and Capabilities, Avionics and Weapons Systems, Specifications, Variants and Derivatives, Operators, Operational History, Comparison, Strengths and Limitations, Timeline, Sources and Notes, and Related Pages.
* Added variant and derivative coverage for T-10/T-10S, Su-27S/P, Su-27UB/UBK, Su-27SK/SKM, Su-27SM family, and Su-30/Su-33/Su-34/Su-35/Shenyang J-11 related families.
* Added representative operator coverage for Soviet/Russian, Ukrainian, Chinese, export, and post-Soviet users without inventing a fixed current fleet table.
* Added internal links to existing F-15 Eagle, F-14 Tomcat, MiG-29, Su-30, Su-35, and Shenyang J-11 pages.
* Omitted or caveated exact active inventories, exact combat losses, detailed current order of battle, and variant-specific radar/missile combinations because they are date-sensitive or require operator-specific sources.

#### Files Modified

* data/aircraft.json — Expanded only the Sukhoi Su-27 aircraft entry and sources.
* hermes-change-log.md — Appended the cumulative Run 21 record.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Verified before commit that only data/aircraft.json and hermes-change-log.md were modified/staged.
2. git diff — Reviewed diff/stat and aircraft diff; data/aircraft.json changes are limited to the Sukhoi Su-27 entry, and hermes-change-log.md adds this Run 21 entry.
3. File review — Parsed data/aircraft.json successfully with python3 -m json.tool and reviewed the updated Su-27 fields, sections, sources, variants, operators, caveats, and links.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, article-section coverage, technical/source phrasing, specification emphasis, variants/operators/service/comparison/timeline coverage, source notes, and related-link style within the JSON renderer.
5. Internal link check — Parsed data/aircraft.json IDs and verified all aircraft.html?id=... links in the updated Su-27 entry target existing local IDs.
6. Secret/token check — Ran credential-specific checks over the staged diff; no API keys, tokens, passwords, private keys, .env data, or credentials were found.
7. Final review before commit — Confirmed branch, JSON validity, diff check, intended file set, one-entry aircraft diff, no main-branch edit, no unrelated files, and completed change log entry.

#### Commit

* Commit message: Hermes hourly update: expand Sukhoi Su-27
* Commit hash: Pending until commit completes; final hash is reported in the run result.

#### Issues or Uncertainties

* Public sources differ on exact production totals, service ceiling, combat radius, and whether values refer to baseline Su-27S/SK, Su-27UB, or modernized Su-27SM aircraft; the page labels those contexts rather than forcing one unsupported value.
* Exact current inventories, combat losses, detailed order of battle, and variant-specific radar/missile compatibility were not exhaustively enumerated because they are date-sensitive and require dedicated verification.

### Run 22 — 2026-06-30 17:04:25 UTC

#### Branch

hermes-agent

#### Selected Page

* File: data/aircraft.json
* Aircraft/Page: Sikorsky UH-60 Black Hawk (id: uh-60-black-hawk)
* Reason selected: Sparse-candidate comparison found the UH-60 entry was still generic and substantially less complete than the F-16 reference page, with 0 variant entries, 0 operator entries, no detailed specifications, no modern UH-60M design/avionics treatment, and mostly generated placeholder prose despite a few stale external source records.
* Previous condition: Placeholder-like generated helicopter article with 15 exact fact fields, empty variants/operators arrays, unspecified engines/range/ceiling/hardpoints, generic "utility helicopter weapons not listed" armament, stale/legacy external links, and minimal development/design/service/specification sections.
* Previously edited by Hermes: No

#### Reference Page Used

* F-16 page file path: data/f16-template.html
* Formatting patterns copied: Dense overview and lead fact-card style; article-section flow for overview, development, design/capabilities, service, variants, operators, specifications, strengths/limitations, sources, and related pages; concise technical paragraphs with source refs; neutral caveats for variant-specific data; internal link style using aircraft.html?id=...

#### Changes Made

* Expanded the Sikorsky UH-60 Black Hawk entry from generic generated content into a fuller Milipedia article data record.
* Added UH-60/Black Hawk family context, UTTAS development background, UH-60A service-entry context, and UH-60M modernization details.
* Added T700-family engine information, UH-60M T700-GE-701D engine note, digital cockpit, wide-chord blades, IVHMS, survivability equipment, and mission-equipment caveats.
* Added representative UH-60M brochure specification cards for crew/troops, empty weight, gross weight, cargo hook capacity, cruise-speed condition, and climb-rate condition while avoiding unsupported universal performance claims.
* Added variants and derivative coverage for UH-60A, UH-60L, UH-60M, HH-60M, MH-60M, S-70/S-70i, and HH-60G/HH-60W family aircraft.
* Added representative operators and users: U.S. Army, U.S. Air Force H-60 rescue derivatives, U.S. Customs and Border Protection Air and Marine Operations, and international operators with a source caveat.
* Replaced stale external source records with current manufacturer/official sources from Lockheed Martin/Sikorsky, Sikorsky Archives, the U.S. Air Force, and U.S. Customs and Border Protection; retained Wikipedia only as supplementary orientation.
* Added sections for Overview, Development History, Design and Capabilities, Operational History, Variants, Operators, Specifications, Strengths and Limitations, and Related Pages.
* Added internal related links to the existing Bell UH-1 Iroquois, Boeing AH-64 Apache, Boeing CH-47 Chinook, and Bell AH-1 Cobra pages.
* Omitted exact global current inventories, universal range/ceiling values, and a single fixed weapons list because these vary by model, mission equipment, date, and operator.

#### Files Modified

* data/aircraft.json — Expanded only the Sikorsky UH-60 Black Hawk aircraft entry, sources, sections, variants, operators, and technical caveats.
* hermes-change-log.md — Appended the cumulative Run 22 record.

#### Verification Checklist

* [x] Branch hermes-agent was used
* [x] Main branch was not edited directly
* [x] Repository was fetched before edits
* [x] Selected page was relatively empty before editing
* [x] Page had not already been substantially updated by Hermes
* [x] F-16 page was used as formatting reference
* [x] Updated page matches Milipedia style
* [x] No unrelated files were changed
* [x] No secrets or credentials were added
* [x] Internal links were checked
* [x] Formatting was checked
* [x] The page was reviewed for missing sections
* [x] The final diff was reviewed before commit
* [x] Change log was updated for this run

#### Verification Steps Completed

Record the result of:
1. git status — Verified before commit that the only intended modified files were data/aircraft.json and hermes-change-log.md.
2. git diff — Reviewed the aircraft diff/stat and confirmed data/aircraft.json changes are limited to the UH-60 Black Hawk entry; hermes-change-log.md adds this Run 22 entry.
3. File review — Parsed data/aircraft.json successfully with python3 -m json.tool and reviewed the updated UH-60 fields, sections, sources, variants, operators, caveats, and related links.
4. F-16 style comparison — Inspected data/f16-template.html and matched its dense overview, article-section coverage, technical/source phrasing, card summaries, variant/operator/service/specification coverage, source notes, and related-link style within the JSON renderer.
5. Internal link check — Parsed data/aircraft.json IDs and verified all aircraft.html?id=... links in the updated UH-60 entry target existing local IDs.
6. Secret/token check — Ran credential-specific checks over the staged diff; no API keys, tokens, passwords, private keys, .env data, or credentials were found.
7. Final review before commit — Confirmed branch, JSON validity, diff check, intended file set, one-entry aircraft diff, no main-branch edit, no unrelated files, and completed change log entry.

#### Commit

* Commit message: Hermes hourly update: expand Sikorsky UH-60 Black Hawk
* Commit hash: Pending until commit completes; final hash is reported in the run result.

#### Issues or Uncertainties

* UH-60/H-60/S-70 configurations vary widely by model, mission kit, operator, and year, so range, ceiling, weapons, and inventories were caveated rather than forced into one universal value.
* Lockheed Martin's product page is navigation-heavy; the UH-60M brochure and Sikorsky Archives page supplied the most concrete technical and historical details for this run.
