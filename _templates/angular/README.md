# Angular Component Expo

This template is the runnable foundation test bench for the project-to-any component contract layer.

It intentionally contains:

- one Angular app
- one component expo page
- the core theme/font control
- SuperCSS imports

It intentionally does not contain:

- routing
- generated pages
- auth/app shells
- fake product/dashboard stubs
- generated content modules

## Setup

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Contract

The expo exists to test reusable component patterns. Reusable visual behavior belongs in `supercss/base/components.css`; Angular component CSS should stay limited to expo layout and spacing.
