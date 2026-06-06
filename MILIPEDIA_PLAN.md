# Milipedia Website Plan

## 1. Project Overview

Milipedia is a Wikipedia-style encyclopedia focused on military aircraft from all eras, countries, roles, and development outcomes. It should include operational aircraft, retired aircraft, helicopters, UAVs, drones, trainers, experimental aircraft, prototypes, and cancelled aircraft programs.

The website is for aviation enthusiasts, students, researchers, model builders, defense history readers, and anyone who wants a structured way to learn about military aircraft without jumping between scattered sources. Milipedia solves the problem of fragmented aircraft information by organizing key facts, specifications, history, variants, operators, images, and citations into consistent, easy-to-compare pages.

Milipedia should be neutral, source-driven, and designed for clarity. It should avoid sensational claims and present aircraft information in a technical encyclopedia format.

## 2. Core Website Features

### Aircraft Encyclopedia

A searchable database of military aircraft covering fighters, bombers, transport aircraft, tankers, AWACS aircraft, reconnaissance aircraft, helicopters, UAVs, trainers, experimental aircraft, prototypes, retired aircraft, and cancelled aircraft.

### Search System

A fast search feature that allows users to find aircraft by name, alternative name, NATO reporting name, country, manufacturer, role, type, era, status, and operator.

### Filters

Filters should let users narrow the aircraft database by country, role, type, era, status, manufacturer, engine type, speed category, stealth capability, carrier capability, and crew count.

### Aircraft Comparison Tool

A tool that allows users to compare 2 to 4 aircraft side by side using standardized data fields such as speed, range, crew, service ceiling, armament, operators, and status.

### Aircraft Categories

Aircraft should be grouped into clear categories such as fighters, bombers, attack aircraft, transports, tankers, helicopters, UAVs, trainers, experimental aircraft, prototypes, and cancelled aircraft.

### Country Pages

Each country page should list aircraft designed, built, operated, or exported by that country. These pages can also include major manufacturers and notable aircraft programs.

### Manufacturer Pages

Manufacturer pages should summarize aircraft companies and list the aircraft they designed or produced.

### Era Pages

Era pages should organize aircraft by historical period, such as World War I, interwar period, World War II, early Cold War, late Cold War, modern era, and future/prototype era.

### Individual Aircraft Pages

Each aircraft should have its own page with a consistent structure, including overview, specifications, armament, variants, operators, history, images, and sources.

### Image Gallery

Each aircraft page should include a gallery for aircraft photos, cockpit images, diagrams, museum examples, variant images, and historical images where available and properly licensed.

### Source/Citation System

Every aircraft page should include sources for specifications, historical claims, production numbers, combat use, and operator lists. Sources should be visible and easy to audit.

### Admin Editing System for Later Versions

Later versions can include an admin dashboard for adding aircraft, editing data, reviewing submitted changes, approving images, and managing citations.

## 3. Aircraft Page Template

Every aircraft page should use a standard layout so users can quickly compare information across aircraft.

### Standard Aircraft Page Layout

1. Aircraft name
2. Image area
3. Short summary
4. Basic information table
5. Specifications table
6. Armament section
7. Variants section
8. Operators section
9. Combat history section
10. Development history section
11. Similar aircraft section
12. Sources section

### Example Basic Information Table

| Field | Value |
|---|---|
| Name | F-16 Fighting Falcon |
| Country of Origin | United States |
| Manufacturer | General Dynamics / Lockheed Martin |
| Role | Multirole fighter |
| Aircraft Type | Fighter |
| Era | Cold War / Modern |
| First Flight | 1974 |
| Introduction | 1978 |
| Status | Active |
| Number Built | 4,600+ |

### Example Specifications Table

| Specification | Value |
|---|---|
| Crew | 1 |
| Length | 15.06 m |
| Wingspan | 9.96 m |
| Height | 4.88 m |
| Empty Weight | 8,570 kg |
| Max Takeoff Weight | 19,200 kg |
| Engine | 1 x afterburning turbofan |
| Max Speed | Mach 2.0 class |
| Range | Approx. 4,200 km ferry range |
| Combat Range | Varies by loadout |
| Service Ceiling | Approx. 15,000+ m |
| Rate of Climb | Varies by variant |

### Example Page Sections

#### Armament

Summarize guns, missiles, bombs, rockets, guided weapons, and external hardpoints. Separate standard armament from optional loadouts.

#### Variants

List major variants with short descriptions, such as prototype versions, production blocks, export models, upgraded versions, and specialized mission variants.

#### Operators

List current and former operator countries. When possible, separate active operators from former operators.

#### Combat History

Describe notable combat use with dates, conflicts, and neutral wording. Avoid unsupported claims.

#### Development History

Explain why the aircraft was developed, what requirements shaped it, and how the design evolved.

#### Similar Aircraft

Link to aircraft with comparable role, era, size, or mission profile.

#### Sources

List citations used for technical data, history, images, operators, and production information.

## 4. Data Fields

Each aircraft entry should use structured data so the website can generate pages, filters, search results, comparison tables, and category lists consistently.

### Required Data Fields

| Field | Description |
|---|---|
| id | Unique machine-readable identifier, such as `f-16-fighting-falcon`. |
| name | Official or most common aircraft name. |
| alternative_names | Other names, nicknames, export names, or local names. |
| nato_reporting_name | NATO reporting name, if applicable. |
| country_of_origin | Primary country where the aircraft was designed or developed. |
| manufacturer | Company or organization responsible for design or production. |
| role | Main mission role, such as multirole fighter, strategic bomber, or attack helicopter. |
| aircraft_type | Broad type, such as fighter, bomber, transport, helicopter, UAV, trainer, or experimental. |
| era | Historical era or service period. |
| first_flight | Date or year of first flight. |
| introduction_date | Date or year introduced into service. |
| retirement_date | Date or year retired, if applicable. |
| status | Active, retired, prototype, experimental, cancelled, planned, or museum-only. |
| number_built | Total production number, using estimates if needed. |
| crew | Number of crew members. |
| length | Aircraft length with unit. |
| wingspan | Wingspan or rotor diameter with unit. |
| height | Aircraft height with unit. |
| empty_weight | Empty weight with unit. |
| max_takeoff_weight | Maximum takeoff weight with unit. |
| engines | Engine count, type, and model if known. |
| max_speed | Maximum speed with unit or Mach number. |
| range | Ferry range or general range. |
| combat_range | Combat radius or mission range, where available. |
| service_ceiling | Maximum operating altitude. |
| rate_of_climb | Rate of climb, where available. |
| armament | Guns, missiles, bombs, rockets, hardpoints, and other weapons. |
| hardpoints | Number and type of hardpoints or weapon stations. |
| variants | Major versions and subtypes. |
| operators | Current and former operator countries or services. |
| combat_history | Summary of operational combat use. |
| images | Image URLs, captions, credits, and license details. |
| sources | Citations and references for the aircraft data. |

## 5. Website Pages

### Home Page

The main entry point for Milipedia. It should include the site name, navigation, large search bar, featured aircraft, quick browse sections, recently added aircraft, popular aircraft, and a shortcut to the comparison tool.

### Aircraft Database Page

A searchable and filterable list of all aircraft in the database. It should show aircraft name, country, type, role, era, status, and a small thumbnail.

### Aircraft Detail Page

The full encyclopedia page for a single aircraft. It should include the standard aircraft page template, image gallery, data tables, history sections, similar aircraft, and sources.

### Compare Aircraft Page

A tool for comparing 2 to 4 aircraft side by side. Users should be able to search for aircraft, add them to the comparison, remove aircraft, and view key specifications in a table.

### Countries Page

A directory of countries represented in the database. It should show how many aircraft are linked to each country.

### Country Detail Page

A page for one country, listing aircraft designed, manufactured, operated, or exported by that country. It may also include key manufacturers and historical notes.

### Manufacturers Page

A directory of aircraft manufacturers. Each manufacturer entry should link to aircraft associated with that company.

### Aircraft Types Page

A page that organizes aircraft by type, such as fighters, bombers, transports, tankers, helicopters, UAVs, trainers, reconnaissance aircraft, AWACS aircraft, prototypes, and cancelled aircraft.

### Eras Page

A page that organizes aircraft by time period, such as World War I, World War II, Cold War, modern, and future/prototype eras.

### Submit Aircraft Page

A future-facing page where users can suggest new aircraft entries or corrections. In the first version, this can be a simple form or a link to a contribution guide.

### Admin Dashboard

A later-version tool for managing aircraft entries, reviewing submissions, updating sources, approving images, and editing structured data.

### About Page

A page explaining the purpose of Milipedia, data accuracy rules, citation standards, contribution guidelines, and contact information.

## 6. Search and Filter System

The search and filter system should make it easy to find aircraft from a large database. Search should work across names, metadata, roles, countries, operators, and aliases.

### Search Should Support

- Aircraft name
- Country
- Manufacturer
- Role
- Type
- Era
- Status
- NATO reporting name
- Operator country

### Filters Should Include

- Type
- Country
- Era
- Status
- Engine type
- Speed category
- Carrier-capable
- Stealth
- Crew count
- Active/retired/prototype/cancelled

### Search Behavior

Search should support partial matches, case-insensitive input, alternative names, and common abbreviations. For example, searching `F16`, `F-16`, or `Fighting Falcon` should find the F-16 Fighting Falcon.

### Filter Behavior

Filters should be combinable. For example, users should be able to filter for active fighter aircraft from Sweden, or retired bombers from the Cold War era.

## 7. Aircraft Comparison Tool

The aircraft comparison tool should allow users to compare 2 to 4 aircraft side by side using consistent data fields. It should be useful for quickly understanding differences in role, era, size, performance, and service history.

### Comparison Categories

- Country
- Role
- First flight
- Introduction date
- Crew
- Engines
- Max speed
- Range
- Combat range
- Service ceiling
- Armament
- Operators
- Status

### Example Comparison Table

| Category | F-16 Fighting Falcon | MiG-29 | Dassault Rafale |
|---|---|---|---|
| Country | United States | Soviet Union / Russia | France |
| Role | Multirole fighter | Air superiority / multirole fighter | Multirole fighter |
| First Flight | 1974 | 1977 | 1986 |
| Introduction Date | 1978 | 1983 | 2001 |
| Crew | 1 or 2 depending on variant | 1 or 2 depending on variant | 1 or 2 depending on variant |
| Engines | 1 x turbofan | 2 x turbofans | 2 x turbofans |
| Max Speed | Mach 2.0 class | Mach 2.0+ class | Mach 1.8 class |
| Range | Varies by configuration | Varies by configuration | Varies by configuration |
| Combat Range | Mission-dependent | Mission-dependent | Mission-dependent |
| Service Ceiling | Approx. 15,000+ m | Approx. 18,000 m | Approx. 15,000+ m |
| Armament | Cannon, missiles, bombs, guided weapons | Cannon, missiles, bombs | Cannon, missiles, bombs, guided weapons |
| Operators | Multiple countries | Multiple countries | Multiple countries |
| Status | Active | Active / retired depending on operator | Active |

## 8. Homepage Layout

The homepage should be useful immediately, with search and browsing options visible without requiring users to read long explanations.

### Homepage Sections

1. Header/navigation bar
2. Large search bar
3. Featured aircraft
4. Browse by type
5. Browse by country
6. Browse by era
7. Recently added aircraft
8. Popular aircraft
9. Comparison shortcut

### Header/Navigation Bar

The header should include the Milipedia logo or wordmark, links to Aircraft, Compare, Countries, Manufacturers, Types, Eras, Submit, and About.

### Large Search Bar

The search bar should be the primary homepage interaction. It should let users search for aircraft by name, country, manufacturer, type, role, or NATO reporting name.

### Featured Aircraft

A featured section can highlight important or interesting aircraft with image thumbnails and short descriptions.

### Browse by Type

Show quick links for major categories such as fighters, bombers, helicopters, UAVs, transports, tankers, trainers, AWACS, reconnaissance aircraft, and prototypes.

### Browse by Country

Show popular country filters and a link to the full country directory.

### Browse by Era

Show quick links for World War I, interwar, World War II, early Cold War, late Cold War, modern, and future/prototype aircraft.

### Recently Added Aircraft

Show the newest aircraft entries or recently updated pages.

### Popular Aircraft

Show commonly viewed aircraft pages.

### Comparison Shortcut

Provide a direct entry point for comparing aircraft, such as a small form with 2 to 4 aircraft search fields.

## 9. Design Style

Milipedia should feel like a technical encyclopedia for military aviation: calm, clear, structured, and information-focused.

### Use

- Clean dark mode
- Technical encyclopedia layout
- Simple tables
- Military aviation theme
- Blueprint-style specification panels
- Minimal animations
- Clear typography

### Avoid

- Overcomplicated effects
- Too many colors
- Game-like design
- Unverified statistics

### Visual Direction

The design should use a restrained dark background, high-contrast text, subtle borders, table-heavy layouts, compact information panels, and occasional blueprint-inspired accents. The goal is readability and trust, not spectacle.

## 10. Recommended Tech Stack

### Beginner Version

- HTML
- CSS
- JavaScript
- JSON data files
- GitHub Pages, Netlify, or Vercel hosting

This version is best for the first release because it is simple, fast to build, easy to host, and does not require a database or user authentication. Aircraft entries can be stored as JSON files, and pages can be generated or rendered with JavaScript.

### Advanced Version

- Next.js
- TypeScript
- PostgreSQL or Supabase
- Supabase Auth or Clerk
- Supabase Storage or similar image storage
- Vercel hosting

This version is better for a larger, long-term Milipedia with user accounts, edit submissions, admin approval, image uploads, database-backed search, and API access. It is more powerful but takes longer to build correctly.

### Recommendation for Version 1

The first version should use the beginner stack. A static website with JSON data is enough to prove the concept, build the initial aircraft database, test the page layouts, and launch quickly. The data model should still be designed carefully so it can later migrate into Next.js and a database without rewriting everything.

## 11. Folder Structure

### Simple Static Version

```text
milipedia/
├── index.html
├── aircraft.html
├── aircraft-detail.html
├── compare.html
├── countries.html
├── manufacturers.html
├── types.html
├── eras.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── search.js
│   ├── filters.js
│   ├── aircraft-detail.js
│   └── compare.js
├── data/
│   ├── aircraft.json
│   ├── countries.json
│   ├── manufacturers.json
│   └── eras.json
└── images/
    ├── aircraft/
    ├── countries/
    └── manufacturers/
```

### Next.js Version

```text
milipedia/
├── app/
│   ├── page.tsx
│   ├── aircraft/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── compare/
│   │   └── page.tsx
│   ├── countries/
│   │   ├── page.tsx
│   │   └── [country]/
│   │       └── page.tsx
│   ├── manufacturers/
│   │   └── page.tsx
│   ├── types/
│   │   └── page.tsx
│   ├── eras/
│   │   └── page.tsx
│   ├── submit/
│   │   └── page.tsx
│   ├── admin/
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── AircraftCard.tsx
│   ├── AircraftTable.tsx
│   ├── SearchBar.tsx
│   ├── FilterPanel.tsx
│   ├── ComparisonTable.tsx
│   ├── SpecificationPanel.tsx
│   └── SourceList.tsx
├── data/
│   └── aircraft.json
├── lib/
│   ├── aircraft.ts
│   ├── search.ts
│   └── filters.ts
├── public/
│   └── images/
│       └── aircraft/
├── types/
│   └── aircraft.ts
└── styles/
    └── globals.css
```

## 12. Example JSON Data

```json
{
  "id": "f-16-fighting-falcon",
  "name": "F-16 Fighting Falcon",
  "alternative_names": ["Viper", "F-16"],
  "nato_reporting_name": null,
  "country_of_origin": "United States",
  "manufacturer": ["General Dynamics", "Lockheed Martin"],
  "role": "Multirole fighter",
  "aircraft_type": "Fighter",
  "era": ["Cold War", "Modern"],
  "first_flight": "1974-01-20",
  "introduction_date": "1978",
  "retirement_date": null,
  "status": "Active",
  "number_built": "4,600+",
  "crew": "1 or 2 depending on variant",
  "length": "15.06 m",
  "wingspan": "9.96 m",
  "height": "4.88 m",
  "empty_weight": "8,570 kg",
  "max_takeoff_weight": "19,200 kg",
  "engines": [
    {
      "count": 1,
      "type": "Afterburning turbofan",
      "model": "Pratt & Whitney F100 or General Electric F110 depending on variant"
    }
  ],
  "max_speed": "Mach 2.0 class",
  "range": "Approx. 4,200 km ferry range with external tanks",
  "combat_range": "Varies by mission profile and loadout",
  "service_ceiling": "Approx. 15,000+ m",
  "rate_of_climb": "Varies by variant and configuration",
  "armament": {
    "guns": ["1 x 20 mm M61A1 Vulcan cannon"],
    "missiles": ["AIM-9 Sidewinder", "AIM-120 AMRAAM", "AGM-65 Maverick"],
    "bombs": ["General-purpose bombs", "Laser-guided bombs", "JDAM-family guided bombs"],
    "notes": "Exact weapons compatibility depends on variant, operator, and upgrade package."
  },
  "hardpoints": "Up to 9 external stations depending on variant",
  "variants": [
    {
      "name": "F-16A/B",
      "description": "Early single-seat and two-seat production variants."
    },
    {
      "name": "F-16C/D",
      "description": "Improved production variants with upgraded avionics and expanded weapons capability."
    },
    {
      "name": "F-16V",
      "description": "Modernized version with advanced radar, avionics, and cockpit upgrades."
    }
  ],
  "operators": {
    "current": ["United States", "Belgium", "Denmark", "Greece", "Israel", "Netherlands", "Poland", "Turkey"],
    "former": [],
    "notes": "Operator list is abbreviated for example data."
  },
  "combat_history": "Used by multiple air forces in conflicts from the late Cold War period through the modern era. Specific claims should be documented with citations.",
  "development_history": "Developed as a lightweight fighter program that evolved into a widely exported multirole combat aircraft.",
  "images": [
    {
      "url": "/images/aircraft/f-16-fighting-falcon/main.jpg",
      "caption": "F-16 Fighting Falcon in flight.",
      "credit": "Placeholder credit",
      "license": "Placeholder license"
    }
  ],
  "sources": [
    {
      "title": "Official manufacturer page",
      "url": "https://www.lockheedmartin.com/",
      "accessed": "2026-06-06",
      "notes": "Use a specific aircraft page URL in production."
    },
    {
      "title": "Air force fact sheet",
      "url": "https://www.af.mil/",
      "accessed": "2026-06-06",
      "notes": "Use a specific fact sheet URL in production."
    }
  ]
}
```

## 13. Minimum Viable Product

The first version of Milipedia should focus on proving the core encyclopedia experience without requiring accounts, a database, or admin tools.

### MVP Scope

- Homepage
- Aircraft list
- Individual aircraft pages
- Basic search
- Filters by country and role
- Simple comparison tool
- At least 20 aircraft entries
- Static JSON data

### MVP Success Criteria

The MVP is successful if users can open the site, search or browse aircraft, view detailed aircraft pages, compare aircraft, and see clear source references for the included data.

## 14. Starting Aircraft List

The first 20 aircraft entries should include a mix of fighters, bombers, transports, helicopters, UAVs, and aircraft from different countries.

1. F-16 Fighting Falcon
2. F-15 Eagle
3. F/A-18 Hornet
4. F-22 Raptor
5. F-35 Lightning II
6. A-10 Thunderbolt II
7. B-52 Stratofortress
8. B-2 Spirit
9. C-130 Hercules
10. AH-64 Apache
11. UH-60 Black Hawk
12. MQ-9 Reaper
13. MiG-21
14. MiG-29
15. Su-27
16. Su-57
17. Eurofighter Typhoon
18. Dassault Rafale
19. Saab JAS 39 Gripen
20. Panavia Tornado

## 15. Development Roadmap

1. Create layout
2. Create aircraft JSON data
3. Build aircraft list page
4. Build aircraft detail pages
5. Add search
6. Add filters
7. Add comparison tool
8. Add images
9. Add sources
10. Add admin tools later

### Roadmap Details

#### Step 1: Create Layout

Design the common layout, navigation bar, dark mode theme, content width, table styling, cards, and responsive behavior.

#### Step 2: Create Aircraft JSON Data

Create a structured aircraft data file with the first 20 aircraft. Use consistent field names and units.

#### Step 3: Build Aircraft List Page

Create the main database page with aircraft cards or rows, thumbnails, country labels, role labels, and status labels.

#### Step 4: Build Aircraft Detail Pages

Use the aircraft page template to render individual aircraft pages from structured data.

#### Step 5: Add Search

Add client-side search across aircraft names, alternative names, NATO reporting names, countries, manufacturers, roles, types, eras, and operators.

#### Step 6: Add Filters

Add filters for country, role, type, era, status, and other important attributes.

#### Step 7: Add Comparison Tool

Allow users to select 2 to 4 aircraft and compare their specifications side by side.

#### Step 8: Add Images

Add aircraft images with captions, source credits, and license information.

#### Step 9: Add Sources

Add visible citation sections to each aircraft page and connect important claims to sources.

#### Step 10: Add Admin Tools Later

After the public encyclopedia works, build admin tools for editing aircraft data, reviewing submissions, and approving sources.

## 16. Data Accuracy Rules

Milipedia should be careful with data quality because military aircraft statistics can vary by variant, configuration, source, and national secrecy.

All aircraft data must:

- Use consistent units
- Be sourced
- Be neutral
- Avoid propaganda language
- Separate confirmed facts from disputed claims
- Avoid classified or speculative performance claims
- Clearly mark estimates

### Additional Rules

- Always note the aircraft variant when specifications differ significantly.
- Prefer official sources, manufacturer data, museum records, government fact sheets, and reputable aviation references.
- Do not present combat claims as facts unless they are well sourced.
- Clearly label uncertain production numbers, disputed losses, estimated speeds, or classified capabilities.
- Keep operator lists dated, because active service status can change.
- Avoid ranking aircraft as "best" or "worst" unless the page is explicitly discussing a sourced comparison method.

## 17. Future Features

Future upgrades can expand Milipedia from a static encyclopedia into a collaborative aviation reference platform.

- User accounts
- Edit suggestions
- Admin approval system
- Aircraft timelines
- Interactive world map
- Advanced comparison charts
- API for aircraft data
- Export aircraft data as CSV or JSON
- Favorites system
- Mobile app version

