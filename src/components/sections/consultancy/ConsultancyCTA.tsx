import { useState } from 'react'
import { motion } from 'framer-motion'
import hero4 from '../../../assets/Hero/Headfam4.webp'

const VP = { once: true, amount: 0.2 as const }

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = '#e8f5e9'
  e.currentTarget.src = ''
}

export default function ConsultancyCTA() {
  const [btn1Hovered, setBtn1Hovered] = useState(false)
  const [btn2Hovered, setBtn2Hovered] = useState(false)

  const scrollToServices = () => {
    document.getElementById('consultancy-services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="consultancy-cta" className="py-6 px-6 md:px-10 bg-white">

      {/* Part 1 — Full width image banner */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
      >
        <img
          src={hero4}
          alt="HeadFam Africa consultancy"
          onError={onImgError}
          className="w-full object-cover h-[290px] md:h-[350px]"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 100%)' }}
        />

        <div
          className="absolute z-10"
          style={{ left: '1.5rem', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}
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
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Ready to Turn Your Vision Into Reality?
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"DM Sans", sans-serif' }}
            >
              Book a consultation with HeadFam Africa and let our team help you validate, plan, and
              <br />execute your eco-construction or tourism project with confidence.<br />
            </p>

            <div className="flex gap-2 flex-wrap">
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

    </section>
  )
}
