import { useState } from 'react'
import { motion } from 'framer-motion'
import hero0 from '../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../assets/Hero/headfam1.jpeg'
import hero2 from '../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../assets/Hero/headfam3.jpeg'
import hero4 from '../../../assets/Hero/Headfam4.jpeg'

const VP  = { once: true, amount: 0.2 as const }
const VP1 = { once: true, amount: 0.1 as const }
const T   = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface MosaicProject {
  image: string
  category: string
  date: string
  title: string
  description: string
  tags: string[]
}

const MOSAIC: MosaicProject[] = [
  {
    image: hero1,
    category: 'Residential',
    date: 'December 2024',
    title: 'Eco-Friendly Living — Ndera',
    description: 'Modern eco-residential project in Ndera built with sustainable materials and energy-efficient design.',
    tags: ['Local Materials', 'Energy-Efficient'],
  },
  {
    image: hero2,
    category: 'Coffee Shop',
    date: 'May 2024',
    title: 'Kinigi Coffee Shop',
    description: 'A cultural coffee experience built with local materials in a gorgeous natural setting near Kinigi.',
    tags: ['Cultural', 'Local Materials'],
  },
  {
    image: hero3,
    category: 'Landscape',
    date: 'Ongoing',
    title: 'Eco Landscape — Kigali',
    description: 'Breathtaking outdoor landscape design combining ecological sensitivity with artistic vision.',
    tags: ['Native Plants', 'Eco-Certified'],
  },
  {
    image: hero4,
    category: 'Cultural',
    date: '2023',
    title: 'Cultural Tourism Site',
    description: 'A touristic site creation that celebrates local culture while generating sustainable income for the community.',
    tags: ['Community-Owned', 'Sustainable'],
  },
  {
    image: hero0,
    category: 'Resort',
    date: 'Ongoing',
    title: 'Eco Resort Development',
    description: 'Full eco-resort development with nature views, water management systems, and responsible travel infrastructure.',
    tags: ['Eco-Resort', 'Responsible Travel'],
  },
]

function MosaicCard({ project, index }: { project: MosaicProject; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [arrowHovered, setArrowHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP1}
      transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-white rounded-2xl overflow-hidden"
      style={{
        boxShadow: hovered
          ? '0 20px 40px rgba(0,0,0,0.12)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image block */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          onError={onImgError}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className="absolute top-4 left-4 z-10 text-white text-xs font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
        >
          {project.category}
        </span>
      </div>

      {/* Content block */}
      <div className="p-5">
        <p
          className="text-xs text-gray-400 mb-2"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          {project.date}
        </p>

        <p
          className="text-base font-black mb-2"
          style={{
            color: '#1a1a1a',
            fontFamily: '"Playfair Display", Georgia, serif',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}
        </p>

        <p
          className="text-sm text-gray-500 leading-relaxed mb-4"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 px-2 py-1 rounded-full"
                style={{ backgroundColor: '#f9f6f0', fontFamily: '"DM Sans", sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a href="/contact">
            <div
              onMouseEnter={() => setArrowHovered(true)}
              onMouseLeave={() => setArrowHovered(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0"
              style={{
                backgroundColor: arrowHovered ? '#2E7D32' : 'rgba(46,125,50,0.08)',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={arrowHovered ? '#ffffff' : '#2E7D32'}
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function QuoteBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full md:w-auto px-8 py-3 rounded-full text-sm font-semibold inline-block text-center"
      style={{
        backgroundColor: hovered ? '#C9A84C' : '#2E7D32',
        color: '#ffffff',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s',
      }}
    >
      Get a Quote
    </a>
  )
}

function AllProjectsBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/#our-work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full md:w-auto px-8 py-3 rounded-full text-sm font-semibold inline-block text-center"
      style={{
        backgroundColor: hovered ? '#2E7D32' : 'transparent',
        color: hovered ? '#ffffff' : '#2E7D32',
        border: '2px solid #2E7D32',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      View All Projects
    </a>
  )
}

export default function EcoProjects() {
  return (
    <section id="eco-projects" className="py-10 md:py-16 px-4 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

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
            OUR PROJECTS
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-2xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Structures We've Built
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Every project tells a story of community, sustainability, and craftsmanship. Here are
          some of the structures HeadFam Africa has brought to life.
        </p>
      </motion.div>

      {/* Part 2 — Featured project */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: 'easeOut' as const }}
      >
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-md">
          <img
            src={hero0}
            alt="Kinigi Women's Center"
            onError={onImgError}
            className="w-full md:w-[45%] h-56 md:h-auto object-cover"
          />

          <div className="flex flex-col justify-center p-6 md:p-10" style={{ backgroundColor: '#2E7D32', flex: 1 }}>
            <span
              className="inline-block text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 self-start"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontFamily: '"DM Sans", sans-serif' }}
            >
              FEATURED BUILD
            </span>

            <h3
              className="text-2xl md:text-3xl font-black text-white mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Kinigi Women's Center
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
            >
              A landmark eco-construction project built with sustainable local materials and a
              local workforce. The Kinigi Women's Center is now a thriving hub of community
              empowerment, cultural celebration, and eco-conscious design.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { value: '2024', label: 'Completed', border: true },
                { value: 'Kinigi', label: 'Location', border: true },
                { value: 'Women Center', label: 'Category', border: false },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={stat.border ? { borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '1rem' } : {}}
                >
                  <p className="text-lg font-black text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {['Local Materials', 'Local Workforce', 'Community Owned', 'Eco-Certified'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Part 3 — Responsive card grid */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOSAIC.map((project, i) => (
            <MosaicCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Part 4 — Bottom CTA row */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl px-6 md:px-10 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <div>
          <h4
            className="text-xl font-black"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ready to Start Building?
          </h4>
          <p
            className="text-sm mt-1"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Tell us about your project and let's build something extraordinary together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <QuoteBtn />
          <AllProjectsBtn />
        </div>
      </motion.div>

    </section>
  )
}
