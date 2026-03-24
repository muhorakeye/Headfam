import { useState } from 'react'
import { motion } from 'framer-motion'
import hero0 from '../../../assets/Hero/headfam.jpeg'
import hero4 from '../../../assets/Hero/Headfam4.jpeg'

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface Reason {
  title: string
  body: string
  svg: React.ReactNode
  accent: string
}

const REASONS: Reason[] = [
  {
    title: 'Sustainable Materials Only',
    body: 'We source locally available, environmentally certified materials for every project, reducing carbon footprint and supporting local economies.',
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.1 17.4C9.7 14 12 11 17 8c1 5-1 9-8 9.4z"/></svg>),
    accent: '#2E7D32',
  },
  {
    title: 'Community-Led Builds',
    body: 'We hire the majority of our workforce from within 10km of every build site, creating stable local employment and circulating money within communities.',
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    accent: '#C9A84C',
  },
  {
    title: 'End-to-End Delivery',
    body: 'From initial consultancy through architectural design to full construction, HeadFam Africa handles every phase. This eliminates coordination gaps and keeps costs predictable.',
    svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>),
    accent: '#2E7D32',
  },
]

export default function EcoWhyUs() {
  const [hovered, setHovered] = useState<boolean[]>([false, false, false])
  const setHover = (i: number, val: boolean) =>
    setHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  return (
    <section id="eco-why-us" className="py-16 px-6 md:px-16 bg-white">

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
          Built Different. Built Better.
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          HeadFam Africa constructs buildings that serve people, honor culture, and respect the
          planet. Here is what makes us different.
        </p>
      </motion.div>

      {/* Part 2 — Bento grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        {/* Row 1 — Block 1: Stat */}
        <motion.div
          className="rounded-2xl p-8"
          style={{ backgroundColor: '#2E7D32' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...T, delay: 0 }}
        >
          <p
            className="text-5xl font-black text-white mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            12+
          </p>
          <p
            className="text-sm font-bold text-white mb-3"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Years of Eco-Construction
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Over a decade of hands-on experience building sustainable structures across East Africa.
          </p>
          <div className="h-1 w-10 rounded-full mt-4" style={{ backgroundColor: '#C9A84C' }} />
        </motion.div>

        {/* Row 1 — Block 2: Image */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VP}
          transition={{ ...T, delay: 0.1 }}
        >
          <img
            src={hero0}
            alt="HeadFam Africa eco-construction"
            onError={onImgError}
            className="w-full h-full min-h-48 object-cover"
          />
        </motion.div>

        {/* Row 1 — Block 3: Reason */}
        <motion.div
          className="rounded-2xl p-8"
          style={{ backgroundColor: '#f9f6f0' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...T, delay: 0.2 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" className="mb-4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <p
            className="text-lg font-black mb-2"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Safety First, Always
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Every structure meets rigorous safety standards. Our team is trained in eco-construction
            best practices that protect both people and the environment.
          </p>
        </motion.div>

        {/* Row 2 — Block 4: Wide image with overlay */}
        <motion.div
          className="md:col-span-2 rounded-2xl overflow-hidden relative"
          style={{ minHeight: "300px" }}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ ...T, delay: 0 }}
        >
          <img
            src={hero4}
            alt="HeadFam Africa local workforce"
            onError={onImgError}
            className="w-full h-64 object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
          />
          <div className="absolute bottom-6 left-6 z-10">
            <p
              className="text-xs font-bold tracking-widest mb-1"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              LOCAL WORKFORCE
            </p>
            <p
              className="text-lg font-black text-white"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              500+ local jobs created across Rwanda
            </p>
          </div>
        </motion.div>

        {/* Row 2 — Block 5: Gold stat */}
        <motion.div
          className="rounded-2xl p-8 flex flex-col justify-center"
          style={{ backgroundColor: '#C9A84C' }}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ ...T, delay: 0.1 }}
        >
          <p
            className="text-5xl font-black text-white mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            30%
          </p>
          <p
            className="text-sm font-bold text-white mb-3"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Revenue to Community
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Every project puts 30% of revenue toward building eco-houses for low-income families near the build site.
          </p>
        </motion.div>

        {/* Row 3 — 3 reason cards */}
        {REASONS.map((reason, i) => (
          <motion.div
            key={reason.title}
            className="rounded-2xl p-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ ...T, delay: i * 0.15 }}
            onMouseEnter={() => setHover(i, true)}
            onMouseLeave={() => setHover(i, false)}
            style={{
              backgroundColor: hovered[i] ? '#ffffff' : '#f9f6f0',
              boxShadow: hovered[i] ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
              transform: hovered[i] ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            <div className="h-1 w-10 rounded-full mb-5" style={{ backgroundColor: reason.accent }} />
            <div className="mb-4">{reason.svg}</div>
            <p
              className="text-base font-black mb-2"
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
          </motion.div>
        ))}
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
        <div
          className="text-7xl font-black leading-none flex-shrink-0"
          style={{ color: 'rgba(255,255,255,0.08)', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          &ldquo;
        </div>

        <div className="flex-1">
          <p
            className="text-lg md:text-xl font-black text-white leading-snug mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            HeadFam built our eco-lodge using only local materials and local workers. The result
            exceeded every expectation, and the community around us benefited directly.
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
                E
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Emmanuel Nkusi
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}>
                Eco-Lodge Developer, Northern Rwanda
              </p>
            </div>
          </div>
        </div>

        <div className="text-center flex-shrink-0">
          <p
            className="text-4xl font-black"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            3
          </p>
          <p className="text-xs text-white mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            Landmark Projects
          </p>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"DM Sans", sans-serif' }}>
            Iconic structures across Rwanda
          </p>
        </div>
      </motion.div>

    </section>
  )
}
