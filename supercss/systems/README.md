# supercss / systems

## The layering model

```
defaults.css   →   structural token defaults
base.css       →   neutral web/application baseline
systems/*.css  →   named design-system mutation layers
themes/*       →   project visual identity
```

**A design system is not the base.**
**A design system mutates the base.**
**A theme brands the result.**

---

## What each layer does

| Layer           | File(s)                         | Responsibility                                                                 |
|-----------------|---------------------------------|--------------------------------------------------------------------------------|
| Config          | `config/defaults.css`           | Structural tokens — spacing, type scale, layout dimensions. No color.          |
| Base            | `base/base.css`                 | Neutral internet-standard baseline. Works for any project. No opinions.        |
| System          | `systems/*.css`                 | Mutates the base to follow a named design system's conventions and rhythm.     |
| Theme           | `themes/*.css`                  | Project identity — palette, color, branding. Applied last.                     |

---

## Import order

```html
<link rel="stylesheet" href="supercss/config/defaults.css">
<link rel="stylesheet" href="supercss/base/base.css">
<link rel="stylesheet" href="supercss/systems/material.css">
<link rel="stylesheet" href="supercss/themes/project-theme.css">
```

---

## Rules for system files

- May modify structural defaults (radius, spacing, density, motion)
- May add design-system-specific conventions (elevation, shape, rhythm)
- Must not hardcode project colors or branding
- Must not replace the base contract — only extend or constrain it
- Must remain framework-agnostic
- Must be usable without a theme layer applied

---

## Available systems

| File            | Design system reference         |
|-----------------|---------------------------------|
| `material.css`  | Material Design 3 (Google)      |
| `bootstrap.css` | Bootstrap 5 conventions         |
| `fluent.css`    | Fluent Design (Microsoft)       |
| `apple.css`     | Apple HIG / macOS/iOS rhythm    |
| `terminal.css`  | Terminal / CLI-first interfaces |
