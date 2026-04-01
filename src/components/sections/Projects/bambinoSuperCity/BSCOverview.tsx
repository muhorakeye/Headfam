import type { JSX } from 'react'
import { motion } from 'framer-motion'

const bambino = [
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/5_xbw0ct.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/B2_hkx5qq.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058758/B1_q4ht4p.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B3_pmsnp3.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B4_k7sh1f.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B6_exunj0.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058759/B7_xa5lta.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058761/BD3_dzs99a.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058760/BD1_tn6xwb.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058760/BD2_s0egfa.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775058761/BD4_runvy0.jpg",
]

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

export default function BSCOverview(): JSX.Element {
  return (
    <section id="bsc-overview" className="bg-white py-16 px-6 md:px-16">

      {/* SPLIT: Content left, Image right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center mb-16">

        {/* LEFT — text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-widest"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              PROJECT OVERVIEW
            </span>
            <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          </div>

          <h2
            className="text-3xl md:text-4xl font-black leading-tight mb-6"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
          >
            A Modern Eco-Resort Built for Kigali
          </h2>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Bambino Super City is a landmark eco-resort constructed by HeadFam Africa in Kigali,
            Rwanda. Built in 2025 with sustainable materials and eco-conscious methods, the resort
            was designed to offer a world-class experience while staying true to the principles of
            responsible construction.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            HeadFam Africa approached this project the same way they approach every build: with
            local materials, a local workforce, and a deep respect for the environment. Every
            structural and design decision was made with both the guest experience and the
            surrounding Kigali community in mind.
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            The result is a modern, vibrant eco-resort that proves sustainable construction and
            exceptional quality are not in conflict. Bambino Super City stands as one of HeadFam
            Africa's most ambitious and impactful builds to date, a structure the people of Kigali
            are proud of.
          </p>

          <div className="mt-6 pl-5" style={{ borderLeft: '4px solid #C9A84C' }}>
            <p
              className="text-base font-black"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
            >
              "Built sustainably. Designed beautifully. Made for Kigali."
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa, on Bambino Super City
            </p>
          </div>
        </motion.div>

        {/* RIGHT — image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <img
            src={bambino[4]}
            alt="Bambino Super City"
            onError={onImgError}
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
            style={{ minHeight: "240px" }}
          />

          {/* Floating stat card — hidden on mobile to prevent overflow */}
          <div
            className="hidden md:block absolute -bottom-6 -left-6 z-10 bg-white rounded-xl shadow-lg p-5"
            style={{ borderLeft: '4px solid #2E7D32' }}
          >
            <p
              className="text-2xl font-black"
              style={{ color: '#2E7D32', fontFamily: '"Playfair Display", serif' }}
            >
              2025
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Year Built
            </p>
            <p
              className="text-xs"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              Kigali, Rwanda
            </p>
          </div>

          {/* Floating thumbnail — hidden on mobile to prevent overflow */}
          <img
            src={bambino[6]}
            alt="Bambino Super City detail"
            onError={onImgError}
            className="hidden md:block absolute -top-6 -right-6 z-10 w-36 h-24 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>

    </section>
  )
}
