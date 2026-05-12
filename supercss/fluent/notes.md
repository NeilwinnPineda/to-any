# supercss / fluent

## Intent

Microsoft Fluent Design 2 influence layer on top of base.
Targets app-like interfaces with Windows-native visual cues.

## What changes from base

- **Color**: Fluent accent palette (blue-dominant, high contrast on dark)
- **Radius**: Fluent uses smaller corners (2–8px) for controls, larger (8–12px) for containers
- **Surfaces**: Acrylic/Mica-inspired — layered translucent surfaces with subtle blur (where supported)
- **Shadow**: Fluent uses directional depth shadows rather than soft ambient
- **Motion**: Fluent motion is snappier — uses Exponential easing, shorter durations
- **Controls**: Fluent-style toggle switches, command bars, breadcrumbs

## Token overrides (planned)

```css
/* fluent/tokens.css */
:root {
  --color-primary: #0078d4; /* Fluent blue */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --duration-fast: 83ms;
  --duration-normal: 167ms;
  --ease-default: cubic-bezier(0.1, 0.9, 0.2, 1); /* Fluent decelerate */
}
```

## Files to create

- `tokens.css`   — Fluent token overrides
- `theme.css`    — command bar, breadcrumb, pivot, toggle patterns
- `layout.css`   — content pane, command bar at top
