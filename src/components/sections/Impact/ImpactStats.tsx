// The four company impact statistics block — used on Home and Community pages
import { stats } from '../../../data/stats';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
// TODO: [Phase 2] wire to FastAPI /api/stats endpoint

export function ImpactStats() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-forest py-20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="font-mono text-4xl md:text-5xl font-medium text-white mb-2">
              {stat.value}
            </p>
            <p className="font-body text-sm font-semibold text-white/80 mb-1">
              {stat.label}
            </p>
            <p className="font-body text-xs text-white/50 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
