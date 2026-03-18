// WhoWeAreSection — hero + all page content for the Who We Are page
// Fonts: font-display (Playfair Display) for headings, font-body (DM Sans) for body
// Both are defined as design tokens in src/index.css and match the rest of the site
import { useState } from 'react';
import { Link } from 'react-router-dom';
import hero0 from '../../../assets/Hero/headfam.jpeg';
import hero2 from '../../../assets/Hero/headfam2.jpeg';
import hero3 from '../../../assets/Hero/headfam3.jpeg';

const GREEN = '#2E7D32';
const GOLD  = '#C9A84C';
const DARK  = '#1a1a1a';
const CREAM = '#f9f6f0';

function onImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.src = '';
  e.currentTarget.style.backgroundColor = '#e8f5e9';
}

// ─── Shared primitives ────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function GetStartedBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/contact"
      className="font-body inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm text-white transition-colors duration-300"
      style={{ backgroundColor: hovered ? GOLD : GREEN, borderRadius: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Get Started <ArrowRight />
    </Link>
  );
}

function CtaBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/contact"
      className="font-body inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm text-white transition-colors duration-300 rounded-full"
      style={{ backgroundColor: hovered ? GREEN : GOLD }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Start a Conversation
    </Link>
  );
}

function ReachOutBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/contact"
      className="font-body inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm text-white transition-colors duration-300 rounded-full"
      style={{ backgroundColor: hovered ? GOLD : GREEN }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Reach Out to Us <ArrowRight />
    </Link>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
const TABS = ['Our History', 'Our Mission', 'Our Vision'] as const;
type Tab = (typeof TABS)[number];

interface TabData { heading: string; body: string[]; image: string; showCta: boolean; }

const TAB_CONTENT: Record<Tab, TabData> = {
  'Our History': {
    heading: 'Rooted in Community Since 2012',
    body: [
      'HeadFam Africa was founded with a single belief: that construction should serve people and planet equally. Beginning in Kigali, Rwanda, our first projects were modest eco-homes built with local materials for local families.',
      'Over the years we expanded into resorts, cultural centers, and community facilities, always keeping the same promise: hire locally, build sustainably, give back generously.',
      'Today HeadFam Africa is recognized across East Africa as a pioneer of eco-construction, having delivered more than a dozen landmark projects and created over 500 local jobs since inception.',
    ],
    image: hero0,
    showCta: false,
  },
  'Our Mission': {
    heading: 'Turning Vision Into Reality',
    body: [
      'Our mission is to turn your vision into a breathtaking reality. To provide excellent services which promote global eco-constructions.',
      'We prioritize professional, sustainable, affordable, and innovative eco-friendly buildings which promote tourism and community engagement across Rwanda and beyond.',
    ],
    image: hero2,
    showCta: true,
  },
  'Our Vision': {
    heading: 'First Resort for Global Investments',
    body: [
      'To be the first resort for global investments, building a legacy of sustainable, community-centered construction that spans East Africa and beyond.',
      'We envision a future where every structure we raise becomes a landmark of responsible development, where construction rooted in tradition creates the wonders of nature for today and tomorrow.',
    ],
    image: hero3,
    showCta: true,
  },
};

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  { year: '2012', label: 'Founded',        body: 'HeadFam Africa established in Kigali with a focus on affordable eco-residential construction using locally sourced materials.' },
  { year: '2014', label: 'First Resort',   body: 'Delivered our first eco-resort project in the Virunga foothills, setting the benchmark for sustainable tourism construction in Rwanda.' },
  { year: '2016', label: 'Community Fund', body: '30% revenue donation program officially launched, channeling construction income directly into schools and skills programs near build sites.' },
  { year: '2018', label: 'Expansion',      body: 'Expanded service offerings to include full landscape design, culture centers, and touristic site creation across East Africa.' },
  { year: '2020', label: 'Kinigi Campus',  body: "Broke ground on the Kinigi Women's Center and Kinigi Coffee Shop, two of our most community-defining projects to date." },
  { year: '2024', label: 'Today',          body: "Over 500 local jobs created, 12+ years of expertise, and a growing portfolio of landmark eco-structures shaping Rwanda's green future." },
];

// ─── Main section component ───────────────────────────────────────────────────
export function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Our History');
  const content = TAB_CONTENT[activeTab];

  return (
    <>
      {/* ── Hero ── */}
      <div className="pt-28 pb-14 px-6 text-center" style={{ backgroundColor: GREEN }}>
        <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-3">
          Who We Are
        </h1>
        <p className="font-body text-sm tracking-widest" style={{ color: '#86efac' }}>
          Home &rsaquo; About &rsaquo; Who We Are
        </p>
      </div>

      {/* ── Section 1: Work Performance ── */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-body text-xs font-bold tracking-widest" style={{ color: GOLD }}>
                WHO WE ARE
              </span>
              <span className="inline-block w-10 h-px" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-6" style={{ color: DARK }}>
              Where Construction Rooted in Tradition
            </h2>
            <p className="font-body text-sm text-gray-500 leading-relaxed mb-10">
              HeadFam Africa is an eco-construction company that prioritizes professional, sustainable, affordable, and innovative eco-friendly buildings which promote tourism and community engagement.
              We provide consultancy and create beautiful and functional structures including coffee shops, campsites, resorts, apartments, landscapes, culture centers, touristic site creation, lodges, and eco-residential properties that embrace the local environment.
              Our team values environmental stewardship, preserving natural beauty and culture through the use of sustainable local materials. We are more than builders, we are creators of sustainable dreams, shaping a greener future.
            </p>
            <ReachOutBtn />
          </div>

          <div className="flex-1">
            <img src={hero0} alt="HeadFam Africa construction" onError={onImgError}
              className="w-full object-cover shadow-xl"
              style={{ height: 420, borderRadius: 16 }} />
          </div>
        </div>
      </section>

      {/* ── Section 2: More About Us + Tabs ── */}
      <section className="py-20 px-6 md:px-16" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <span className="font-body text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              MORE ABOUT US
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-2 mb-4" style={{ color: DARK }}>
              We Create Design With Consistency
            </h2>
            <p className="font-body text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              HeadFam Africa is an eco-construction company that prioritizes professional, sustainable, affordable, and innovative eco-friendly buildings which promote tourism and community engagement.
            </p>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 border-b-2 border-gray-200 mb-10 overflow-x-auto">
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="font-body px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0"
                  style={{
                    color: active ? 'white' : '#6b7280',
                    backgroundColor: active ? GREEN : 'transparent',
                    borderBottom: active ? `2px solid ${GREEN}` : '2px solid transparent',
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-black mb-5" style={{ color: GREEN }}>
                {content.heading}
              </h3>
              {content.body.map((p, i) => (
                <p key={i} className="font-body text-sm text-gray-500 leading-relaxed mb-4">{p}</p>
              ))}
              {content.showCta && (
                <div className="mt-6"><GetStartedBtn /></div>
              )}
            </div>
            <div className="flex-1">
              <img src={content.image} alt={content.heading} onError={onImgError}
                className="w-full object-cover shadow-lg"
                style={{ height: 320, borderRadius: 12 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Timeline ── */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold tracking-widest" style={{ color: GOLD }}>
              OUR JOURNEY
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black mt-2" style={{ color: DARK }}>
              A Decade of Building Rwanda
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ backgroundColor: '#e5e7eb' }} />

            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.year} className="relative flex items-start mb-12 last:mb-0">

                  <div className="flex-1 pr-10" style={{ textAlign: 'right' }}>
                    {isLeft && (
                      <>
                        <p className="font-display text-2xl font-black mb-1" style={{ color: GREEN }}>{item.year}</p>
                        <p className="font-body text-xs font-bold tracking-widest mb-2" style={{ color: GOLD }}>{item.label.toUpperCase()}</p>
                        <p className="font-body text-sm text-gray-500 leading-relaxed">{item.body}</p>
                      </>
                    )}
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 flex-shrink-0"
                    style={{ backgroundColor: GREEN }} />

                  <div className="flex-1 pl-10">
                    {!isLeft && (
                      <>
                        <p className="font-display text-2xl font-black mb-1" style={{ color: GREEN }}>{item.year}</p>
                        <p className="font-body text-xs font-bold tracking-widest mb-2" style={{ color: GOLD }}>{item.label.toUpperCase()}</p>
                        <p className="font-body text-sm text-gray-500 leading-relaxed">{item.body}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA strip ── */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: DARK }}>
        <p className="font-body text-xs font-bold tracking-widest mb-4" style={{ color: GOLD }}>
          WORK WITH US
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
          Ready to Build Something That Lasts?
        </h2>
        <p className="font-body text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Let's turn your vision into a breathtaking, sustainable reality.
        </p>
        <CtaBtn />
      </section>
    </>
  );
}
