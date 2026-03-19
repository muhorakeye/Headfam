import { useState } from 'react'
import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

interface ServiceDetail {
  label: string
  value: string
}

interface Service {
  id: number
  title: string
  short: string
  description: string
  detail1: ServiceDetail
  detail2: ServiceDetail
  svg: React.ReactNode
}

const SERVICES: Service[] = [
  {
    id: 0,
    title: 'Business Info on Tourism',
    short: 'Market insights on tourism destinations',
    description:
      'We provide detailed business information and market insights on tourism destinations — helping investors and developers make informed, responsible decisions about where and how to build.',
    detail1: { label: "Who it's for", value: 'Investors, developers, tourism operators' },
    detail2: { label: 'Outcome', value: 'Informed investment decisions backed by local knowledge' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: 1,
    title: 'Investment Validation',
    short: 'Assess and validate responsible tourism ideas',
    description:
      'We assess and validate investment ideas for responsible tourism — identifying opportunities, risks, and long-term viability to ensure your project creates genuine sustainable value.',
    detail1: { label: "Who it's for", value: 'Entrepreneurs, NGOs, impact investors' },
    detail2: { label: 'Outcome', value: 'Validated project roadmap with risk assessment' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Mediation',
    short: 'Bridge investors, communities and government',
    description:
      'We mediate between players in responsible tourism ecosystems — bridging the gap between investors, communities, government bodies, and local stakeholders for aligned outcomes.',
    detail1: { label: "Who it's for", value: 'Multi-stakeholder projects and partnerships' },
    detail2: { label: 'Outcome', value: 'Aligned stakeholders, reduced conflict, faster progress' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Community Involvement',
    short: 'Leverage local people in every project',
    description:
      'We leverage local community involvement in every project — ensuring that tourism and construction initiatives create genuine, lasting benefit for the people who live there.',
    detail1: { label: "Who it's for", value: 'Developers building near local communities' },
    detail2: { label: 'Outcome', value: 'Community buy-in, local hiring, revenue sharing' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Landscape & Architecture Consultancy',
    short: 'Design spaces that harmonize with nature',
    description:
      'We offer expert consultancy in landscape design and architecture — creating breathtaking outdoor spaces and structures that harmonize with their natural surroundings and local culture.',
    detail1: { label: "Who it's for", value: 'Resorts, eco-lodges, cultural centers, parks' },
    detail2: { label: 'Outcome', value: 'Award-worthy spaces rooted in place and culture' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
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
      className="px-8 py-4 rounded-full text-sm font-bold inline-block flex-shrink-0"
    >
      Book a Consultation
    </a>
  )
}

export default function ConsultancyServices() {
  const [activeId, setActiveId] = useState<number>(0)
  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]

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
          HeadFam Africa specializes in consultation services in landscape design, architecture,
          culture center development, and the construction of engaging tourism destinations.
        </p>
      </motion.div>

      {/* Part 2 — Two Column Split */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 mb-16 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">

        {/* Left — service list */}
        <div className="w-full md:w-2/5" style={{ backgroundColor: '#f9f6f0' }}>
          {SERVICES.map((service, i) => {
            const isActive = service.id === activeId
            return (
              <div key={service.id}>
                <button
                  onClick={() => setActiveId(service.id)}
                  className="w-full text-left px-8 py-6 transition-colors duration-200"
                  style={{
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                    borderLeft: isActive ? '4px solid #2E7D32' : '4px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.6)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: isActive ? '#2E7D32' : '#ffffff', color: isActive ? '#ffffff' : '#9ca3af' }}
                    >
                      {service.svg}
                    </div>
                    <div>
                      <p
                        className="text-sm font-black"
                        style={{
                          color: isActive ? '#1a1a1a' : '#6b7280',
                          fontFamily: '"Playfair Display", Georgia, serif',
                        }}
                      >
                        {service.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{
                          color: isActive ? '#2E7D32' : '#9ca3af',
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {service.short}
                      </p>
                    </div>
                  </div>
                </button>

                {i < SERVICES.length - 1 && (
                  <div className="h-px mx-8" style={{ backgroundColor: '#e5e7eb' }} />
                )}
              </div>
            )
          })}
        </div>

        {/* Right — active service detail */}
        <div className="flex-1 bg-white px-10 py-12 flex flex-col justify-center">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' as const }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'rgba(46,125,50,0.08)', color: '#2E7D32' }}
            >
              {activeService.svg}
            </div>

            <p
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              OUR SERVICE
            </p>

            <h3
              className="text-2xl font-black mb-4"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {activeService.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              {activeService.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[activeService.detail1, activeService.detail2].map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: '#2E7D32' }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {detail.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-amber-600"
              style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2E7D32' }}
            >
              Book a Consultation <span>&#8594;</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Part 3 — Bottom Highlight Strip */}
      <motion.div
        className="max-w-6xl mx-auto mt-10 rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
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
