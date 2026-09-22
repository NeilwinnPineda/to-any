# Agent Guide

## Active Goal

Revamp the master compiler and prove a reusable, framework-neutral UI component layer backed by SuperCSS. Angular and Next.js are secondary — they follow master's output once it stabilizes.

## Active Roots

- `supercss/` — visual tokens, layout primitives, reusable component CSS
- `supercss/supercss.css` — canonical import order and layer declaration
- `_templates/master/` — compiler: TypeScript source → IIFE component transforms + static HTML output
- `_templates/master/pages/index.html` — DSL source (uses `<sc-button>`, `<sc-badge>`, etc.)
- `_templates/master/pages/index.compiled.html` — compiled static HTML (last known good output)
- `_rules/` — architecture and coding rules

## Secondary (follows master)

- `_templates/angular/` — Angular expo, mirrors master output
- `_templates/nextjs/` — Next.js expo, mirrors master output

## Required Reading

1. `_rules/architecture.md`
2. `_rules/rules.md`
3. `supercss/supercss.css`

## Working Rules

1. SuperCSS owns all reusable visual behavior — component CSS goes in `supercss/base/components.css`.
2. Master compiler runs at build time — compiled output is fully rendered static HTML with no runtime template machinery.
3. Angular and Next.js receive output — they do not invent UI independently.
4. Keep expo pages as component showcases only — not product apps, dashboards, or route catalogs.

## Do Not Reintroduce

- page catalogs or route maps
- product/auth/dashboard stubs
- backend connectors or mock DB scaffolding
- runtime template loaders in compiled HTML output
- new framework targets before master stabilizes
