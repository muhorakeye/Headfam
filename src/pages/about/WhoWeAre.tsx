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
    body: [
      'HeadFam Africa was founded with a single belief: that construction should serve people and planet equally. Beginning in Kigali, Rwanda, our first projects were modest eco-homes built with local materials for local families.',
      'Over the years we expanded into resorts, cultural centers, and community facilities, always keeping the same promise: hire locally, build sustainably, give back generously.',
      'Today HeadFam Africa is recognized across East Africa as a pioneer of eco-construction, having delivered more than a dozen landmark projects and created over 500 local jobs since inception.',
    ],
    image: hero0,
    showCta: false,
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
  'Our Values': {
    heading: 'From Kigali to East Africa',
    body: [
      'What began as a small team of passionate builders has grown into a full-service eco-construction company with expertise spanning architecture, consultancy, landscape design, and sustainable development.',
      'We have completed coffee shops, campsites, eco-lodges, resorts, apartments, culture centers, and eco-residential properties, each one raising the standard for what responsible construction looks like in Africa.',
    ],
    image: hero1,
    showCta: true,
  },
};

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

      {/* ── Section 1: Work Performance ── */}
      {/* Left: label + heading + body + stat | Right: image */}
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
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-5" style={{ ...PLAYFAIR, color: GREEN }}>
                {content.heading}
              </h3>
              {content.body.map((p, i) => (
                <p key={i} className="text-sm text-gray-500 leading-relaxed mb-4" style={DM}>{p}</p>
              ))}
              {activeTab === 'Our Story' && (
                <div className="flex flex-wrap gap-8 mt-8">
                  {[
                    { number: '12+',  label: 'Years of Experience' },
                    { number: '500+', label: 'Local Jobs Created' },
                    { number: '30%',  label: 'Revenue Donated' },
                    { number: '3',    label: 'Landmark Projects' },
                  ].map((stat, i, arr) => (
                    <div
                      key={stat.label}
                      style={i < arr.length - 1 ? { borderRight: '1px solid #e5e7eb', paddingRight: '2rem' } : {}}
                    >
                      <p className="text-3xl font-black" style={{ ...PLAYFAIR, color: GREEN }}>{stat.number}</p>
                      <p className="text-xs text-gray-400 mt-1" style={DM}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
              {content.showCta && (
                <div className="mt-6">
                  <GetStartedBtn />
                </div>
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


      {/* ── CTA strip ── */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
      >
        <section className="py-20 px-6 text-center" style={{ backgroundColor: DARK }}>
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
        </section>
      </motion.div>

    </main>
  );
}
