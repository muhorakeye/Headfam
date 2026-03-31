# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

BEFORE STARTING ANY TASK: Read this entire file.
PROGRESS.md is significantly outdated. The "What Is Done" and "What Is Pending" sections in this file are authoritative. Do not rely on PROGRESS.md.
Never build a feature that is already marked complete in this file.
Always obey the Phase 2 integration rules in this file.
Never use em dashes anywhere in this project.

---

## Project Overview

HeadFam Africa is a Rwandan eco-construction company. They build sustainable structures (resorts, campsites, lodges, coffee shops, culture centers, eco-homes) using local materials. They hire workers from low-income families near each build site and donate 30% of revenue to community programs. The site includes a donation feature for external supporters.

This is a frontend-only rebuild of headfamafrica.com. All data is currently hardcoded in src/data/. Backend integration (FastAPI) comes in Phase 2.

---

## Tech Stack

- React 19.2.4
- TypeScript 5.9.3 (strict mode)
- Vite 8.0.0 with @vitejs/plugin-react
- Tailwind CSS 4.2.1 via PostCSS (`@tailwindcss/postcss` in postcss.config.js)
- react-router-dom 7.13.1 (createBrowserRouter)
- framer-motion 12.38.0 (entrance animations on service/architecture pages)
- axios 1.13.6 (installed, not yet used — ready for Phase 2)

No test framework is configured.

**Tailwind v4 gotcha:** The Vite plugin (`@tailwindcss/vite`) does not support Vite 8.
Always use the PostCSS path. Do not add `@tailwindcss/vite` to vite.config.ts.

---

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Type-check with tsc -b, then build with Vite
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

Deployed to Netlify. `netlify.toml` at the repo root sets `publish = "dist"` and includes a
`/*` -> `/index.html` (200) redirect rule so React Router handles all client-side routes.

---

## Project Structure

```
src/
  assets/images/       # Placeholder for real photography (Phase 2)
  components/
    ui/                # Atomic components: Button, Badge, Card, SectionLabel
    layout/            # Page-level components: Navbar, Footer, PageHero
    sections/          # Section components organized by page (Home/, Donate/, etc.)
                       # Each subfolder has an index.ts barrel. Top-level index.ts
                       # re-exports everything: import { ImpactStats } from '../components/sections'
  data/                # All dummy data. Single place to swap for API calls in Phase 2.
  hooks/               # useScrollPosition, useIntersectionObserver
  pages/               # One file per route. Orchestrates layout and sections.
    about/             # Sub-pages for the About section (WhoWeAre, OurProfile, OurTeam, OurPolicy)
    services/          # Full service pages (EcoConstruction, ArchitectureDesign, Consultancy)
    projects/          # Specific project detail pages (KinigiWomensVillage, MasakaSweetApartment, NobleCheerResort, BambinoSuperCity)
  router/              # createBrowserRouter config with 22 routes and ScrollToTop in Layout. All pages are lazy-loaded via React.lazy + Suspense.
  types/               # TypeScript interfaces that must stay in sync with FastAPI schemas
  utils/               # constants.ts (company info, nav links), formatters.ts, api.ts
  App.tsx              # RouterProvider wrapper
  index.css            # Tailwind import + @theme design tokens
  main.tsx             # React entry point, do not touch
```

### Barrel export pattern

`src/components/sections/index.ts` only re-exports the six Home sections. All other section
components (architecture, ecoconstruction, consultancy, Projects/*, Community, About) are
imported directly in their page files. Do not add non-Home sections to the top-level barrel.

`src/components/sections/Contact/`, `Services/`, `Impact/`, and `Donate/` directories exist with
placeholder `index.ts` files but contain no components yet.

`src/components/sections/ImpactStats.tsx` at the root of sections/ is a stale leftover. The
canonical component is `src/components/sections/Home/ImpactStats.tsx`. Do not import from
the root-level file.

`src/components/sections/About/WhoWeAreSection.tsx` is a dedicated section component used by
the WhoWeAre page alongside the sections defined directly in `src/pages/about/WhoWeAre.tsx`.

---

## Design System

### Colors (defined in src/index.css @theme block)

```
--color-forest:       #1a6b2f   Primary green, buttons, active states
--color-forest-dark:  #0f4520   Hover states, footer backgrounds
--color-forest-light: #e8f5ec   Light green section backgrounds
--color-amber:        #d4820a   Accent, CTAs, Donate link
--color-amber-light:  #fdf3e0   Warm section backgrounds
--color-charcoal:     #1a1a1a   Body text, footer background
--color-stone:        #f5f2ee   Page background (warm off-white)
--color-muted:        #6b7280   Secondary text, captions
```

Use Tailwind utilities: `bg-forest`, `text-amber`, `border-charcoal`, etc.

### Fonts (loaded from Google Fonts in index.html)

```
--font-display: 'Playfair Display', Georgia, serif    Headings, logo
--font-body:    'DM Sans', system-ui, sans-serif      Body, UI, labels
--font-mono:    'DM Mono', monospace                  Stats, numbers, codes
```

Use Tailwind utilities: `font-display`, `font-body`, `font-mono`.

### Animations

Two keyframes are defined in `src/index.css` and available as Tailwind utilities:
- `animate-[fade-up_...]` — fades in while translating up from 32px
- `animate-[fade-in_...]` — opacity fade only

Use these for section entrances. Do not define new keyframes in component files.

### Spacing

8px base grid. Use the Tailwind scale only. No arbitrary values like `p-[13px]` unless a
specific pixel value is functionally required (e.g., `h-[72px]` for the navbar height).

---

## UI Consistency Rules

After building each page, run a normalization check before moving
to the next page. Check for:
- Font sizes match the scale defined in index.css
- Spacing between sections is consistent (use py-16 or py-24 for
  sections, never arbitrary values)
- Button styles match the Button component exactly, no one-off
  styled buttons
- Colors come from CSS custom properties only, never raw hex values
  or Tailwind default colors like indigo, purple, blue, or gray
  outside the defined palette
- Card styles match the Card component exactly
- Section labels use the SectionLabel component, not custom text

After ALL pages are built, run a final normalization pass across
the entire site with this prompt:
"Normalize the entire site. All pages and sections were built at
different times. Check for inconsistencies in font sizes, spacing,
button styles, and color usage. Everything must match the design
tokens in src/index.css exactly. Fix any drift without changing
layout or content."

---

## Component Rules

- Named exports for all components. Never `export default` for components.
  Exception: service sub-pages (`EcoConstruction`, `ArchitectureDesign`, `Consultancy`), project
  detail pages (`KinigiWomensVillage`, `MasakaSweetApartment`, `NobleCheerResort`, `BambinoSuperCity`), and Community
  section components use `export default` and are imported via `@ts-ignore`. Do not change this pattern.
- Props typed with an interface named `[ComponentName]Props`.
- No `any` types, ever.
- No inline styles. Tailwind classes only (with the arbitrary value exception above).
- Components stay under 150 lines. Split into sub-components if larger.
- Every component that renders data must handle loading, error, and empty states
  (relevant now for when Phase 2 API calls replace the dummy data arrays).
- Comments explain why, not what.
- File structure order: imports, then types, then component, then export.

---

## What Is Done

### Phase 1 Foundation
- Project structure and folder layout
- Design tokens in src/index.css (@theme block)
- TypeScript types: Service, Project (impact optional), TeamMember
- Dummy data: 11 services, 3 projects, 4 team members, 4 impact stats
- Hooks: useScrollPosition, useIntersectionObserver
- Utils: constants.ts, formatters.ts, api.ts (axios instance ready for Phase 2)
- Router: 22 routes total. Layout wraps all routes with Navbar, Footer, and ScrollToTop. Routes include `/book-consultation` and `/donate` (fully built), plus generic dynamic routes `/services/:serviceId` and `/projects/:projectId` (still shells). Note: `AboutPage.tsx` exists in `src/pages/` as a placeholder shell but has no router entry -- there is no `/about` top-level route.
- Favicon: changed to logo.png

### Components
- Navbar: always white (not transparent), shadow appears after 80px scroll, Services AND About
  dropdowns on hover, mobile animated menu, active link underline, aria attributes.
  "Book a Consultation" and "Donate" are hardcoded CTAs in Navbar.tsx — they are NOT in
  `NAV_LINKS`. Add standard nav links to `constants.ts`; touch Navbar.tsx only for CTA changes.
- Footer: 4-column responsive (1 col mobile, 2 col tablet, 4 col desktop), square social
  icon buttons, all internal links use react-router-dom Link

### Homepage Sections (all complete)
- HeroCarousel: full-viewport image slider, 6 real photos from `src/assets/Hero/`, auto-advances
  every 5s (pauses on hover), prev/next buttons, dot indicators, static text overlay, left
  gradient scrim. Exception: uses `export default` (not a named export) because the
  `@ts-ignore` import in HomePage.tsx predated the type setup.
- ImpactStats: scroll-triggered count-up animation with cubic ease-out, cards stagger by 120ms
- WhatWeBuild: 8-service grid with inline SVG icons, scroll-triggered stagger animation,
  green-to-gold CTA button linking to `/contact`
- OurWork: 3-column mosaic bento grid using headfam6/7/8.jpeg, full-bleed image cards,
  hover zoom effect, gold VIEW PROJECT button
- SupportOurWork: two-column layout, left CTA with two pill buttons, right 2x2 stat grid
- DonateBanner: reusable donate CTA banner (`.tsx`, named export)

### About Sub-pages (all complete, under src/pages/about/)
- WhoWeAre: hero, Work Performance section, tabbed History/Mission/Vision, timeline, CTA strip
- OurProfile: hero, mission/vision text, 3 key stats
- OurTeam: hero, placeholder cards grid
- OurPolicy: hero, 3 policy cards with left green border

### Service Sub-pages (all complete, under src/pages/services/)
Routes: `/services/eco-construction`, `/services/architecture-design`, `/services/consultancy`
Section components live in `src/components/sections/ecoconstruction/`, `src/components/sections/architecture/`, `src/components/sections/consultancy/`.
- EcoConstruction: EcoHero (framer-motion entrance), EcoServices, EcoProcess (vertical timeline), EcoWhyUs (bento grid), EcoProjects (full-bleed image overlay cards), EcoCTA
- ArchitectureDesign: ArchHero, ArchServices, ArchProcess, ArchWhyUs, ArchProjects, ArchCTA
- Consultancy: ConsultancyHero, ConsultancyServices, ConsultancyProcess, ConsultancyWhyUs, ConsultancyProjects, ConsultancyCTA

### Pages (complete)
- CommunityPage: CommunityHero, CommunityMission, CommunityImpact, CommunityPrograms, CommunityStories, CommunityJoin
- ContactPage: split form/info layout, WhatsApp CTA, social links, maps embed
- Donate (`/donate`, `src/pages/Donate.tsx`): donation tiers UI with framer-motion
- BookConsultation (`/book-consultation`, `src/pages/BookConsultation.tsx`): booking inquiry form with framer-motion

### Project Detail Pages (all 4 complete, under src/pages/projects/)
Routes: `/projects/kinigi-womens-village`, `/projects/masaka-sweet-apartment`, `/projects/noble-cheer-resort`, `/projects/bambino-super-city`
Section components live in `src/components/sections/Projects/kinigiWomensVillage/`, `.../masakaSweetApartment/`, `.../nobleCheerResort/`, `.../bambinoSuperCity/`.
KWV, MSA, NCR each have: Hero, Overview, Gallery, Impact, Services, Location, CTA sections.
BambinoSuperCity has: BSCHero, BSCOverview, BSCServices, BSCImpact, BSCGallery (no Location or CTA yet).
Note: these pages use their own hardcoded section data, independent of `src/data/projects.ts`.

### Pages (placeholder shells exist, need full content)
ServicesPage, ServiceDetailPage (`/services/:serviceId`), ProjectsPage,
ProjectDetailPage (`/projects/:projectId`), BookingPage (`/booking`), NotFoundPage

Note: `DonatePage.tsx` and `BookingPage.tsx` in `src/pages/` are old shells. `DonatePage.tsx` is not
in the router at all. `BookingPage.tsx` is at `/booking` but still a shell.

---

## What Is Pending

### Inner Pages (placeholder shells exist but need full content)
Services, ServiceDetail (generic `/services/:serviceId`), Projects, ProjectDetail (generic `/projects/:projectId`), Booking, 404

### Other
- Real photography (replace placeholder images)
- Final normalization pass across all pages

---

## Phase 2 Integration Rules

All dummy data lives in src/data/. That is the only place to change when wiring up API calls.

All Phase 2 integration points are marked in the code with: `// TODO: [Phase 2]`

src/utils/api.ts has the axios instance pre-configured with:
- baseURL reading from `import.meta.env.VITE_API_URL`
- Fallback to `http://localhost:8000`
- Content-Type: application/json header

TypeScript types in src/types/ must stay in sync with FastAPI Pydantic schemas.
FastAPI returns snake_case JSON. Handle the camelCase transformation at the API
layer in Phase 2. Never transform field names inside the types files or components.

---

## Writing Rules

These apply to ALL user-facing text, comments, and documentation in this project.

- Never use em dashes. Use a comma, a period, or rewrite the sentence.
- No AI-sounding filler phrases ("seamlessly", "leveraging", "robust", "delve into", etc.).
- All user-facing copy should sound like a real Rwandan company wrote it, not a template.
- Dates are absolute, never relative ("March 2026", not "last month").
- Never use Tailwind default colors outside the defined palette
  (no indigo, purple, blue, violet, or default gray shades).
- All colors must come from the CSS custom properties defined
  in src/index.css.
