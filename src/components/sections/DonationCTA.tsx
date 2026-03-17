// Reusable donation call-to-action section — used at the bottom of multiple pages
import { Link } from 'react-router-dom';
import { SectionLabel } from '../ui';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function DonationCTA() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-amber-light py-20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel color="amber">Support Our Work</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
          30% of Every Project Funds Community Programs
        </h2>
        <p className="font-body text-base text-muted mb-8 leading-relaxed">
          Your donation directly funds skills training, school building, and income programs
          for families near our construction sites across Rwanda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className="font-body font-semibold bg-amber text-white px-8 py-4 rounded-sm hover:bg-amber/90 transition-colors"
          >
            Make a Donation
          </Link>
          <Link
            to="/community"
            className="font-body font-semibold border border-charcoal text-charcoal px-8 py-4 rounded-sm hover:bg-charcoal hover:text-white transition-colors"
          >
            Learn About Our Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
