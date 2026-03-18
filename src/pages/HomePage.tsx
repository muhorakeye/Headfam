// HomePage — hero, impact stats, services overview, featured projects, community, donate CTA
// Sections to be built in next phase
import { ImpactStats, DonationCTA, WhatWeBuild, OurWork } from '../components/sections';
// @ts-ignore — plain JSX component, no type declarations
import HeroCarousel from '../components/sections/Home/HeroCarousel';

export function HomePage() {
  return (
    <main>
      <HeroCarousel />

      <ImpactStats />

      <WhatWeBuild />

      <OurWork />

      <DonationCTA />
    </main>
  );
}
