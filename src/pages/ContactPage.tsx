import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface ContactItem {
  label: string
  values: string[]
  href: string[]
  iconStroke: string
  svg: React.ReactNode
}

interface Social {
  name: string
  handle: string
  href: string
  svg: React.ReactNode
}

// ─── Static data ─────────────────────────────────────────────────────────────

const contactItems: ContactItem[] = [
  {
    label: 'Phone',
    values: ['+250 788 326 612', '+250 788 342 970'],
    href: ['tel:+250788326612', 'tel:+250788342970'],
    iconStroke: '#2E7D32',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.37 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    values: ['info@headfamafrica.com'],
    href: ['mailto:info@headfamafrica.com'],
    iconStroke: '#C9A84C',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Address',
    values: ['Remera Giporoso – Airport Road', 'Kigali, Rwanda'],
    href: ['https://maps.google.com/?q=Remera+Giporoso+Kigali+Rwanda'],
    iconStroke: '#2E7D32',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

const socials: Social[] = [
  {
    name: 'Instagram',
    handle: '@headfamafrica',
    href: 'https://instagram.com/headfamafrica/',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'HeadFam Africa',
    href: 'https://facebook.com/profile.php?id=100095399520054',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'HeadFam Africa',
    href: 'https://youtube.com/@HeadFamAfrica/playlists',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@Headfamafrica',
    href: 'https://twitter.com/Headfamafrica',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
]

const EMPTY_FORM: FormData = { name: '', email: '', phone: '', subject: '', message: '' }

const INPUT_BASE: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
  backgroundColor: '#f9f6f0',
  fontSize: '0.875rem',
  fontFamily: 'DM Sans',
  color: '#1a1a1a',
  outline: 'none',
  transition: 'border-color 0.2s',
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Label({ text }: { text: string }) {
  return (
    <p
      className="text-xs font-bold mb-1"
      style={{ color: '#1a1a1a', fontFamily: 'DM Sans' }}
    >
      {text}
    </p>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')
  const [btnHovered, setBtnHovered] = useState(false)

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [key]: e.target.value }))

  const borderFor = (name: string) => ({ ...INPUT_BASE, borderColor: focused === name ? '#2E7D32' : '#e5e7eb' })

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.5" className="mx-auto mb-6">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
        <p className="text-2xl font-black mb-3" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display' }}>
          Message Sent!
        </p>
        <p className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans' }}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <div
          className="inline-block mt-6 px-8 py-3 rounded-full text-sm font-semibold text-white cursor-pointer"
          style={{ backgroundColor: '#2E7D32', fontFamily: 'DM Sans' }}
          onClick={() => { setSubmitted(false); setFormData(EMPTY_FORM) }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#C9A84C')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2E7D32')}
        >
          Send Another Message
        </div>
      </div>
    )
  }

  return (
    <>
      <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#C9A84C', fontFamily: 'DM Sans' }}>
        SEND US A MESSAGE
      </p>
      <p className="text-2xl font-black mb-2" style={{ color: '#1a1a1a', fontFamily: 'Playfair Display' }}>
        Let's Start a Conversation
      </p>
      <p className="text-sm text-gray-500 mb-8" style={{ fontFamily: 'DM Sans' }}>
        Fill in the form below and our team will get back to you within 24 hours.
      </p>

      {/* Full Name */}
      <div className="mb-4">
        <Label text="Full Name *" />
        <input
          type="text"
          placeholder="e.g. Jean Pierre Nkurunziza"
          value={formData.name}
          onChange={set('name')}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused('')}
          style={borderFor('name')}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <Label text="Email Address *" />
        <input
          type="email"
          placeholder="e.g. jean@example.com"
          value={formData.email}
          onChange={set('email')}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
          style={borderFor('email')}
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <Label text="Phone Number" />
        <input
          type="tel"
          placeholder="e.g. +250 788 000 000"
          value={formData.phone}
          onChange={set('phone')}
          onFocus={() => setFocused('phone')}
          onBlur={() => setFocused('')}
          style={borderFor('phone')}
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <Label text="Subject *" />
        <select
          value={formData.subject}
          onChange={set('subject')}
          onFocus={() => setFocused('subject')}
          onBlur={() => setFocused('')}
          style={borderFor('subject')}
        >
          <option value="">Select a subject</option>
          <option>Eco-Construction Consultancy</option>
          <option>Eco-Construction Project</option>
          <option>Architecture Design</option>
          <option>Community Partnership</option>
          <option>Donation &amp; Support</option>
          <option>General Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <Label text="Message *" />
        <textarea
          rows={5}
          placeholder="Tell us about your project or enquiry..."
          value={formData.message}
          onChange={set('message')}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
          style={{ ...borderFor('message'), resize: 'none' }}
        />
      </div>

      {/* Submit */}
      <div
        className="w-full py-4 rounded-xl text-center text-sm font-bold text-white"
        style={{
          backgroundColor: loading ? '#9ca3af' : btnHovered ? '#C9A84C' : '#2E7D32',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: 'DM Sans',
          transition: 'background-color 0.2s',
        }}
        onClick={!loading ? handleSubmit : undefined}
        onMouseEnter={() => { if (!loading) setBtnHovered(true) }}
        onMouseLeave={() => setBtnHovered(false)}
      >
        {loading ? 'Sending...' : 'Send Message →'}
      </div>
    </>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [waHovered, setWaHovered] = useState(false)

  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="py-20 px-6 text-center w-full" style={{ backgroundColor: '#2E7D32' }}>
        <motion.h1
          className="text-4xl md:text-5xl font-black text-white mb-3"
          style={{ fontFamily: 'Playfair Display' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Home › Contact Us
        </motion.p>
      </section>

      {/* Section 2 — Split layout */}
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left — contact form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <ContactForm />
            </div>
          </motion.div>

          {/* Right — contact info */}
          <motion.div
            className="w-full md:w-80 lg:w-96 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Block 1 — contact details */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-xs font-bold tracking-widest mb-6" style={{ color: '#C9A84C', fontFamily: 'DM Sans' }}>
                GET IN TOUCH
              </p>
              {contactItems.map((item, i) => (
                <div key={item.label} className={`flex items-start gap-4 ${i < contactItems.length - 1 ? 'mb-6' : ''}`}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.iconStroke === '#C9A84C' ? 'rgba(201,168,76,0.08)' : 'rgba(46,125,50,0.08)' }}
                  >
                    {item.svg}
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: '#1a1a1a', fontFamily: 'DM Sans' }}>
                      {item.label}
                    </p>
                    {item.values.map((val, vi) => (
                      <a
                        key={val}
                        href={item.href[vi] ?? item.href[0]}
                        className="block text-sm transition-colors duration-200"
                        style={{ color: '#2E7D32', fontFamily: 'DM Sans' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#2E7D32')}
                        target={item.label === 'Address' ? '_blank' : undefined}
                        rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                      >
                        {val}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Block 2 — WhatsApp CTA */}
            <div className="rounded-3xl p-6 text-center" style={{ backgroundColor: '#2E7D32' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="mx-auto mb-3">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              <p className="text-base font-black text-white mb-1" style={{ fontFamily: 'Playfair Display' }}>
                Chat on WhatsApp
              </p>
              <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'DM Sans' }}>
                We typically reply within a few hours
              </p>
              <a
                href="https://wa.me/250788326612?text=Hello%20HeadFam%20Africa%2C%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full text-sm font-bold transition-colors duration-200"
                style={{
                  backgroundColor: waHovered ? '#C9A84C' : '#ffffff',
                  color: waHovered ? '#ffffff' : '#2E7D32',
                  fontFamily: 'DM Sans',
                }}
                onMouseEnter={() => setWaHovered(true)}
                onMouseLeave={() => setWaHovered(false)}
              >
                Start WhatsApp Chat →
              </a>
            </div>

            {/* Block 3 — Social media */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-xs font-bold tracking-widest mb-5" style={{ color: '#C9A84C', fontFamily: 'DM Sans' }}>
                FOLLOW US
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-200"
                    style={{ backgroundColor: '#f9f6f0', color: '#2E7D32' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(46,125,50,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#f9f6f0')}
                  >
                    {s.svg}
                    <div>
                      <p className="text-xs font-bold" style={{ color: '#1a1a1a', fontFamily: 'DM Sans' }}>
                        {s.name}
                      </p>
                      <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans' }}>
                        {s.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Google Maps embed */}
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-16 pb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="px-8 py-5 flex items-center gap-3" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p className="text-sm font-semibold" style={{ color: '#1a1a1a', fontFamily: 'DM Sans' }}>
              Remera Giporoso – Airport Road, Kigali, Rwanda
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.0!2d30.0588!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4afc87e60c1%3A0xd29b4b7e4d2e3e4!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HeadFam Africa Office Location"
          />
        </div>
      </motion.div>
    </main>
  )
}
