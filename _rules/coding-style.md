# Coding Style

> Source: `_rules/ruleset.md` â€” Rules 12, 13, 15

---

## Rule 12 â€” Scripts should automate repeated work

Project generation, content scaffolding, syncing, validation, structure checks, and documentation generation should be script-driven whenever practical.

If you are doing the same setup step more than once, document it in the active foundation docs before adding automation.

## Rule 13 â€” Documentation is part of the architecture

Major folders and systems should contain concise notes or readme files explaining their purpose, usage, and expectations.

A directory with no explanation is incomplete architecture.

Docs belong alongside the systems they describe â€” not in a separate documentation silo.

## Rule 15 â€” Avoid hidden behavior

Generated files, synced content, inherited styles, and automated transformations must remain understandable and traceable.

If a file was generated, say so and say how.
If a style is inherited, say from where.
If a transform ran, leave a trace.

No magic. No invisible side effects.

## SuperCSS Token Control Rule

SuperCSS is controlled through the canonical `--sc-*` token contract.

Themes, modes, density, radius, and motion must be switchable by mutating `--sc-*` values without rewriting component CSS.

```html
<html data-theme="material" data-mode="light" data-density="comfortable">
```

Components must consume semantic `--sc-*` variables only; never raw values.

`supercss/supercss.css` is the import entrypoint and owns cascade layer order.

Any template that uses SuperCSS must respect this contract:

- Use `--sc-*` variables only in reusable components.
- Do not expose external naming systems like `--md-*`, `--fluent-*`, `--bootstrap-*`, or `--tailwind-*`.
- Do not put visual CSS declarations in framework markup.
- Reusable component behavior belongs in `supercss/base/components.css`.
