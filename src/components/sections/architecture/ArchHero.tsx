import { motion } from 'framer-motion'

export default function ArchHero() {
  return (
    <section
      id="arch-hero"
      className="py-20 px-6 text-center w-full"
      style={{ backgroundColor: '#2E7D32' }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-black text-white mb-3"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Architecture Design
      </motion.h1>

      <motion.p
        className="text-sm"
        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"DM Sans", sans-serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Home &rsaquo; Services &rsaquo; Architecture Design
      </motion.p>
    </section>
  )
}
