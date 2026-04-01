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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {TEAM.map((member, i) => (
            <div key={i} className="rounded-2xl border border-forest-light p-3 md:p-6 text-center flex flex-col items-center" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.07)' }}>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl md:text-4xl bg-forest-light flex-shrink-0">
                {member.emoji}
              </div>
              <p className="font-body text-sm md:text-base font-bold text-charcoal text-center">{member.name}</p>
              <p className="font-body text-xs md:text-sm text-amber text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
