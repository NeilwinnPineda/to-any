# Coding Style

> Source: `_rules/ruleset.md` — Rules 12, 13, 15

---

## Rule 12 — Scripts should automate repeated work

Project generation, content scaffolding, syncing, validation, structure checks, and documentation generation should be script-driven whenever practical.

If you are doing the same setup step more than once, it belongs in `_scripts/`.

## Rule 13 — Documentation is part of the architecture

Major folders and systems should contain concise notes or readme files explaining their purpose, usage, and expectations.

A directory with no explanation is incomplete architecture.

Docs belong alongside the systems they describe — not in a separate documentation silo.

## Rule 15 — Avoid hidden behavior

Generated files, synced content, inherited styles, and automated transformations must remain understandable and traceable.

If a file was generated, say so and say how.
If a style is inherited, say from where.
If a transform ran, leave a trace.

No magic. No invisible side effects.

## SuperCSS Attribute Control Rule

SuperCSS must be controllable through root `data-*` attributes on the `<html>` element.

Theme, palette, mode, density, radius, and motion must be switchable without rewriting component CSS.

```html
<html data-theme="base" data-palette="violet" data-mode="dark"
      data-density="comfortable" data-radius="soft" data-motion="subtle">
```

Components must consume semantic `--sc-*` variables only — never raw values.

The mixer system (`supercss/mixer/`) implements this contract.
Any template that uses SuperCSS must respect it.
