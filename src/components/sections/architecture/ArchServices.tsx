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
    title: 'Eco-Friendly Architecture',
    short: 'Healthy spaces with minimal environmental impact',
    description: 'Eco-friendly architecture refers to design that creates healthy living environments while aiming to minimize negative environmental impacts, energy consumption, and use of human resources. Every design HeadFam creates meets this standard.',
    detail1: { label: 'Best for', value: 'Residential, commercial, hospitality projects' },
    detail2: { label: 'Key feature', value: 'Energy efficiency, low carbon, healthy environments' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.1 17.4C9.7 14 12 11 17 8c1 5-1 9-8 9.4z"/></svg>),
  },
  {
    id: 1,
    title: 'Resort & Lodge Design',
    short: 'Luxury eco-resort and lodge architecture',
    description: 'We design eco-friendly resorts and lodges that blend seamlessly with their natural surroundings — prioritizing water management, conservation, and a luxurious guest experience rooted in nature.',
    detail1: { label: 'Best for', value: 'Tourism developers, hospitality investors' },
    detail2: { label: 'Key feature', value: 'Nature integration, water systems, guest experience' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  },
  {
    id: 2,
    title: 'Cultural Center Design',
    short: 'Spaces that celebrate culture and heritage',
    description: 'We design culture centers that celebrate the rich tapestry of local cultures in an environmentally responsible manner — spaces that are inclusive, educational, and architecturally meaningful.',
    detail1: { label: 'Best for', value: 'Government, NGOs, cultural organizations' },
    detail2: { label: 'Key feature', value: 'Cultural identity, community spaces, sustainability' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  },
  {
    id: 3,
    title: 'Residential Design',
    short: "Eco-homes built for Rwanda's future",
    description: 'We design eco-homes that are environmentally low-impact — using materials and technology that reduce carbon footprint, conserve water, recycle waste, control pollution, and lower energy consumption.',
    detail1: { label: 'Best for', value: 'Homeowners, residential developers' },
    detail2: { label: 'Key feature', value: 'Solar-ready, water conservation, low energy' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>),
  },
  {
    id: 4,
    title: 'Landscape Architecture',
    short: 'Outdoor spaces in harmony with nature',
    description: 'We combine artistic vision with ecological sensitivity to design landscapes that harmonize with their surroundings — whether a private garden, public park, or corporate campus — emphasizing water conservation and native plants.',
    detail1: { label: 'Best for', value: 'Resorts, parks, private estates, urban spaces' },
    detail2: { label: 'Key feature', value: 'Native plants, water conservation, eco-materials' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>),
  },
  {
    id: 5,
    title: 'Campsite & Coffee Shop Design',
    short: 'Functional spaces with cultural character',
    description: 'We design eco-campsites and coffee shops that use sustainable materials and renewable energy — creating authentic, culturally inspired spaces that serve both community and tourism.',
    detail1: { label: 'Best for', value: 'Tourism operators, community businesses' },
    detail2: { label: 'Key feature', value: 'Local aesthetics, renewable energy, sustainability' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
  },
]

function ProcessBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#arch-process"
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
      See Our Design Process
    </a>
  )
}

export default function ArchServices() {
  const [activeId, setActiveId] = useState<number>(0)
  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]

  return (
    <section id="arch-services" className="py-16 px-6 md:px-16 bg-white">

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
            WHAT WE DESIGN
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Architecture Design Services
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Architecture design is a discipline focused on covering and meeting the needs of clients
          to create living spaces through creativity. HeadFam Africa delivers satisfactory
          architectural design deeply rooted in understanding the unique needs of clients —
          sustainable, environmentally responsible, culturally rich, and inclusive.
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
                  className="w-full text-left px-5 md:px-8 py-5 transition-colors duration-200"
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
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
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
        <div className="flex-1 bg-white px-6 md:px-10 py-8 md:py-12 flex flex-col justify-center">
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
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
              style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2E7D32' }}
            >
              Request a Design Consultation <span>&#8594;</span>
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
            OUR DESIGN PHILOSOPHY
          </p>
          <h4
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Sustainable, Culturally Rich, Inclusive
          </h4>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Every architectural design we create is rooted in understanding the unique needs and
            desires of our clients — sustainable, environmentally responsible, and deeply
            connected to place.
          </p>
        </div>

        <ProcessBtn />
      </motion.div>

    </section>
  )
}
