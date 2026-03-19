import { useState } from 'react'
import { motion } from 'framer-motion'
import hero4 from '../../../assets/Hero/Headfam4.jpeg'

const VP = { once: true, amount: 0.2 as const }
const VP1 = { once: true, amount: 0.1 as const }
const T = { duration: 0.6, ease: 'easeOut' as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

interface ContactOption {
  title: string
  body: string
  action: string
  actionLabel: string
  external: boolean
  svg: React.ReactNode
}

const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: 'Call Us Directly',
    body: 'Speak to our team about your project right now.',
    action: 'tel:+250788326612',
    actionLabel: '+250 788 326 612',
    external: true,
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Send Us an Email',
    body: "Drop us a message and we'll respond within 24 hours.",
    action: 'mailto:info@headfamafrica.com',
    actionLabel: 'info@headfamafrica.com',
    external: true,
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: 'Visit Our Office',
    body: 'Come meet us at our Kigali office on Airport Road.',
    action: 'https://maps.google.com/?q=Remera+Giporoso+Kigali+Rwanda',
    actionLabel: 'Remera Giporoso, Kigali',
    external: true,
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const SOCIALS = [
  {
    href: 'https://instagram.com/headfamafrica/',
    label: 'Instagram',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" />
      </svg>
    ),
  },
  {
    href: 'https://facebook.com/profile.php?id=100095399520054',
    label: 'Facebook',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: 'https://youtube.com/@HeadFamAfrica/playlists',
    label: 'YouTube',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" stroke="none" />
      </svg>
    ),
  },
]

export default function ConsultancyCTA() {
  const [btn1Hovered, setBtn1Hovered] = useState(false)
  const [btn2Hovered, setBtn2Hovered] = useState(false)
  const [cardHovered, setCardHovered] = useState<boolean[]>([false, false, false])
  const [socialHovered, setSocialHovered] = useState<boolean[]>([false, false, false])

  const setCard = (i: number, val: boolean) =>
    setCardHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  const setSocial = (i: number, val: boolean) =>
    setSocialHovered((prev) => prev.map((v, idx) => (idx === i ? val : v)))

  const scrollToServices = () => {
    document.getElementById('consultancy-services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="consultancy-cta" className="py-16 px-6 md:px-16 bg-white">

      {/* Part 1 — Full width image banner */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
      >
        <img
          src={hero4}
          alt="HeadFam Africa consultancy"
          onError={onImgError}
          className="w-full object-cover"
          style={{ height: '320px' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 100%)' }}
        />

        <div
          className="absolute z-10 max-w-xl"
          style={{ left: '2.5rem', top: '50%', transform: 'translateY(-50%)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' as const }}
          >
            <p
              className="text-xs font-bold tracking-widest mb-4"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              GET STARTED
            </p>

            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Ready to Turn Your Vision Into Reality?
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
            >
              Book a consultation with HeadFam Africa and let our team help you validate, plan, and
              execute your eco-construction or tourism project with confidence.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                onMouseEnter={() => setBtn1Hovered(true)}
                onMouseLeave={() => setBtn1Hovered(false)}
                style={{
                  backgroundColor: btn1Hovered ? '#C9A84C' : '#2E7D32',
                  color: '#ffffff',
                  fontFamily: '"DM Sans", sans-serif',
                  transition: 'background-color 0.3s',
                }}
                className="px-8 py-4 rounded-full text-sm font-bold inline-block"
              >
                Book a Free Consultation
              </a>

              <button
                onClick={scrollToServices}
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
                style={{
                  backgroundColor: btn2Hovered ? '#ffffff' : 'transparent',
                  color: btn2Hovered ? '#1a1a1a' : '#ffffff',
                  border: '2px solid #ffffff',
                  fontFamily: '"DM Sans", sans-serif',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                className="px-8 py-4 rounded-full text-sm font-semibold"
              >
                Learn About Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Part 2 — Three contact options */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        {CONTACT_OPTIONS.map((option, i) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP1}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: i * 0.15 }}
            onMouseEnter={() => setCard(i, true)}
            onMouseLeave={() => setCard(i, false)}
            className="rounded-2xl p-8"
            style={{
              backgroundColor: cardHovered[i] ? '#ffffff' : '#f9f6f0',
              boxShadow: cardHovered[i] ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
              transform: cardHovered[i] ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
            }}
          >
            <div className="mb-5">{option.svg}</div>

            <h3
              className="text-lg font-black mb-2"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {option.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              {option.body}
            </p>

            <a
              href={option.action}
              target={option.external ? '_blank' : undefined}
              rel={option.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
              style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2E7D32' }}
            >
              {option.actionLabel} <span>&#8594;</span>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Part 3 — Final sign-off strip */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl px-10 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        style={{ backgroundColor: '#1a1a1a' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={T}
      >
        <div>
          <h4
            className="text-xl md:text-2xl font-black text-white mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            HeadFam Africa — Eco-Construction Consultancy
          </h4>
          <p
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Kigali, Rwanda &middot; info@headfamafrica.com &middot; +250 788 326 612
          </p>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          {SOCIALS.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              onMouseEnter={() => setSocial(i, true)}
              onMouseLeave={() => setSocial(i, false)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              style={{
                border: `1px solid ${socialHovered[i] ? '#C9A84C' : 'rgba(255,255,255,0.2)'}`,
                transition: 'border-color 0.3s',
              }}
            >
              {social.svg}
            </a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
