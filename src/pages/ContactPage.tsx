// ContactPage — contact form, map, and company contact details
// Sections to be built in next phase
import { PageHero } from '../components/layout';

export function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind? We'd love to hear from you."
      />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Contact form — content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
