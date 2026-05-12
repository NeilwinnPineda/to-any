# TO-ANY — Template System

A modular, framework-agnostic project template system built around a shared CSS design system (SuperCSS), reusable connectors, and framework-specific implementations.

---

## Structure

```
super-project/
├── supercss/               # Shared CSS design system
│   ├── base/               # Foundation layer (reset, tokens, theme, layout)
│   ├── mixer/              # Attribute-driven token system (data-theme, data-palette, etc.)
│   ├── themes/             # Theme overrides (material, fluent, glass, brutalist)
│   ├── palettes/           # Color palettes (violet, blue, emerald, amber, rose)
│   └── supercss.css        # Single entry point
├── _templates/             # Framework implementations
│   ├── angular/            # Angular 17 standalone template
│   └── express/            # Express/Node backend template
├── _connectors/            # Shared connector contracts (auth, api, db, github, deployment)
├── _mockdb/                # Mock database schemas (NoSQL, Redis)
├── _rules/                 # System-wide architecture and agent rules
└── _scripts/               # Generator and utility scripts
```

---

## SuperCSS

The shared CSS system that powers all templates. Attribute-driven theming via `data-theme`, `data-palette`, `data-mode`, `data-density`, `data-radius`, and `data-motion` on the `<html>` element.

### Base layer load order

```css
@import 'supercss/base/base.css';       /* normalization, reset, layout primitives */
@import 'supercss/base/tokens.css';     /* design tokens */
@import 'supercss/base/typography.css'; /* font scale */
@import 'supercss/base/theme.css';      /* component classes */
@import 'supercss/base/layout.css';     /* app shell, panels, grid */
```

### Themes

| Theme       | Character                                      |
|-------------|------------------------------------------------|
| `base`      | Precision tool. 6px radius, 120ms, flat.       |
| `material`  | MD3. 18px radius, tonal surfaces, 280ms.       |
| `fluent`    | Windows-native. 4px radius, snappy.            |
| `glass`     | Translucent. 18px radius, backdrop blur.       |
| `brutalist` | Zero radius, hard borders, offset shadows.     |

### Palettes

`violet` · `blue` · `emerald` · `amber` · `rose`

### Usage

```html
<html data-theme="base" data-palette="violet" data-mode="dark">
```

---

## Angular Template

Located at `_templates/angular/`. Angular 17 standalone, lazy-loaded routes, full page set.

Dev server: `ng serve --port 4201`
Log output: `C:\Temp\ng-serve.log`

Pages: home, about, services, pricing, products, blog, contact, faq, dashboard, profile, settings, notifications, messages, login, register, forgot-password, reset-password, onboarding, analytics, admin, portfolio, search, terms, privacy, cart, checkout, 404, 500.

---

## Rules

See `_rules/` for full system ruleset, architecture rules, agent rules, and naming conventions.
