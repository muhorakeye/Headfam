import { useState } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }
const VP1 = { once: true, amount: 0.1 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const SERVICES = [
  {
    title: 'Business Info on Tourism',
    description:
      'We provide detailed business information and market insights on tourism destinations — helping investors and developers make informed, responsible decisions.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    accent: '#2E7D32',
  },
  {
    title: 'Investment Validation',
    description:
      'We assess and validate investment ideas for responsible tourism — identifying opportunities, risks, and long-term viability for sustainable development projects.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: '#C9A84C',
  },
  {
    title: 'Mediation',
    description:
      'We mediate between players in responsible tourism ecosystems — bridging the gap between investors, communities, government bodies, and local stakeholders.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: '#2E7D32',
  },
  {
    title: 'Digital Marketing',
    description:
      'We provide digital marketing services for responsible tourism destinations — building online presence, attracting the right visitors, and telling authentic stories.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    accent: '#C9A84C',
  },
  {
    title: 'Community Involvement',
    description:
      'We leverage local community involvement in every project — ensuring that tourism and construction initiatives create genuine, lasting benefit for the people who live there.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accent: '#2E7D32',
  },
  {
    title: 'Landscape & Architecture Consultancy',
    description:
      'We offer expert consultancy in landscape design and architecture — creating breathtaking outdoor spaces and structures that harmonize with their natural surroundings.',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    accent: '#C9A84C',
  },
]

function BookBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#C9A84C' : '#ffffff',
        color: hovered ? '#ffffff' : '#2E7D32',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      className="px-8 py-4 rounded-full text-sm font-bold inline-block"
    >
      Book a Consultation
    </a>
  )
}

export default function ConsultancyServices() {
  const [hovered, setHovered] = useState<boolean[]>(Array(SERVICES.length).fill(false))

  const setHover = (i: number, val: boolean) =>
    setHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  return (
    <section id="consultancy-services" className="py-16 px-6 md:px-16 bg-white">

      {/* Part 1 — Header */}
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
            WHAT WE OFFER
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Consultancy Services That Drive Results
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          HeadFam Africa specializes in offering consultation services in landscape design,
          architecture, culture center development, and the construction of engaging tourism
          destinations.
        </p>
      </motion.div>

      {/* Part 2 — Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP1}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: (i % 3) * 0.1 }}
            onMouseEnter={() => setHover(i, true)}
            onMouseLeave={() => setHover(i, false)}
            className="rounded-2xl p-8"
            style={{
              backgroundColor: hovered[i] ? '#ffffff' : '#f9f6f0',
              boxShadow: hovered[i] ? '0 10px 30px rgba(0,0,0,0.10)' : 'none',
              transform: hovered[i] ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            <div
              className="h-1 w-10 rounded-full mb-6"
              style={{ backgroundColor: service.accent }}
            />
            <div className="mb-4">{service.svg}</div>
            <h3
              className="text-lg font-black mb-3"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {service.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Part 3 — Bottom Highlight Strip */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ backgroundColor: '#2E7D32' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <div>
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            OUR APPROACH
          </p>
          <h4
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Creative, Long-Lasting Solutions
          </h4>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
          >
            The team develops creative, long-lasting solutions that improve the natural world,
            increase cultural interactions, and encourage responsible travel.
          </p>
        </div>

        <BookBtn />
      </motion.div>

    </section>
  )
}
