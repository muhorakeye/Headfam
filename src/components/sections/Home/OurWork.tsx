// OurWork — full-bleed image overlay cards, matches EcoProjects/ArchProjects card design
// Images fall back to dark green (#1b4332) so missing assets never look broken

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import img6 from '../../../assets/Hero/headfam6.jpeg'
import img7 from '../../../assets/Hero/headfam7.jpeg'
import img8 from '../../../assets/Hero/headfam8.jpeg'

interface Project {
  id: number
  category: string
  date: string
  title: string
  description: string
  image: string
  route: string
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Residential',
    date: 'December 2, 2024',
    title: 'Eco-Friendly Living Takes Shape in Ndera',
    description: 'A modern eco-residential project in Ndera that blends sustainable materials, energy-efficient design, and community-centered architecture.',
    image: img6,
    route: '/projects/ndera-residential',
  },
  {
    id: 2,
    category: 'Women Center',
    date: 'July 3, 2024',
    title: "Kinigi Women's Center Now Open",
    description: 'Empowering women through eco-conscious construction and cultural identity in the heart of Kinigi.',
    image: img7,
    route: '/projects/kinigi-womens-center',
  },
  {
    id: 3,
    category: 'Coffee Shop',
    date: 'May 28, 2024',
    title: 'Kinigi Coffee Shop Near Completion',
    description: 'Culture, community, and sustainability combined in a gorgeous natural setting inspired by local aesthetics.',
    image: img8,
    route: '/projects/kinigi-coffee-shop',
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate()
  const [arrowHovered, setArrowHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-64 sm:h-72"
      onClick={() => navigate(project.route)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.backgroundColor = '#1b4332'
          e.currentTarget.src = ''
        }}
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
            style={{ backgroundColor: '#2E7D32', fontFamily: 'DM Sans' }}
          >
            {project.category}
          </span>
          <p
            className="text-base font-black text-white leading-snug mb-1"
            style={{ fontFamily: 'Playfair Display' }}
          >
            {project.title}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontFamily: 'DM Sans',
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
        <div
          className="flex-shrink-0 self-end w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: arrowHovered ? '#C9A84C' : 'white',
            backgroundColor: arrowHovered ? '#C9A84C' : 'transparent',
          }}
          onMouseEnter={() => setArrowHovered(true)}
          onMouseLeave={() => setArrowHovered(false)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export function OurWork() {
  return (
    <section
      id="our-work"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Our Work
      </h2>
      <p className="text-base text-gray-400 text-center mb-10">
        Real projects. Real impact. Built to last.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
