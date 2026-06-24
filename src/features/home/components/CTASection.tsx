import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion'

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-secondary">

      {/* Cityscape background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* City silhouette */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-15" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          <path d="M0 200V140L60 140V100L90 100V140L150 140V80L180 80V60L210 60V80L240 80V140L300 140V60L320 60V40L340 40V60L360 60V140L420 140V70L440 70V50L460 50V70L480 70V140L540 140V80L560 80V30L580 30V80L600 80V140L660 140V90L680 90V60L700 60V90L720 90V140L780 140V70L800 70V50L820 50V70L840 70V140L900 140V80L920 80V40L940 40V80L960 80V140L1020 140V100L1050 100V140L1080 140V80L1110 80V140L1140 140V160L1200 160V200Z" fill="#C6A15B"/>
        </svg>

        {/* Ambient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[100px]"/>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-active/10 blur-[80px]"/>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-active/10 blur-[80px]"/>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-7"
        variants={staggerContainer(0.15, 0.1)} initial="hidden" whileInView="show" viewport={viewport}
      >
        {/* AFT Logo large */}
        <motion.div className="relative" variants={scaleIn}>
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110"/>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="relative drop-shadow-[0_0_30px_rgba(198,161,91,0.5)]">
            <circle cx="50" cy="50" r="48" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.4"/>
            <circle cx="50" cy="50" r="38" stroke="#C6A15B" strokeWidth="0.5" strokeOpacity="0.2"/>
            <path d="M50 18L78 68H22L50 18Z" fill="url(#cta-logo-grad)"/>
            <defs>
              <linearGradient id="cta-logo-grad" x1="50" y1="18" x2="50" y2="68" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8EBC0"/>
                <stop offset="1" stopColor="#C09857"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={fadeUp} className="text-body-lg text-text-secondary max-w-125 leading-relaxed">
          Giải pháp Tài chính – Tài sản – Công nghệ cho doanh nghiệp và đối tác chiến lược.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUp}>
          <Button variant="gold" size="lg" icon={true}>Hợp tác ngay</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
