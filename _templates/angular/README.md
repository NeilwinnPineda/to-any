# Angular Template

Part of the Super Project Template System.

## Stack

- Angular 17 (standalone components, signals-ready)
- SuperCSS base theme
- Placeholder content from `_content/`

## Setup

```bash
npm install
npm run content:generate   # generates src/content/generated/*.ts from _content/placeholders
npm start                  # http://localhost:4200
```

## Configuration

| File | Purpose |
|---|---|
| `project.config.json` | Declares template identity, theme, connectors |
| `src/environments/environment.ts` | API URL and dev config |
| `src/environments/environment.prod.ts` | Production config |

## API connection

This template is **not coupled to any backend**.

Set the API base URL in `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

Inject `HttpClient` into any service that needs to call the API. No backend is required for `ng serve` to work.

## Styling

Styles flow from `supercss/base/` into `src/styles.css`.

Theme override: swap the import in `styles.css` to another supercss pack (e.g. `supercss/material/`).

## Content

Placeholder content is generated from `_content/placeholders/*.json`.

Run `npm run content:generate` to refresh `src/content/generated/*.ts` after editing placeholders.

Do not edit generated files directly.

## Adding pages

```bash
# Add a route in src/app/app.routes.ts
# Create src/app/pages/<name>/<name>.component.ts
# Use standalone: true — no NgModule needed
```
