# Project Boundaries

> Source: `_rules/ruleset.md` — Rules 6, 7, 8, 9, 10, 11

---

## Rule 6 — Every generated project must declare its identity

Each project generated from this system must explicitly declare:

- **project type** — what kind of project it is (app, api, static site, etc.)
- **selected template** — which template folder it was generated from
- **selected supercss theme** — which visual pack is active (`base`, `material`, `fluent`, etc.)
- **connectors used** — which connector contracts are wired in
- **content source** — where its content comes from (generator, CMS, static, etc.)
- **build/run configuration** — how to install, build, and run it

This declaration lives in the project's own config or readme — not assumed from context.

## Rule 7 — Styling begins with supercss

All frontend projects start from `supercss/base/` unless another visual pack is explicitly chosen.

Do not start a project with a blank stylesheet or a third-party framework baseline.

## Rule 8 — supercss/base is the default visual foundation

`supercss/base/` represents the preferred default visual language, layout behavior, spacing, motion, density, and interaction style for generated projects.

It is not a neutral reset. It has a defined look and feel.

## Rule 9 — Theme packs are lightweight extensions

Material, Fluent, Glass, Brutalist, and future themes act as visual overlays or token overrides on top of base.

They are not separate systems. They do not replace base — they extend it.

## Rule 10 — Content comes from the content system

Templates must not use random inline lorem ipsum.

Use structured placeholder files, generated content, reusable schemas, and content generators from `_content/`.

Placeholder content exists to test layout, spacing, routing, and component behavior before real content is ready.

## Rule 11 — Connectors are reusable contracts

APIs, databases, authentication, storage, deployment, GitHub integrations, and external services must be documented and structured as reusable connector patterns inside `_connectors/`.

Connector definitions should remain reusable across multiple frameworks whenever practical.
