import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icVision   from '@/assets/image/ic_vision_about1.png'
import icVision2x from '@/assets/image/ic_vision_about1@2x.png'
import icVision3x from '@/assets/image/ic_vision_about1@3x.png'
import icMission   from '@/assets/image/ic_vision_about2.png'
import icMission2x from '@/assets/image/ic_vision_about2@2x.png'
import icMission3x from '@/assets/image/ic_vision_about2@3x.png'
import icStrategy   from '@/assets/image/ic_vision_about3.png'
import icStrategy2x from '@/assets/image/ic_vision_about3@2x.png'
import icStrategy3x from '@/assets/image/ic_vision_about3@3x.png'

const VALUES = [
  { img: icVision,   img2x: icVision2x,   img3x: icVision3x,   title: 'Tầm nhìn',            desc: 'Kiến tạo hệ sinh thái tài chính tích hợp.' },
  { img: icMission,  img2x: icMission2x,  img3x: icMission3x,  title: 'Sứ mệnh',              desc: 'Trở thành tập đoàn tài chính số hàng đầu.' },
  { img: icStrategy, img2x: icStrategy2x, img3x: icStrategy3x, title: 'Chiến lược lợi ích',   desc: 'Kết nối vốn, công nghệ và con người.' },
]

export function AboutValues() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Tầm nhìn - Sứ mệnh - Giá trị cốt lõi
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base md:text-xl text-text-secondary">
            Khám phá tầm nhìn, sứ mệnh và chiến lược của chúng tôi
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {VALUES.map(({ img, img2x, img3x, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex flex-col overflow-hidden"
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(246, 247, 249, 0.12)',
                background: 'rgba(11, 31, 58, 0.30)',
              }}
            >
              <div className="overflow-hidden" style={{ height: '360px' }}>
                <img
                  src={img}
                  srcSet={`${img} 1x, ${img2x} 2x, ${img3x} 3x`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div
                  className="w-18 h-0.5"
                  style={{ background: 'linear-gradient(270deg, rgba(203,150,76,0) 3%, #DBAB59 96%)' }}
                />
                <h3 className="mt-3 font-[Playfair_Display] font-bold text-[32px] text-text-primary uppercase">
                  {title}
                </h3>
                <p className="mt-4 text-base text-text-secondary font-[Manrope] leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
