# Next.js Template

This template is a Next.js-native component expo using App Router and local template content.

## Run

```bash
cd _templates/nextjs
npm install
npm run dev
```

## Notes

- Expo markup is local to this template in `app/expo-content.html`.
- `master` remains a reference for parity, not a runtime dependency.
- Theme state keys match other templates:
  - `sc:coreState`
  - `sc:fontState`
- The `CoreControl` in this template is React-based and keeps Save/Load behavior aligned with Angular and master.
