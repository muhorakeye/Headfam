import { useEffect } from 'react';

const placeholders = [
  { name: 'Team Member', role: 'Coming Soon' },
  { name: 'Team Member', role: 'Coming Soon' },
  { name: 'Team Member', role: 'Coming Soon' },
];

export function OurTeam() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#2E7D32' }}>
        <h1 className="font-display text-4xl font-black text-white">Our Team</h1>
        <p className="font-body text-sm mt-3" style={{ color: '#bbf7d0' }}>Home / About / Our Team</p>
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-black mb-3" style={{ color: '#111827' }}>
          The People Behind HeadFam Africa
        </h2>
        <p className="font-body text-base mb-10" style={{ color: '#6b7280' }}>
          A dedicated team of builders, designers, and community leaders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {placeholders.map((member, i) => (
            <div key={i} className="rounded-2xl border p-6 text-center" style={{ borderColor: '#f3f4f6', boxShadow: '0 1px 3px rgba(0,0,0,0.07)' }}>
              <div className="w-20 h-20 rounded-full mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }} />
              <p className="font-body text-base font-bold" style={{ color: '#111827' }}>{member.name}</p>
              <p className="font-body text-sm" style={{ color: '#9ca3af' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
