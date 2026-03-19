import { motion } from 'framer-motion'
import hero2 from '../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../assets/Hero/headfam3.jpeg'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface Step {
  number: string
  title: string
  description: string
  accent: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Site Identification',
    description:
      'We begin by identifying the right location — evaluating environmental conditions, community context, access to resources, and development potential before a single plan is drawn.',
    accent: '#2E7D32',
  },
  {
    number: '02',
    title: 'Site Planning',
    description:
      'Our team develops a detailed site plan — mapping out structures, drainage, landscaping, energy systems, and community integration to ensure the build is both functional and sustainable.',
    accent: '#C9A84C',
  },
  {
    number: '03',
    title: 'Architectural Design',
    description:
      'We create eco-friendly architectural designs deeply rooted in understanding client needs — sustainable, environmentally responsible, culturally rich, and built to minimize negative environmental impact.',
    accent: '#2E7D32',
  },
  {
    number: '04',
    title: 'Eco Building Execution',
    description:
      'We execute the build using certified sustainable materials, local labor, and energy-efficient techniques — delivering structures that are durable, beautiful, and kind to the planet.',
    accent: '#C9A84C',
  },
]

const SUMMARY = [
  { number: '01', title: 'Site Identification', sub: 'Find the right location', bg: '#2E7D32', border: true },
  { number: '02', title: 'Site Planning',       sub: 'Map every detail',        bg: '#C9A84C', border: true },
  { number: '03', title: 'Architectural Design', sub: 'Design sustainably',     bg: '#2E7D32', border: true },
  { number: '04', title: 'Eco Building Execution', sub: 'Build with purpose',   bg: '#C9A84C', border: false },
]

export default function EcoProcess() {
  return (
    <section id="eco-process" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

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
            HOW WE BUILD
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Our Eco-Construction Process
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Every HeadFam Africa project follows a proven four-step process — from identifying the
          right site to executing the build with sustainable materials and methods.
        </p>
      </motion.div>

      {/* Part 2 — Split layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center mb-16">

        {/* Left — vertical timeline */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <div className="relative pl-8">
            {/* Connecting line */}
            <div
              className="absolute w-0.5"
              style={{
                left: '0.75rem',
                top: '1rem',
                bottom: '1rem',
                backgroundColor: 'rgba(46,125,50,0.15)',
              }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative mb-10 last:mb-0"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: i * 0.12 }}
              >
                {/* Circle */}
                <div
                  className="absolute -left-8 top-0 w-10 h-10 rounded-full flex items-center justify-center bg-white"
                  style={{ border: `2px solid ${step.accent}` }}
                >
                  <span
                    className="text-xs font-black"
                    style={{ color: step.accent, fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pl-2">
                  <p
                    className="text-xs font-bold mb-1"
                    style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {step.number}
                  </p>
                  <p
                    className="text-lg font-black mb-2"
                    style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {step.description}
                  </p>
                  <div
                    className="h-0.5 w-10 rounded-full mt-3"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — stacked images */}
        <motion.div
          className="flex-1 relative pb-8 md:pb-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <img
            src={hero2}
            alt="HeadFam Africa eco-construction"
            onError={onImgError}
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
          />

          {/* Floating second image — hidden on mobile */}
          <img
            src={hero3}
            alt="HeadFam Africa project"
            onError={onImgError}
            className="absolute z-10 w-44 h-32 object-cover rounded-xl shadow-lg hidden md:block"
            style={{ bottom: '-1.5rem', right: '-1.5rem', border: '4px solid #ffffff' }}
          />

          {/* Floating stat card — hidden on mobile */}
          <div
            className="absolute z-10 bg-white rounded-xl shadow-lg px-5 py-4 hidden md:block"
            style={{ top: '1.5rem', left: '-1.5rem', borderLeft: '4px solid #C9A84C' }}
          >
            <p
              className="text-2xl font-black"
              style={{ color: '#2E7D32', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              4 Steps
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Proven Process
            </p>
          </div>
        </motion.div>
      </div>

      {/* Part 3 — Process summary bar */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        style={{ backgroundColor: '#1a1a1a' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        {SUMMARY.map((item) => (
          <div
            key={item.number}
            className="flex items-center gap-4"
            style={item.border ? { borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1.5rem' } : {}}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: item.bg }}
            >
              <span
                className="text-xs font-black text-white"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {item.number}
              </span>
            </div>
            <div>
              <p
                className="text-sm font-black text-white"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {item.title}
              </p>
              <p
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  )
}
