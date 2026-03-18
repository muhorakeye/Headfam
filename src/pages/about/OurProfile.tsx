import { useEffect } from 'react';

const stats = [
  { number: '12+', label: 'Years' },
  { number: '500+', label: 'Jobs' },
  { number: '30%', label: 'Donated' },
];

export function OurProfile() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#2E7D32' }}>
        <h1 className="font-display text-4xl font-black text-white">Our Profile</h1>
        <p className="font-body text-sm mt-3" style={{ color: '#bbf7d0' }}>Home / About / Our Profile</p>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left */}
          <div className="flex-1">
            <h2 className="font-display text-3xl font-black mb-8" style={{ color: '#111827' }}>
              Building Rwanda's Green Future
            </h2>

            <p className="font-body text-xs font-bold tracking-widest mb-2" style={{ color: '#C9A84C' }}>MISSION</p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: '#6b7280' }}>
              To design and build eco-friendly structures that uplift communities, create local employment, and protect the natural environment across Rwanda and East Africa.
            </p>

            <p className="font-body text-xs font-bold tracking-widest mb-2" style={{ color: '#C9A84C' }}>VISION</p>
            <p className="font-body text-base leading-relaxed" style={{ color: '#6b7280' }}>
              To be Africa's leading eco-construction company, recognized for sustainable innovation, community impact, and structures that stand as landmarks of responsible development.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <h3 className="font-display text-2xl font-black mb-2" style={{ color: '#2E7D32' }}>
              Where Construction Rooted in Tradition
            </h3>
            <p className="font-body text-base italic" style={{ color: '#6b7280' }}>
              Creating the Wonders of Nature, Today's Future.
            </p>

            <div className="flex gap-8 mt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-3xl font-extrabold" style={{ color: '#2E7D32' }}>{s.number}</p>
                  <p className="font-body text-xs" style={{ color: '#6b7280' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
