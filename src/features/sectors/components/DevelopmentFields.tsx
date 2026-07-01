import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icBgLand         from '@/assets/image/ic_bg_land.png'
import icBgLand2x       from '@/assets/image/ic_bg_land@2x.png'
import icBgLand3x       from '@/assets/image/ic_bg_land@3x.png'
import icFieldDevelop   from '@/assets/image/ic_feild_develop.png'
import icFieldDevelop2x from '@/assets/image/ic_feild_develop@2x.png'
import icFieldDevelop3x from '@/assets/image/ic_feild_develop@3x.png'
import icItemEco1       from '@/assets/image/ic_item_eco1.png'

const nameStyle: React.CSSProperties = {
  background: 'var(--Main-Colors-Primary-Radius, radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, rgba(0,122,255,0.15) 100%))',
  backgroundSize: '200% 100%',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'text-shimmer 2.8s ease-in-out infinite',
}

const SUB_FIELDS = [
  {
    icon: icItemEco1,
    name: 'CĂN HỘ CAO TẦNG',
    description: 'Không gian sống hiện đại, tiện nghi và bền vững',
  },
  {
    icon: icItemEco1,
    name: 'KHU ĐÔ THỊ',
    description: 'Quy hoạch đồng bộ, hạ tầng hiện đại, cộng đồng văn minh.',
  },
  {
    icon: icItemEco1,
    name: 'BẤT ĐỘNG SẢN NGHỈ DƯỠNG',
    description: 'Trải nghiệm nghỉ dưỡng đẳng cấp, khai thác sinh lời vượt trội',
  },
]

export function DevelopmentFields() {
  return (
    <section className="py-16 bg-secondary">
      {/* Card: 1280×566, radius 16 */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: '1280px',
          height: '566px',
          borderRadius: '16px',
        }}
      >
        {/* Building background — anchored right */}
        <img
          src={icBgLand}
          srcSet={`${icBgLand} 1x, ${icBgLand2x} 2x, ${icBgLand3x} 3x`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
        />

        {/* ic_feild_develop overlay — left panel, natural width */}
        <img
          src={icFieldDevelop}
          srcSet={`${icFieldDevelop} 1x, ${icFieldDevelop2x} 2x, ${icFieldDevelop3x} 3x`}
          alt=""
          className="absolute inset-y-0 left-0 h-full w-auto pointer-events-none"
        />

        {/* Blue overlay on left */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.70) 70%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-14">
          <motion.div
            className="max-w-160"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase leading-tight"
            >
              Lĩnh vực phát triển
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-xl text-text-secondary leading-relaxed"
            >
              Môi giới, phát triển dự án và bất động sản du lịch – nghỉ dưỡng tại
              các địa bàn trọng điểm. Tài sản thực làm nền tảng vay vốn và tạo
              dòng tiền ổn định cho hệ sinh thái.
            </motion.p>

            {/* Sub-field items */}
            <motion.div
              variants={staggerContainer(0.1)}
              className="mt-8 flex flex-col"
            >
              {SUB_FIELDS.map((field) => (
                <motion.div
                  key={field.name}
                  variants={staggerItem}
                  className="flex items-center gap-3 self-stretch mb-3 last:mb-0"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(246,247,249,0.20)',
                    background: 'linear-gradient(90deg, rgba(11,31,58,0) 0%, rgba(11,31,58,0) 120%)',
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <img src={field.icon} alt={field.name} className="size-15 object-contain shrink-0" />

                  <div>
                    <div
                      className="text-xl font-bold font-[Playfair_Display] tracking-widest uppercase"
                      style={nameStyle}
                    >
                      {field.name}
                    </div>
                    <div className="mt-1 text-base text-text-secondary font-[Manrope] leading-relaxed">
                      {field.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
