import { motion } from 'framer-motion'
import hero2 from '../../../../assets/KWV/k3.jpeg'
import hero3 from '../../../../assets/KWV/k4.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

// ─── Component ────────────────────────────────────────────────────────────────

export default function KWVOverview() {
  return (
    <section id="kwv-overview" className="bg-white py-16 px-6 md:px-16">

      {/* ── Part 2: Split content + image ────────────────────────────── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center mb-16">

        {/* Left: text */}
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
            A Village That Empowers Women Through Culture
          </h2>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Kinigi Women Village is a culture center established in 2022, set in the hills beneath
            Sabyinyo Volcano in Musanze District, Rwanda. The center was created
            with one clear purpose: to give women in the Kinigi community a space to grow,
            earn, and thrive.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Through the center, women come together to create handcrafted products: woven baskets,
            traditional textiles, handmade jewelry, and cultural artifacts. These
            crafts are rooted in Rwandan heritage and carry the stories, skills, and identity of the
            women who make them.
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            By selling their crafts, the women of Kinigi Women Village earn their own income,
            money that goes directly back into their families and their community. The village is
            more than a workplace. It is a step toward financial independence, cultural
            preservation, and collective strength.
          </p>

          <div
            className="mt-6 pl-5"
            style={{ borderLeft: '4px solid #C9A84C' }}
          >
            <p
              className="text-base font-black"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
            >
              "Every craft sold is a family supported, a tradition preserved, and a future built."
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              HeadFam Africa, on Kinigi Women Village
            </p>
          </div>
        </motion.div>

        {/* Right: image stack */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={T}
        >
          <img
            src={hero2}
            alt="Kinigi Women Village"
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
              2022
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Established
            </p>
            <p
              className="text-xs"
              style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
            >
              Kinigi, Musanze
            </p>
          </div>

          {/* Floating thumbnail — hidden on mobile to prevent overflow */}
          <img
            src={hero3}
            alt="Kinigi Women Village craft"
            onError={onImgError}
            className="hidden md:block absolute -top-6 -right-6 z-10 w-36 h-24 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>

    </section>
  )
}
