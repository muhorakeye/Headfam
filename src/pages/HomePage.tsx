// HomePage — hero, impact stats, services overview, featured projects, community, donate CTA
// Sections to be built in next phase
import { ImpactStats } from '../components/sections';
import { DonationCTA } from '../components/sections';

export function HomePage() {
  return (
    <main>
      {/* Hero section placeholder — full-screen with forest background */}
      <section className="min-h-screen bg-forest-dark flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
            Eco-Construction Rwanda
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Building Rwanda's<br />Sustainable Future
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-8">
            HeadFam Africa builds eco-structures using local materials,
            employs workers from low-income families, and donates 30% of
            revenue to community programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="font-body font-semibold bg-white text-forest px-8 py-4 rounded-sm hover:bg-stone transition-colors"
            >
              View Our Projects
            </a>
            <a
              href="/donate"
              className="font-body font-semibold border border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-forest transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

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
