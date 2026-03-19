import {
  ConsultancyHero,
  ConsultancyServices,
  ConsultancyProcess,
  ConsultancyWhyUs,
  ConsultancyProjects,
  ConsultancyCTA,
} from '../../components/sections/consultancy'

export default function Consultancy() {
  return (
    <main>
      <ConsultancyHero />
      <ConsultancyServices />
      <ConsultancyProcess />
      <ConsultancyWhyUs />
      <ConsultancyProjects />
      <ConsultancyCTA />
    </main>
  )
}
