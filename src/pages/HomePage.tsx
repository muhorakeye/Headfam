// HomePage — hero, impact stats, services overview, featured projects, community, donate CTA
// Sections to be built in next phase
import { ImpactStats } from '../components/sections';
import { DonationCTA } from '../components/sections';
// @ts-ignore — plain JSX component, no type declarations
import HeroCarousel from '../components/sections/HeroCarousel';

export function HomePage() {
  return (
    <main>
      <HeroCarousel />

      <ImpactStats />

      {/* Services overview placeholder */}
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest mb-3">What We Build</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            Services — content coming next phase
          </h2>
        </div>
      </section>

      {/* Projects placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            Projects — content coming next phase
          </h2>
        </div>
      </section>

      <DonationCTA />
    </main>
  );
}
