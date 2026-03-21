import { motion } from 'framer-motion'
import hero0 from '../../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../../assets/Hero/headfam1.jpeg'
import hero2 from '../../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../../assets/Hero/headfam3.jpeg'
import hero4 from '../../../../assets/Hero/headfam4.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#1b4332'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

// ─── Shared caption overlay ───────────────────────────────────────────────────

function CaptionOverlay({ text }: { text: string }) {
  return (
    <>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      />
      <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="px-3 py-2 rounded-lg"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <span
            className="text-xs text-white"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {text}
          </span>
        </div>
      </div>
    </>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function KWVGallery() {
  return (
    <section id="kwv-gallery" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>

      {/* ── Part 1: Header ───────────────────────────────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
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
            PROJECT GALLERY
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black text-white mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          A Glimpse Into Kinigi Women Village
        </h2>

        <p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
        >
          Real moments from the village — the crafts, the community, and the culture.
        </p>
      </motion.div>

      {/* ── Part 2: Bento grid ───────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">

          {/* Cell 1 — large featured */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden rounded-2xl group h-80 md:h-[420px]">
              <img
                src={hero0}
                alt="Women at work — Kinigi Village"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <CaptionOverlay text="Women at work — Kinigi Village" />
            </div>
          </motion.div>

          {/* Cell 2 — two stacked */}
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl group h-[200px]">
                <img
                  src={hero1}
                  alt="Handcrafted woven baskets"
                  onError={onImgError}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <CaptionOverlay text="Handcrafted woven baskets" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl group h-[200px]">
                <img
                  src={hero2}
                  alt="Traditional textiles on display"
                  onError={onImgError}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <CaptionOverlay text="Traditional textiles on display" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl group h-72">
              <img
                src={hero3}
                alt="Community gathering space"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <CaptionOverlay text="Community gathering space" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl group h-72">
              <img
                src={hero4}
                alt="The village beneath Sabyinyo Volcano"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <CaptionOverlay text="The village beneath Sabyinyo Volcano" />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
