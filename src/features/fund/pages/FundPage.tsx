import { FundHero }           from '../components/FundHero'
import { FundProcess }        from '../components/FundProcess'
import { FundFocusAreas }     from '../components/FundFocusAreas'
import { FundSection }        from '@/features/home/components/FundSection'
import { CTASection }         from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'

export function FundPage() {
  return (
    <>
      <FundHero />
      <FundProcess />
      <FundFocusAreas />

      {/* Shared video background for FundSection + CTASection */}
      <VideoCtaBackground tone="bg">
        <FundSection />

        {/* Blend FundSection's solid ending color into the video below */}
        <div
          className="hidden md:block relative h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, var(--color-bg) 0%, transparent 120%)' }}
        />

        <div className="relative mt-0 md:mt-20">
          <CTASection />
        </div>
      </VideoCtaBackground>
    </>
  )
}

export default FundPage
