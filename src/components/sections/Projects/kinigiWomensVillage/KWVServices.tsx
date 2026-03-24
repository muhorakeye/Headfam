import { useState } from 'react'
import { motion } from 'framer-motion'

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
  svg: React.ReactElement
}

const services: Service[] = [
  {
    id: 0,
    title: 'Architecture Design',
    short: 'Culturally rooted, eco-conscious design',
    description:
      'HeadFam Africa designed the Kinigi Women Village from the ground up. The structure reflects Rwandan cultural identity while meeting the practical needs of women working, gathering, and selling crafts daily. Every design decision prioritized natural light, ventilation, and a good fit with the surrounding volcanic landscape.',
    detail1: { label: 'Approach', value: 'Culturally rooted, community-centered design' },
    detail2: { label: 'Outcome', value: 'A functional, beautiful space women are proud to work in' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 1,
    title: 'Eco-Construction',
    short: 'Built with local materials and local hands',
    description:
      'The construction of Kinigi Women Village was executed using sustainable local materials sourced from within Musanze District. HeadFam Africa hired workers from the Kinigi community — ensuring that the project created jobs before it even opened its doors. Eco-building techniques minimized waste and environmental disruption near the Sabyinyo Volcano ecosystem.',
    detail1: { label: 'Materials', value: 'Locally sourced, sustainable, low-impact' },
    detail2: { label: 'Workforce', value: '100% hired from Kinigi and surrounding areas' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Community Involvement',
    short: 'Local people at every stage',
    description:
      'From the first site assessment to the final brick, HeadFam Africa worked alongside the Kinigi community. Local leaders, women\'s groups, and community members were consulted throughout the design and build process, so the finished village truly belonged to the people it was built for.',
    detail1: { label: 'Process', value: 'Community consulted at every phase' },
    detail2: { label: 'Outcome', value: 'A space the community owns and operates with pride' },
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
    title: 'Landscape & Site Planning',
    short: 'Designed to sit within nature',
    description:
      'HeadFam Africa carefully planned the site to preserve the natural environment around Sabyinyo Volcano. Pathways, outdoor gathering areas, and the placement of structures were all designed to work with the land, not against it. The result is a village that feels like it has always been part of Kinigi.',
    detail1: { label: 'Priority', value: 'Minimal disruption to the volcanic ecosystem' },
    detail2: { label: 'Outcome', value: 'Outdoor spaces that enhance community life naturally' },
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8C8 10 5.9 16.17 3.82 22" />
        <path d="M9.1 17.4C9.7 14 12 11 17 8c1 5-1 9-8 9.4z" />
      </svg>
    ),
  },
]

export default function KWVServices() {
  const [activeId, setActiveId] = useState<number>(0)
  const [btnHovered, setBtnHovered] = useState<boolean>(false)

  const activeService = services.find(s => s.id === activeId) ?? services[0]

  return (
    <section id="kwv-services" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

      {/* PART 1 — HEADER */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: 'DM Sans, system-ui, sans-serif' }}
          >
            SERVICES DELIVERED
          </span>
          <span className="w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          How HeadFam Africa Built This Project
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: 'DM Sans, system-ui, sans-serif' }}
        >
          Kinigi Women Village was designed and constructed by HeadFam Africa using sustainable
          local materials, eco-conscious building methods, and a workforce drawn entirely from
          the surrounding community.
        </p>
      </motion.div>

      {/* PART 2 — SERVICES LIST */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 mb-16 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">

        {/* LEFT PANEL */}
        <div className="w-full md:w-2/5" style={{ backgroundColor: '#f9f6f0' }}>
          {services.map((service, index) => (
            <div key={service.id}>
              <button
                onClick={() => setActiveId(service.id)}
                className="w-full text-left px-8 py-6 transition-colors duration-200"
                style={{
                  backgroundColor: activeId === service.id ? '#ffffff' : 'transparent',
                  borderLeft: activeId === service.id
                    ? '4px solid #2E7D32'
                    : '4px solid transparent',
                }}
                onMouseEnter={e => {
                  if (activeId !== service.id) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.6)'
                  }
                }}
                onMouseLeave={e => {
                  if (activeId !== service.id) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: activeId === service.id ? '#2E7D32' : '#ffffff' }}
                  >
                    <span style={{ color: activeId === service.id ? '#ffffff' : '#9ca3af' }}>
                      {service.svg}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-black"
                      style={{
                        color: activeId === service.id ? '#1a1a1a' : '#6b7280',
                        fontFamily: 'Playfair Display, Georgia, serif',
                      }}
                    >
                      {service.title}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: activeId === service.id ? '#2E7D32' : '#9ca3af',
                        fontFamily: 'DM Sans, system-ui, sans-serif',
                      }}
                    >
                      {service.short}
                    </p>
                  </div>
                </div>
              </button>
              {index < services.length - 1 && (
                <div className="h-px bg-gray-200 mx-8" />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-white px-10 py-12 flex flex-col justify-center">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'rgba(46,125,50,0.08)' }}
            >
              <span style={{ color: '#2E7D32' }}>{activeService.svg}</span>
            </div>

            <p
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: '#C9A84C', fontFamily: 'DM Sans, system-ui, sans-serif' }}
            >
              SERVICE DELIVERED
            </p>

            <h3
              className="text-2xl font-black mb-4"
              style={{ color: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              {activeService.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: '#6b7280', fontFamily: 'DM Sans, system-ui, sans-serif' }}
            >
              {activeService.description}
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[activeService.detail1, activeService.detail2].map(detail => (
                <div key={detail.label} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: '#2E7D32' }}
                  />
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'DM Sans, system-ui, sans-serif' }}
                  >
                    <span className="font-bold" style={{ color: '#1a1a1a' }}>{detail.label}:</span>{' '}
                    <span style={{ color: '#6b7280' }}>{detail.value}</span>
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/services/consultancy"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
              style={{ color: '#2E7D32' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#2E7D32' }}
            >
              Learn More About This Service &rarr;
            </a>
          </motion.div>
        </div>
      </div>

      {/* PART 3 — BUILD PHILOSOPHY STRIP */}
      <motion.div
        className="max-w-6xl mx-auto mt-10 rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ backgroundColor: '#2E7D32' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div>
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: '#C9A84C', fontFamily: 'DM Sans, system-ui, sans-serif' }}
          >
            OUR BUILD PHILOSOPHY
          </p>
          <h3
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Every Structure We Build Serves a Purpose
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'DM Sans, system-ui, sans-serif',
            }}
          >
            Kinigi Women Village is proof that eco-construction done right creates more than a
            building. It creates opportunity, dignity, and community strength for generations.
          </p>
        </div>

        <a
          href="/services/eco-construction"
          className="px-8 py-4 rounded-full text-sm font-bold whitespace-nowrap transition-colors duration-300"
          style={{
            backgroundColor: btnHovered ? '#C9A84C' : '#ffffff',
            color: btnHovered ? '#ffffff' : '#2E7D32',
          }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          Explore Our Construction Services
        </a>
      </motion.div>

    </section>
  )
}
