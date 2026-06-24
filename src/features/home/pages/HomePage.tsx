import { HeroSection }       from '../components/HeroSection'
import { VisionSection }     from '../components/VisionSection'
import { EcosystemSection }  from '../components/EcosystemSection'
import { FintechSection }    from '../components/FintechSection'
import { RealEstateSection } from '../components/RealEstateSection'
import { GoldSection }       from '../components/GoldSection'
import { FundSection }       from '../components/FundSection'
import { TeamSection }       from '../components/TeamSection'
import { CTASection }        from '../components/CTASection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <EcosystemSection />
      <FintechSection />
      <RealEstateSection />
      <GoldSection />
      <FundSection />
      <TeamSection />
      <CTASection />
    </>
  )
}

export default HomePage
