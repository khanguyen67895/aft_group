import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, viewport } from '@/lib/motion'

import icMining   from '@/assets/image/ic_gold_mining.png'
import icMining2x from '@/assets/image/ic_gold_mining@2x.png'
import icMining3x from '@/assets/image/ic_gold_mining@3x.png'

import icCheckbox   from '@/assets/image/ic_checkbox.png'
import icCheckbox2x from '@/assets/image/ic_checkbox@2x.png'
import icCheckbox3x from '@/assets/image/ic_checkbox@3x.png'

const FEATURES = [
  'Khảo sát địa chất và đánh giá trữ lượng',
  'Công nghệ khai thác hiện đại – tối ưu hiệu quả',
  'Logistics & chuỗi cung ứng chuẩn quốc tế',
  'Kiểm định chất lượng - đạt chuẩn LBMA',
  'Truy xuất nguồn gốc bằng công nghệ số (Blockchain)',
]

export function GoldMiningDetail() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.img
            src={icMining}
            srcSet={`${icMining} 1x, ${icMining2x} 2x, ${icMining3x} 3x`}
            alt="Khai thác vàng"
            className="w-full h-120 rounded-2xl object-cover"
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
          />

          {/* Content */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.span variants={fadeUp} className="text-xl font-bold font-[Manrope] text-primary uppercase tracking-[0.2em]">
              Khai thác vàng
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-6 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase leading-tight">
              Tài nguyên - Công nghệ - Minh bạch
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-base md:text-xl text-text-primary leading-relaxed">
              AFT GROUP phát triển năng lực khai thác vàng theo chuẩn quốc tế với quy trình an
              toàn, công nghệ hiện đại và cam kết minh bạch nguồn gốc.
            </motion.p>

            <motion.ul variants={staggerContainer(0.07)} className="mt-6 space-y-4">
              {FEATURES.map((feat) => (
                <motion.li key={feat} variants={fadeUp} className="flex items-center gap-3">
                  <img
                    src={icCheckbox}
                    srcSet={`${icCheckbox} 1x, ${icCheckbox2x} 2x, ${icCheckbox3x} 3x`}
                    alt=""
                    aria-hidden
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="text-text-secondary text-base md:text-xl">{feat}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
