import { HeroSection }       from '../components/HeroSection'
import { VisionSection }     from '../components/VisionSection'
import { EcosystemSection }  from '../components/EcosystemSection'
import { FintechSection }    from '../components/FintechSection'
import { RealEstateSection } from '../components/RealEstateSection'
import { GoldSection }       from '../components/GoldSection'
import { FundSection }       from '../components/FundSection'
import { TeamSection }       from '../components/TeamSection'
import { CTASection }        from '../components/CTASection'
import { VideoCtaBackground } from '@/components/common'

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

      {/* Shared video background for TeamSection + CTASection */}
      <VideoCtaBackground tone="bg">
        <TeamSection />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default HomePage
