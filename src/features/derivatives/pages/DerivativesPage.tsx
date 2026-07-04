import { DerivativesHero }      from '../components/DerivativesHero'
import { DerivativesSolutions } from '../components/DerivativesSolutions'
import { DerivativesMarkets }   from '../components/DerivativesMarkets'
import { DerivativesProcess }   from '../components/DerivativesProcess'
import { CTASection }           from '@/features/home/components/CTASection'
import { VideoCtaBackground }   from '@/components/common'

export function DerivativesPage() {
  return (
    <>
      <DerivativesHero />
      <DerivativesSolutions />
      <DerivativesMarkets />

      {/* Shared video background for DerivativesProcess + CTASection */}
      <VideoCtaBackground tone='bg'>
        <DerivativesProcess />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default DerivativesPage
