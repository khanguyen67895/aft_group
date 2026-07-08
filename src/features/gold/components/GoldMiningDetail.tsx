import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, viewport } from '@/lib/motion'
import { EditableText, EditableImage } from '@/components/cms'

import icMining   from '@/assets/image/ic_gold_mining.png'

import icCheckbox   from '@/assets/image/ic_checkbox.png'

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
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
          >
            <EditableImage
              id="gold.miningdetail.image"
              fallbackSrc={icMining}
              alt="Khai thác vàng"
              className="w-full h-64 md:h-120 rounded-2xl object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.span variants={fadeUp} className="text-xl font-bold font-[Manrope] text-primary uppercase tracking-[0.2em]">
              <EditableText id="gold.miningdetail.kicker" fallbackVi="Khai thác vàng" />
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-6 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase leading-tight">
              <EditableText id="gold.miningdetail.title" fallbackVi="Tài nguyên - Công nghệ - Minh bạch" />
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-base md:text-xl text-text-primary leading-relaxed">
              <EditableText
                id="gold.miningdetail.description"
                fallbackVi="AFT GROUP phát triển năng lực khai thác vàng theo chuẩn quốc tế với quy trình an toàn, công nghệ hiện đại và cam kết minh bạch nguồn gốc."
              />
            </motion.p>

            <motion.ul variants={staggerContainer(0.07)} className="mt-6 space-y-4">
              {FEATURES.map((feat, i) => (
                <motion.li key={feat} variants={fadeUp} className="flex items-center gap-3">
                  <EditableImage
                    id={`gold.miningdetail.features.${i}.icon`}
                    fallbackSrc={icCheckbox}
                    alt=""
                    className="w-5 h-5 shrink-0"
                  />
                  <EditableText id={`gold.miningdetail.features.${i}.text`} fallbackVi={feat} as="span" className="text-text-secondary text-base md:text-xl" />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
