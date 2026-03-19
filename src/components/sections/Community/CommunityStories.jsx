import { useState } from 'react'

const STORIES = [
  {
    initial: 'J',
    quote: "I was unemployed for two years. HeadFam gave me a job on the Ndera project and trained me in eco-construction. Now I run my own small building crew.",
    name: 'Jean-Pierre Nkurunziza',
    role: 'Construction Trainee → Team Lead',
    location: 'Ndera, Kigali',
    accent: '#C9A84C',
  },
  {
    initial: 'A',
    quote: "The coffee shop they built in Kinigi brought tourists to our area. My family's income doubled in the first year after it opened.",
    name: 'Aline Mutesi',
    role: 'Local Business Owner',
    location: 'Kinigi, Rwanda',
    accent: '#2E7D32',
  },
]

function PinIcon({ stroke }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ShareBtn() {
  const [hovered, setHovered] = useState(false)
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
      Share Your Story
    </a>
  )
}

export default function CommunityStories() {
  return (
    <section id="community-stories" className="py-20 px-6 md:px-16 bg-white">

      {/* ── Part 1: Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">
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
      </div>

      {/* ── Part 2: Stories layout ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        {/* Left: featured story */}
        <div
          className="rounded-3xl p-10 flex flex-col justify-between min-h-96"
          style={{ backgroundColor: '#2E7D32' }}
        >
          <div>
            <div
              className="text-7xl font-black leading-none mb-4"
              style={{ color: 'rgba(255,255,255,0.2)', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              &ldquo;
            </div>
            <p
              className="text-xl font-black text-white leading-snug mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              HeadFam Africa didn't just build our women's center — they built our confidence. For the first time, our community has a space that belongs to us, built by our own people.
            </p>
          </div>

          <div>
            <div className="h-px mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                M
              </div>
              <div>
                <p className="text-sm font-bold text-white" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  Marie Uwase
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>
                  Kinigi Women's Center Member
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <PinIcon stroke="rgba(255,255,255,0.5)" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}>
                Kinigi, Rwanda
              </span>
            </div>
          </div>
        </div>

        {/* Right: two stacked cards */}
        <div className="flex flex-col gap-6">
          {STORIES.map((story) => (
            <div
              key={story.name}
              className="rounded-2xl p-8 flex flex-col justify-between flex-1"
              style={{ backgroundColor: '#f9f6f0' }}
            >
              <div>
                <div
                  className="text-4xl font-black leading-none mb-3"
                  style={{ color: story.accent, fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  &ldquo;
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  {story.quote}
                </p>
              </div>

              <div>
                <div className="h-px bg-gray-200 mb-4" />
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white flex-shrink-0"
                    style={{ backgroundColor: story.accent, fontFamily: '"Playfair Display", Georgia, serif' }}
                  >
                    {story.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}>
                      {story.name}
                    </p>
                    <p className="text-xs text-gray-400" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      {story.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <PinIcon stroke={story.accent} />
                  <span className="text-xs text-gray-400" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {story.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Part 3: Bottom strip ── */}
      <div
        className="max-w-6xl mx-auto rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ backgroundColor: '#f9f6f0' }}
      >
        <div>
          <p
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            YOUR STORY MATTERS
          </p>
          <h4
            className="text-xl font-black"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Are You Part of a HeadFam Community?
          </h4>
          <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            We'd love to hear how our projects have impacted your life.
          </p>
        </div>

        <ShareBtn />
      </div>

    </section>
  )
}
