# HeadFam Africa -- Build Progress

## Project Status: Phase 1 UI In Progress

---

## Completed

- [x] Project structure and folder setup
- [x] Design tokens (colors, fonts, spacing) in src/index.css
- [x] TypeScript types: Service, Project, TeamMember
- [x] Dummy data: 11 services, 3 projects, 4 team members, 4 stats
- [x] Hooks: useScrollPosition, useIntersectionObserver
- [x] Utils: constants.ts, formatters.ts, api.ts
- [x] Router: all 11 routes with ScrollToTop
- [x] Navbar: styled, responsive, scroll-aware, About + Services dropdowns, mobile menu
- [x] Footer: 4-column responsive, social buttons, internal links

---

## Homepage Sections (all complete)

- [x] HeroCarousel: 6 real photos, auto-advance 5s, prev/next, dots, text overlay, gradient scrim
- [x] ImpactStats: scroll-triggered count-up, stagger animation, 4 stats
- [x] WhatWeBuild: 8-service grid, SVG icons, stagger animation, green-to-gold CTA button
- [x] OurWork: 3-column mosaic bento grid, headfam6/7/8.jpeg, full-bleed image cards, hover zoom, gold VIEW PROJECT button
- [x] SupportOurWork: two-column layout, left CTA with two pill buttons, right 2x2 stat grid

---

## About Sub-pages (all complete)

- [x] Who We Are: hero, Work Performance section, tabbed History/Mission/Vision, timeline, CTA strip
- [x] Our Profile: hero, mission/vision text, 3 key stats
- [x] Our Team: hero, placeholder cards grid (real team pending)
- [x] Our Policy: hero, 3 policy cards with left green border
- [x] Font normalization: all pages use font-display/font-body Tailwind utilities (no inline fontFamily)

---

## Other Completed

- [x] Favicon changed to logo.png
- [x] DonationCTA component deleted (0 build errors)
- [x] About dropdown wired in Navbar with 4 sub-links
- [x] 4 About sub-routes added to router

---

## Pending Pages

- [ ] Community page
- [ ] Services page
- [ ] Service detail page (dynamic, :serviceId param)
- [ ] Projects page
- [ ] Project detail page (dynamic, :projectId param)
- [ ] Donate page
- [ ] Booking page
- [ ] Contact page
- [ ] 404 page

---

## Pending Features

- [ ] Real photography (replace placeholder images)
- [ ] Contact form (frontend only, no submission yet)
- [ ] Donation tiers UI (frontend only, no payment yet)
- [ ] Booking inquiry UI (frontend only)
- [ ] Final normalization pass across all pages
- [ ] Phase 2: FastAPI backend integration

---

## Known Decisions

- Tailwind v4 uses PostCSS via @tailwindcss/postcss, not the Vite plugin (incompatible with Vite 8).
- Named exports everywhere. No default exports for components (HeroCarousel is a known exception).
- .jsx components in sections/Home/ each have a companion .d.ts declaration file for TypeScript.
- The impact field on Project type is optional (impact?) because not all projects will have measured data.
- Em dashes are banned across the entire project. Use commas, periods, or rewrite.
- All colors via inline style with hex constants (Tailwind JIT may not resolve arbitrary values at runtime).
- All user-facing text must sound like a real Rwandan company, not a template.

---

## Next to Build

Community page, then Services page and service detail.
