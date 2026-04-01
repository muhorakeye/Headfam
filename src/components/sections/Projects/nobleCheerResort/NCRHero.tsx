import type { JSX } from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const noble = [
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057763/n21_orllvq.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057752/n2_fafh2h.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057751/n4_ye91e4.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057751/n1_lmhigv.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057749/n3_iiszhz.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057743/n6_upviec.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057744/n5_ux7har.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057757/n10_ivdxmn.png",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775057756/n9_fcvi3r.png",
]

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

export default function NCRHero(): JSX.Element {
  const [btn1Hovered, setBtn1Hovered] = useState<boolean>(false)
  const [btn2Hovered, setBtn2Hovered] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToOverview = () => {
    const el = document.getElementById('ncr-overview')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="ncr-hero"
      className="relative overflow-hidden h-screen"
      style={{ minHeight: '600px' }}
    >
      {/* Background image */}
      <img
        src={noble[1]}
        alt="Noble Cheer Resort"
        onError={onImgError}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Floating thumbnail */}
      <img
        src={noble[3]}
        alt="Noble Cheer Resort detail"
        onError={onImgError}
        className="absolute bottom-8 right-8 z-20 w-44 h-32 object-cover rounded-xl shadow-2xl border-4 border-white"
      />

      {/* Content block */}
      <div
        className="absolute left-4 md:left-16 z-20 max-w-xs sm:max-w-sm md:max-w-xl"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        {/* Breadcrumb */}
        <motion.p
          className="text-xs tracking-wide mb-6"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Home &rsaquo; Projects &rsaquo; Noble Cheer Resort
        </motion.p>

        {/* Category badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: '#C9A84C' }}>
            <span
              className="text-xs font-bold text-white tracking-widest"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              ECO-RESORT &amp; CAMPSITE
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          style={{
            fontFamily: '"Playfair Display", serif',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Noble Cheer Resort
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          A mixed eco-resort and campsite built by HeadFam Africa on the scenic road between
          Musanze and Rubavu, where nature meets sustainable construction.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[
            { value: 'Musanze', label: 'Location', border: true },
            { value: 'Eco-Resort & Campsite', label: 'Category', border: true },
            { value: '2020', label: 'Year Built', border: false },
          ].map((stat) => (
            <div
              key={stat.label}
              className={stat.border ? 'pr-4 md:pr-8' : ''}
              style={stat.border ? { borderRight: '1px solid rgba(255,255,255,0.2)' } : {}}
            >
              <p
                className="text-xl font-black text-white"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Button row */}
        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button
            onClick={scrollToOverview}
            className="px-5 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold text-white transition-colors duration-300"
            style={{ backgroundColor: btn1Hovered ? '#C9A84C' : '#2E7D32' }}
            onMouseEnter={() => setBtn1Hovered(true)}
            onMouseLeave={() => setBtn1Hovered(false)}
          >
            Explore This Project
          </button>

          <a
            href="/contact"
            className="px-5 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300"
            style={{
              border: '2px solid white',
              backgroundColor: btn2Hovered ? 'white' : 'transparent',
              color: btn2Hovered ? '#1a1a1a' : 'white',
            }}
            onMouseEnter={() => setBtn2Hovered(true)}
            onMouseLeave={() => setBtn2Hovered(false)}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
