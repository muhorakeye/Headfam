import { motion } from 'framer-motion'
import hero0 from '../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../assets/Hero/headfam1.jpeg'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface Reason {
  title: string
  body: string
  accent: string
}

const REASONS: Reason[] = [
  {
    title: '12+ Years On the Ground',
    body: 'We have over a decade of experience working directly in East African eco-construction and tourism development — not theory, real field knowledge.',
    accent: '#2E7D32',
  },
  {
    title: 'Community-First Approach',
    body: "Every consultancy engagement prioritizes the wellbeing of local communities. We won't validate projects that exploit or displace the people who live there.",
    accent: '#C9A84C',
  },
  {
    title: 'End-to-End Capability',
    body: 'Unlike standalone consultants, HeadFam can take your project from advice all the way through to construction — giving our consultancy real teeth.',
    accent: '#2E7D32',
  },
  {
    title: 'Local Relationships',
    body: 'We have deep relationships with local governments, communities, and suppliers across Rwanda — opening doors that outside consultants simply cannot.',
    accent: '#C9A84C',
  },
  {
    title: 'Sustainability Is Non-Negotiable',
    body: "We only consult on projects that meet our environmental standards. If it harms the land or the people, we won't put our name on it.",
    accent: '#2E7D32',
  },
]

export default function ConsultancyWhyUs() {
  return (
    <section id="consultancy-why-us" className="py-16 px-6 md:px-16 bg-white">

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
            WHY CHOOSE US
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          What Makes HeadFam Different
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          We don't just consult — we get involved. Every recommendation we make is backed by real
          field experience, community relationships, and a genuine commitment to sustainable outcomes.
        </p>
      </motion.div>

      {/* Part 2 — Split layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center mb-16">

        {/* Left — reasons list */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          {REASONS.map((reason, i) => (
            <div key={reason.title}>
              <div className="flex items-start gap-4">
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: reason.accent, minHeight: '40px', alignSelf: 'stretch' }}
                />
                <div>
                  <p
                    className="text-base font-black mb-1"
                    style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {reason.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {reason.body}
                  </p>
                </div>
              </div>
              {i < REASONS.length - 1 && (
                <div className="h-px my-6" style={{ backgroundColor: '#f3f4f6' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Right — stacked images */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <img
            src={hero0}
            alt="HeadFam Africa consultancy"
            onError={onImgError}
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />

          {/* Floating second image */}
          <img
            src={hero1}
            alt="HeadFam Africa project"
            onError={onImgError}
            className="absolute z-10 w-40 h-28 object-cover rounded-xl shadow-lg"
            style={{ bottom: '-1.5rem', left: '-1.5rem', border: '4px solid #ffffff' }}
          />

          {/* Floating stat card */}
          <div
            className="absolute z-10 bg-white rounded-xl shadow-lg px-5 py-4"
            style={{ top: '1.5rem', right: '-1.5rem', borderLeft: '4px solid #2E7D32' }}
          >
            <p
              className="text-2xl font-black"
              style={{ color: '#2E7D32', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              12+
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Years of Experience
            </p>
          </div>
        </motion.div>
      </div>

      {/* Part 3 — Testimonial strip */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl px-10 md:px-16 py-12 flex flex-col md:flex-row items-center gap-10"
        style={{ backgroundColor: '#1a1a1a' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        {/* Large quote mark */}
        <div
          className="text-7xl font-black leading-none flex-shrink-0"
          style={{ color: 'rgba(255,255,255,0.1)', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          &ldquo;
        </div>

        {/* Quote + attribution */}
        <div className="flex-1">
          <p
            className="text-lg md:text-xl font-black text-white leading-snug mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            HeadFam didn't just give us advice — they walked with us through every decision. Their
            knowledge of the local context was invaluable.
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#2E7D32' }}
            >
              <span
                className="text-white font-black text-sm"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                R
              </span>
            </div>
            <div>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Robert Habimana
              </p>
              <p
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                Tourism Investor, Kigali
              </p>
            </div>
          </div>
        </div>

        {/* Gold stat block */}
        <div className="text-center flex-shrink-0">
          <p
            className="text-4xl font-black"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            100%
          </p>
          <p
            className="text-xs text-white mt-1"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Client Satisfaction
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Across all consultancy engagements
          </p>
        </div>
      </motion.div>

    </section>
  )
}
