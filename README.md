# Project-to-any Component Foundation

This repo is being realigned around one goal:

> Prove a reusable, framework-neutral UI/component contract layer before generating full apps.

The previous multi-page Angular/static/target experiment has been trimmed out of the active workspace. The current runnable target is a single Angular component expo backed by SuperCSS.

## Active Structure

```text
super-project/
  supercss/                         # Shared token and component CSS contracts
    supercss.css                    # Canonical CSS entrypoint
    base/                           # Reset, tokens, layout, components, utilities, charts
    themes/                         # Token mutation themes only
  project-to-any/
    project-to-any.config.json       # Foundation-phase config
    templates/frontend/
      components/registry.json       # Framework-neutral component contract registry
    production/README.md             # Production projects are paused for this phase
  _templates/
    angular/                         # Single component expo test bench
  _rules/                            # Agent and architecture rules
```

## Current Pass Condition

A component shown in the expo must have:

- a reusable contract
- stable semantic classes
- visual behavior owned by SuperCSS
- no dependency on route/page/app-shell stubs

## Run The Expo

```bash
cd _templates/angular
npm install
npm run build
npm start
```

## Paused Until The Foundation Is Proven

- multi-page generation
- auth/app/marketing shells
- production sample projects
- static HTML/React/Ionic/WordPress targets
- backend/API templates
- old SuperCSS docs, mixers, palettes, and external system experiments
