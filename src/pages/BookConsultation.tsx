import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  projectBrief: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    title: '30-Minute Session',
    body: 'A focused, structured conversation with one of our senior consultants.',
  },
  {
    title: 'No Obligation',
    body: 'This is an exploratory session. You decide what happens next.',
  },
  {
    title: 'Expert Guidance',
    body: '12+ years of eco-construction and tourism development experience on your side.',
  },
]

const steps = [
  { number: '01', title: 'Book Your Slot', body: 'Choose a date and time that works for you.' },
  { number: '02', title: 'We Confirm', body: 'Our team confirms your session within 24 hours.' },
  { number: '03', title: 'The Conversation', body: 'A focused 30-minute call with a senior consultant.' },
  { number: '04', title: 'Next Steps', body: 'We send a follow-up summary with recommendations.' },
]

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  projectBrief: '',
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface FieldLabelProps {
  children: React.ReactNode
  required?: boolean
}

function FieldLabel({ children, required }: FieldLabelProps) {
  return (
    <label
      className="block text-xs font-semibold mb-1"
      style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
    >
      {children}
      {required && <span style={{ color: '#2E7D32' }}> *</span>}
    </label>
  )
}

interface InputFieldProps {
  name: string
  type?: string
  placeholder?: string
  value: string
  min?: string
  focused: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (name: string) => void
  onBlur: () => void
}

function InputField({
  name,
  type = 'text',
  placeholder,
  value,
  min,
  focused,
  onChange,
  onFocus,
  onBlur,
}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      min={min}
      onChange={onChange}
      onFocus={() => onFocus(name)}
      onBlur={onBlur}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200"
      style={{
        border: `1.5px solid ${focused === name ? '#2E7D32' : '#e5e7eb'}`,
        backgroundColor: '#f9f6f0',
        color: '#1a1a1a',
        fontFamily: '"DM Sans", sans-serif',
      }}
    />
  )
}

interface SelectFieldProps {
  name: string
  value: string
  focused: string
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onFocus: (name: string) => void
  onBlur: () => void
}

function SelectField({
  name,
  value,
  focused,
  children,
  onChange,
  onFocus,
  onBlur,
}: SelectFieldProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      onFocus={() => onFocus(name)}
      onBlur={onBlur}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 cursor-pointer"
      style={{
        border: `1.5px solid ${focused === name ? '#2E7D32' : '#e5e7eb'}`,
        backgroundColor: '#f9f6f0',
        color: value === '' ? '#9ca3af' : '#1a1a1a',
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {children}
    </select>
  )
}

// ─── Success State ────────────────────────────────────────────────────────────

interface SuccessStateProps {
  onReset: () => void
}

function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <div className="text-center py-16">
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2E7D32"
        strokeWidth="1.5"
        className="mx-auto mb-6"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>

      <h2
        className="text-2xl font-black mb-3"
        style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
      >
        Consultation Booked!
      </h2>
      <p
        className="text-sm mb-2"
        style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
      >
        Thank you! We'll confirm your session within 24 hours via email or phone.
      </p>
      <p
        className="text-sm"
        style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
      >
        In the meantime, feel free to explore our services or reach out on WhatsApp.
      </p>

      <button
        onClick={onReset}
        className="mt-6 px-8 py-3 rounded-full text-white text-sm font-semibold inline-block transition-colors duration-300 hover:opacity-90"
        style={{ backgroundColor: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
      >
        Book Another Session
      </button>
    </div>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function BookConsultation() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [focused, setFocused] = useState<string>('')
  const [btnHovered, setBtnHovered] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const today = new Date().toISOString().split('T')[0]

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    const { name, email, service, date, time } = formData
    if (!name || !email || !service || !date || !time) {
      alert('Please fill in all required fields.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#2E7D32' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-black text-white mb-3"
          style={{ fontFamily: '"Playfair Display", serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Book a Consultation
        </motion.h1>

        <motion.p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Home › Book a Consultation
        </motion.p>
      </section>

      {/* ── Section 2: Intro Strip ──────────────────────────────────────── */}
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-bold tracking-widest mb-3"
              style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
            >
              FREE CONSULTATION
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
            >
              Talk to Our Team Before You Commit
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
            >
              Whether you have a clear project brief or just an idea, our consultation session is
              designed to help you think through your vision, understand your options, and determine
              the best path forward. No pressure, no obligation.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(46,125,50,0.08)' }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E7D32"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm font-black"
                      style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
                    >
                      {b.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {b.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Booking Form ─────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left: Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                BOOK YOUR SESSION
              </p>
              <h2
                className="text-2xl font-black mb-2"
                style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
              >
                Fill In Your Details
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
              >
                We'll confirm your session within 24 hours via email or phone.
              </p>

              {submitted ? (
                <SuccessState
                  onReset={() => {
                    setSubmitted(false)
                    setFormData(EMPTY_FORM)
                  }}
                />
              ) : (
                <>
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <InputField
                        name="name"
                        placeholder="Jean Pierre Nkurunziza"
                        value={formData.name}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <InputField
                        name="email"
                        type="email"
                        placeholder="jean@example.com"
                        value={formData.email}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel>Phone Number</FieldLabel>
                      <InputField
                        name="phone"
                        type="tel"
                        placeholder="+250 788 326 612"
                        value={formData.phone}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                    <div>
                      <FieldLabel required>Service of Interest</FieldLabel>
                      <SelectField
                        name="service"
                        value={formData.service}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      >
                        <option value="">Select a service</option>
                        <option>Eco-Construction Consultancy</option>
                        <option>Eco-Construction Project</option>
                        <option>Architecture Design</option>
                        <option>Landscape Design</option>
                        <option>Community Partnership</option>
                        <option>General Enquiry</option>
                      </SelectField>
                    </div>
                  </div>

                  {/* Row 3: Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FieldLabel required>Preferred Date</FieldLabel>
                      <InputField
                        name="date"
                        type="date"
                        value={formData.date}
                        min={today}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                    <div>
                      <FieldLabel required>Preferred Time</FieldLabel>
                      <SelectField
                        name="time"
                        value={formData.time}
                        focused={focused}
                        onChange={handleInput}
                        onFocus={setFocused}
                        onBlur={() => setFocused('')}
                      >
                        <option value="">Select a time slot</option>
                        <option>8:00 AM - 9:00 AM</option>
                        <option>9:00 AM - 10:00 AM</option>
                        <option>10:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 12:00 PM</option>
                        <option>2:00 PM - 3:00 PM</option>
                        <option>3:00 PM - 4:00 PM</option>
                        <option>4:00 PM - 5:00 PM</option>
                      </SelectField>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="mb-6">
                    <FieldLabel>Project Brief</FieldLabel>
                    <textarea
                      name="projectBrief"
                      rows={4}
                      placeholder="Briefly describe your project or what you'd like to discuss..."
                      value={formData.projectBrief}
                      onChange={handleInput}
                      onFocus={() => setFocused('projectBrief')}
                      onBlur={() => setFocused('')}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 resize-none"
                      style={{
                        border: `1.5px solid ${focused === 'projectBrief' ? '#2E7D32' : '#e5e7eb'}`,
                        backgroundColor: '#f9f6f0',
                        color: '#1a1a1a',
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <div
                    className="w-full py-4 rounded-xl text-center cursor-pointer font-bold text-sm text-white transition-colors duration-300"
                    style={{
                      backgroundColor: loading ? '#9ca3af' : btnHovered ? '#C9A84C' : '#2E7D32',
                      fontFamily: '"DM Sans", sans-serif',
                      pointerEvents: loading ? 'none' : 'auto',
                    }}
                    onMouseEnter={() => !loading && setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    onClick={handleSubmit}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  >
                    {loading ? 'Booking...' : 'Book My Consultation →'}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Right: Info Panel */}
          <motion.div
            className="w-full md:w-80 lg:w-96 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Block 1: What to expect */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p
                className="text-xs font-bold tracking-widest mb-6"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                WHAT TO EXPECT
              </p>

              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex items-start gap-4 ${i < steps.length - 1 ? 'mb-5' : ''}`}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#2E7D32' }}
                  >
                    <span
                      className="text-white text-xs font-black"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-black"
                      style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Block 2: Direct contact */}
            <div className="rounded-3xl p-6" style={{ backgroundColor: '#1a1a1a' }}>
              <p
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                PREFER TO CALL?
              </p>
              <h3
                className="text-lg font-black text-white mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Reach Us Directly
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+250788326612"
                  className="flex items-center gap-3 group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="2"
                    className="flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span
                    className="text-sm text-white group-hover:text-amber-400 transition-colors duration-200"
                    style={{ fontFamily: '"DM Sans", sans-serif', color: 'white' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                  >
                    +250 788 326 612
                  </span>
                </a>

                <a
                  href="tel:+250788342970"
                  className="flex items-center gap-3 group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="2"
                    className="flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span
                    className="text-sm"
                    style={{ fontFamily: '"DM Sans", sans-serif', color: 'white' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                  >
                    +250 788 342 970
                  </span>
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/250788326612"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-300"
                style={{ backgroundColor: '#2E7D32' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2E7D32')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
