import videoEcosystem from '@/assets/video/video_ecosystem.mp4'
import icHeroEcosystemMb   from '@/assets/image/ic_hero_ecosystem_mb.png'
import icHeroEcosystemMb2x from '@/assets/image/ic_hero_ecosystem_mb@2x.png'
import icHeroEcosystemMb3x from '@/assets/image/ic_hero_ecosystem_mb@3x.png'

export function EcosystemHero() {
  return (
    <section className="relative w-full h-dvh md:h-screen overflow-hidden">
      {/* Mobile: static image instead of video */}
      <img
        src={icHeroEcosystemMb}
        srcSet={`${icHeroEcosystemMb} 1x, ${icHeroEcosystemMb2x} 2x, ${icHeroEcosystemMb3x} 3x`}
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
