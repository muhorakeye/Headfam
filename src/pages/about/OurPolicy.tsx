import { useEffect } from 'react';

const policies = [
  {
    title: 'Environmental Responsibility',
    body: 'We prioritize sustainable materials, energy-efficient design, and minimal environmental impact on every project we undertake.',
  },
  {
    title: 'Community First',
    body: '30% of every project\'s revenue is donated directly to low-income communities near each build site. We hire locally and involve communities throughout every phase.',
  },
  {
    title: 'Quality & Safety',
    body: 'Every structure we build meets rigorous safety standards. Our team is trained in eco-construction best practices that protect both people and the environment.',
  },
];

export function OurPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#2E7D32' }}>
        <h1 className="font-display text-4xl font-black text-white">Our Policy</h1>
        <p className="font-body text-sm mt-3" style={{ color: '#bbf7d0' }}>Home / About / Our Policy</p>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="font-display text-3xl font-black mb-10" style={{ color: '#111827' }}>
          Our Commitment to Responsible Construction
        </h2>

        {policies.map((policy) => (
          <div
            key={policy.title}
            className="pl-6 mb-8"
            style={{ borderLeft: '4px solid #2E7D32' }}
          >
            <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#111827' }}>{policy.title}</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#6b7280' }}>{policy.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
