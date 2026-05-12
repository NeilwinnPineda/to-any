# supercss / glass

## Intent

Glassmorphism visual layer on top of base.
For interfaces that want ambient depth — translucent surfaces, blurred backdrops, soft luminous borders.

## What changes from base

- **Surfaces**: `backdrop-filter: blur()` replaces solid surface fills
- **Borders**: luminous 1px borders using semi-transparent white/color
- **Shadows**: soft glowing outlines instead of directional shadows
- **Color**: base palette shifts lighter — glass only works over a rich background image/gradient
- **Backgrounds**: expects a rich background gradient or image behind the app shell

## Token overrides (planned)

```css
/* glass/tokens.css */
:root {
  --bg-surface:  rgba(255, 255, 255, 0.06);
  --bg-elevated: rgba(255, 255, 255, 0.10);
  --bg-overlay:  rgba(255, 255, 255, 0.14);
  --border-subtle:  rgba(255, 255, 255, 0.08);
  --border-default: rgba(255, 255, 255, 0.14);
  --border-strong:  rgba(255, 255, 255, 0.22);
  --shadow-md: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08);
  --radius-lg: 16px;
  --radius-xl: 20px;
}
```

## Notes

- Requires a background layer (gradient, image, video) — glass renders flat on solid backgrounds
- `backdrop-filter` has limited browser support; always test
- Performance cost is real — avoid stacking more than 2–3 blurred layers

## Files to create

- `tokens.css` — glass token overrides
- `theme.css`  — glassy surface, panel, card, button treatments
