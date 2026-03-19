import { motion } from 'framer-motion'
import {
  EcoHero,
  EcoServices,
  EcoProcess,
  EcoWhyUs,
  EcoProjects,
  //EcoCTA,
} from '../../components/sections/ecoconstruction'

export default function EcoConstruction() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <EcoHero />
      <EcoServices />
      <EcoProcess />
      <EcoWhyUs />
      <EcoProjects />
      {/*<EcoCTA />*/}
    </motion.main>
  )
}
