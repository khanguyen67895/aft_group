import { EcosystemHero }           from '../components/EcosystemHero'
import { EcosystemDetailSections } from '../components/EcosystemDetailSections'
import { CTASection }               from '@/features/home/components/CTASection'
import videoCta from '@/assets/video/video_cta.mp4'

export function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemDetailSections />

      <div className="relative overflow-hidden">
        <video
          src={videoCta}
          autoPlay muted loop playsInline
          disablePictureInPicture
          className="absolute bottom-0 left-0 w-full h-240 object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg via-transparent to-bg pointer-events-none" />
        <div className="h-40" />
        <CTASection />
      </div>
    </>
  )
}

export default EcosystemPage
