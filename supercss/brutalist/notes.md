# supercss / brutalist

## Intent

Raw, intentional, high-contrast aesthetic layer on top of base.
No softness. Functional over decorative. Anti-polish as a design choice.

## What changes from base

- **Color**: high contrast monochrome or bold accent on white/black surfaces
- **Radius**: all radius tokens set to 0 — hard corners everywhere
- **Borders**: thick, visible, no-nonsense — 2px minimum
- **Shadows**: flat or stark offset box shadows instead of blurred ambient
- **Typography**: heavier weights, tighter spacing, larger scale
- **Motion**: instant or minimal — transitions at 0ms or 50ms max
- **Surfaces**: flat fills, no depth layering — everything reads at the same elevation

## Token overrides (planned)

```css
/* brutalist/tokens.css */
:root {
  --radius-sm:  0;
  --radius-md:  0;
  --radius-lg:  0;
  --radius-xl:  0;
  --radius-2xl: 0;
  --radius-full: 0;

  --border-subtle:  #333;
  --border-default: #555;
  --border-strong:  #fff;

  --shadow-sm: 2px 2px 0 #fff;
  --shadow-md: 4px 4px 0 #fff;
  --shadow-lg: 6px 6px 0 #fff;

  --duration-fast:   0ms;
  --duration-normal: 50ms;

  --font-weight-normal:   500;
  --font-weight-medium:   600;
  --font-weight-semibold: 700;
  --font-weight-bold:     800;
}
```

## Notes

- Works best with a clear brand identity — random brutalism looks broken, intentional brutalism looks like craft
- Typography choices are critical — pair with a strong display typeface
- Not suitable for accessibility-sensitive or enterprise contexts without additional contrast tuning

## Files to create

- `tokens.css` — brutalist token overrides
- `theme.css`  — stark buttons, thick borders, offset card shadows
