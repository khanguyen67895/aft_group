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
      {/* Bottom fade to blend into detail sections */}
      <div className="absolute bottom-0 inset-x-0 h-150 bg-linear-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
