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
    title: 'Resorts',
    short: 'Eco-friendly resorts with nature views',
    description: 'HeadFam Africa offers eco-friendly resorts with nature views that promote responsible travel, prioritizing water management and conservation for a luxurious and positive guest experience.',
    detail1: { label: 'Best for', value: 'Tourism investors, hospitality developers' },
    detail2: { label: 'Key feature', value: 'Water management, conservation, nature integration' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  },
  {
    id: 1,
    title: 'Lodges',
    short: 'Sustainable eco-lodge retreats',
    description: 'HeadFam Africa eco lodges sit within natural environments and offer guests a calm, sustainable stay. They benefit local populations and include awareness and education programs for visitors.',
    detail1: { label: 'Best for', value: 'Safari operators, nature tourism developers' },
    detail2: { label: 'Key feature', value: 'Natural environment integration, community benefit' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>),
  },
  {
    id: 2,
    title: 'Campsites',
    short: 'Modern eco-friendly camping experiences',
    description: "HeadFam Africa's eco campsites use eco-friendly materials and renewable energy for a sustainable and modern camping experience with minimal environmental impact.",
    detail1: { label: 'Best for', value: 'Adventure tourism, national park operators' },
    detail2: { label: 'Key feature', value: 'Renewable energy, minimal environmental footprint' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21l-8-18-8 18"/><line x1="4.8" y1="15" x2="19.2" y2="15"/></svg>),
  },
  {
    id: 3,
    title: 'Coffee Shops',
    short: 'Culture, community and sustainability',
    description: "HeadFam Africa's Kinigi coffee shop brings together culture, community, and sustainability. It offers an authentic coffee experience in a beautiful natural setting built around local aesthetics.",
    detail1: { label: 'Best for', value: 'Tourism destinations, cultural centers' },
    detail2: { label: 'Key feature', value: 'Local aesthetics, cultural integration, community' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
  },
  {
    id: 4,
    title: 'Apartments',
    short: 'Energy-efficient sustainable living spaces',
    description: 'HeadFam Africa helps apartment complexes adopt energy-efficient technologies, waste reduction strategies, and sustainable building materials, turning units into low-impact living spaces.',
    detail1: { label: 'Best for', value: 'Real estate developers, urban housing projects' },
    detail2: { label: 'Key feature', value: 'Energy efficiency, waste reduction, low carbon footprint' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  },
  {
    id: 5,
    title: 'Eco-Residential',
    short: "Low-impact homes for Rwanda's future",
    description: 'HeadFam Africa designs, builds, and maintains eco-homes that address real needs: water conservation, waste recycling, pollution control, energy generation, and lower CO2 output.',
    detail1: { label: 'Best for', value: 'Homeowners, residential developers' },
    detail2: { label: 'Key feature', value: 'Solar panels, water conservation, CO2 reduction' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>),
  },
  {
    id: 6,
    title: 'Landscape',
    short: 'Breathtaking eco-conscious outdoor spaces',
    description: 'HeadFam Africa designs landscapes that combine visual character with ecological care. Every space we create works with its surroundings, using native plants and water-conscious techniques.',
    detail1: { label: 'Best for', value: 'Resorts, parks, corporate campuses, private gardens' },
    detail2: { label: 'Key feature', value: 'Native plants, water conservation, eco-materials' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.1 17.4C9.7 14 12 11 17 8c1 5-1 9-8 9.4z"/></svg>),
  },
  {
    id: 7,
    title: 'Culture Centers',
    short: 'Spaces that celebrate culture responsibly',
    description: 'HeadFam Africa helps plan, design, and establish culture centers and touristic sites that celebrate local traditions and identity, built with care for the environment.',
    detail1: { label: 'Best for', value: 'Government, NGOs, cultural organizations' },
    detail2: { label: 'Key feature', value: 'Cultural preservation, community engagement, sustainability' },
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  },
]

function ProcessBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#eco-process"
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
      See Our Process
    </a>
  )
}

export default function EcoServices() {
  const [activeId, setActiveId] = useState<number>(0)
  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]

  return (
    <section id="eco-services" className="py-16 px-6 md:px-16 bg-white">

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
            WHAT WE BUILD
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Eco-Construction Services
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          HeadFam Africa builds resorts, lodges, campsites, coffee shops, apartments, and
          eco-residential homes using building methods that prioritize sustainability, energy
          efficiency, and long-term durability.
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
              Get a Quote <span>&#8594;</span>
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
            OUR PROCESS
          </p>
          <h4
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            From Site to Structure
          </h4>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Site identification &rarr; Site planning &rarr; Architectural design &rarr; Eco building
            execution. Every project follows our proven four-step eco-construction process.
          </p>
        </div>

        <ProcessBtn />
      </motion.div>

    </section>
  )
}
