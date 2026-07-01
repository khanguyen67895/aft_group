import { SectorsHero }       from '../components/SectorsHero'
import { FeaturedProjects }  from '../components/FeaturedProjects'
import { DevelopmentFields } from '../components/DevelopmentFields'
import { KeyLocations }      from '../components/KeyLocations'
import { CTASection }        from '@/features/home/components/CTASection'
import videoCta from '@/assets/video/video_cta.mp4'

export function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <FeaturedProjects />
      <DevelopmentFields />
      {/* Shared video background for KeyLocations + CTASection */}
      <div className="relative overflow-hidden">
        <video
          src={videoCta}
          autoPlay muted loop playsInline
          disablePictureInPicture
          className="absolute bottom-0 left-0 w-full h-300 object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-b from-secondary from-40% via-bg/10 to-bg pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-secondary via-transparent to-secondary pointer-events-none" />
        <KeyLocations />
        <CTASection />
      </div>
    </>
  )
}

export default SectorsPage
