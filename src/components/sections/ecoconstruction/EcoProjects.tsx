import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import hero1 from '../../../assets/masaka/m1.jpg'
import hero2 from '../../../assets/Noble/n1.jpeg'
import hero3 from '../../../assets/Hero/headfam3.jpeg'
import hero4 from '../../../assets/Bambino/B3.jpeg'

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
  route: string
}

const MOSAIC: MosaicProject[] = [
  {
    image: hero1,
    category: 'Culture Center',
    date: '2022',
    title: 'Kinigi Women Village',
    description: 'A culture center built by HeadFam Africa in Kinigi, Musanze — empowering women through craft, income, and community beneath Sabyinyo Volcano.',
    tags: ['Culture Center', 'Musanze'],
    route: '/projects/kinigi-womens-village',
  },
  {
    image: hero2,
    category: 'Eco-Residential',
    date: '2023',
    title: 'Masaka Sweet Apartment',
    description: 'An eco-friendly residential apartment built by HeadFam Africa opposite Masaka Hospital in Kigali — sustainable living designed for modern Kigali.',
    tags: ['Eco-Residential', 'Kigali'],
    route: '/projects/masaka-sweet-apartment',
  },
  {
    image: hero3,
    category: 'Eco-Resort & Campsite',
    date: 'Ongoing',
    title: 'Noble Cheer Resort',
    description: 'A mixed eco-resort and campsite built by HeadFam Africa on the Musanze-Rubavu road — nature-integrated construction serving guests and community.',
    tags: ['Eco-Resort', 'Musanze'],
    route: '/projects/noble-cheer-resort',
  },
  {
    image: hero4,
    category: 'Eco-Resort',
    date: '2025',
    title: 'Bambino Super City',
    description: 'A landmark eco-resort built by HeadFam Africa in Kigali — sustainable design, local workforce, and a new standard for eco-hospitality in Rwanda.',
    tags: ['Eco-Resort', 'Kigali'],
    route: '/projects/bambino-super-city',
  },
]

function MosaicCard({ project, index }: { project: MosaicProject; index: number }) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP1}
      transition={{ duration: 0.6, ease: 'easeOut' as const, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-64 sm:h-72"
      onClick={() => navigate(project.route)}
    >
      <img
        src={project.image}
        alt={project.title}
        onError={onImgError}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Permanent gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
      />

      {/* Content block */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between gap-3">
        <div className="flex-1">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 text-white"
            style={{ backgroundColor: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
          >
            {project.category}
          </span>
          <p
            className="text-base font-black text-white leading-snug mb-1"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {project.title}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontFamily: '"DM Sans", sans-serif',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Arrow button */}
        <div className="flex-shrink-0 self-end w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
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

      {/* Part 3 — Image-overlay card grid */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
