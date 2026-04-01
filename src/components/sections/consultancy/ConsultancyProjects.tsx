import { useState } from 'react'
import { motion } from 'framer-motion'
import hero0 from '../../../assets/Hero/headfam.webp'
import hero1 from '../../../assets/Hero/headfam1.webp'
import hero2 from '../../../assets/Hero/headfam2.webp'
import hero3 from '../../../assets/Hero/headfam3.webp'

const VP = { once: true, amount: 0.2 as const }
const VP1 = { once: true, amount: 0.1 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface Project {
  image: string
  category: string
  date: string
  title: string
  body: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    image: hero1,
    category: 'Residential',
    date: 'December 2024',
    title: 'Eco-Friendly Living, Ndera',
    body: 'Consultancy support for site identification, community engagement, and sustainable material selection for a modern eco-residential project in Ndera, Kigali.',
    tags: ['Site Assessment', 'Community Involvement'],
  },
  {
    image: hero2,
    category: 'Coffee Shop',
    date: 'May 2024',
    title: 'Kinigi Coffee Shop',
    body: 'Investment validation and landscape consultancy for the Kinigi coffee shop, ensuring the build honored the natural setting and created lasting local employment.',
    tags: ['Investment Validation', 'Landscape Consultancy'],
  },
  {
    image: hero3,
    category: 'Tourism',
    date: 'Ongoing',
    title: 'Tourism Destination Strategy',
    body: "Ongoing business information and mediation consultancy to help develop responsible tourism ecosystems across northern Rwanda's most scenic regions.",
    tags: ['Business Info', 'Mediation'],
  },
]

function StartBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#C9A84C' : '#2E7D32',
        color: '#ffffff',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold inline-block"
    >
      Start a Conversation
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
      style={{
        backgroundColor: hovered ? '#2E7D32' : 'transparent',
        color: hovered ? '#ffffff' : '#2E7D32',
        border: '2px solid #2E7D32',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold inline-block"
    >
      View All Projects
    </a>
  )
}

export default function ConsultancyProjects() {
  const [hovered, setHovered] = useState<boolean[]>([false, false, false])

  const setHover = (i: number, val: boolean) =>
    setHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  return (
    <section id="consultancy-projects" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

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
            CASE STUDIES
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Projects We've Helped Shape
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          From investment validation to community engagement, here are some of the real projects
          our consultancy work has helped bring to life.
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
            className="w-full md:w-[45%] h-72 md:h-auto object-cover"
          />

          <div className="flex flex-col justify-center p-10" style={{ backgroundColor: '#2E7D32', flex: 1 }}>
            <span
              className="inline-block text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 self-start"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontFamily: '"DM Sans", sans-serif' }}
            >
              FEATURED PROJECT
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
              HeadFam provided full consultancy support for the Kinigi Women's Center, from site
              assessment and investment validation through to community stakeholder alignment and
              project oversight. The result is a landmark eco-construction that empowers women and
              celebrates local culture.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              {[
                { value: '2024', label: 'Completed', border: true },
                { value: 'Kinigi', label: 'Location', border: true },
                { value: 'Community', label: 'Led Project', border: false },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={stat.border ? { borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '1.5rem' } : {}}
                >
                  <p
                    className="text-lg font-black text-white"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Services used */}
            <div>
              <p
                className="text-xs mb-2"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif' }}
              >
                Services involved:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Investment Validation', 'Community Involvement', 'Mediation'].map((tag) => (
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
        </div>
      </motion.div>

      {/* Part 3 — Project grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP1}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: i * 0.15 }}
            onMouseEnter={() => setHover(i, true)}
            onMouseLeave={() => setHover(i, false)}
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              boxShadow: hovered[i] ? '0 10px 30px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)',
              transform: hovered[i] ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              onError={onImgError}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(46,125,50,0.08)',
                    color: '#2E7D32',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {project.category}
                </span>
                <span
                  className="text-xs"
                  style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {project.date}
                </span>
              </div>

              <h4
                className="text-lg font-black mb-2"
                style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {project.title}
              </h4>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
              >
                {project.body}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: '#f9f6f0',
                      color: '#9ca3af',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Part 4 — Bottom CTA row */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl px-10 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
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
            Have a Project in Mind?
          </h4>
          <p
            className="text-sm mt-1"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Tell us about it and we will tell you how we can help.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <StartBtn />
          <AllProjectsBtn />
        </div>
      </motion.div>

    </section>
  )
}
