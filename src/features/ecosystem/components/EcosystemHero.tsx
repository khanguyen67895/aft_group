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
    </section>
  )
}
