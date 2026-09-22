# Template System

A framework-neutral UI component foundation. Goal: prove stable, reusable component contracts in SuperCSS and a plain HTML compiler before generating full apps for any target framework.

## Active Work

```text
super-project/
  supercss/                     # Shared CSS foundation — tokens, components, themes
    supercss.css                # Canonical entrypoint and layer order
    base/                       # reset, tokens, typography, layout, components, utilities, accessibility, charts
    themes/                     # Token mutation themes (material, fluent, brutalist)
  _templates/
    master/                     # Compiler — builds component transforms, produces static HTML
      src/                      # TypeScript source (compiler + 18 component transforms) — UNDER REVAMP
      pages/                    # index.html (DSL source), index.compiled.html (last compiled output)
      css/                      # styles.css (→ SuperCSS), expo.css (expo layout)
    angular/                    # Secondary expo — follows master output
    nextjs/                     # Secondary expo — follows master output
  server/                       # Theme server (port 3001, GET/POST /theme)
  _rules/                       # Architecture and coding rules
```

## Current Focus

**Master + SuperCSS.** The master template compiler is being revamped. Angular and Next.js are secondary and follow master once it stabilizes.

Pass condition for a component:
- reusable contract in `supercss/base/components.css`
- stable semantic classes
- compiles cleanly by master into static HTML
- no framework dependency

## Run Master

```bash
cd _templates/master
npm install
npm run dev    # build (esbuild) then compile (compiler/compile.js)
```

Output: `_templates/master/pages/index.compiled.html`

## Paused

- multi-page generation
- auth/app/marketing shells
- production sample projects
- backend/API templates
- additional framework targets beyond Angular and Next.js
