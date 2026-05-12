# AGENT.md
# Super Project System — Agent Operating Guide

---

## READ THIS FIRST

This repository is a **multi-framework Super Project Template System**.

It is not a single application.

Before you modify, generate, scaffold, or refactor anything in this repository —  
**read the rules.**

Required reading order:

1. This file (`AGENT.md`)
2. `_rules/ruleset.md` — the full system ruleset (18 rules, ~2 min read)
3. `_rules/architecture.md` — structural decisions
4. `_rules/project-boundaries.md` — per-project declarations and boundaries
5. `_rules/ai-agent-rules.md` — agent-specific behavior expectations
6. `supercss/base/notes.md` — visual system intent and import order

Do not skip this. Generated code that ignores system rules will be reverted.

---

## What this repository is

This system organizes:

- reusable templates
- shared rules
- visual systems (`supercss/`)
- generators (`_content/`)
- connectors (`_connectors/`)
- scripts (`_scripts/`)
- workflows and development standards

across multiple project types and technology stacks.

```
_rules/        → shared system rules
supercss/      → visual systems and themes
_connectors/   → reusable service/API contracts
_content/      → placeholder generators and schemas
_templates/    → framework/application templates
_shared/       → reusable assets/configs/utilities
_scripts/      → automation and generation scripts
```

---

## Core principle

**Frameworks are implementations. The root layer is the system.**

Angular, React, HTML, Ionic, Node, Express — these are interchangeable.  
They plug into shared contracts. They do not define the architecture.

---

## Styling

All frontend projects begin with `supercss/base/` unless another theme is explicitly selected.

Import order:
```css
@import 'supercss/base/tokens.css';
@import 'supercss/base/typography.css';
@import 'supercss/base/theme.css';
@import 'supercss/base/layout.css';
```

Theme packs (`material/`, `fluent/`, `glass/`, `brutalist/`) are token-level overlays — not replacements.

Avoid:
- raw color values in components
- framework-specific styling assumptions
- inconsistent spacing or motion

Prefer:
- semantic CSS variables
- reusable layout patterns from `layout.css`
- composable, framework-neutral structures

---

## Templates

Templates must:
- remain modular and replaceable
- avoid coupling to other templates
- follow shared system contracts
- declare their identity (type, theme, connectors, content source)

Do not:
- duplicate shared systems inside a template
- place reusable logic inside isolated template folders
- hardcode framework assumptions at the root level

---

## Content

Placeholder content comes from `_content/placeholders/`.  
Run `node _content/generate-content.js` from the project root to generate typed `.ts` output.

Do not add lorem ipsum inline to templates.

---

## Connectors

Connector contracts live in `_connectors/`.  
They are reusable across frameworks. Do not re-implement connector logic per template.

---

## Automation

Repeated work belongs in `_scripts/`.  
Scripts must remain understandable and leave traceable output.  
No hidden transformations.

---

## Agent checklist before acting

- [ ] Read `_rules/ruleset.md`
- [ ] Identified which shared systems are relevant
- [ ] Not duplicating logic that exists in the root layer
- [ ] Framework-specific code stays inside the template
- [ ] Following current `supercss/base/` conventions
- [ ] Generated output is traceable (comments, headers, or logs)
- [ ] Change preserves modularity — no cascading coupling introduced

---

## When uncertain

Preserve:
- simplicity
- modularity  
- traceability

Ask before assuming. A wrong assumption here cascades across every template that inherits from this system.

---

## Production Projects

The `production/` directory lives inside `project-to-any/production/` and contains actual user-created projects.

Production projects are **not** framework templates.

They describe:
- structure and routes
- content (JSON per route)
- branding (colors, logo, typography)
- assets
- connector selections
- deployment preferences
- generation instructions
- preferred and alternative stack outputs

without being tightly coupled to a single framework implementation.

**Production projects are intent containers. Templates are implementation targets.**

The compiler system (`project-to-any`) transforms production projects into stack-specific outputs using shared rules, templates, supercss, connectors, generators, and content systems.

### Agent rules for production projects

- Do not modify content, branding, or routes without explicit instruction — these are user definitions
- Do not couple a production project to a single framework unless the manifest explicitly requires it
- When generating output, follow the manifest's `stack.preferred` unless a `--target` override is given
- Override files (`overrides/theme.css`) must only redeclare tokens that differ from `supercss/base`
- Content JSON must remain semantic — no HTML, no presentational keys
- The `output/` directory is compiler-generated — never edit it manually
- Framework lock-in belongs in compiled output, not in the production project source

### Compiler flow

```
production project → manifest + routes + content + branding
        ↓
project-to-any compiler
        ↓
dist/{project-id}-{target}/
```

---

## Mock Database Rules

The system includes mock database examples in `_mockdb/` for:
- SQL
- NoSQL (MongoDB, Firestore)
- Redis
- JSON

Mock data exists for development, testing, template previews, API scaffolding, and UI layout validation.

All mock formats describe the same sample domain. IDs (`usr_001`, `prj_001`, etc.) are consistent across every format.

Do not create unrelated data per database type unless the storage model requires it.

- **SQL** — shows relational structure, FK constraints, join queries
- **NoSQL** — shows document structure, embedding vs referencing decisions
- **Redis** — shows cache/session/key-value patterns, TTLs, index sets
- **JSON** — shows frontend/API mock structure, response envelopes

Mock data should remain simple, readable, and reusable across templates.

When adding new mock data, maintain consistency across all formats.

---

## Iterative notice

This repository is under active development.  
Rules, structure, and conventions will evolve.  
Treat current rules as active guidance, not permanent law.  
Stay adaptable while respecting the current direction.
