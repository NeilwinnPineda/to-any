# Architecture

Three layers. Each layer has one job.

## 1 — Visual Contract (SuperCSS)

`supercss/` owns all reusable styling. It defines:
- `--sc-*` token contract (colors, spacing, typography, motion)
- semantic component classes (`.btn`, `.card`, `.badge`, `.table`, etc.)
- `@layer` cascade order: `reset → tokens → base → layout → components → utilities → accessibility → themes`
- theme mutations via `data-theme` attribute without rewriting component CSS

No framework dependency. Any HTML that links `supercss/supercss.css` gets the full contract.

## 2 — Compiler (master)

`_templates/master/` transforms component DSL into static HTML.

- Source: `src/compiler/` + `src/components/` (TypeScript) — under revamp
- Transforms: 18 component IIFE bundles via esbuild
- Input: `pages/index.html` — markup using `<sc-button>`, `<sc-badge>`, etc.
- Output: `pages/index.compiled.html` — fully rendered static HTML, no runtime loading

The compiler runs at build time. Output must be self-contained. No compiler machinery ships to the browser.

## 3 — Framework Targets (Angular, Next.js)

`_templates/angular/` and `_templates/nextjs/` are secondary expo targets. They consume SuperCSS and mirror the component set proven in master. They do not invent new UI.

Targets translate contracts. They do not define them.
