import { motion } from 'framer-motion'
import { viewport, fadeUp } from '@/lib/motion'
import icLocation   from '@/assets/image/ic_location.png'
import icLocation2x from '@/assets/image/ic_location@2x.png'
import icLocation3x from '@/assets/image/ic_location@3x.png'
import icLocationMb   from '@/assets/image/ic_location_mb.png'
import icLocationMb2x from '@/assets/image/ic_location_mb@2x.png'
import icLocationMb3x from '@/assets/image/ic_location_mb@3x.png'

export function KeyLocations() {
  return (
    <section className="relative z-10 overflow-hidden mb-16 md:mb-40">
      <div className="container mx-auto px-4 md:px-8">

        {/* Map image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center justify-center"
        >

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase leading-tight"
          >
            CÁC ĐỊA BÀN TRỌNG ĐIỂM
          </motion.h2>

          <img
            src={icLocationMb}
            srcSet={`${icLocationMb} 1x, ${icLocationMb2x} 2x, ${icLocationMb3x} 3x`}
            alt="Các địa bàn trọng điểm"
            className="md:hidden w-full h-auto object-contain mt-8"
          />
          <img
            src={icLocation}
            srcSet={`${icLocation} 1x, ${icLocation2x} 2x, ${icLocation3x} 3x`}
            alt="Các địa bàn trọng điểm"
            className="hidden md:block w-full h-auto object-contain mt-8"
          />
        </motion.div>

      </div>

    </section>
  )
}
