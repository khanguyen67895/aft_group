import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icBgFocus   from '@/assets/image/ic_bg_fund_focus.png'
import icBgFocus2x from '@/assets/image/ic_bg_fund_focus@2x.png'
import icBgFocus3x from '@/assets/image/ic_bg_fund_focus@3x.png'

import icSolution1    from '@/assets/image/ic_solution1.png'
import icSolution1_2x from '@/assets/image/ic_solution1@2x.png'
import icSolution1_3x from '@/assets/image/ic_solution1@3x.png'
import icSolution2    from '@/assets/image/ic_solution2.png'
import icSolution2_2x from '@/assets/image/ic_solution2@2x.png'
import icSolution2_3x from '@/assets/image/ic_solution2@3x.png'
import icSolution3    from '@/assets/image/ic_solution3.png'
import icSolution3_2x from '@/assets/image/ic_solution3@2x.png'
import icSolution3_3x from '@/assets/image/ic_solution3@3x.png'
import icSolution4    from '@/assets/image/ic_solution4.png'
import icSolution4_2x from '@/assets/image/ic_solution4@2x.png'
import icSolution4_3x from '@/assets/image/ic_solution4@3x.png'
import icSolution5    from '@/assets/image/ic_solution5.png'
import icSolution5_2x from '@/assets/image/ic_solution5@2x.png'
import icSolution5_3x from '@/assets/image/ic_solution5@3x.png'
import icSolution6    from '@/assets/image/ic_solution6.png'
import icSolution6_2x from '@/assets/image/ic_solution6@2x.png'
import icSolution6_3x from '@/assets/image/ic_solution6@3x.png'

const AREAS = [
  { icon: icSolution1, srcSet: `${icSolution1} 1x, ${icSolution1_2x} 2x, ${icSolution1_3x} 3x`, label: 'Giao dịch phái sinh' },
  { icon: icSolution2, srcSet: `${icSolution2} 1x, ${icSolution2_2x} 2x, ${icSolution2_3x} 3x`, label: 'Copy trade vàng' },
  { icon: icSolution3, srcSet: `${icSolution3} 1x, ${icSolution3_2x} 2x, ${icSolution3_3x} 3x`, label: 'Phân tích dữ liệu' },
  { icon: icSolution4, srcSet: `${icSolution4} 1x, ${icSolution4_2x} 2x, ${icSolution4_3x} 3x`, label: 'Mô hình P2P' },
  { icon: icSolution5, srcSet: `${icSolution5} 1x, ${icSolution5_2x} 2x, ${icSolution5_3x} 3x`, label: 'Tư vấn rủi ro' },
  { icon: icSolution6, srcSet: `${icSolution6} 1x, ${icSolution6_2x} 2x, ${icSolution6_3x} 3x`, label: 'Đào tạo và đồng hành' },
]

export function FundFocusAreas() {
  return (
    <section className="pb-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative overflow-hidden p-6 md:p-10"
          style={{ borderRadius: '24px', border: '1px solid rgba(246,247,249,0.10)' }}
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <img
            src={icBgFocus}
            srcSet={`${icBgFocus} 1x, ${icBgFocus2x} 2x, ${icBgFocus3x} 3x`}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(180deg, rgba(11,31,58,0.55) 100%, rgba(11,31,58,0.85) 100%)',
          }} />

          <div className="relative z-10">
            <motion.h2 variants={fadeUp} className="text-left font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
              Lĩnh vực ưu tiên
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-left text-base md:text-xl text-text-secondary leading-relaxed max-w-180">
              AFT Group tập trung vào các lĩnh vực tài chính, công nghệ và dữ liệu có khả năng tăng
              trưởng cao. Chúng tôi xây dựng hệ sinh thái đầu tư bền vững, kết nối cơ hội, quản trị
              rủi ro và tạo ra giá trị dài hạn cho đối tác và nhà đầu tư.
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer(0.06)}
            >
              {AREAS.map(({ icon, srcSet, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-4"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(246,247,249,0.15)',
                    background: 'rgba(11,31,58,0.55)',
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <img src={icon} srcSet={srcSet} alt="" className="w-20.25 h-15 object-contain shrink-0" />
                  <span className="text-sm md:text-xl font-bold font-[Playfair Display] text-text-primary uppercase tracking-wide">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
