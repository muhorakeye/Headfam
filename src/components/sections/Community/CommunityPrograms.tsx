import { useState } from 'react'
import { Link } from 'react-router-dom'
import hero0 from '../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../assets/Hero/headfam1.jpeg'
import hero2 from '../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../assets/Hero/headfam3.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const PROGRAMS = [
  {
    image: hero1,
    badge: 'EDUCATION',
    badgeColor: '#2E7D32',
    title: 'School Building Initiative',
    body: 'HeadFam Africa constructs and renovates school facilities near active build sites — giving children in underserved areas access to safe, modern learning environments.',
    stat: '3',
    statLabel: 'Schools Supported',
  },
  {
    image: hero2,
    badge: 'SKILLS',
    badgeColor: '#C9A84C',
    title: 'Construction Skills Training',
    body: 'We run hands-on training programs that equip young people and adults with certified eco-construction skills — turning community members into future builders.',
    stat: '500+',
    statLabel: 'People Trained',
  },
  {
    image: hero3,
    badge: 'LIVELIHOODS',
    badgeColor: '#2E7D32',
    title: 'Local Employment Program',
    body: 'Every HeadFam project commits to hiring the majority of its workforce from within 10km of the build site — creating stable jobs and circulating money within communities.',
    stat: '100%',
    statLabel: 'Local Hiring Goal',
  },
]

function PartnerBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/contact"
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
      Partner With Us
    </Link>
  )
}

function LearnMoreBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/about"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#2E7D32' : 'transparent',
        color: hovered ? '#fff' : '#2E7D32',
        border: '2px solid #2E7D32',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold inline-block"
    >
      Learn More
    </Link>
  )
}

export default function CommunityPrograms() {
  const [cardHovered, setCardHovered] = useState([false, false, false])

  const setHover = (i: number, val: boolean) =>
    setCardHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  return (
    <section id="community-programs" className="py-20 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>

      {/* ── Part 1: Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span className="text-xs font-bold tracking-widest" style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>
            WHAT WE RUN
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight mb-4"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Programs That Change Lives
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
          From skills training to school building — every program HeadFam Africa runs is designed to leave a lasting positive footprint on the communities we serve.
        </p>
      </div>

      {/* ── Part 2: Featured program ── */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">

          <img
            src={hero0}
            alt="Kinigi Women's Center"
            onError={onImgError}
            className="w-full md:w-2/5 h-64 md:h-auto object-cover"
          />

          <div className="flex flex-col justify-center p-10" style={{ backgroundColor: '#2E7D32', flex: '1' }}>
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 self-start text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontFamily: '"DM Sans", sans-serif' }}
            >
              FEATURED PROGRAM
            </span>

            <h3
              className="text-2xl md:text-3xl font-black text-white mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Kinigi Women's Center
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
            >
              Now officially open, the Kinigi Women's Center is a landmark eco-construction project that empowers women through skills training, income-generating activities, and a safe community gathering space built with sustainable local materials.
            </p>

            <div className="flex gap-8 mb-8">
              <div style={{ borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '2rem' }}>
                <p className="text-2xl font-black text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>2024</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>Year Opened</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Kinigi</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}>Location</p>
              </div>
            </div>

            <a
              href="/news"
              className="text-sm font-semibold hover:underline self-start"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              Read the Full Story →
            </a>
          </div>
        </div>
      </div>

      {/* ── Part 3: Programs grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROGRAMS.map((program, i) => (
          <div
            key={program.title}
            onMouseEnter={() => setHover(i, true)}
            onMouseLeave={() => setHover(i, false)}
            className="bg-white rounded-2xl overflow-hidden"
            style={{
              boxShadow: cardHovered[i] ? '0 10px 30px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.06)',
              transform: cardHovered[i] ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
          >
            <img
              src={program.image}
              alt={program.title}
              onError={onImgError}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4"
                style={{
                  backgroundColor: program.badgeColor === '#2E7D32'
                    ? 'rgba(46,125,50,0.1)'
                    : 'rgba(201,168,76,0.1)',
                  color: program.badgeColor,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {program.badge}
              </span>

              <h4
                className="text-lg font-black mb-3"
                style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {program.title}
              </h4>

              <p
                className="text-sm text-gray-500 leading-relaxed mb-5"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {program.body}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <span
                  className="text-xl font-black"
                  style={{ color: '#2E7D32', fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {program.stat}
                </span>
                <span
                  className="text-xs text-gray-400"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {program.statLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Part 4: Bottom CTA ── */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-2xl px-10 py-8 shadow-sm">
        <div>
          <h4
            className="text-xl font-black"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Want to Support These Programs?
          </h4>
          <p
            className="text-sm text-gray-500 mt-1"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Partner with us or make a contribution to fund community programs across Rwanda.
          </p>
        </div>

        <div className="flex gap-4">
          <PartnerBtn />
          <LearnMoreBtn />
        </div>
      </div>

    </section>
  )
}
