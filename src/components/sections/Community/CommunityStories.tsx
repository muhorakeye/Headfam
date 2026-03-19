import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const STORIES = [
  {
    initial: 'M',
    quote: "HeadFam Africa didn't just build our women's center — they built our confidence. For the first time, our community has a space that belongs to us, built by our own people.",
    name: 'Marie Uwase',
    role: "Kinigi Women's Center Member",
    location: 'Kinigi, Rwanda',
    bg: '#2E7D32',
  },
  {
    initial: 'J',
    quote: "I was unemployed for two years. HeadFam gave me a job on the Ndera project and trained me in eco-construction. Now I run my own small building crew.",
    name: 'Jean-Pierre Nkurunziza',
    role: 'Construction Trainee → Team Lead',
    location: 'Ndera, Kigali',
    bg: '#1a1a1a',
  },
  {
    initial: 'A',
    quote: "The coffee shop they built in Kinigi brought tourists to our area. My family's income doubled in the first year after it opened.",
    name: 'Aline Mutesi',
    role: 'Local Business Owner',
    location: 'Kinigi, Rwanda',
    bg: '#2E7D32',
  },
]

const VP = { once: true, amount: 0.2 as const }

function ShareBtn() {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <a
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#C9A84C' : '#2E7D32',
        color: '#fff',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold inline-block"
    >
      Donate Now
    </a>
  )
}

export default function CommunityStories() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STORIES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const prev = () => setCurrentIndex((p) => (p - 1 + STORIES.length) % STORIES.length)
  const next = () => setCurrentIndex((p) => (p + 1) % STORIES.length)

  return (
    <section id="community-stories" className="py-10 px-6 md:px-16 bg-white">

      {/* ── Header ── */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            REAL VOICES
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Stories From the Communities We Serve
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
          Behind every project is a community. Behind every community are people with stories worth telling.
        </p>
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
        className="max-w-3xl mx-auto relative mb-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Slide stack */}
        <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 320 }}>
          {STORIES.map((story, i) => (
            <div
              key={story.name}
              className="p-10 md:p-14"
              style={{
                backgroundColor: story.bg,
                opacity: i === currentIndex ? 1 : 0,
                position: i === currentIndex ? 'relative' : 'absolute',
                inset: 0,
                transition: 'opacity 0.5s ease',
                minHeight: 320,
              }}
            >
              <div
                className="text-6xl font-black leading-none mb-6"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                &#x201C;
              </div>

              <p
                className="text-xl md:text-2xl font-black text-white leading-snug mb-8"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {story.quote}
              </p>

              <div className="h-px mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {story.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      {story.name}
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>
                      {story.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}>
                    {story.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous story"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ border: '1px solid rgba(0,0,0,0.2)', color: '#1a1a1a' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.06)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex gap-2 items-center">
            {STORIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to story ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? 24 : 8,
                  height: 8,
                  backgroundColor: i === currentIndex ? '#2E7D32' : '#d1d5db',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next story"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ border: '1px solid rgba(0,0,0,0.2)', color: '#1a1a1a' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.06)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── Bottom strip ── */}
      <motion.div
        className="max-w-6xl mx-auto rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ backgroundColor: '#f9f6f0' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div>
          <p
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            Support Community
          </p>
          <h4
            className="text-xl font-black"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Make Donation
          </h4>
          <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            Every donation directly funds skills training, school construction,
            <br /> and income programs for families near our build sites.
            No amount is too small to matter.
          </p>
        </div>

        <ShareBtn />
      </motion.div>

    </section>
  )
}
