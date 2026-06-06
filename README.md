# Milipedia

Milipedia is a planned Wikipedia-style encyclopedia for military aircraft, covering fighters, bombers, transports, tankers, AWACS aircraft, reconnaissance aircraft, helicopters, UAVs, trainers, experimental aircraft, prototypes, retired aircraft, and cancelled aircraft.

This repository contains a working static version of the Milipedia website.

## Live Site

Visit Milipedia at [https://hamster-coder123.github.io/milipedia/](https://hamster-coder123.github.io/milipedia/).

The current build includes:

- 100 post-1945 production military aircraft
- Search by aircraft name, role, country, manufacturer, type, era, and status
- Filters for type, origin, era, and status
- Individual aircraft detail views
- A 2-4 aircraft comparison table
- Source links for each aircraft entry
- A local data generation script in `tools/build-aircraft-data.mjs`

## Project Plan

Read the full plan in [MILIPEDIA_PLAN.md](MILIPEDIA_PLAN.md).

## Data

Starter aircraft data lives in [data/aircraft.json](data/aircraft.json). Rebuild it with:

```bash
node tools/build-aircraft-data.mjs
```
