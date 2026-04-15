// Custom language dropdown — drives the hidden Google Translate widget.
// Cookie + reload is the only reliable way to switch/restore translation in a SPA.
// A MutationObserver provides a React-level backup to suppress the Google bar
// in case the HTML-level observer fires too late.
import { useState, useEffect, useRef } from 'react'

type Lang = 'en' | 'fr'

const LABELS: Record<Lang, string> = { en: 'English', fr: 'Français' }

function getActiveLang(): Lang {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]+)/)
  return match && match[1] === 'fr' ? 'fr' : 'en'
}

function switchLang(lang: Lang): void {
  const domain = window.location.hostname
  if (lang === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`
  } else {
    document.cookie = `googtrans=/en/${lang}; path=/`
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`
  }
  window.location.reload()
}

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile'
}

export function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const [activeLang] = useState<Lang>(getActiveLang)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // React-level backup: suppress the Google toolbar if it slips through the HTML observer
  useEffect(() => {
    function suppress() {
      const banner = document.querySelector<HTMLElement>('.goog-te-banner-frame')
      if (banner) banner.style.setProperty('display', 'none', 'important')
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px'
      }
    }
    suppress()
    const obs = new MutationObserver(suppress)
    obs.observe(document.body, { childList: true })
    return () => obs.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return
    function onOutsideClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onOutsideClick)
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [open])

  if (variant === 'mobile') {
    return (
      <div className="py-3 border-b border-gray-100">
        <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>
          Language
        </p>
        <div className="flex gap-2">
          {(['en', 'fr'] as Lang[]).map(lang => (
            <button
              key={lang}
              onClick={() => switchLang(lang)}
              disabled={activeLang === lang}
              className={`font-body text-sm font-semibold px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                activeLang === lang
                  ? 'bg-forest text-white border-forest'
                  : 'border-charcoal/20 text-charcoal/60 hover:border-forest hover:text-forest'
              }`}
            >
              {LABELS[lang]}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 font-body text-sm font-medium text-charcoal/70 hover:text-forest transition-colors duration-200"
      >
        {/* Globe icon */}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-mono text-xs font-bold">{activeLang.toUpperCase()}</span>
        {/* Chevron */}
        <svg
          width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor"
          strokeWidth="1.5" strokeLinecap="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-1 min-w-[140px] z-50 border border-charcoal/8">
          {(['en', 'fr'] as Lang[]).map(lang => (
            <button
              key={lang}
              role="option"
              aria-selected={activeLang === lang}
              onClick={() => { setOpen(false); switchLang(lang) }}
              className={`w-full text-left px-4 py-2.5 font-body text-sm transition-colors duration-150 flex items-center justify-between ${
                activeLang === lang
                  ? 'text-forest font-semibold bg-forest-light'
                  : 'text-charcoal hover:bg-forest-light hover:text-forest'
              }`}
            >
              {LABELS[lang]}
              {activeLang === lang && (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
