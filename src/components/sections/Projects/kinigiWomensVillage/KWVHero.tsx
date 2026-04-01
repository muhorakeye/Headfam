import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const kwv = [
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059735/kn6_i4acxm.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059735/k25_sqsup0.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k15_z5pou1.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059734/k19_mw6qtp.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059734/k24_h6owx4.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k18_gr7a5p.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059733/k16_eejn1k.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059732/k14_i1tlaw.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059731/k13_eztsbd.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059730/ki3_cqiq65.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k11_vqaza5.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k12_zrelab.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059730/ki1_hqfkkf.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k10_ym5fwn.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059729/k9_iz4wy7.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059728/k7_a0wukb.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059728/k6_eqqwff.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059727/k2_qwfhm5.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775059727/k3_iti3lp.jpg",
]

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#1b4332'
  e.currentTarget.src = ''
}

export default function KWVHero() {
  const [exploreHovered, setExploreHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToOverview() {
    document.getElementById('kwv-overview')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="kwv-hero"
      className="relative overflow-hidden h-screen min-h-[600px]"
    >
      {/* Background image */}
      <img
        src={kwv[17]}
        alt="Kinigi Women's Village"
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
        src={kwv[13]}
        alt="Kinigi Women's Village interior"
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
          Home › Projects › Kinigi Women Village
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
              CULTURE CENTER
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
          Kinigi Women Village
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Empowering women through craft, culture, and community in the heart of Musanze.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[
            { value: '2022', label: 'Year Built', divider: true },
            { value: 'Kinigi', label: 'Location', divider: true },
            { value: 'Culture Center', label: 'Category', divider: false },
          ].map((stat) => (
            <div
              key={stat.label}
              className={stat.divider ? 'pr-4 md:pr-8' : ''}
              style={stat.divider ? { borderRight: '1px solid rgba(255,255,255,0.2)' } : {}}
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
            style={{
              backgroundColor: exploreHovered ? '#C9A84C' : '#2E7D32',
              fontFamily: '"DM Sans", sans-serif',
            }}
            onMouseEnter={() => setExploreHovered(true)}
            onMouseLeave={() => setExploreHovered(false)}
          >
            Explore This Project
          </button>

          <a href="/contact">
            <button
              className="px-5 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-semibold border-2 border-white transition-colors duration-300"
              style={{
                backgroundColor: contactHovered ? 'white' : 'transparent',
                color: contactHovered ? '#1a1a1a' : 'white',
                fontFamily: '"DM Sans", sans-serif',
              }}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
            >
              Get In Touch
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
