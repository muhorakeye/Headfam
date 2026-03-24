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
    accent: '#2E7D32',
  },
  {
    number: '104+',
    label: 'Women Involved',
    description: 'Active members creating and selling crafts daily',
    accent: '#C9A84C',
  },
  {
    number: '∞',
    label: 'Crafts Produced',
    description: 'Handmade products rooted in Rwandan heritage',
    accent: '#2E7D32',
  },
]

const impacts = [
  {
    title: 'Financial Independence',
    body: 'Women earn direct income from selling their crafts. It is money they control and invest back into their families.',
    accent: '#2E7D32',
  },
  {
    title: 'Cultural Preservation',
    body: 'Traditional weaving, textile, and jewelry-making techniques are kept alive and passed to the next generation.',
    accent: '#C9A84C',
  },
  {
    title: "Children's Education",
    body: 'Increased family income means more children stay in school, creating a long-term cycle of growth for the whole community.',
    accent: '#2E7D32',
  },
  {
    title: 'Community Pride',
    body: 'The village has become a landmark of Kinigi. It draws local visitors and tourists who visit Virunga National Park, bringing more people through the area and building a strong sense of local identity.',
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
          Since 2022, the village has grown into a busy center of creativity, income, and community
          pride, sitting at the foot of Sabyinyo Volcano.
        </p>
      </motion.div>

      {/* ── Part 3: Two-column split ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start mb-16">

        {/* LEFT — Vertical stat cards */}
        <motion.div
          className="flex flex-col gap-4 w-full md:w-2/5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm transition-shadow duration-300"
              style={{ borderLeft: `4px solid ${stat.accent}` }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <p
                className="text-5xl font-black mb-2"
                style={{ color: stat.accent, fontFamily: '"Playfair Display", serif' }}
              >
                {stat.number}
              </p>
              <p
                className="text-base font-black mb-1"
                style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
              >
                {stat.label}
              </p>
              <p
                className="text-sm"
                style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT — Impact breakdown list */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3
            className="text-2xl font-black mb-8"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
          >
            What This Project Has Made Possible
          </h3>

          <div className="flex flex-col gap-5">
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

      </div>

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
              local materials and a local workforce. Our role was to create the physical foundation.
              The women of Kinigi built everything else.
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
