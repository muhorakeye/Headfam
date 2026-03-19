import hero2 from '../../../assets/Hero/headfam2.jpeg'
import hero3 from '../../../assets/Hero/headfam3.jpeg'

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

const PILLARS = [
  {
    accentColor: '#2E7D32',
    title: 'Local Employment',
    body: 'We prioritize hiring skilled workers from the communities surrounding each project — putting money directly into local hands and building long-term livelihoods.',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    accentColor: '#C9A84C',
    title: 'Revenue Sharing',
    body: "30% of every project's revenue is donated directly to low-income families living near each build site — funding education, health, and basic needs.",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    accentColor: '#2E7D32',
    title: 'Cultural Preservation',
    body: 'We design every structure to honor local culture, heritage, and tradition — using sustainable local materials that reflect the identity of the people who call these places home.',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
]

export default function CommunityMission() {
  return (
    <section id="community-mission" className="py-20 px-6 md:px-16 bg-white">

      {/* ── Part 1: Intro ── */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          >
            WHY COMMUNITY MATTERS
          </span>
          <span className="inline-block w-10 h-0.5" style={{ backgroundColor: '#C9A84C' }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black leading-tight mb-6"
          style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          We Don't Just Build Structures — We Build Futures
        </h2>

        <p
          className="text-base text-gray-500 leading-relaxed"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          HeadFam Africa believes that sustainable construction only means something when it lifts the people around it. Every nail, every beam, every foundation we lay is a commitment to the communities that surround our build sites.
        </p>
      </div>

      {/* ── Part 2: Three pillars ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#f9f6f0' }}
          >
            <div className="mb-5">{pillar.svg}</div>
            <div
              className="h-0.5 w-10 mb-5 rounded-full"
              style={{ backgroundColor: pillar.accentColor }}
            />
            <h3
              className="text-lg font-black mb-3"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      {/* ── Part 3: Split image + quote ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Left: images */}
        <div className="flex-1 relative">
          <img
            src={hero2}
            alt="HeadFam Africa community build"
            onError={onImgError}
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
          />
          <div
            className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-4 z-10 max-w-xs"
          >
            <p
              className="text-xs font-bold tracking-widest mb-1"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              OUR COMMITMENT
            </p>
            <p
              className="text-xs text-gray-500 leading-relaxed"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Every project donates 30% to the community near the build site.
            </p>
            <div className="h-0.5 w-8 mt-3 rounded-full" style={{ backgroundColor: '#2E7D32' }} />
          </div>
        </div>

        {/* Right: quote + second image */}
        <div className="flex-1">
          <div
            className="text-8xl font-black leading-none mb-2"
            style={{ color: '#C9A84C', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            &ldquo;
          </div>
          <h3
            className="text-xl md:text-2xl font-black leading-snug mb-6"
            style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            We are more than builders — we are creators of sustainable dreams, shaping a greener future for Rwanda and all of East Africa.
          </h3>
          <p
            className="text-sm font-semibold"
            style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
          >
            — HeadFam Africa
          </p>

          <img
            src={hero3}
            alt="HeadFam Africa project"
            onError={onImgError}
            className="w-full h-48 object-cover rounded-xl shadow-md mt-8"
          />
        </div>

      </div>
    </section>
  )
}
