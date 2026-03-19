import { useState } from 'react'
import { Link } from 'react-router-dom'
import hero0 from '../../../assets/Hero/headfam.jpeg'
import hero1 from '../../../assets/Hero/headfam1.jpeg'

const onImgError = (e) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

function ExploreBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={() => document.getElementById('community-impact')?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#C9A84C' : '#2E7D32',
        color: '#fff',
        fontFamily: '"DM Sans", sans-serif',
        transition: 'background-color 0.3s',
      }}
      className="px-8 py-3 rounded-full text-sm font-semibold"
    >
      Explore Our Impact
    </button>
  )
}

function GetInvolvedBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/contact"
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
      Get Involved
    </Link>
  )
}

const STATS = [
  { value: '30%',  label: 'Revenue Donated',          sep: true  },
  { value: '500+', label: 'Local Jobs Created',        sep: true  },
  { value: '12+',  label: 'Years Serving Communities', sep: false },
]

export default function CommunityHero() {
  return (
    <section id="community-hero" className="min-h-screen flex flex-col md:flex-row">

      {/* ── Left panel: images ── */}
      <div className="relative w-full md:w-1/2 min-h-64 md:min-h-screen overflow-hidden">
        <img
          src={hero0}
          alt="HeadFam Africa community"
          onError={onImgError}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
        />

        {/* Stacked accent image */}
        <img
          src={hero1}
          alt="HeadFam Africa project"
          onError={onImgError}
          className="absolute bottom-6 right-6 w-40 h-28 object-cover rounded-xl shadow-xl"
          style={{ border: '4px solid #fff' }}
        />

        {/* Location label */}
        <div
          className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded-full"
          style={{ backgroundColor: 'rgba(46,125,50,0.9)' }}
        >
          <span
            className="text-xs font-bold text-white tracking-widest"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Kigali, Rwanda
          </span>
        </div>
      </div>

      {/* ── Right panel: text ── */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-20"
        style={{ backgroundColor: '#f9f6f0' }}
      >
        <div className="max-w-lg">

          {/* Breadcrumb */}
          <p
            className="text-xs text-gray-400 tracking-wide mb-6"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Home / Community
          </p>

          {/* Gold label row */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-widest"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              OUR COMMUNITY
            </span>
            <span
              className="inline-block w-10 h-0.5"
              style={{ backgroundColor: '#C9A84C' }}
            />
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-black leading-tight mb-6"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Building Communities, Not Just Structures
          </h1>

          {/* Body */}
          <p
            className="text-sm text-gray-500 leading-relaxed mb-4"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            At HeadFam Africa, community is at the heart of everything we build. Every structure we create is designed to empower the people who live, work, and grow around it.
          </p>
          <p
            className="text-sm text-gray-500 leading-relaxed mb-10"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            We hire locally, collaborate closely with surrounding neighborhoods, and donate 30% of every project's revenue directly to low-income families near each build site.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={stat.sep ? { borderRight: '1px solid #e5e7eb', paddingRight: '2rem' } : {}}
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: '#2E7D32', fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-gray-400 mt-1"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <ExploreBtn />
            <GetInvolvedBtn />
          </div>

        </div>
      </div>

    </section>
  )
}
