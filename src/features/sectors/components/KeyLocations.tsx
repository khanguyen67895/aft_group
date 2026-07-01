import { motion } from 'framer-motion'
import { viewport } from '@/lib/motion'
import icLocation   from '@/assets/image/ic_location.png'
import icLocation2x from '@/assets/image/ic_location@2x.png'
import icLocation3x from '@/assets/image/ic_location@3x.png'

export function KeyLocations() {
  return (
    <section className="relative z-10 overflow-hidden mb-40">
      <div className="container mx-auto px-4 md:px-8">

        {/* Map image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center"
        >
          <img
            src={icLocation}
            srcSet={`${icLocation} 1x, ${icLocation2x} 2x, ${icLocation3x} 3x`}
            alt="Các địa bàn trọng điểm"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>

    </section>
  )
}
