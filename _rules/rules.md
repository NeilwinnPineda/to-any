# Rules

## Source of Truth

- Visual behavior: `supercss/base/components.css`
- Token contract: `supercss/base/tokens.css`
- Compiler source: `_templates/master/src/`
- Compiled proof: `_templates/master/pages/index.compiled.html`

## Do

- Add reusable CSS to SuperCSS first — never in a framework component stylesheet
- Keep `--sc-*` tokens as the only public API for theming
- Keep component classes semantic (`.btn`, `.card`, `.alert`, `.pagination`)
- Keep master compiler output as fully rendered static HTML
- Keep Angular/Next.js CSS limited to expo layout and spacing

## Do Not

- Add routes, page catalogs, or app shells
- Add generated product/auth/dashboard stubs
- Add backend connectors or mock DB scaffolding
- Ship runtime template loaders in compiled output
- Add new framework targets before master stabilizes
- Use raw values in reusable components — consume `--sc-*` variables only
- Use page-specific class names, target-specific token prefixes, or names implying app shells

## CSS Token Contract

All theming is controlled through `--sc-*` custom properties. Themes, modes, density, radius, and motion must be switchable by mutating token values without rewriting component CSS.

```html
<html data-theme="material" data-mode="light" data-density="comfortable">
```

Do not expose external naming systems (`--md-*`, `--fluent-*`, `--bootstrap-*`, `--tailwind-*`).

## Compiler Contract

Master compiler is a Node.js build pipeline:

1. `npm run build` — esbuild compiles TypeScript sources to IIFE bundles
2. `npm run compile` — compiler processes `pages/index.html` → `pages/index.compiled.html`

Output is static HTML. No runtime dependencies in the output. If a file was generated, say so and say how. No invisible side effects.

## Naming

- SuperCSS variables: `--sc-*`
- SuperCSS component classes: semantic names (`.btn`, `.card`, `.alert`, `.table`, `.pagination`)
- Component transforms: `<name>.transform.ts` → `<name>.transform.js`
- Avoid: page-specific names, generated `.inl-*` hooks, names implying routes or production outputs

## Project Boundaries

Active work stays inside:

- `supercss/`
- `_templates/master/src/`
- `_templates/master/pages/`

Angular and Next.js changes must follow from master output — not lead it.

## Production Projects

Paused. Do not add sample production projects, route catalogs, or generated app outputs. When production projects return, they must consume proven SuperCSS contracts — not invent page-specific UI.
