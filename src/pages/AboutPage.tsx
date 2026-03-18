// AboutPage — company story, mission, team, values
// Sections to be built in next phase
import { PageHero } from '../components/layout';

export function AboutPage() {
  return (
    <main>
      <PageHero
        title="About HeadFam Africa"
        subtitle="Eco-construction rooted in community. Every structure we build creates jobs, supports families, and strengthens Rwanda."
      />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            About — content coming next phase
          </h2>
        </div>
      </section>

    </main>
  );
}
