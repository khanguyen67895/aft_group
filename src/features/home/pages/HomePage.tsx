import { HeroSection }       from '../components/HeroSection'
import { VisionSection }     from '../components/VisionSection'
import { EcosystemSection }  from '../components/EcosystemSection'
import { FintechSection }    from '../components/FintechSection'
import { RealEstateSection } from '../components/RealEstateSection'
import { GoldSection }       from '../components/GoldSection'
import { FundSection }       from '../components/FundSection'
import { TeamSection }       from '../components/TeamSection'
import { CTASection }        from '../components/CTASection'
import videoCta from '@/assets/video/video_cta.mp4'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <EcosystemSection />
      <FintechSection />
      <RealEstateSection />
      <GoldSection />
      <FundSection />

      {/* Shared video background for TeamSection + CTASection */}
      <div className="relative overflow-hidden">
        {/* Video chỉ phủ vùng CTASection (bottom) */}
        <video
          src={videoCta}
          autoPlay muted loop playsInline
          disablePictureInPicture
          className="absolute bottom-0 left-0 w-full h-240 object-cover object-bottom"
        />
        {/* Gradient tối ở TeamSection, mờ dần xuống CTASection */}
        <div className="absolute inset-0 bg-linear-to-b from-bg from-20% via-bg/10 to-black/12 pointer-events-none" />
        <TeamSection />
        <CTASection />
      </div>
    </>
  )
}

export default HomePage
