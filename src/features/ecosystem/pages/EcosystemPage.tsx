import { EcosystemHero }           from '../components/EcosystemHero'
import { EcosystemDetailSections } from '../components/EcosystemDetailSections'
import { CTASection }               from '@/features/home/components/CTASection'
import { VideoCtaBackground }       from '@/components/common'

export function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemDetailSections />

      <VideoCtaBackground tone="bg" heightClass="h-240" verticalFade={false}>
        <div className="h-40" />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default EcosystemPage
