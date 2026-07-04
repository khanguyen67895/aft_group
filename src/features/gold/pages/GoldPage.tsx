import { GoldHero }          from '../components/GoldHero'
import { GoldSolutions }     from '../components/GoldSolutions'
import { GoldMiningDetail }  from '../components/GoldMiningDetail'
import { GoldWhyChoose }     from '../components/GoldWhyChoose'
import { CTASection }        from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'

export function GoldPage() {
  return (
    <>
      <GoldHero />
      <GoldSolutions />
      <GoldMiningDetail />

      {/* Shared video background for GoldWhyChoose + CTASection */}
      <VideoCtaBackground tone="bg">
        <GoldWhyChoose />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default GoldPage
