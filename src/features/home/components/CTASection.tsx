import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'

interface CTASectionProps {
  /** Ẩn nút "Hợp tác ngay" — dùng khi CTASection nằm ngay trên trang Liên hệ. */
  hideButton?: boolean
}

export function CTASection({ hideButton }: CTASectionProps = {}) {
  const navigate = useNavigate()

  return (
    <section className="relative h-140 items-end">

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center flex h-full justify-end pb-10 flex-col items-center gap-7"
        variants={staggerContainer(0.15, 0.1)} initial="hidden" whileInView="show" viewport={viewport}
      >
        {/* Tagline */}
        <motion.p variants={fadeUp} className="text-xl text-text-primary max-w-125 leading-relaxed">
          Giải pháp Tài chính – Tài sản – Công nghệ cho doanh nghiệp và đối tác chiến lược.
        </motion.p>

        {/* CTA Button */}
        {!hideButton && (
          <motion.div variants={fadeUp}>
            <Button variant="gold" size="lg" icon={true} onClick={() => navigate(ROUTES.CONTACT)}>Hợp tác ngay</Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
