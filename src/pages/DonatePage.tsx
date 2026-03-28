// DonatePage — donation options, impact breakdown, payment form placeholder
// Sections to be built in next phase
import { PageHero } from '../components/layout';
import { ImpactStats } from '../components/sections';

export function DonatePage() {
  return (
    <main>
      <PageHero
        title="Make a Donation"
        subtitle="Your contribution directly funds community programs, skills training, and local employment across Rwanda."
      />
      <ImpactStats />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Donation form: content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
