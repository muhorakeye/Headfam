# CLAUDE.md

BEFORE STARTING ANY TASK: Read this entire file.
Check PROGRESS.md to understand what is done and what is next.
Never build a feature that is already marked complete in PROGRESS.md.
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
- Tailwind CSS 4.2.1 via PostCSS (@tailwindcss/postcss in postcss.config.js)
- react-router-dom 7.13.1 (createBrowserRouter)
- axios 1.13.6 (installed, not yet used — ready for Phase 2)

No test framework is configured.

---

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Type-check with tsc -b, then build with Vite
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
src/
  assets/images/       # Placeholder for real photography (Phase 2)
  components/
    ui/                # Atomic components: Button, Badge, Card, SectionLabel
    layout/            # Page-level components: Navbar, Footer, PageHero
    sections/          # Reusable multi-component blocks: ImpactStats, DonationCTA
  data/                # All dummy data. Single place to swap for API calls in Phase 2.
  hooks/               # useScrollPosition, useIntersectionObserver
  pages/               # One file per route. Orchestrates layout and sections.
  router/              # createBrowserRouter config with all 11 routes and ScrollToTop
  types/               # TypeScript interfaces that must stay in sync with FastAPI schemas
  utils/               # constants.ts (company info, nav links), formatters.ts, api.ts
  App.tsx              # RouterProvider wrapper
  index.css            # Tailwind import + @theme design tokens
  main.tsx             # React entry point, do not touch
```

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

### Spacing

8px base grid. Use the Tailwind scale only. No arbitrary values like `p-[13px]` unless a
specific pixel value is functionally required (e.g., `h-[72px]` for the navbar height).

---

## Component Rules

- Named exports for all components. Never `export default` for components.
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
- Router: createBrowserRouter with all 11 routes and ScrollToTop in a Layout wrapper

### Components
- Navbar: transparent over dark hero, solid white after 80px scroll, Services dropdown
  on hover, mobile max-height animated menu, active link underline, aria attributes
- Footer: 4-column responsive (1 col mobile, 2 col tablet, 4 col desktop), square social
  icon buttons, all internal links use react-router-dom Link

### Pages (all placeholder, content pending)
HomePage, AboutPage, CommunityPage, ServicesPage, ServiceDetailPage, ProjectsPage,
ProjectDetailPage, DonatePage, BookingPage, ContactPage, NotFoundPage

---

## What Is Pending

### Homepage Sections (build these next)
- Hero section with background image
- Mission/intro section
- Services preview section (cards for the 11 services)
- Projects preview section (cards for the 3 projects)
- Community/impact section

### All Inner Pages
About, Community, Services, ServiceDetail, Projects, ProjectDetail,
Donate, Booking, Contact, 404

### Other
- Real photography (replace picsum.photos placeholders)
- Contact form (frontend only, no submission in Phase 1)
- Donation tiers UI (frontend only, no payment processing in Phase 1)
- Booking inquiry form (frontend only)

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
