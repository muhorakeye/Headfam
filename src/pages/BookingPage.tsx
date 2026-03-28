// BookingPage — consultation booking form and calendar
// Sections to be built in next phase
import { PageHero } from '../components/layout';

export function BookingPage() {
  return (
    <main>
      <PageHero
        title="Book a Consultation"
        subtitle="Start your eco-construction project with a free 30-minute consultation with our team."
      />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Booking form: content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
