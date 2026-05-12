# SuperCSS Theme Mixer

Live visual control system for the SuperCSS token stack.
No dependencies. Plain HTML, CSS, JavaScript.

## Open the demo

```
supercss/mixer/theme-mixer.html
```

Open directly in a browser — no build step required.

## What it controls

| Dimension | Options | Mechanism |
|---|---|---|
| `theme` | base, material, fluent, glass, brutalist | Shape, surface, shadow, motion feel |
| `palette` | violet, blue, emerald, amber, rose | Primary color identity |
| `mode` | dark, light | Background and text contrast |
| `density` | compact, comfortable, spacious | Spacing and font size |
| `radius` | sharp, soft, round | Corner rounding |
| `motion` | none, subtle, normal | Transition speed |

## How it works

All dimensions are set as `data-*` attributes on the `<html>` element:

```html
<html
  data-theme="base"
  data-palette="violet"
  data-mode="dark"
  data-density="comfortable"
  data-radius="soft"
  data-motion="subtle"
>
```

CSS reads those attributes and overrides `--sc-*` custom properties:

```css
html[data-palette="emerald"] {
  --sc-primary: #10b981;
  --sc-primary-soft: rgba(16, 185, 129, 0.16);
}
```

Components consume only `--sc-*` tokens — they never change. The attributes do all the switching.

## JavaScript API

```js
// Apply a full config
SuperTheme.apply({ theme: "glass", palette: "rose", mode: "dark", density: "compact", radius: "round", motion: "none" });

// Update a single dimension
SuperTheme.update("palette", "blue");
SuperTheme.update("mode", "light");

// Get current config
const config = SuperTheme.get();

// Reset to defaults
SuperTheme.reset();
```

Config persists to `localStorage` under `supercss-theme`.

## Using in a project

### Static HTML
```html
<link rel="stylesheet" href="path/to/supercss/mixer/mixer.css">
<script src="path/to/supercss/mixer/theme-mixer.js"></script>
```

### Angular
```ts
// angular.json > styles
"styles": ["supercss/mixer/mixer.css"]
// angular.json > scripts
"scripts": ["supercss/mixer/theme-mixer.js"]
```

### React / Next.js
```ts
import 'supercss/mixer/mixer.css';
import 'supercss/mixer/theme-mixer.js'; // or import the JS and call SuperTheme.init()
```

## Adding a new palette

1. Add `[data-palette="mycolor"]` block to `mixer.css` (or create `palettes/mycolor.css`)
2. Add the option to your mixer UI select
3. Done — all components update automatically

## Rule

SuperCSS must be controllable through root attributes.
Theme, palette, mode, density, radius, and motion should be switchable without rewriting component CSS.
Components should consume semantic `--sc-*` variables only.
