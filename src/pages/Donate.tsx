import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────

type DonationType = 'once' | 'monthly'

// ─── Data ────────────────────────────────────────────────────────────────────

const impactStats = [
  { number: '30%', label: 'Builds Eco-Homes', sub: 'Every project, without exception' },
  { number: '500+', label: 'Jobs Created', sub: 'Local workers across Rwanda' },
  { number: '3', label: 'Eco-Homes Built', sub: 'For low-income families near build sites' },
  { number: '12+', label: 'Years of Impact', sub: 'Serving East African communities' },
]

const presets = [10, 25, 50, 100, 250, 500]

const programs = [
  { label: 'Eco-House Construction', percent: 70, color: '#2E7D32' },
  { label: 'Building Materials', percent: 20, color: '#C9A84C' },
  { label: 'Local Workforce Wages', percent: 10, color: '#2E7D32' },
]

const promises = [
  '100% of your donation goes toward eco-house construction for families in need',
  'We publish annual impact reports showing exactly how funds are used',
  'Every donor receives a personal thank-you from our team',
  'Your contribution is acknowledged in our project community reports',
]

const bankDetails = [
  { label: 'Account Name', value: 'HeadFam Africa' },
  { label: 'Bank', value: 'Bank of Kigali' },
  { label: 'Account', value: 'Contact us for details' },
  { label: 'Reference', value: 'DONATION' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

interface ArrowIconProps {
  color?: string
}

function ArrowIcon({ color = '#2E7D32' }: ArrowIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      className="flex-shrink-0"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [donationType, setDonationType] = useState<DonationType>('once')
  const [customFocused, setCustomFocused] = useState(false)
  const [paypalHovered, setPaypalHovered] = useState(false)
  const [partnerHovered, setPartnerHovered] = useState(false)
  const [volunteerHovered, setVolunteerHovered] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const displayAmount = customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount}` : '$0'
  const displayFreq = donationType === 'monthly' ? '/month' : ' once'

  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <motion.p
          className="text-xs font-bold tracking-widest mb-4"
          style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          SUPPORT OUR WORK
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          30% of Every Project Builds Eco-Homes for Families in Need
        </motion.h1>

        <motion.p
          className="text-base max-w-2xl mx-auto mb-6"
          style={{ color: 'rgba(255,255,255,0.65)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Your donation helps HeadFam Africa build eco-houses for low-income families living near our construction sites across Rwanda.
        </motion.p>

        <motion.p
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"DM Sans", sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Home › Donate
        </motion.p>
      </section>

      {/* ── Section 2: Impact Stats Strip ───────────────────────────────── */}
      <section className="py-10 px-6 md:px-16" style={{ backgroundColor: '#2E7D32' }}>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={i < 3 ? 'md:border-r md:pr-6' : ''}
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <p
                className="text-3xl md:text-4xl font-black text-white"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {stat.number}
              </p>
              <p
                className="text-sm font-bold text-white mt-1"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.label}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 3: Donation Options ─────────────────────────────────── */}
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: '#f9f6f0' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left: Donation panel */}
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
                MAKE A DONATION
              </p>
              <h2
                className="text-2xl font-black mb-2"
                style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}
              >
                Choose How You'd Like to Give
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
              >
                Every contribution, large or small, goes toward building eco-houses for low-income families near our build sites.
              </p>

              {/* Donation type toggle */}
              <div className="flex gap-2 mb-6">
                {(['once', 'monthly'] as DonationType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className="px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
                    style={{
                      backgroundColor: donationType === type ? '#2E7D32' : '#f9f6f0',
                      color: donationType === type ? 'white' : '#6b7280',
                      border: donationType === type ? '2px solid #2E7D32' : '2px solid #e5e7eb',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {type === 'once' ? 'Give Once' : 'Give Monthly'}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <p
                className="text-xs font-bold mb-3"
                style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
              >
                Select an amount (USD)
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presets.map((p) => {
                  const active = selectedAmount === p && !customAmount
                  return (
                    <button
                      key={p}
                      onClick={() => { setSelectedAmount(p); setCustomAmount('') }}
                      className="py-3 rounded-xl text-sm font-black transition-colors duration-200"
                      style={{
                        backgroundColor: active ? '#2E7D32' : '#f9f6f0',
                        color: active ? 'white' : '#374151',
                        border: `2px solid ${active ? '#2E7D32' : '#e5e7eb'}`,
                        fontFamily: '"Playfair Display", serif',
                      }}
                      onMouseEnter={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = '#2E7D32'
                          e.currentTarget.style.color = '#2E7D32'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = '#e5e7eb'
                          e.currentTarget.style.color = '#374151'
                        }
                      }}
                    >
                      ${p}
                    </button>
                  )
                })}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <p
                  className="text-xs font-bold mb-2"
                  style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Or enter a custom amount
                </p>
                <div className="relative">
                  <span
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="e.g. 75"
                    min="1"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                    onFocus={() => setCustomFocused(true)}
                    onBlur={() => setCustomFocused(false)}
                    className="pl-8 pr-4 py-3 w-full rounded-xl text-sm outline-none transition-colors duration-200"
                    style={{
                      border: `1.5px solid ${customFocused ? '#2E7D32' : '#e5e7eb'}`,
                      backgroundColor: '#f9f6f0',
                      fontFamily: '"DM Sans", sans-serif',
                      color: '#1a1a1a',
                    }}
                  />
                </div>
              </div>

              {/* Summary */}
              <div
                className="flex items-center justify-between rounded-xl p-4 mb-6"
                style={{ backgroundColor: '#f9f6f0' }}
              >
                <span
                  className="text-sm"
                  style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Your donation:
                </span>
                <span
                  className="text-lg font-black"
                  style={{ color: '#2E7D32', fontFamily: '"Playfair Display", serif' }}
                >
                  {displayAmount}{displayFreq}
                </span>
              </div>

              {/* PayPal button */}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=HEADFAMAFRICA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-full py-4 rounded-xl text-center font-bold text-sm text-white flex items-center justify-center gap-3 cursor-pointer transition-colors duration-300"
                  style={{
                    backgroundColor: paypalHovered ? '#C9A84C' : '#2E7D32',
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                  onMouseEnter={() => setPaypalHovered(true)}
                  onMouseLeave={() => setPaypalHovered(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
                  </svg>
                  Donate via PayPal
                </div>
              </a>

              {/* Divider */}
              <div className="relative h-px my-5 flex items-center justify-center" style={{ backgroundColor: '#f3f4f6' }}>
                <span
                  className="absolute bg-white px-3 text-xs"
                  style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
                >
                  or donate directly via
                </span>
              </div>

              {/* Bank transfer */}
              <div className="rounded-xl p-5" style={{ backgroundColor: '#f9f6f0' }}>
                <p
                  className="text-xs font-bold tracking-widest mb-4"
                  style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
                >
                  BANK TRANSFER
                </p>
                {bankDetails.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex justify-between py-2"
                    style={{
                      borderBottom: i < bankDetails.length - 1 ? '1px solid #e5e7eb' : 'none',
                    }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Info panel */}
          <motion.div
            className="w-full md:w-80 lg:w-96 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Block 1: Where money goes */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <p
                className="text-xs font-bold tracking-widest mb-6"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                WHERE YOUR MONEY GOES
              </p>
              {programs.map((prog, i) => (
                <div key={prog.label} className={i < programs.length - 1 ? 'mb-5' : ''}>
                  <div className="flex justify-between mb-1">
                    <span
                      className="text-sm"
                      style={{ color: '#374151', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {prog.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {prog.percent}%
                    </span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ backgroundColor: '#f3f4f6' }}>
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: prog.color }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${prog.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Block 2: Donor promise */}
            <div className="rounded-3xl p-8" style={{ backgroundColor: '#2E7D32' }}>
              <h3
                className="text-xl font-black text-white mb-5"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Our Promise to You
              </h3>
              {promises.map((p, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${i < promises.length - 1 ? 'mb-4' : ''}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.85)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>

            {/* Block 3: Other ways to help */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}
              >
                OTHER WAYS TO HELP
              </p>

              <Link to="/book-consultation">
                <div
                  className="flex items-center justify-between p-4 rounded-xl mb-3 transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: partnerHovered ? 'rgba(46,125,50,0.08)' : '#f9f6f0',
                  }}
                  onMouseEnter={() => setPartnerHovered(true)}
                  onMouseLeave={() => setPartnerHovered(false)}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Partner With Us
                  </span>
                  <ArrowIcon />
                </div>
              </Link>

              <Link to="/contact">
                <div
                  className="flex items-center justify-between p-4 rounded-xl transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: volunteerHovered ? 'rgba(46,125,50,0.08)' : '#f9f6f0',
                  }}
                  onMouseEnter={() => setVolunteerHovered(true)}
                  onMouseLeave={() => setVolunteerHovered(false)}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: '#1a1a1a', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Volunteer Your Skills
                  </span>
                  <ArrowIcon />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
