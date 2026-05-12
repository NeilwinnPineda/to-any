# Production Projects

> Part of the Super Project ruleset. See `_rules/ruleset.md` for the full system context.

---

## What a production project is

A production project is a **user intent container**.

It lives in `project-to-any/production/` and describes:

- project identity and type
- routes and page structure
- page content (JSON, per route)
- assets and static files
- branding (colors, logo, typography)
- connector selections
- project-level theme overrides
- deployment preferences
- preferred and alternative stack outputs
- generation instructions

Production projects are **not** framework implementations.
They are definitions that the compiler transforms into stack-specific outputs.

---

## Production project vs template

| | Production Project | Template |
|---|---|---|
| Lives in | `project-to-any/production/` | `_templates/` |
| Contains | Intent, content, routes, branding | Framework scaffolding |
| Framework-coupled | No (by default) | Yes |
| Modified by users | Yes | No (shared baseline) |
| Compiled into | Target stack output | Directly runnable |
| Versioned per project | Yes | Shared across projects |

---

## Compiler flow

```
production project
      ↓
shared project definition (manifest + routes + content + branding)
      ↓
compiler pipeline (project-to-any)
      ↓
target stack output (dist/)
```

**Example:**
```bash
project-to-any build production/sample-project --target mean
# → dist/sample-project-mean/

project-to-any build production/sample-project --target next
# → dist/sample-project-next/

project-to-any build production/sample-project --target static-html
# → dist/sample-project-static-html/
```

---

## production.manifest.json contract

Every production project must declare:

| Field | Required | Purpose |
|---|---|---|
| `id` | Yes | Unique project identifier (kebab-case) |
| `name` | Yes | Display name |
| `version` | Yes | Project version |
| `type` | Yes | Project category (see project types below) |
| `stack.preferred` | Yes | Default compilation target |
| `stack.alternatives` | No | Other valid targets |
| `theme.base` | Yes | Base supercss theme (`supercss/base` by default) |
| `theme.override` | No | Path to project-level CSS override file |
| `routes` | No | Path to routes.json |
| `contentSource` | No | Path to content directory |
| `branding` | No | Path to branding.json |
| `connectors` | No | Path to connectors directory |
| `deployment` | No | Port, target environment, env name |
| `meta.createdAt` | Yes | Creation date |

---

## Project types

| Type | Description |
|---|---|
| `sample-project` | Demonstration / reference project |
| `business-app` | Business application with auth and data |
| `content-site` | Content-first site (blog, marketing, portfolio) |
| `management-system` | Admin panel, CMS, internal dashboard |
| `internal-tool` | Team or ops tooling |
| `client-project` | Client delivery project |
| `sandbox-project` | Experimentation, prototyping |
| `custom-project` | Uncategorized — define your own structure |

---

## Content rules

- Content lives in `content/` as JSON files, one per route
- Content files are not tied to a framework — the compiler maps them to component models
- Content keys should be semantic (`hero`, `sections`, `team`) not presentational (`topDiv`, `leftPanel`)
- Do not embed HTML in content JSON — describe structure and data, not markup

## Branding rules

- All brand values live in `branding/branding.json`
- Colors declared in branding override `supercss/base` tokens via `overrides/theme.css`
- Do not hardcode brand colors in component code — reference tokens

## Override rules

- `overrides/theme.css` loads after `supercss/base` — only declare what changes
- Do not copy the full token set from base — only override what this project needs
- Override files are CSS custom property redeclarations on `:root`

## Output rules

- `output/` is populated by the compiler — do not edit manually
- Commit `output/` only if reproducible build snapshots are required
- Final distributable output lands in `../../dist/{project-id}-{target}/`

---

## Architectural direction

Production projects should remain framework-agnostic unless the project itself requires a specific framework.

The same production project should be compilable into multiple target stacks without structural changes to the project definition.

Framework lock-in belongs in the compiled output, not in the production project source.
