import { ContactHero }        from '../components/ContactHero'
import { CTASection }         from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'

export function ContactPage() {
  return (
    <>

      {/* Shared video background for CTASection */}
      <VideoCtaBackground>
        <ContactHero />
        <CTASection hideButton />
      </VideoCtaBackground>
    </>
  )
}

export default ContactPage
