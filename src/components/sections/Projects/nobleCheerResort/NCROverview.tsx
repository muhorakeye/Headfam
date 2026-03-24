import type { JSX } from 'react'
import { motion } from 'framer-motion'
import hero2 from '../../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../../assets/Hero/headfam3.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

export default function NCROverview(): JSX.Element {
  return (
    <section id="ncr-overview" className="bg-white py-16 px-6 md:px-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">

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
            Where Nature Meets Sustainable Construction
          </h2>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Noble Cheer Resort is a mixed eco-resort and campsite built by HeadFam Africa along
            the scenic road between Musanze and Rubavu in northern Rwanda. The project was designed
            and constructed to offer guests an immersive natural experience while setting a high
            standard for eco-conscious hospitality construction.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            HeadFam Africa built Noble Cheer Resort using sustainable local materials and techniques
            that work with the natural landscape rather than against it. The resort's structures
            blend into the surrounding environment, creating spaces for relaxation, adventure, and
            connection with nature.
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            From the resort accommodation to the campsite facilities, every element of Noble Cheer
            was constructed by HeadFam Africa with durability, sustainability, and community impact
            at its core. The result is a destination that serves both guests and the local Musanze
            community.
          </p>

          <div className="mt-6 pl-5" style={{ borderLeft: '4px solid #C9A84C' }}>
            <p
              className="text-base font-black"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
            >
              "Built for nature. Designed for people. Constructed for the future."
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa, on Noble Cheer Resort
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
            src={hero2}
            alt="Noble Cheer Resort"
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
              Musanze
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Location
            </p>
            <p
              className="text-xs"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              Road Musanze-Rubavu
            </p>
          </div>

          {/* Floating thumbnail — hidden on mobile to prevent overflow */}
          <img
            src={hero3}
            alt="Noble Cheer Resort detail"
            onError={onImgError}
            className="hidden md:block absolute -top-6 -right-6 z-10 w-36 h-24 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>

    </section>
  )
}
