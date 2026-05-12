# Sample Project — Build Instructions

## What this project is

A demonstration production project for the project-to-any compiler system.

It describes user intent — routes, content, branding, connectors — without being coupled to a framework.

---

## Build commands

```bash
# Build for MEAN stack (MongoDB + Express + Angular + Node)
project-to-any build production/sample-project --target mean

# Build for Next.js
project-to-any build production/sample-project --target next

# Build for static HTML
project-to-any build production/sample-project --target static-html

# Build for React + Express
project-to-any build production/sample-project --target react-express
```

Output lands in `../../dist/sample-project-{target}/`.

---

## Project files

| File / Folder | Purpose |
|---|---|
| `production.manifest.json` | Project identity, stack preference, theme, deployment config |
| `routes.json` | Page routes, auth requirements, content references |
| `content/` | Page-level content in JSON — one file per route |
| `assets/` | Images, fonts, static files |
| `branding/branding.json` | Colors, logo, typography, social links |
| `connectors/connectors.json` | Active connector selections |
| `overrides/theme.css` | Project-level CSS token overrides on top of supercss/base |
| `output/` | Compiler output — do not edit manually |

---

## Customising this project

1. Edit `production.manifest.json` to set your preferred stack and theme
2. Edit `routes.json` to define your pages
3. Edit files in `content/` to write your page content
4. Edit `branding/branding.json` with your brand colors and logo paths
5. Drop assets into `assets/`
6. Add connector IDs to `connectors/connectors.json` if you need a database, auth, etc.
7. Use `overrides/theme.css` to adjust supercss tokens for this project
8. Run the build command for your target stack

---

## Notes

- Content files in `content/` are not tied to a framework — the compiler maps them to the appropriate component model
- Overrides only change what differs from supercss/base — do not copy the full token set
- The `output/` directory is generated — commit it only if you want reproducible build snapshots
