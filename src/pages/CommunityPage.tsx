// CommunityPage — community impact, jobs created, donation programs, testimonials
// Sections to be built in next phase
import { PageHero } from '../components/layout';
import { ImpactStats } from '../components/sections';
import { DonationCTA } from '../components/sections';

export function CommunityPage() {
  return (
    <main>
      <PageHero
        title="Community Impact"
        subtitle="30% of every project goes back to the communities who build with us."
      />
      <ImpactStats />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Community programs — content coming next phase
          </h2>
        </div>
      </section>
      <DonationCTA />
    </main>
  );
}
