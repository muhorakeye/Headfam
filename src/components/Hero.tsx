export default function Hero() {
  return (
    <section className="relative h-screen hero-grid-bg flex items-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Architectural decorative lines */}
      <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-0 right-[55%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      {/* Horizontal accent line */}
      <div className="absolute top-1/2 right-0 w-[35%] h-px bg-gradient-to-l from-transparent to-brand/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div className="animate-fade-up flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-brand" />
            <p className="text-brand text-[11px] tracking-[0.45em] uppercase">
              Architecture &amp; Development
            </p>
          </div>

          {/* Headline */}
          <h1 className="leading-none mb-10">
            <span className="block animate-fade-up [animation-delay:0.15s] text-white font-bold text-[clamp(3.5rem,10vw,8rem)] tracking-tight">
              BUILDING
            </span>
            <span className="block animate-fade-up [animation-delay:0.3s] text-brand font-bold text-[clamp(3.5rem,10vw,8rem)] tracking-tight">
              AFRICA'S
            </span>
            <span className="block animate-fade-up [animation-delay:0.45s] text-white font-bold text-[clamp(3.5rem,10vw,8rem)] tracking-tight">
              FUTURE
            </span>
          </h1>

          {/* Divider */}
          <div className="animate-fade-up [animation-delay:0.55s] w-16 h-px bg-white/20 mb-8" />

          {/* Subtext */}
          <p className="animate-fade-up [animation-delay:0.65s] text-white/50 text-base lg:text-lg max-w-lg leading-relaxed mb-12">
            Designing spaces that inspire communities, celebrate heritage, and
            create lasting impact across the continent.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up [animation-delay:0.8s] flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-brand text-black text-[11px] tracking-[0.3em] uppercase font-semibold px-8 py-4 hover:bg-brand-hover transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="border border-white/20 text-white text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Corner tag */}
      <div className="absolute bottom-12 right-6 lg:right-12 hidden lg:flex items-center gap-3 animate-fade-in [animation-delay:1.2s]">
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Est. 2024</span>
        <div className="w-8 h-px bg-white/20" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in [animation-delay:1.4s]">
        <span className="text-white/25 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
