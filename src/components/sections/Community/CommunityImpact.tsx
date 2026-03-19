const STATS = [
  { number: '30%',  label: 'Revenue Donated',    description: 'Of every project goes directly to low-income communities near each build site', gold: true  },
  { number: '500+', label: 'Local Jobs Created',  description: 'Skilled workers hired from surrounding communities across Rwanda',              gold: false },
  { number: '12+',  label: 'Years of Experience', description: 'Pioneering eco-construction techniques across East Africa',                      gold: false },
  { number: '3',    label: 'Landmark Projects',   description: 'Iconic structures defining sustainable development in Rwanda',                   gold: true  },
]

export default function CommunityImpact() {
  return (
    <section id="community-impact" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>

      {/* ── Part 1: Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span className="text-xs font-bold tracking-widest" style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>
            OUR IMPACT
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Numbers That Tell Our Story
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
        >
          Every figure below represents a real person, a real family, a real community transformed by eco-conscious construction.
        </p>
      </div>

      {/* ── Part 2: Stats grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-6 text-center"
            style={stat.gold
              ? { backgroundColor: '#C9A84C' }
              : { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }
            }
          >
            <p
              className="text-4xl md:text-5xl font-black"
              style={{
                color: stat.gold ? '#fff' : '#C9A84C',
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              {stat.number}
            </p>
            <p
              className="text-sm font-bold text-white mt-2 mb-2"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {stat.label}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: stat.gold ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {stat.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
