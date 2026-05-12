# Architecture Rules

> Source: `_rules/ruleset.md` — Rules 1, 2, 3, 4, 5, 16, 17, 18

---

## Rule 1 — This is a system, not a single application

This repository exists to organize reusable templates, shared tooling, connectors, visual systems, generators, and development workflows across multiple project types.

Do not treat it as one app. Do not optimize it for one framework.

## Rule 2 — The root layer is the source of truth

Shared rules, scripts, supercss themes, generators, connectors, and system-wide standards must live at the root level.

Nothing system-wide should be buried inside a template folder.

## Rule 3 — Frameworks are implementations, not the core

Angular, React, HTML, Ionic, Node, Express, and future stacks are interchangeable implementations that plug into the system.

The system does not belong to any one of them.

## Rule 4 — Shared logic must not be duplicated

Rules, tokens, connector contracts, generators, and reusable structures should be referenced, inherited, synced, or generated — not copy-pasted between templates.

## Rule 5 — Every template must remain modular

Templates should be isolated enough to evolve independently while still following shared system contracts.

A change to one template should not cascade into others.

## Rule 16 — Prefer composable systems over rigid abstractions

Systems should remain lightweight, understandable, and easy to expand without excessive complexity.

Three simple parts that compose cleanly beat one clever abstraction that nobody can extend.

## Rule 17 — The architecture should expand sideways

New frameworks, themes, generators, connectors, and tools should integrate cleanly without forcing major rewrites of existing systems.

Add a new column, not a new foundation.

## Rule 18 — This ruleset is iterative

The system is under active development. All structures, rules, conventions, and workflows are expected to evolve.

Rules may be revised, expanded, reorganized, simplified, replaced, or removed as better patterns emerge.

Treat current rules as active guidance, not permanent law.
