# supercss / material

## Intent

Material Design 3 influence layer on top of base.
Overrides base tokens to match Material's elevation, color, and motion system.

## What changes from base

- **Color**: replaces primary with MD3 seed-based tonal palette
- **Radius**: increases to MD3 values (extra-small 4px → full 28px scale)
- **Elevation**: replaces shadow tokens with MD3 elevation tiers using surface tint (color overlay, not shadow depth)
- **Motion**: replaces ease tokens with MD3 easing curves (standard, emphasized, decelerated, accelerated)
- **Typography**: replaces font scale with MD3 type scale (Display, Headline, Title, Body, Label)

## Token overrides (planned)

```css
/* material/tokens.css */
:root {
  --color-primary: /* MD3 primary */;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 28px;
  --duration-normal: 300ms;
  --ease-default: cubic-bezier(0.2, 0, 0, 1); /* MD3 standard */
}
```

## Files to create

- `tokens.css` — MD3 token overrides
- `theme.css`  — FAB, chips, snackbar, navigation rail
- `typography.css` — MD3 type scale
- `layout.css` — navigation rail + bottom bar patterns
