import { ContactHero }        from '../components/ContactHero'
import { CTASection }         from '@/features/home/components/CTASection'
import { VideoCtaBackground } from '@/components/common'

export function ContactPage() {
  return (
    <>
      <VideoCtaBackground tone="bg">
        <ContactHero />
        <CTASection hideButton />
      </VideoCtaBackground>
    </>
  )
}

export default ContactPage
