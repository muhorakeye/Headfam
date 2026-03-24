import { useState } from 'react'
import { motion } from 'framer-motion'
import hero3 from '../../../assets/Hero/headfam3.jpeg'

const VP = { once: true, amount: 0.2 as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const STATS = [
  { number: '12+', label: 'Years Experience', border: true },
  { number: '500+', label: 'Jobs Created', border: true },
  { number: '3', label: 'Landmark Builds', border: false },
]

export default function EcoCTA() {
  const [btn1Hovered, setBtn1Hovered] = useState(false)
  const [btn2Hovered, setBtn2Hovered] = useState(false)

  const scrollToServices = () => {
    document.getElementById('eco-services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="eco-cta" className="py-6 px-6 md:px-16 bg-white">

      <motion.div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
      >
        <img
          src={hero3}
          alt="HeadFam Africa eco-construction"
          onError={onImgError}
          className="w-full object-cover h-80 md:h-[480px]"
        />

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 100%)' }}
        />

        <div
          className="absolute z-10"
          style={{ left: '1.5rem', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' as const }}
          >
            <p
              className="text-xs font-bold tracking-widest mb-4"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              START BUILDING
            </p>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Let's Build Something Extraordinary Together
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
            >
              From eco-resorts to cultural centers, eco-residential homes to campsites, HeadFam
              Africa brings 12+ years of sustainable construction expertise to every project we
              take on.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-8 flex-wrap">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  style={stat.border ? { borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '2rem' } : {}}
                >
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button row */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                onMouseEnter={() => setBtn1Hovered(true)}
                onMouseLeave={() => setBtn1Hovered(false)}
                style={{
                  backgroundColor: btn1Hovered ? '#C9A84C' : '#2E7D32',
                  color: '#ffffff',
                  fontFamily: '"DM Sans", sans-serif',
                  transition: 'background-color 0.3s',
                }}
                className="px-8 py-4 rounded-full text-sm font-bold inline-block"
              >
                Get a Free Quote
              </a>

              <button
                onClick={scrollToServices}
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
                style={{
                  backgroundColor: btn2Hovered ? '#ffffff' : 'transparent',
                  color: btn2Hovered ? '#1a1a1a' : '#ffffff',
                  border: '2px solid #ffffff',
                  fontFamily: '"DM Sans", sans-serif',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                className="px-8 py-4 rounded-full text-sm font-semibold"
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
