const STATS = [
  { number: '30%',  label: 'Revenue Donated',    description: 'Of every project goes directly to low-income communities near each build site', gold: true  },
  { number: '500+', label: 'Local Jobs Created',  description: 'Skilled workers hired from surrounding communities across Rwanda',              gold: false },
  { number: '12+',  label: 'Years of Experience', description: 'Pioneering eco-construction techniques across East Africa',                      gold: false },
  { number: '3',    label: 'Landmark Projects',   description: 'Iconic structures defining sustainable development in Rwanda',                   gold: true  },
]

const BREAKDOWN = [
  { label: 'Skills Training Programs',   percent: 35, color: '#2E7D32' },
  { label: 'School Building & Education', percent: 25, color: '#C9A84C' },
  { label: 'Health & Basic Needs',        percent: 20, color: '#2E7D32' },
  { label: 'Local Business Support',      percent: 20, color: '#C9A84C' },
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
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
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

      {/* ── Part 3: Donut + breakdown ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Left: donut chart */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative" style={{ width: 180, height: 180 }}>
            <svg width="180" height="180" viewBox="0 0 180 180">
              {/* Background ring */}
              <circle cx="90" cy="90" r="70" fill="none"
                stroke="rgba(255,255,255,0.1)" strokeWidth="14" />
              {/* Green arc — 70% */}
              <circle cx="90" cy="90" r="70" fill="none"
                stroke="#2E7D32" strokeWidth="14"
                strokeDasharray="439.8" strokeDashoffset="131.94"
                strokeLinecap="round" transform="rotate(-90 90 90)" />
              {/* Gold arc — 30% */}
              <circle cx="90" cy="90" r="70" fill="none"
                stroke="#C9A84C" strokeWidth="14"
                strokeDasharray="439.8" strokeDashoffset="307.86"
                strokeLinecap="round" transform="rotate(-90 90 90)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-3xl font-black text-white"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                100%
              </span>
              <span
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                Impact
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-6 justify-center">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#2E7D32' }} />
              <span className="text-xs text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                70% Community Programs
              </span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#C9A84C' }} />
              <span className="text-xs text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                30% Revenue Donated
              </span>
            </div>
          </div>
        </div>

        {/* Right: breakdown bars */}
        <div className="flex-1">
          <h3
            className="text-2xl font-black text-white mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Where Our Impact Goes
          </h3>

          {BREAKDOWN.map((item) => (
            <div key={item.label} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  {item.label}
                </span>
                <span className="text-sm font-bold" style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>
                  {item.percent}%
                </span>
              </div>
              <div className="w-full rounded-full h-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
