import { motion } from 'framer-motion'

const VP = { once: true, amount: 0.2 as const }

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a focused conversation to understand your vision, goals, site conditions, and budget. No jargon, just honest, practical dialogue.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Site Assessment',
    description:
      'Our team visits the location to evaluate environmental conditions, community context, regulatory requirements, and development potential.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Strategy Development',
    description:
      'We develop a tailored consultancy strategy, covering investment validation, stakeholder mapping, community engagement plans, and sustainability frameworks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Stakeholder Alignment',
    description:
      'We facilitate dialogue between all parties, including investors, local communities, government, and partners, to build consensus and prevent costly misalignment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Delivery & Support',
    description:
      'We deliver a comprehensive consultancy report with actionable recommendations, and remain available for ongoing support as your project moves into execution.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function ConsultancyProcess() {
  return (
    <section id="consultancy-process" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

      {/* Part 1 — Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            HOW WE WORK
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Our Consultancy Process
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          From first conversation to final delivery: a clear, structured process that keeps you
          informed and in control at every stage.
        </p>
      </motion.div>

      {/* Part 2 — Steps */}
      <div className="max-w-5xl mx-auto">

        {/* Desktop — horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-0 right-0 h-px z-0"
              style={{ top: '2rem', backgroundColor: '#e5e7eb' }}
            />

            {/* Steps row */}
            <div className="flex justify-between relative z-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                  style={{ maxWidth: '10rem' }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.6, ease: 'easeOut' as const, delay: i * 0.12 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white"
                    style={{ border: '4px solid #2E7D32', color: '#2E7D32' }}
                  >
                    {step.icon}
                  </div>
                  <p
                    className="text-xs font-bold mb-1"
                    style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {step.number}
                  </p>
                  <p
                    className="text-sm font-black mb-2"
                    style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{ left: '0.75rem', backgroundColor: '#e5e7eb' }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative mb-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: i * 0.1 }}
            >
              {/* Circle */}
              <div
                className="absolute -left-8 top-0 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                style={{ border: '2px solid #2E7D32', color: '#2E7D32' }}
              >
                <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {step.icon}
                </span>
              </div>

              <p
                className="text-xs font-bold mb-1"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                {step.number}
              </p>
              <p
                className="text-base font-black mb-2"
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
