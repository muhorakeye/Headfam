// WhoWeAre — performance hero, tabbed about, stats strip, CTA
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero0 from '../../assets/Hero/headfam.jpeg';
import hero1 from '../../assets/Hero/headfam1.jpeg';
import hero2 from '../../assets/Hero/headfam2.jpeg';
import hero3 from '../../assets/Hero/headfam3.jpeg';

const PLAYFAIR = { fontFamily: "'Playfair Display', Georgia, serif" };
const DM       = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const GREEN    = '#2E7D32';
const GOLD     = '#C9A84C';
const DARK     = '#1a1a1a';
const CREAM    = '#f9f6f0';

function onImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.src = '';
  e.currentTarget.style.backgroundColor = '#e8f5e9';
}

// ─── Inline SVGs ──────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

// ─── CTA button ───────────────────────────────────────────────────────────────
function GetStartedBtn({ dark = false }: { dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-sm transition-colors duration-300"
      style={{
        ...DM,
        backgroundColor: hovered ? GOLD : (dark ? DARK : GREEN),
        color: 'white',
        borderRadius: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Get Started <ArrowRight />
    </Link>
  );
}

// ─── Tabs data ────────────────────────────────────────────────────────────────
const TABS = ['Our Story', 'Our Mission', 'Our Vision', 'Our Values'] as const;
type Tab = (typeof TABS)[number];

interface TabContent {
  heading: string;
  body: string[];
  image: string;
  showCta: boolean;
}

const TAB_CONTENT: Record<Tab, TabContent> = {
  'Our Story': {
    heading: 'Rooted in Community Since 2012',
    body: [
      "HeadFam Africa's story begins in 2000, when the company was founded under the name Headren Cooperative with a simple but meaningful mission: to build affordable structures for people across Rwanda. For years, they built. But as the work grew, so did a deeper awareness.",
      'In 2004, our founder noticed something that others were overlooking. Buildings were going up across Rwanda, but the environment was being left behind. Forests cleared, materials wasted, communities burdened with structures they could barely afford, and beneath it all, a truth that could not be ignored: when the environment suffers, people suffer too. He made a decision. He left Rwanda and traveled to Kenya to study eco-construction, to find a better way.',
      'He returned in 2012 with answers. New techniques. Sustainable materials. A philosophy that put people and planet at the center of every build. The company was reborn as HeadFam Africa, with a mission to protect the environment, make sustainable construction affordable, use local materials, and build structures that genuinely improve lives. Today, HeadFam Africa has built 50+ eco-structures across Rwanda, created over 500 jobs for Rwandan people, and attracted international attention to what responsible construction in Africa can look like.',
    ],
    image: hero2,
    showCta: true,
  },
  'Our Mission': {
    heading: 'Turning Vision Into Reality',
    body: [],
    image: hero0,
    showCta: false,
  },
  'Our Vision': {
    heading: 'First Resort for Global Investments',
    body: [],
    image: hero3,
    showCta: false,
  },
  'Our Values': {
    heading: '',
    body: [],
    image: hero1,
    showCta: false,
  },
};

// ─── Values data ──────────────────────────────────────────────────────────────
interface ValueItem {
  title: string;
  description: string;
  svg: React.ReactElement;
  accent: string;
}

const VALUES: ValueItem[] = [
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of eco-construction, adopting new techniques, materials, and methods that set new standards for sustainable building in Africa.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
      </svg>
    ),
    accent: GREEN,
  },
  {
    title: 'Safety',
    description: 'Every structure we build meets rigorous safety standards. Our team is trained in eco-construction best practices that protect both people and the surrounding environment.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    accent: GREEN,
  },
  {
    title: 'Environmental Care',
    description: 'We design and build with the planet in mind, minimizing waste, conserving water, reducing carbon footprints, and using locally sourced sustainable materials on every project.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8C8 10 5.9 16.17 3.82 22"/>
        <path d="M9.1 17.4C9.7 14 12 11 17 8c1 5-1 9-8 9.4z"/>
      </svg>
    ),
    accent: GOLD,
  },
  {
    title: 'Community Engagement',
    description: 'We hire locally, involve communities in every phase, and donate 30% of project revenue to low-income families near our build sites, because construction should lift people up.',
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    accent: GOLD,
  },
];

// ─── Donut SVG ────────────────────────────────────────────────────────────────
// circumference = 2π×40 ≈ 251.2 | offset for 85% = 251.2 × 0.15 ≈ 37.68
function DonutChart({ pct, label }: { pct: string; label: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="relative flex-shrink-0" style={{ width: 110, height: 110 }}>
        <svg width="110" height="110" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke={GREEN} strokeWidth="8"
            strokeDasharray="251.2" strokeDashoffset="37.68"
            strokeLinecap="round" transform="rotate(-90 50 50)"/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-black" style={{ ...PLAYFAIR, color: GREEN }}>{pct}</span>
        </div>
      </div>
      <div>
        <p className="text-base font-black mb-1" style={{ ...PLAYFAIR, color: DARK }}>{label}</p>
        <p className="text-sm text-gray-500" style={DM}>Projects completed with certified sustainable materials and methods.</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function WhoWeAre() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeTab, setActiveTab] = useState<Tab>('Our Story');
  const [btn1Hovered, setBtn1Hovered] = useState(false);
  const [btn2Hovered, setBtn2Hovered] = useState(false);

  const content = TAB_CONTENT[activeTab];

  return (
    <main>

      {/* ── Hero breadcrumb strip ── */}
      <div className="pt-20 md:pt-24 pb-14 px-6 text-center" style={{ backgroundColor: GREEN }}>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-3" style={PLAYFAIR}>
          Who We Are
        </h1>
        <p className="text-sm tracking-widest" style={{ ...DM, color: '#86efac' }}>
          Home &rsaquo; About &rsaquo; Who We Are
        </p>
      </div>

      {/* ── Section 1: About the Company ── */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">

          {/* Text + stat */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-widest" style={{ ...DM, color: GOLD }}>
                WORK PERFORMANCE
              </span>
              <span className="inline-block w-10 h-px" style={{ backgroundColor: GOLD }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6" style={{ ...PLAYFAIR, color: DARK }}>
              About the Company
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>
              HeadFam Africa is an eco-construction company that prioritizes professional, sustainable, affordable, and innovative eco-friendly buildings which promote tourism and community engagement.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>
              We provide consultancy and create beautiful and functional structures including coffee shops, campsites, resorts, apartments, landscapes, culture centers, touristic site creation, lodges, and eco-residential properties that embrace the local environment.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>
              Our team values environmental stewardship, preserving natural beauty and culture through the use of sustainable local materials. We are more than builders, we are creators of sustainable dreams, shaping a greener future.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>
              HeadFam Africa is also specialized in building in some of Rwanda's most challenging and breathtaking environments, dense forests and high mountain terrain. We design and construct structures that work with these extreme natural settings, preserving their beauty while creating spaces that people and communities can truly benefit from.
            </p>
            <div className="flex flex-wrap gap-3 mt-2 mb-6">
              <span
                className="text-xs font-bold px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(46,125,50,0.08)', color: '#2E7D32' }}
              >
                Forest Construction
              </span>
              <span
                className="text-xs font-bold px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
              >
                High Mountain Building
              </span>
            </div>

            <DonutChart pct="85%" label="Eco-Certified Projects" />
          </div>

          {/* Image */}
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

          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest" style={{ ...DM, color: GOLD }}>
              MORE ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4" style={{ ...PLAYFAIR, color: DARK }}>
              We Create Design With Consistency
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed" style={DM}>
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
                  className="px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0"
                  style={{
                    ...DM,
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
          {activeTab === 'Our Values' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl p-8 flex gap-4 items-start"
                  style={{ backgroundColor: '#f9f6f0' }}
                >
                  <div className="flex-shrink-0" style={{ color: value.accent }}>{value.svg}</div>
                  <div>
                    <div className="h-0.5 w-8 mb-3 rounded-full" style={{ backgroundColor: value.accent }} />
                    <p className="text-base font-black mb-2" style={{ ...PLAYFAIR, color: DARK }}>{value.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed" style={DM}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">

                {/* Our Story */}
                {activeTab === 'Our Story' && (
                  <>
                    <h3 className="text-2xl font-black mb-5" style={{ ...PLAYFAIR, color: GREEN }}>
                      {content.heading}
                    </h3>
                    {content.body.map((p, i) => (
                      <p key={i} className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>{p}</p>
                    ))}
<div className="mt-6">
                      <GetStartedBtn />
                    </div>
                  </>
                )}

                {/* Our Mission */}
                {activeTab === 'Our Mission' && (
                  <>
                    <div className="mb-4" style={{ color: GREEN }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
                      </svg>
                    </div>
                    <p className="text-xs tracking-widest mb-3" style={{ ...DM, color: GOLD }}>OUR MISSION</p>
                    <h3 className="text-xl font-black mb-4" style={{ ...PLAYFAIR, color: GREEN }}>
                      Turning Vision Into Reality
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3" style={DM}>
                      Our mission is to turn your vision into a breathtaking reality.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed" style={DM}>
                      To provide excellent services which promote global eco-constructions.
                    </p>
                  </>
                )}

                {/* Our Vision */}
                {activeTab === 'Our Vision' && (
                  <>
                    <div className="mb-4" style={{ color: GOLD }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    <p className="text-xs tracking-widest mb-3" style={{ ...DM, color: GOLD }}>OUR VISION</p>
                    <p className="text-base font-semibold mb-2" style={{ ...DM, color: GOLD }}>
                      Where Construction Rooted in Tradition
                    </p>
                    <p className="text-sm text-gray-400 italic mb-4" style={DM}>
                      Creating the Wonders of Nature, Today's Future.
                    </p>
                    <h3 className="text-xl font-black mb-4" style={{ ...PLAYFAIR, color: GREEN }}>
                      First Resort for Global Investments
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed" style={DM}>
                      To be the first resort for global investments, building a legacy of sustainable, community-centered construction that spans East Africa and beyond.
                    </p>
                  </>
                )}

              </div>

              <div className="flex-1">
                <img src={content.image} alt={content.heading} onError={onImgError}
                  className="w-full object-cover shadow-lg"
                  style={{ height: 320, borderRadius: 12 }} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
      >
        <section className="relative overflow-hidden py-20 px-6 text-center">
          <img
            src={hero0}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ zIndex: 0 }}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.src = ''; }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.72)', zIndex: 1 }} />
          <div className="relative" style={{ zIndex: 2 }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={PLAYFAIR}>
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-base mb-8" style={{ ...DM, color: 'rgba(255,255,255,0.6)' }}>
              Let's turn your vision into a breathtaking, sustainable reality.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-full font-semibold text-sm text-white transition-colors duration-300"
                style={{ backgroundColor: btn1Hovered ? GREEN : GOLD }}
                onMouseEnter={() => setBtn1Hovered(true)}
                onMouseLeave={() => setBtn1Hovered(false)}
              >
                Start a Conversation
              </Link>
              <Link
                to="/services/consultancy"
                className="px-10 py-4 rounded-full font-semibold text-sm transition-colors duration-300"
                style={{
                  border: '2px solid white',
                  backgroundColor: btn2Hovered ? 'white' : 'transparent',
                  color: btn2Hovered ? DARK : 'white',
                }}
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </motion.div>

    </main>
  );
}
