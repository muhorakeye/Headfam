# HeadFam Africa — Build Progress

## Project Status: Phase 1 Complete, Phase 2 (UI) In Progress

---

## Completed

- [x] Project structure and folder setup
- [x] Design tokens (colors, fonts, spacing) in src/index.css
- [x] TypeScript types: Service, Project, TeamMember
- [x] Dummy data: 11 services, 3 projects, 4 team members, 4 stats
- [x] Hooks: useScrollPosition, useIntersectionObserver
- [x] Utils: constants.ts, formatters.ts, api.ts
- [x] Router: all 11 routes with ScrollToTop
- [x] Navbar: fully styled, responsive, scroll-aware, dropdown, mobile
- [x] Footer: fully styled, 4-column responsive, social buttons

---

## In Progress

- [ ] Homepage: hero section with real background image
- [ ] Homepage: mission section
- [ ] Homepage: services preview section
- [ ] Homepage: projects preview section
- [ ] Homepage: community section

---

## Pending Pages (not started)

- [ ] About page
- [ ] Community page
- [ ] Services page
- [ ] Service detail page (dynamic, uses :serviceId param)
- [ ] Projects page
- [ ] Project detail page (dynamic, uses :projectId param)
- [ ] Donate page
- [ ] Booking page
- [ ] Contact page
- [ ] 404 page

---

## Pending Features

- [ ] Real photography (replace picsum placeholders)
- [ ] Contact form (frontend only, no submission yet)
- [ ] Donation tiers UI (frontend only, no payment yet)
- [ ] Booking inquiry UI (frontend only)
- [ ] Phase 2: FastAPI backend integration

---

## Known Decisions

- Tailwind v4 uses PostCSS via @tailwindcss/postcss, not the Vite plugin.
  The Vite plugin (@tailwindcss/vite) does not support Vite 8.
- Named exports everywhere. No default exports for components.
- The impact field on Project type is optional (impact?) because not all
  projects will have measured data in the database.
- Em dashes are banned across the entire project.
- All user-facing text must sound like a real Rwandan company, not a template.

---

## Next Feature to Build

Homepage sections, starting with the hero section.
