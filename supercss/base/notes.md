# supercss / base

## What this is

The default visual language for all projects in this template system.
Not neutral. Not a blank slate. It has an opinion.

## Design intent

- Dark UI by default
- Medium-density spacing — comfortable, not cramped, not spacious
- Soft Material-inspired surfaces — layered depth, not flat
- Rounded corners throughout (4–24px scale)
- Subtle shadows — elevation cues, not decoration
- Restrained motion — only when it communicates state change
- Toolbar-first layout — top bar anchors the app, sidebar organizes nav
- Panelized interfaces — content lives in discrete, bordered panels
- Semantic color tokens — no raw hex in components
- Low visual noise — muted secondary text, quiet borders

## File responsibilities

| File            | Purpose                                                    |
|-----------------|------------------------------------------------------------|
| `tokens.css`    | All raw values: color scale, spacing, radius, shadow, z-index, motion |
| `theme.css`     | Applies tokens to HTML elements and reusable component classes |
| `typography.css`| Font stacks, heading scale, body text, code, labels        |
| `layout.css`    | App shell, toolbar, sidebar, panels, grid/flex utilities   |

## Import order

```css
@import 'supercss/base/tokens.css';
@import 'supercss/base/typography.css';
@import 'supercss/base/theme.css';
@import 'supercss/base/layout.css';
```

## Rules

- Never override tokens with raw values in component styles.
- Themes layer on top — they override tokens, not component markup.
- Keep every file independently importable.
- Do not couple to any framework (Angular, React, etc.).
