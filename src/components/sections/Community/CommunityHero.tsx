import { motion } from 'framer-motion'

export default function CommunityHero() {
  return (
    <motion.section
      id="community-hero"
      className="pt-32 pb-20 px-6 text-center w-full"
      style={{ backgroundColor: '#2E7D32' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-black text-white mb-3"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Community
      </motion.h1>
      <motion.p
        className="text-sm"
        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: '"DM Sans", sans-serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Home &rsaquo; About &rsaquo; Community
      </motion.p>
    </motion.section>
  )
}
