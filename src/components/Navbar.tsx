import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Top brand-color line ────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 h-px bg-brand/60 z-50" />

      <nav
        className={`fixed top-px left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-black/97 backdrop-blur-lg border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[4.5rem]">

            {/* ── Logo / Wordmark ─────────────────────────────────────── */}
            <a href="/" className="group flex items-baseline gap-2.5">
              <span className="text-white text-base font-black tracking-[0.18em] uppercase transition-colors duration-300 group-hover:text-brand">
                HEADFAM
              </span>
              <span className="text-brand text-[11px] font-medium tracking-[0.5em] uppercase leading-none">
                AFRICA
              </span>
            </a>

            {/* ── Desktop nav ─────────────────────────────────────────── */}
            <ul className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative text-white/50 text-[11px] tracking-[0.22em] uppercase hover:text-white transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-brand after:transition-[width] after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA ─────────────────────────────────────────── */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 group"
            >
              <span className="text-brand text-base font-light transition-transform duration-300 group-hover:translate-x-0.5 inline-block">
                →
              </span>
              <span className="text-white/50 text-[11px] tracking-[0.22em] uppercase group-hover:text-white transition-colors duration-300">
                Get in Touch
              </span>
            </a>

            {/* ── Mobile menu toggle — "Menu / Close" text (MASS style) ── */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center gap-2 py-1"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="text-white/60 text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-white">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
              {/* Animated lines */}
              <div className="flex flex-col gap-[5px] w-5">
                <span
                  className={`block h-px bg-white/70 transition-all duration-400 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-white/70 transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block h-px bg-white/70 transition-all duration-400 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>

          </div>
        </div>

        {/* ── Mobile full-screen menu ──────────────────────────────────── */}
        <div
          className={`md:hidden fixed inset-0 top-[calc(4.5rem+1px)] bg-black transition-all duration-500 ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 pb-20 gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 py-5 border-b border-white/[0.06]"
              >
                <span className="text-brand/50 text-[10px] tracking-widest font-mono">
                  0{i + 1}
                </span>
                <span className="text-white/70 text-3xl font-bold tracking-tight uppercase group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  {link.label}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-10 flex items-baseline gap-3"
            >
              <span className="text-brand text-xl">→</span>
              <span className="text-brand text-[11px] tracking-[0.3em] uppercase">Get in Touch</span>
            </a>
          </div>
        </div>

      </nav>
    </>
  );
}
