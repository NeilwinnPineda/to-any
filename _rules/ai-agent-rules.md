# AI Agent Rules

> Source: `_rules/ruleset.md` — Rule 14  
> Extended by: `AGENT.md` at the root of this repository

---

## Rule 14 — Agents must read system rules before modifying the project

AI agents and automation tools must read and respect the current system rules before generating code, modifying files, or introducing new structure.

Generated code and automated changes must follow current shared conventions whenever possible.

---

## Required reading before acting

1. `_rules/ruleset.md` — full system ruleset
2. `_rules/architecture.md` — structural rules
3. `_rules/project-boundaries.md` — per-project declarations and boundaries
4. `_rules/coding-style.md` — scripts, docs, traceability
5. `supercss/base/notes.md` — visual system intent, file responsibilities, import order
6. `AGENT.md` — high-level agent operating instructions

## SuperCSS base layer summary (as of 2026-05-12)

| File                        | Role                                                          |
|-----------------------------|---------------------------------------------------------------|
| `supercss/base/base.css`    | Normalization only. No colors, no themes. Framework-agnostic. |
| `supercss/base/tokens.css`  | Design tokens — spacing, radius, shadow, z-index, motion      |
| `supercss/base/theme.css`   | Component classes (btn, badge, input, card, modal, etc.)      |
| `supercss/base/typography.css` | Font stacks and type scale                                 |
| `supercss/base/layout.css`  | App shell, toolbar, sidebar, panels, grid/flex utilities      |
| `supercss/mixer/mixer.css`  | Attribute-driven token overrides (data-theme, data-palette…)  |
| `supercss/supercss.css`     | Single import entry point for the full system                 |

Import order: `base.css` → `tokens.css` → `typography.css` → `theme.css` → `layout.css` → `mixer.css` → themes → palettes

---

## Agent behavior expectations

**Before modifying the project:**
- Read the root rules
- Identify the relevant shared systems
- Avoid duplicating reusable logic
- Preserve modularity
- Keep framework-specific code isolated
- Follow current supercss conventions
- Prefer composable structures over rigid abstractions

**When uncertain:**
- Preserve simplicity
- Preserve modularity
- Preserve traceability
- Ask rather than assume

**Never:**
- Duplicate shared logic into templates
- Introduce hidden transformations
- Couple framework-specific behavior into the root system
- Treat a template as the core system
- Override shared tokens with raw values in components
