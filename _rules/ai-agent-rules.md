# AI Agent Rules

This repo is in the component-contract foundation phase. Agents should keep the workspace small and prove the reusable UI layer before adding app-generation machinery.

## Required Reading

1. `_rules/ruleset.md`
2. `_rules/architecture.md`
3. `_rules/project-boundaries.md`
4. `_rules/coding-style.md`
5. `AGENT.md`
6. `project-to-any/templates/frontend/README.md`
7. `project-to-any/templates/frontend/components/registry.json`
8. `supercss/supercss.css`

## Active SuperCSS Contract

| File | Role |
|------|------|
| `supercss/supercss.css` | Canonical entrypoint and cascade layer order |
| `supercss/base/reset.css` | Browser normalization |
| `supercss/base/tokens.css` | Public `--sc-*` token contract |
| `supercss/base/typography.css` | Type defaults |
| `supercss/base/layout.css` | Framework-neutral layout primitives |
| `supercss/base/components.css` | Reusable component styling contracts |
| `supercss/base/utilities.css` | Small shared utilities |
| `supercss/base/accessibility.css` | Focus, reduced motion, and accessibility defaults |
| `supercss/base/charts.css` | Optional chart/demo support imported by the expo |
| `supercss/themes/*.css` | Token mutation only |

Import frontend templates through `supercss/supercss.css`. Do not recreate the import stack inside a framework target.

## Component Rule

Reusable styling belongs in `supercss/base/components.css`, not in a framework component stylesheet.

When adding or changing a component:

1. Update the reusable contract in SuperCSS.
2. Update the framework-neutral registry.
3. Demonstrate the pattern on the Angular component expo.
4. Keep Angular CSS limited to expo layout and spacing.
5. Avoid inline styles unless the value is genuinely dynamic.

## Do Not Reintroduce

- page catalogs
- app shells or route maps
- generated product/auth/dashboard stubs
- backend connectors, mock DBs, or content generators
- old SuperCSS docs, mixers, palettes, or external system experiments
