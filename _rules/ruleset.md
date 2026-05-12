# SUPER PROJECT RULESET v0.1

---

1. This repository is a system, not a single application.
It exists to organize reusable templates, shared tooling, connectors, visual systems, generators, and development workflows across multiple project types.

2. The root layer is the source of truth.
Shared rules, scripts, supercss themes, generators, connectors, and system-wide standards must live at the root level.

3. Frameworks are implementations, not the core system.
Angular, React, HTML, Ionic, Node, Express, and future stacks are considered interchangeable implementations that plug into the larger system.

4. Shared logic should not be duplicated.
Rules, tokens, connector contracts, generators, and reusable structures should be referenced, inherited, synced, or generated whenever possible.

5. Every template must remain modular.
Templates should be isolated enough to evolve independently while still following shared system contracts.

6. Every generated project should declare:
- project type
- selected template
- selected supercss theme
- connectors used
- content source
- build/run configuration

7. Styling begins with supercss.
Frontend projects should start from `supercss/base` unless another visual pack is explicitly selected.

8. The `supercss/base` theme is the default visual foundation.
It represents the preferred default visual language, layout behavior, spacing, motion, density, and interaction style for generated projects.

9. Theme packs are lightweight extensions.
Material, Fluent, Glass, Brutalist, and future themes should act as visual overlays or overrides rather than heavy framework replacements.

10. Content should come from the content system.
Templates should avoid random inline lorem ipsum and instead use structured placeholder generators or reusable content sources.

11. Connectors are reusable contracts.
APIs, databases, authentication, storage, deployment, GitHub integrations, and external services should be documented and structured as reusable connector patterns.

12. Scripts should automate repeated work.
Project generation, content scaffolding, syncing, validation, structure checks, and documentation generation should be script-driven whenever practical.

13. Documentation is part of the architecture.
Major folders and systems should contain concise notes or readme files explaining their purpose, usage, and expectations.

14. AI agents and automation tools must read system rules before modifying the project.
Generated code and automated changes should follow the current shared conventions whenever possible.

15. Avoid hidden behavior.
Generated files, synced content, inherited styles, and automated transformations should remain understandable and traceable.

16. Prefer composable systems over rigid abstractions.
Systems should remain lightweight, understandable, and easy to expand without excessive complexity.

17. The architecture should expand sideways.
New frameworks, themes, generators, connectors, and tools should integrate cleanly without forcing major rewrites of existing systems.

18. This ruleset is iterative.
The system is under active development, and all structures, rules, conventions, and workflows are expected to evolve over time.

Rules may be revised, expanded, reorganized, simplified, replaced, or removed as development progresses and better patterns emerge.

Current rules should be treated as active guidance rather than permanent law.

---

_Source of truth for all `_rules/` files. Do not duplicate — reference this document._
