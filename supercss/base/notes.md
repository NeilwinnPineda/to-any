# supercss / base

## What this is

The foundational CSS layer for all projects in the TO-ANY template system.
Split into two concerns: normalization and visual defaults.

---

## File responsibilities

| File            | Purpose                                                                          |
|-----------------|----------------------------------------------------------------------------------|
| `base.css`      | Normalization, reset, typography defaults, form consistency, layout primitives, accessibility. No colors. No themes. |
| `tokens.css`    | All raw values: color scale, spacing, radius, shadow, z-index, motion           |
| `theme.css`     | Component classes using base tokens: buttons, badges, inputs, cards, modals, etc. |
| `typography.css`| Font stacks, heading scale, body text, code, labels                             |
| `layout.css`    | App shell, toolbar, sidebar, panels, grid/flex utilities                        |

---

## Import order

```css
@import 'supercss/base/base.css';
@import 'supercss/base/tokens.css';
@import 'supercss/base/typography.css';
@import 'supercss/base/theme.css';
@import 'supercss/base/layout.css';
```

`base.css` must come first — it resets box-model and element defaults that all other files build on.

---

## base.css design intent

Not a theme. Not branding. An internet-standard foundation safe for:
- dashboards
- landing pages
- admin panels
- documentation sites
- web apps
- studio tools

Includes: universal reset, typography scale, form normalization, media defaults,
table structure, accessibility (focus-visible, reduced-motion, touch targets),
scroll behavior, layout primitives (container, stack, grid, row), and
visibility helpers (hidden, sr-only).

**Does not include:** colors, shadows, gradients, animations, branding, component styling.

Depends on: `supercss/config/defaults.css` for CSS variable fallbacks.

---

## theme.css design intent

- Dark-first
- Generic component system — no Material, Fluent, or framework idioms
- Medium-density spacing
- Semantic color tokens only — no raw hex in components
- Tabs, badges, alerts, toggles, progress, avatar, skeleton, modal, dropdown, tooltip

---

## Rules

- Never override tokens with raw values in component styles.
- Themes layer on top — they override tokens, not component markup.
- Keep every file independently importable.
- Do not couple to any framework (Angular, React, etc.).
- `base.css` is framework-agnostic and must stay that way.
