import type { JSX } from 'react'
import { motion } from 'framer-motion'

const masaka = [
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055889/m24_lw3rbz.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055888/m23_rtlkds.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055889/m21_jjog5m.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055888/m22_chn4b2.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055885/m20_tdgbcd.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055885/m18_uqcqgp.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055883/m14_hk5cxu.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055880/m10_wf8cr2.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055880/m5_amywur.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055877/m3_njwz3b.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055878/m9_vvancn.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055881/m7_qvsoqk.jpg",
  "https://res.cloudinary.com/dsld1mtls/image/upload/v1775055881/m11_vqqtmm.jpg",
]

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

export default function MSAOverview(): JSX.Element {
  return (
    <section id="msa-overview" className="bg-white py-16 px-6 md:px-16">

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
            A Healthy, Eco-Friendly Home in Kigali
          </h2>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Masaka Sweet Apartment is an eco-residential project built by HeadFam Africa in 2023,
            located opposite Masaka Hospital in Masaka Sector, Kigali. The apartment was designed
            and constructed to offer a cozy, healthy, and environmentally responsible living
            experience in the heart of the city.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            HeadFam Africa built the apartment using sustainable materials and eco-conscious
            construction methods, creating a living space that minimizes environmental impact while
            maximizing comfort and quality. Every room was designed with natural light, ventilation,
            and a vibrant connection to the surrounding environment.
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Masaka Sweet Apartment is proof that eco-residential construction in Kigali is not only
            possible, it is exceptional. HeadFam Africa delivered a home that its owner, MUKABARISA
            Pauline, and her guests are proud to call their own.
          </p>

          <div className="mt-6 pl-5" style={{ borderLeft: '4px solid #C9A84C' }}>
            <p
              className="text-base font-black"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
            >
              "A cozy sanctuary where eco-living meets modern comfort."
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa, on Masaka Sweet Apartment
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
            src={masaka[2]}
            alt="Masaka Sweet Apartment"
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
              2023
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
              Masaka, Kigali
            </p>
          </div>

          {/* Floating thumbnail — hidden on mobile to prevent overflow */}
          <img
            src={masaka[3]}
            alt="Masaka Sweet Apartment detail"
            onError={onImgError}
            className="hidden md:block absolute -top-6 -right-6 z-10 w-36 h-24 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>

    </section>
  )
}
