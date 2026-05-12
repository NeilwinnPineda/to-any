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
5. `supercss/base/notes.md` — visual system intent and import order
6. `AGENT.md` — high-level agent operating instructions

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
