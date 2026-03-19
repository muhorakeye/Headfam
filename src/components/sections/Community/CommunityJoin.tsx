import { useState } from 'react'
import hero4 from '../../../assets/Hero/Headfam4.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const WAYS = [
  {
    number: '01',
    title: 'Partner With Us',
    body: 'Are you a business, NGO, or investor who shares our vision? Partner with HeadFam Africa to fund, co-build, or sponsor community projects across East Africa.',
    cta: 'Start a Partnership',
    link: '/contact',
    external: false,
    accent: '#2E7D32',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Volunteer Your Skills',
    body: 'Are you an architect, engineer, educator, or marketer? Bring your skills to the field and help us deliver projects that transform communities from the ground up.',
    cta: 'Apply to Volunteer',
    link: '/contact',
    external: false,
    accent: '#C9A84C',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Make a Donation',
    body: 'Every donation directly funds skills training, school construction, and income programs for families near our build sites. No amount is too small to matter.',
    cta: 'Donate Now',
    link: 'https://www.paypal.com/donate',
    external: true,
    accent: '#2E7D32',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
]

function ContactBtn() {
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
      Contact Us Today
    </a>
  )
}

function ExploreBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="/#our-work"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#fff' : 'transparent',
        color: hovered ? '#1a1a1a' : '#fff',
        border: '2px solid #fff',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold inline-block"
    >
      Explore Our Work
    </a>
  )
}

export default function CommunityJoin() {
  const [cardHovered, setCardHovered] = useState([false, false, false])
  const setHover = (i: number, val: boolean) =>
    setCardHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  return (
    <section id="community-join" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>

      {/* ── Part 1: Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            GET INVOLVED
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Three Ways to Make a Difference
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
        >
          Whether you want to partner, volunteer, or donate — every form of support directly impacts communities across Rwanda.
        </p>
      </div>

      {/* ── Part 2: Three ways grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {WAYS.map((way, i) => (
          <div
            key={way.number}
            onMouseEnter={() => setHover(i, true)}
            onMouseLeave={() => setHover(i, false)}
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{
              backgroundColor: cardHovered[i] ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
              border: cardHovered[i] ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <div>
              <p
                className="text-5xl font-black leading-none mb-6"
                style={{ color: 'rgba(255,255,255,0.08)', fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {way.number}
              </p>
              <div className="mb-4">{way.svg}</div>
              <h3
                className="text-xl font-black text-white mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {way.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {way.body}
              </p>
            </div>

            <div>
              {way.external ? (
                <a
                  href={way.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: way.accent, fontFamily: '"DM Sans", sans-serif' }}
                >
                  {way.cta} <span>→</span>
                </a>
              ) : (
                <a
                  href={way.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: way.accent, fontFamily: '"DM Sans", sans-serif' }}
                >
                  {way.cta} <span>→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Part 3: Full-width image banner ── */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative mt-4">
        <img
          src={hero4}
          alt="Building a greener Rwanda"
          onError={onImgError}
          className="w-full h-72 md:h-96 object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%)' }}
        />

        <div
          className="absolute left-10 md:left-16 z-10 max-w-lg"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <p
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            JOIN THE MOVEMENT
          </p>

          <h3
            className="text-2xl md:text-4xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Be Part of Building a Greener Rwanda
          </h3>

          <div className="flex gap-4 flex-wrap">
            <ContactBtn />
            <ExploreBtn />
          </div>
        </div>
      </div>

    </section>
  )
}
