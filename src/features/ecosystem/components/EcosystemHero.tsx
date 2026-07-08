import { EditableImage } from '@/components/cms'
import videoEcosystem from '@/assets/video/video_ecosystem.mp4'
import icHeroEcosystemMb from '@/assets/image/ic_hero_ecosystem_mb.png'

export function EcosystemHero() {
  return (
    <section className="relative w-full h-dvh md:h-screen overflow-hidden">
      {/* Mobile: static image instead of video */}
      <EditableImage
        id="ecosystem.hero.img.mobileBg"
        fallbackSrc={icHeroEcosystemMb}
        alt=""
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />
      {/* Desktop: video */}
      <video
        src={videoEcosystem}
        autoPlay muted loop playsInline
        disablePictureInPicture
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />
      {/* Bottom fade into EcosystemDetailSections background */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 md:h-120 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #0B1527 100%)' }}
      />
    </section>
  )
}
