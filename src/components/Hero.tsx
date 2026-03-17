export default function Hero() {
  return (
    <section className="hero-bg relative h-screen overflow-hidden flex flex-col">

      {/* ── Architectural geometry layer (right half) ─────────────────── */}
      {/* These divs simulate the structural lines of an aerial building shot */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* Large building frame — the "aerial footprint" */}
        <div className="absolute top-[12%] right-[6%] w-[42%] h-[72%] border border-white/[0.045]" />
        <div className="absolute top-[20%] right-[14%] w-[28%] h-[52%] border border-white/[0.03]" />
        <div className="absolute top-[28%] right-[20%] w-[18%] h-[36%] border border-white/[0.025]" />

        {/* Structural vertical lines */}
        <div className="absolute top-0 right-[48%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute top-0 right-[14%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

        {/* Structural horizontal lines */}
        <div className="absolute top-[33%] right-0 w-[52%] h-px bg-gradient-to-l from-transparent to-white/[0.04]" />
        <div className="absolute top-[55%] right-0 w-[44%] h-px bg-gradient-to-l from-transparent to-white/[0.04]" />
        <div className="absolute top-[72%] right-0 w-[35%] h-px bg-gradient-to-l from-transparent to-white/[0.03]" />

        {/* Diagonal accent — a sliced floor plate */}
        <div className="absolute top-[8%] right-[25%] w-px h-[45%] bg-white/[0.03] rotate-[18deg] origin-top" />
        <div className="absolute top-[5%] right-[38%] w-px h-[55%] bg-white/[0.025] -rotate-[12deg] origin-top" />

        {/* Corner tick marks — surveying reference points */}
        <div className="absolute top-[11%] right-[48%] w-3 h-px bg-brand/30" />
        <div className="absolute top-[11%] right-[48%] w-px h-3 bg-brand/30" />
        <div className="absolute bottom-[26%] right-[6%] w-3 h-px bg-brand/30" />
        <div className="absolute bottom-[26%] right-[6%] w-px h-3 bg-brand/30 bottom-0" />

        {/* Brand glow — warm light source bottom-right */}
        <div className="absolute bottom-0 right-0 w-[40%] h-[35%] bg-brand/[0.04] blur-[80px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[30%] bg-brand/[0.02] blur-[60px] rounded-full" />
      </div>

      {/* ── Text-side gradient — keeps left clean and readable ─────────── */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] from-40% via-[#050505]/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* ── Top label — like a site/project descriptor ─────────────────── */}
      <div className="animate-fade-in [animation-delay:0.2s] absolute top-28 left-6 lg:left-12 flex items-center gap-4 z-10">
        <div className="w-5 h-px bg-brand/60" />
        <span className="text-white/30 text-[10px] tracking-[0.45em] uppercase">
          Architecture &amp; Community Development
        </span>
      </div>

      {/* ── Top-right coordinate label ──────────────────────────────────── */}
      <div className="animate-fade-in [animation-delay:0.4s] absolute top-28 right-6 lg:right-12 hidden lg:flex items-center gap-3 z-10">
        <span className="text-white/15 text-[9px] tracking-[0.3em] font-mono">1.286° N, 36.817° E</span>
      </div>

      {/* ── MAIN CONTENT — anchored to bottom-left (MASS layout) ────────── */}
      <div className="relative z-10 mt-auto px-6 lg:px-12 pb-24 lg:pb-28 max-w-7xl mx-auto w-full">

        {/* Headline — each word on its own line, massive weight */}
        <h1 className="leading-[0.88] tracking-[-0.03em] mb-10 lg:mb-12">
          <span className="block animate-fade-up [animation-delay:0.3s] text-white font-black text-[clamp(4.2rem,12.5vw,10.5rem)]">
            BUILDING
          </span>
          <span className="block animate-fade-up [animation-delay:0.48s] text-brand font-black text-[clamp(4.2rem,12.5vw,10.5rem)]">
            AFRICA'S
          </span>
          <span className="block animate-fade-up [animation-delay:0.66s] text-white font-black text-[clamp(4.2rem,12.5vw,10.5rem)]">
            FUTURE
          </span>
        </h1>

        {/* Arrow CTAs — MASS-style directional links */}
        <div className="animate-fade-up [animation-delay:0.9s] flex flex-col gap-4 lg:gap-5">
          <a href="#projects" className="group flex items-baseline gap-4 w-fit">
            <span className="text-brand text-xl font-light transition-transform duration-300 ease-out group-hover:translate-x-2 inline-block">
              →
            </span>
            <span className="text-white/45 text-sm tracking-[0.12em] uppercase leading-none">
              Explore how our{' '}
              <strong className="text-white font-semibold">Projects</strong>
              {' '}shape communities
            </span>
          </a>
          <a href="#about" className="group flex items-baseline gap-4 w-fit">
            <span className="text-brand text-xl font-light transition-transform duration-300 ease-out group-hover:translate-x-2 inline-block">
              →
            </span>
            <span className="text-white/45 text-sm tracking-[0.12em] uppercase leading-none">
              Discover our{' '}
              <strong className="text-white font-semibold">Approach</strong>
              {' '}to design
            </span>
          </a>
        </div>
      </div>

      {/* ── Bottom attribution bar — like MASS's photographer credit ───── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-12 flex items-center justify-between">
          <div className="animate-fade-in [animation-delay:1.2s] flex items-center gap-6">
            <span className="text-white/20 text-[9px] tracking-[0.35em] uppercase">Headfam Africa</span>
            <div className="w-px h-3 bg-white/10" />
            <span className="text-white/15 text-[9px] tracking-[0.3em] uppercase">Est. 2024</span>
          </div>
          <div className="animate-fade-in [animation-delay:1.2s] hidden md:flex items-center gap-6">
            <span className="text-white/15 text-[9px] tracking-[0.3em] uppercase">Nairobi, Kenya</span>
            <div className="w-px h-3 bg-white/10" />
            <span className="text-brand/40 text-[9px] tracking-[0.3em] uppercase">Design Studio</span>
          </div>
        </div>
      </div>

    </section>
  );
}
