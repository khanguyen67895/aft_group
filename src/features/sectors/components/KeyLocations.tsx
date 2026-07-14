import { motion } from 'framer-motion'
import { viewport, fadeUp } from '@/lib/motion'
import { EditableText, EditableImage } from '@/components/cms'
import icLocation from '@/assets/image/ic_location.png'
import icLocationMb from '@/assets/image/ic_location_mb.png'

export function KeyLocations() {
  return (
    <section className="relative z-10 overflow-hidden -mb-10 md:mb-40">
      <div className="container mx-auto px-4 md:px-8">

        {/* Map image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center justify-center"
        >

          <motion.div variants={fadeUp}>
            <EditableText
              id="sectors.locations.title"
              fallbackVi="CÁC ĐỊA BÀN TRỌNG ĐIỂM"
              as="h2"
              className="mt-4 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase leading-tight"
            />
          </motion.div>

          <EditableImage
            id="sectors.locations.img.mapMobile"
            fallbackSrc={icLocationMb}
            alt="Các địa bàn trọng điểm"
            className="md:hidden w-full h-auto object-contain mt-8"
          />
          <EditableImage
            id="sectors.locations.img.mapDesktop"
            fallbackSrc={icLocation}
            alt="Các địa bàn trọng điểm"
            className="hidden md:block w-full h-auto object-contain mt-8"
          />
        </motion.div>

      </div>

    </section>
  )
}
