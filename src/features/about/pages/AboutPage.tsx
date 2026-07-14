import { AboutHero }          from '../components/AboutHero'
import { AboutValues }        from '../components/AboutValues'
import { AboutPrinciples }    from '../components/AboutPrinciples'
import { AboutRoadmap }       from '../components/AboutRoadmap'
import { CTASection }         from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'
import { TeamSection } from '@/features/home/components/TeamSection'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <TeamSection tone="blue" />
      <AboutPrinciples />

      {/* Shared video background for AboutRoadmap + CTASection */}
      <VideoCtaBackground tone="bg">
        <AboutRoadmap />
        <CTASection />
      </VideoCtaBackground>
    </>
  )
}

export default AboutPage
