import { useState } from 'react'
import { motion } from 'framer-motion'
import hero2 from '../../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../../assets/Hero/headfam3.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const VP = { once: true, amount: 0.2 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

// ─── Data ─────────────────────────────────────────────────────────────────────

const activities = [
  {
    title: 'Craft Making',
    body: 'Women gather daily to weave baskets, create textiles, and produce handcrafted jewelry and artifacts rooted in Rwandan cultural tradition. Every piece is made by hand with skill passed down through generations.',
    accent: '#2E7D32',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Selling & Earning',
    body: 'The crafts produced at the village are sold to local visitors, tourists near Sabyinyo Volcano, and through community markets. The income earned goes directly to each woman and her family.',
    accent: '#C9A84C',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Family & Community Growth',
    body: 'The income generated creates a ripple effect — children stay in school, families eat better, and the whole Kinigi community becomes stronger. The village is a living investment in Rwanda\'s future.',
    accent: '#2E7D32',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

// ─── Activity card with hover ─────────────────────────────────────────────────

interface ActivityCardProps {
  activity: typeof activities[number]
  index: number
}

function ActivityCard({ activity, index }: ActivityCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
      className="rounded-2xl p-8 cursor-default"
      style={{
        backgroundColor: hovered ? 'white' : '#f9f6f0',
        boxShadow: hovered ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-1 w-10 rounded-full mb-5"
        style={{ backgroundColor: activity.accent }}
      />
      <div className="mb-4">{activity.svg}</div>
      <p
        className="text-lg font-black mb-3"
        style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
      >
        {activity.title}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
      >
        {activity.body}
      </p>
    </motion.div>
  )
}

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
            Kinigi Women Village is a culture center established in 2022, nestled in the breathtaking
            landscape beneath Sabyinyo Volcano in Musanze District, Rwanda. The center was created
            with a single powerful purpose — to give women in the Kinigi community a space to grow,
            earn, and thrive.
          </p>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            Through the center, women come together to create beautiful handcrafted products — from
            woven baskets and traditional textiles to handmade jewelry and cultural artifacts. These
            crafts are rooted in Rwandan heritage and carry the stories, skills, and identity of the
            women who make them.
          </p>

          <p
            className="text-sm leading-relaxed"
            style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
          >
            By selling their crafts, the women of Kinigi Women Village generate their own income —
            money that flows directly back into their families and their community. The village is
            more than a workplace; it is a movement toward financial independence, cultural
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
              — HeadFam Africa, on Kinigi Women Village
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
          />

          {/* Floating stat card */}
          <div
            className="absolute -bottom-6 -left-6 z-10 bg-white rounded-xl shadow-lg p-5"
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

          {/* Floating thumbnail */}
          <img
            src={hero3}
            alt="Kinigi Women Village craft"
            onError={onImgError}
            className="absolute -top-6 -right-6 z-10 w-36 h-24 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>

      {/* ── Part 3: Activity cards ────────────────────────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <h2
          className="text-2xl font-black text-center mb-10"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
        >
          Life at Kinigi Women Village
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <ActivityCard key={activity.title} activity={activity} index={i} />
          ))}
        </div>
      </motion.div>

    </section>
  )
}
