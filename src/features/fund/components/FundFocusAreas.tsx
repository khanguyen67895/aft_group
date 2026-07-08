import { motion } from 'framer-motion'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icBgFocus from '@/assets/image/ic_bg_fund_focus.png'

import icSolution1 from '@/assets/image/ic_solution1.png'
import icSolution2 from '@/assets/image/ic_solution2.png'
import icSolution3 from '@/assets/image/ic_solution3.png'
import icSolution4 from '@/assets/image/ic_solution4.png'
import icSolution5 from '@/assets/image/ic_solution5.png'
import icSolution6 from '@/assets/image/ic_solution6.png'

const AREAS = [
  { icon: icSolution1, label: 'Giao dịch phái sinh' },
  { icon: icSolution2, label: 'Copy trade vàng' },
  { icon: icSolution3, label: 'Phân tích dữ liệu' },
  { icon: icSolution4, label: 'Mô hình P2P' },
  { icon: icSolution5, label: 'Tư vấn rủi ro' },
  { icon: icSolution6, label: 'Đào tạo và đồng hành' },
]

export function FundFocusAreas() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative overflow-hidden px-6 pt-6 pb-100 md:p-10"
          style={{ borderRadius: '24px', border: '1px solid rgba(246,247,249,0.10)', backgroundColor: 'var(--color-secondary)' }}
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {/* Mobile: image anchored to the bottom over the solid blue background */}
          <EditableImage
            id="fund.focusareas.img.bgMobile"
            fallbackSrc={icBgFocus}
            alt=""
            className="md:hidden absolute inset-x-0 bottom-0 w-full h-110 object-cover object-bottom pointer-events-none"
          />
          {/* Mobile: solid bg-secondary overlay fading out — covers the image's top edge so it blends into the bg above instead of cutting off hard */}
          <div
            className="md:hidden absolute inset-x-0 bottom-0 w-full h-110 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, transparent 20%)' }}
          />

          {/* Desktop: full-bleed cover image */}
          <EditableImage
            id="fund.focusareas.img.bg"
            fallbackSrc={icBgFocus}
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="hidden md:block absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(180deg, rgba(11,31,58,0.55) 100%, rgba(11,31,58,0.85) 100%)',
          }} />

          <div className="relative z-10">
            <motion.h2 variants={fadeUp} className="text-left font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
              <EditableText id="fund.focusareas.title" fallbackVi="Lĩnh vực ưu tiên" />
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-left text-base md:text-xl text-text-secondary leading-relaxed max-w-180">
              <EditableText
                id="fund.focusareas.subtitle"
                fallbackVi="AFT Group tập trung vào các lĩnh vực tài chính, công nghệ và dữ liệu có khả năng tăng trưởng cao. Chúng tôi xây dựng hệ sinh thái đầu tư bền vững, kết nối cơ hội, quản trị rủi ro và tạo ra giá trị dài hạn cho đối tác và nhà đầu tư."
              />
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer(0.06)}
            >
              {AREAS.map(({ icon, label }, i) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex md:flex-row flex-col items-start md:items-center gap-3 p-4"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(246,247,249,0.15)',
                    background: 'rgba(11,31,58,0.55)',
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <EditableImage
                    id={`fund.focusareas.item.${i}.icon`}
                    fallbackSrc={icon}
                    alt=""
                    className="w-20.25 h-15 object-contain shrink-0"
                  />
                  <EditableText
                    id={`fund.focusareas.item.${i}.title`}
                    fallbackVi={label}
                    as="span"
                    className="text-sm md:text-xl font-bold font-[Playfair Display] text-text-primary uppercase tracking-wide"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
