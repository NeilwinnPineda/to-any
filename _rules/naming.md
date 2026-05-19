# Naming

Names should describe reusable contracts, not generated page intent.

## Active Patterns

- SuperCSS public variables use `--sc-*`.
- SuperCSS component classes use semantic names such as `.btn`, `.card`, `.alert`, `.table`, and `.pagination`.
- Component registry entries use stable component concepts: `button`, `form-control`, `feedback`, `loading`, `data-display`.
- Angular expo files stay under `_templates/angular/src/app/pages/components/` unless they support the expo shell or theme control.

## Avoid

- page-specific class names
- generated `.inl-*` styling hooks
- target-specific token prefixes
- names that imply app shells, fake products, routes, or production outputs during the foundation phase
