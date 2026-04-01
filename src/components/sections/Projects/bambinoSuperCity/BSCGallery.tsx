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
  e.currentTarget.style.backgroundColor = '#1b4332'
  e.currentTarget.src = ''
}

export default function BSCGallery(): JSX.Element {
  return (
    <section id="bsc-gallery" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>

      {/* HEADER */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            PROJECT GALLERY
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black text-white mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Inside Bambino Super City
        </h2>

        <p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
        >
          A closer look at what HeadFam Africa built, from structure to interior to landscape.
        </p>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT — Photo gallery grid */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* Row 1 — full width */}
            <div className="col-span-1 md:col-span-2 relative overflow-hidden rounded-xl group" style={{ height: "280px", minHeight: "280px" }}>
              <img
                src={bambino[0]}
                alt="Bambino Super City overview"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
            </div>

            {/* Row 2 */}
            {[bambino[2], bambino[3]].map((src, i) => (
              <div key={`r2-${i}`} className="relative overflow-hidden rounded-xl group" style={{ height: "200px", minHeight: "200px" }}>
                <img src={src} alt={`Bambino Super City ${i + 2}`} onError={onImgError} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
              </div>
            ))}

            {/* Row 3 */}
            {[bambino[5], bambino[6]].map((src, i) => (
              <div key={`r3-${i}`} className="relative overflow-hidden rounded-xl group" style={{ height: "200px", minHeight: "200px" }}>
                <img src={src} alt={`Bambino Super City ${i + 4}`} onError={onImgError} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
              </div>
            ))}
          </div>

          {/* Design sub-gallery */}
          <div className="mt-3">
            <p
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              INTERIOR &amp; DESIGN
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[bambino[8], bambino[9], bambino[7], bambino[10]].map((src, i) => (
                <div key={`design-${i}`} className="relative overflow-hidden rounded-lg group" style={{ height: "100px", minHeight: "100px" }}>
                  <img
                    src={src}
                    alt={`Bambino interior ${i + 1}`}
                    onError={onImgError}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Testimonials */}
        <motion.div
          className="w-full md:w-80 lg:w-96 flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          {/* BLOCK 1 — Owner testimonial */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between"
            style={{ backgroundColor: '#2E7D32', minHeight: "280px" }}
          >
            <div>
              <p
                className="text-6xl font-black leading-none mb-4"
                style={{ color: 'rgba(255,255,255,0.2)', fontFamily: '"Playfair Display", serif' }}
              >
                &ldquo;
              </p>
              <p
                className="text-lg font-black text-white leading-snug mb-6"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                HeadFam Africa built us something extraordinary. From the design to the last detail,
                they understood exactly what we needed, a beautiful, sustainable space we are proud
                to welcome guests into.
              </p>
            </div>

            <div>
              <div className="h-px mb-5" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <span
                      className="text-white font-black text-lg"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      O
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      Resort Owner
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>
                      Bambino Super City, Kigali
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}>
                    Kigali, Rwanda
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — Guest testimonial */}
          <div className="bg-white rounded-2xl p-6" style={{ minHeight: "150px" }}>
            <p
              className="text-3xl font-black leading-none mb-2"
              style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
            >
              &ldquo;
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: '#374151', fontFamily: '"DM Sans", sans-serif' }}
            >
              Staying at Bambino Super City was unlike anything I expected. The rooms are vibrant,
              the design is thoughtful, and you can feel the quality of what HeadFam built in every
              corner.
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#C9A84C' }}
              >
                <span
                  className="text-white font-black text-sm"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  G
                </span>
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}>
                  Guest
                </p>
                <p className="text-xs" style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}>
                  Kigali Visitor
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  )
}
