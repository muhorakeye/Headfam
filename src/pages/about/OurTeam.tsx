import { useEffect } from 'react';

const TEAM = [
  { name: "Jean D'amour NDANGUZA", role: 'Managing Director',    emoji: '👨🏿‍💼' },
  { name: 'Oreste',                role: 'Architecture Designer', emoji: '👨🏿‍🎨' },
  { name: 'Diane MUHORAKEYE',      role: 'IT',                   emoji: '👩🏿‍💻' },
  { name: '10 Engineers',           role: 'Engineering Team',     emoji: '👷🏿' },
];

export function OurTeam() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* Hero */}
      <div className="py-20 px-6 text-center bg-forest">
        <h1 className="font-display text-4xl font-black text-white">Our Team</h1>
        <p className="font-body text-sm mt-3 text-forest-light">Home / About / Our Team</p>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-black mb-3 text-charcoal">
          The People Behind HeadFam Africa
        </h2>
        <p className="font-body text-base mb-10 text-muted">
          A dedicated team of builders, designers, and community leaders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {TEAM.map((member, i) => (
            <div key={i} className="rounded-2xl border border-forest-light p-6 text-center" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.07)' }}>
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl bg-forest-light">
                {member.emoji}
              </div>
              <p className="font-body text-base font-bold text-charcoal">{member.name}</p>
              <p className="font-body text-sm text-amber">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
