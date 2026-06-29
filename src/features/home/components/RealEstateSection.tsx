import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icTitle3    from '@/assets/image/ic_title3.png'
import icTitle3x2  from '@/assets/image/ic_title3@2x.png'
import icTitle3x3  from '@/assets/image/ic_title3@3x.png'
import icBgLand      from '@/assets/image/ic_bg_land.png'
import icBgLand2x    from '@/assets/image/ic_bg_land@2x.png'
import icBgLand3x    from '@/assets/image/ic_bg_land@3x.png'
import icProjFeat    from '@/assets/image/ic_project_feature.png'
import icProjFeat2x  from '@/assets/image/ic_project_feature@2x.png'
import icProjFeat3x  from '@/assets/image/ic_project_feature@3x.png'
import icField1      from '@/assets/image/ic_item_field1.png'
import icField1x2    from '@/assets/image/ic_item_field1@2x.png'
import icField1x3    from '@/assets/image/ic_item_field1@3x.png'
import icItemProj    from '@/assets/image/ic_item_project.png'
import icItemProj2x  from '@/assets/image/ic_item_project@2x.png'
import icItemProj3x  from '@/assets/image/ic_item_project@3x.png'

const STATS = [
  { value: '7',  label: 'Địa bàn trọng điểm', src: icField1,   src2x: icField1x2,   src3x: icField1x3   },
  { value: '3+', label: 'Loại hình dự án',    src: icItemProj, src2x: icItemProj2x, src3x: icItemProj3x },
]

export function RealEstateSection() {
  return (
    <section className="relative bg-bg overflow-hidden">
      {/* Full-section background — anchored left so buildings aren't cropped */}
      <img
        src={icBgLand}
        srcSet={`${icBgLand} 1x, ${icBgLand2x} 2x, ${icBgLand3x} 3x`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* Semi-transparent navy overlay on right — bg still visible through it */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] pointer-events-none" style={{
        background: 'linear-gradient(to right, transparent, rgba(11,31,58,0.78) 55%, rgba(11,31,58,0.88) 100%)',
      }} />

      <div className="relative grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-140">

        {/* Left: ic_project_feature centered — hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center lg:mt-60 lg:mr-60">
          <img
            src={icProjFeat}
            srcSet={`${icProjFeat} 1x, ${icProjFeat2x} 2x, ${icProjFeat3x} 3x`}
            alt=""
            className="w-4/5 max-w-sm h-auto object-contain"
          />
        </div>

        {/* Right: content */}
        <motion.div
          className="flex flex-col justify-center py-12 lg:py-16 px-4 md:px-8 lg:px-0 relative z-10"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <img src={icTitle3} srcSet={`${icTitle3} 1x, ${icTitle3x2} 2x, ${icTitle3x3} 3x`}
                  alt="Lĩnh vực" className="h-auto w-auto" />
          </motion.div>

          <motion.h2 variants={fadeUp}
            className="mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight"
          >
            <span className="block text-3xl md:text-[40px] uppercase">Bất động sản và dự án</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-xl text-text-secondary leading-relaxed max-w-lg">
            Môi giới, phát triển dự án và bất động sản du lịch – nghỉ dưỡng tại các địa bàn trọng điểm.
            Tài sản thực làm nền tảng vay vốn và tạo dòng tiền ổn định cho hệ sinh thái.
          </motion.p>

          <motion.div variants={staggerContainer(0.1)} className="flex flex-col sm:flex-row gap-3 mt-8">
            {STATS.map(({ value, label, src, src2x, src3x }) => (
              <motion.div key={label} variants={staggerItem}
                className="flex items-center gap-3 px-4 py-3.5 sm:w-72"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(246,247,249,0.10)',
                  background: 'rgba(11,31,58,0.35)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <img src={src} srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`}
                  alt={label} className="size-11 object-contain shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-text-primary font-[Manrope]">{value}</div>
                  <div className="text-base text-text-secondary font-[Manrope] leading-snug mt-0.5">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeRight} className="mt-10">
            <Button variant="gold" size="md" icon={true}>Khám phá dự án</Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
