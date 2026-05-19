# Ruleset

The project is narrowed to a component-contract foundation.

## Source Of Truth

- Intent and component contracts live in `project-to-any/templates/frontend/components/registry.json`.
- Visual behavior lives in `supercss/`.
- The Angular expo proves the contracts in one runnable page.

## Do

- add reusable CSS to SuperCSS first
- keep Angular component CSS limited to expo layout
- keep contracts framework-neutral
- prefer semantic classes over one-off styling

## Do Not

- add routes or page catalogs
- add generated product/auth/dashboard stubs
- add backend connectors or mock DB scaffolding
- add new framework targets before the component foundation is stable
