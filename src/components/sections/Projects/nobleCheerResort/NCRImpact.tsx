import type { JSX } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const stats = [
  {
    number: '2020',
    label: 'Year Built',
    description: 'Completed in Musanze, Rwanda',
    accent: '#2E7D32',
  },
  {
    number: '100%',
    label: 'Local Workforce',
    description: 'Every worker hired from the Musanze community during construction',
    accent: '#C9A84C',
  },
  {
    number: '2in1',
    label: 'Resort & Campsite',
    description: 'A unique mixed eco-hospitality destination built for all types of guests',
    accent: '#2E7D32',
  },
]

const impacts = [
  {
    title: 'Local Employment',
    body: 'HeadFam Africa hired workers entirely from the Musanze community during construction, creating stable income for local families and investing in the people who live near the site.',
    accent: '#2E7D32',
  },
  {
    title: 'Sustainable Tourism',
    body: 'Noble Cheer Resort gives tourists a responsible way to experience the natural beauty of the Musanze-Rubavu corridor, generating revenue that flows into the local economy.',
    accent: '#C9A84C',
  },
  {
    title: 'Environmental Preservation',
    body: 'HeadFam Africa\'s eco-construction methods ensured the build preserved the natural landscape around the resort, protecting the ecosystem for future generations.',
    accent: '#2E7D32',
  },
  {
    title: 'Community Benefit',
    body: 'Beyond employment, Noble Cheer Resort has put the Musanze-Rubavu road on the map as a destination, bringing visitors, spending, and visibility to the surrounding community.',
    accent: '#C9A84C',
  },
]

export default function NCRImpact(): JSX.Element {
  const [btnHovered, setBtnHovered] = useState<boolean>(false)

  return (
    <section id="ncr-impact" className="bg-white py-16 px-6 md:px-16">

      {/* HEADER */}
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
          What Noble Cheer Resort Has Created
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Built by HeadFam Africa in 2020 on the Musanze-Rubavu road, Noble Cheer Resort has created jobs,
          boosted local tourism, and delivered a sustainable hospitality destination that benefits
          the Musanze community.
        </p>
      </motion.div>

      {/* TWO COLUMN SPLIT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start mb-16">

        {/* LEFT — vertical stat cards */}
        <motion.div
          className="flex flex-col gap-4 w-full md:w-2/5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={T}
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

        {/* RIGHT — impact breakdown */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={T}
        >
          <h3
            className="text-2xl font-black mb-8"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
          >
            What This Project Has Made Possible
          </h3>

          <div className="flex flex-col">
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
                  <div className="h-px bg-gray-100 mt-4 mb-4" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
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
              We Built the Resort. Nature Does the Rest.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa designed and constructed Noble Cheer Resort using sustainable local
              materials and a 100% local workforce. Our job was to build a structure worthy of its
              setting. The Musanze landscape makes it extraordinary.
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
                Build With Us
              </button>
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
