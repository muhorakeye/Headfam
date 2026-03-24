# GEMINI.md - HeadFam Africa Project Context

## Project Overview
HeadFam Africa is a Rwandan eco-construction company specializing in sustainable structures (resorts, campsites, lodges, etc.) built with local materials. The project is currently in **Phase 1: Frontend-only Rebuild**, with data hardcoded in `src/data/`. Phase 2 will involve integration with a FastAPI backend.

- **Primary Technologies:** React 19, TypeScript 5.9, Vite 8, Tailwind CSS 4 (via PostCSS), Framer Motion 12, React Router DOM 7.
- **Mission:** Sustainable construction, local employment, and community reinvestment (30% revenue donation).

---

## Core Mandates & Constraints
These rules are foundational and must be strictly followed for all changes.

### 1. Style & Syntax
- **No Em Dashes:** Never use em dashes (`—`) anywhere in the project (code, comments, or UI text). Use commas, periods, or rewrite the sentence.
- **Named Exports:** Use named exports for all components.
  - *Exceptions:* Service sub-pages, project detail pages, and the `HeroCarousel` use `export default`.
- **Typing:** Strict TypeScript. No `any` types. Component props must use an interface named `[ComponentName]Props`.
- **Component Size:** Keep components under 150 lines. Split into sub-components if they grow larger.

### 2. Design System & UI
- **Tailwind v4 Gotcha:** Always use the PostCSS path (`@tailwindcss/postcss`). Do **NOT** add `@tailwindcss/vite` to `vite.config.ts` as it is incompatible with Vite 8.
- **Color Palette:** Use only the custom theme colors defined in `src/index.css` (e.g., `bg-forest`, `text-amber`). Never use raw hex values or default Tailwind colors (indigo, purple, etc.).
- **Typography:** Use `font-display` (Playfair Display) for headings and `font-body` (DM Sans) for body text.
- **Spacing:** Adhere to the 8px base grid. Use standard Tailwind scales (e.g., `py-16`, `py-24`).
- **Animations:** Use keyframes defined in `src/index.css` (`fade-up`, `fade-in`) via Tailwind utilities for section entrances.

### 3. Content & Writing
- **Tone:** Professional, direct, and authentic to a Rwandan company. Avoid AI-sounding filler ("seamlessly", "leveraging").
- **Dates:** Use absolute dates (e.g., "March 2026"), never relative ("last month").

---

## Technical Architecture

### Directory Structure
- `src/components/ui/`: Atomic, reusable UI components.
- `src/components/layout/`: Global layout elements (Navbar, Footer, PageHero).
- `src/components/sections/`: Page-specific sections, organized by feature folder with an `index.ts` barrel file.
- `src/data/`: Centralized mock data. This is the single source of truth for Phase 1.
- `src/router/`: Configuration for 22+ routes using `createBrowserRouter`.
- `src/types/`: TypeScript interfaces (must align with future FastAPI schemas).

### Commands
- `npm run dev`: Start development server.
- `npm run build`: Type-check and build for production.
- `npm run lint`: Run ESLint.
- `npm run preview`: Preview production build.

---

## Development Workflow

### Adding a New Section/Component
1. Define the props interface.
2. Implement using Tailwind utilities and the established color palette.
3. Ensure named exports (unless in the exception list).
4. Add to the relevant barrel `index.ts` file.
5. Verify consistency with the design system (font sizes, spacing, button styles).

### Phase 2 Readiness
- All Phase 2 integration points are marked with `// TODO: [Phase 2]`.
- `src/utils/api.ts` contains the pre-configured Axios instance.
- Avoid transforming field names (FastAPI snake_case to Frontend camelCase) inside components; handle this at the API layer.

---

## Current Status (Phase 1)
- **Complete:** Foundation, Design System, Navbar/Footer, Homepage, About sub-pages, Community, Contact, architecture/consultancy/eco-construction service pages, and project detail pages.
- **Pending:** Generic Services/Projects listing pages, 404 page, real photography, and final normalization pass.
