// ServicesPage — grid of all 11 services with cards linking to detail pages
// Sections to be built in next phase
import { PageHero } from '../components/layout';

export function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="From consultancy to full eco-construction, covering the complete project lifecycle."
      />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Services grid: content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
