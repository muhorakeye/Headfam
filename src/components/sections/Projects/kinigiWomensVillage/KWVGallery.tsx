import { motion } from 'framer-motion'
import hero0 from '../../../../assets/KWV/k5.jpeg'
import hero1 from '../../../../assets/KWV/k6.jpeg'
import hero2 from '../../../../assets/KWV/k7.jpeg'
import hero3 from '../../../../assets/KWV/k8.jpeg'
import hero4 from '../../../../assets/KWV/k9.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#1b4332'
  e.currentTarget.src = ''
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function KWVGallery() {
  return (
    <section id="kwv-gallery" className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

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
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
        >
          A Glimpse Into Kinigi Women Village
        </h2>

        <p
          className="text-sm"
          style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
        >
          Real moments from the village — the crafts, the community, and the culture.
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
          <div className="grid grid-cols-2 gap-3">

            {/* First image — full width */}
            <div
              className="relative overflow-hidden rounded-xl group col-span-2"
              style={{ height: "280px", minHeight: "280px" }}
            >
              <img
                src={hero0}
                alt="Women at work, Kinigi Village"
                onError={onImgError}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
              />
            </div>

            {/* Next 4 images — 2 per row */}
            {[hero1, hero2, hero3, hero4].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ height: "200px", minHeight: "200px" }}
              >
                <img
                  src={src}
                  alt={`Kinigi Women Village, photo ${i + 2}`}
                  onError={onImgError}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Testimonial */}
        <motion.div
          className="w-full md:w-96 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          {/* BLOCK 1 — Owner/founder testimonial */}
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
                HeadFam Africa didn&rsquo;t just build us a space. They built us a future. What
                they constructed here gave our women a place to work, create, and earn with
                dignity. The village they built changed our lives.
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
                      F
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      Doreen KANYESIGYE
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      Village Founder
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Kinigi, Rwanda
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — Two community voice cards */}
          <div className="flex flex-col gap-4" style={{ minHeight: "150px" }}>

            {/* Card 1 */}
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
                I learned to weave here. I sell my baskets every week and now my daughter goes
                to secondary school.
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#2E7D32' }}
                >
                  <span
                    className="text-white font-black text-sm"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    A
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Alphonsine M.
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Village Member
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  )
}
