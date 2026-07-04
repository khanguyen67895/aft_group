import { SectorsHero }       from '../components/SectorsHero'
import { FeaturedProjects }  from '../components/FeaturedProjects'
import { DevelopmentFields } from '../components/DevelopmentFields'
import { KeyLocations }      from '../components/KeyLocations'
import { CTASection }        from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'

export function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <FeaturedProjects />
      <DevelopmentFields />
      {/* Shared video background for KeyLocations + CTASection */}
      <VideoCtaBackground>
        <KeyLocations />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default SectorsPage
