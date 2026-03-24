import type { JSX } from 'react'
import { motion } from 'framer-motion'
import hero0 from '../../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../../assets/Hero/headfam1.jpeg'
import hero2 from '../../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../../assets/Hero/headfam3.jpeg'
import hero4 from '../../../../assets/Hero/headfam4.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

export default function MSAGallery(): JSX.Element {
  return (
    <section id="msa-gallery" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

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
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
        >
          Inside Masaka Sweet Apartment
        </h2>

        <p
          className="text-sm"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          A closer look at what HeadFam Africa built, vibrant rooms, eco-conscious design, and a home worth remembering.
        </p>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT — Photo gallery grid */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-2 gap-3">

            {/* Row 1 — full width */}
            <div className="col-span-2 relative overflow-hidden rounded-xl group h-72">
              <img
                src={hero0}
                alt="Masaka Sweet Apartment overview"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
            </div>

            {/* Row 2 */}
            {[hero1, hero2].map((src, i) => (
              <div key={`r2-${i}`} className="relative overflow-hidden rounded-xl group h-52">
                <img src={src} alt={`Masaka Sweet Apartment ${i + 2}`} onError={onImgError} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
              </div>
            ))}

            {/* Row 3 */}
            {[hero3, hero4].map((src, i) => (
              <div key={`r3-${i}`} className="relative overflow-hidden rounded-xl group h-52">
                <img src={src} alt={`Masaka Sweet Apartment ${i + 4}`} onError={onImgError} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Testimonials */}
        <motion.div
          className="w-full md:w-80 lg:w-96 flex flex-col gap-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          {/* BLOCK 1 — Owner testimonial */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between"
            style={{ backgroundColor: '#2E7D32' }}
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
                HeadFam Africa built exactly what I envisioned, a cozy, beautiful, eco-friendly
                apartment that my guests love. The quality of their work speaks for itself every
                single day.
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
                      P
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      MUKABARISA Pauline
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>
                      Owner, Masaka Sweet Apartment
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}>
                    Masaka, Kigali
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — Guest testimonial */}
          <div className="bg-white rounded-2xl p-6">
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
              I stayed at Masaka Sweet Apartment and was amazed. The rooms are vibrant, comfortable,
              and you can feel the care that went into building this place. I will be back.
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
