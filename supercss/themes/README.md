# supercss / themes

This is where project visual identity lives.

---

## What belongs here

- Color palettes
- Brand tokens (primary color, accent, logo tints)
- Project-specific surface colors
- Dark / light mode overrides
- Any visual decision that is specific to one project or product

---

## What does NOT belong here

- Layout behavior
- Spacing conventions
- Shape mutations
- Typography scale
- Design system structure

Those belong in `systems/`.

---

## Relationship to systems

```
base.css         →   neutral baseline
systems/*.css    →   design system conventions (shape, density, motion)
themes/*.css     →   project color and branding applied on top
```

A theme should be swappable without changing system behavior.
A system should be swappable without changing theme colors.
