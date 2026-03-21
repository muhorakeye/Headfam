import { useState } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  {
    number: '2022',
    label: 'Year Established',
    description: 'Founded to empower women in Kinigi',
    gold: true,
  },
  {
    number: '100+',
    label: 'Women Involved',
    description: 'Active members creating and selling crafts',
    gold: false,
  },
  {
    number: '∞',
    label: 'Crafts Produced',
    description: 'Handmade products rooted in Rwandan heritage',
    gold: false,
  },
  {
    number: '30%',
    label: 'Revenue to Community',
    description: "HeadFam's contribution to local programs",
    gold: true,
  },
]

const impacts = [
  {
    title: 'Financial Independence',
    body: 'Women earn direct income from selling their crafts — money they control and invest in their families.',
    accent: '#2E7D32',
  },
  {
    title: 'Cultural Preservation',
    body: 'Traditional weaving, textile, and jewelry-making techniques are kept alive and passed to the next generation.',
    accent: '#C9A84C',
  },
  {
    title: "Children's Education",
    body: 'Increased family income means more children stay in school — creating a long-term cycle of growth.',
    accent: '#2E7D32',
  },
  {
    title: 'Community Pride',
    body: 'The village has become a landmark of Kinigi — attracting visitors near Sabyinyo Volcano and building local identity.',
    accent: '#C9A84C',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function KWVImpact() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section id="kwv-impact" className="bg-white py-16 px-6 md:px-16">

      {/* ── Part 1: Header ───────────────────────────────────────────── */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            OUR IMPACT
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
        >
          What Kinigi Women Village Has Achieved
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Since 2022, the village has grown into a thriving hub of creativity, income, and community
          pride — beneath the shadow of Sabyinyo Volcano.
        </p>
      </motion.div>

      {/* ── Part 2: Stats grid ───────────────────────────────────────── */}
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-6 text-center"
            style={{ backgroundColor: stat.gold ? '#C9A84C' : '#f9f6f0' }}
          >
            <p
              className="text-4xl font-black mb-2"
              style={{
                color: stat.gold ? 'white' : '#2E7D32',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              {stat.number}
            </p>
            <p
              className="text-sm font-bold mb-2"
              style={{
                color: stat.gold ? 'white' : '#1a1a1a',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {stat.label}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: stat.gold ? 'rgba(255,255,255,0.8)' : '#6b7280',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {stat.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Part 3: Impact stories ───────────────────────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        {/* Left: quote card */}
        <div
          className="flex-1 rounded-3xl p-10 flex flex-col justify-between"
          style={{ backgroundColor: '#2E7D32' }}
        >
          <div>
            <p
              className="text-6xl font-black leading-none mb-4"
              style={{
                color: 'rgba(255,255,255,0.2)',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              "
            </p>
            <p
              className="text-xl font-black text-white leading-snug mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Before the village, I had no income of my own. Now I sell my baskets every week and my
              children are in school. This place changed everything for us.
            </p>
          </div>

          <div>
            <div className="h-px mb-5" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <span
                  className="text-white font-black text-lg"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  A
                </span>
              </div>
              <div>
                <p
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  Alphonsine Mukamana
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  Village Member, Kinigi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: impact list */}
        <div className="flex-1 flex flex-col justify-center gap-5">
          {impacts.map((item, i) => (
            <div key={item.title}>
              <div className="flex items-start gap-4">
                <div
                  className="w-1 rounded-full flex-shrink-0 self-stretch"
                  style={{ backgroundColor: item.accent, minHeight: '40px' }}
                />
                <div>
                  <p
                    className="text-base font-black mb-1"
                    style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
              {i < impacts.length - 1 && (
                <div className="h-px bg-gray-100 mt-4" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Part 4: Bottom stat strip ────────────────────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <div
          className="rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <div>
            <p
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              HEADFAM AFRICA'S ROLE
            </p>
            <h3
              className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              We Built the Space. The Women Built the Movement.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              HeadFam Africa designed and constructed the Kinigi Women Village using sustainable
              local materials and a local workforce. Our role was to create the foundation — the
              women of Kinigi built everything else.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a href="/contact">
              <button
                className="px-8 py-4 rounded-full text-sm font-bold text-white transition-colors duration-300"
                style={{
                  backgroundColor: btnHovered ? '#2E7D32' : '#C9A84C',
                  fontFamily: '"DM Sans", sans-serif',
                }}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                Support This Project
              </button>
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
