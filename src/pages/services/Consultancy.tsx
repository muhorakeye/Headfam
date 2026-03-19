import { motion } from 'framer-motion'
import {
  ConsultancyHero,
  ConsultancyServices,
  ConsultancyProcess,
  ConsultancyWhyUs,
  //ConsultancyProjects,
  ConsultancyCTA,
} from '../../components/sections/consultancy'

export default function Consultancy() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ConsultancyHero />
      <ConsultancyServices />
      <ConsultancyWhyUs />
      <ConsultancyProcess />
      {/*<ConsultancyProjects />*/}
      <ConsultancyCTA />
    </motion.main>
  )
}
