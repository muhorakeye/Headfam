import type { JSX } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const stats = [
  {
    number: '2025',
    label: 'Year Built',
    description: 'Completed and operational in Kigali',
    accent: '#2E7D32',
  },
  {
    number: '100%',
    label: 'Local Workforce',
    description: 'Every worker hired from the surrounding Kigali community',
    accent: '#C9A84C',
  },
  {
    number: 'Eco',
    label: 'Certified Build',
    description: 'Constructed using sustainable materials and eco-conscious methods',
    accent: '#2E7D32',
  },
]

const impacts = [
  {
    title: 'Local Employment',
    body: 'HeadFam Africa hired workers entirely from the local Kigali community during construction, creating stable income for families before the resort even opened.',
    accent: '#2E7D32',
  },
  {
    title: 'Sustainable Tourism',
    body: 'Bambino Super City attracts visitors to Kigali with an eco-conscious offering, proving that Rwanda\'s tourism sector can grow without compromising the environment.',
    accent: '#C9A84C',
  },
  {
    title: 'Community Pride',
    body: 'A world-class resort built by local hands in Kigali sends a powerful message: Rwanda has the talent, the materials, and the expertise to build exceptional structures sustainably.',
    accent: '#2E7D32',
  },
  {
    title: 'Eco-Construction Standard',
    body: 'Bambino Super City sets a new benchmark for eco-resort development in Rwanda, showing developers and investors that sustainable building methods deliver superior long-term results.',
    accent: '#C9A84C',
  },
]

export default function BSCImpact(): JSX.Element {
  const [btnHovered, setBtnHovered] = useState<boolean>(false)

  return (
    <section id="bsc-impact" className="bg-white py-16 px-6 md:px-16">

      {/* PART 1 — HEADER */}
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
          What Bambino Super City Has Created
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Built in 2025 by HeadFam Africa, Bambino Super City has created real, measurable impact
          for the Kigali community, from local jobs during construction to ongoing economic activity
          since opening.
        </p>
      </motion.div>

      {/* PART 2 — TWO COLUMN SPLIT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start mb-16">

        {/* LEFT — Vertical stat cards */}
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

        {/* RIGHT — Impact breakdown */}
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

      {/* PART 3 — BOTTOM STAT STRIP */}
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
              We Built It. The Community Runs It.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa designed and constructed Bambino Super City using sustainable local
              materials and a 100% local workforce. Our role was to deliver a world-class eco-resort.
              The community around it benefits every day it operates.
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
