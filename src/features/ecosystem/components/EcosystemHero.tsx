import videoEcosystem from '@/assets/video/video_ecosystem.mp4'

export function EcosystemHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src={videoEcosystem}
        autoPlay muted loop playsInline
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Bottom fade into EcosystemDetailSections background */}
      <div
        className="absolute bottom-0 left-0 w-full h-120 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #0B1527 100%)' }}
      />
    </section>
  )
}
