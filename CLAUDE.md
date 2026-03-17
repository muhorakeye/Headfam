# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check (tsc -b) then build with Vite
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

No test framework is configured.

## Architecture

Minimal React 19 + TypeScript + Vite + Tailwind CSS starter. The app currently has a single `App` component.

- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`
- Styles: `src/index.css` imports Tailwind directives; `src/App.css` contains legacy template styles
- Build output: `dist/`

## Key Config Notes

- **TypeScript**: Strict mode with `noUnusedLocals`, `noUnusedParameters`, and `noUncheckedSideEffectImports` enabled. Two tsconfig files: `tsconfig.app.json` (src/) and `tsconfig.node.json` (build tools).
- **ESLint**: Uses flat config format (`eslint.config.js`) with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins.
- **Vite**: Uses `@vitejs/plugin-react` with Oxc for JSX compilation.
- **Tailwind**: v4, configured via PostCSS pipeline.
