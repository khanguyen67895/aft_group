import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icSolution1   from '@/assets/image/ic_solution_gold1.png'
import icSolution1x2 from '@/assets/image/ic_solution_gold1@2x.png'
import icSolution1x3 from '@/assets/image/ic_solution_gold1@3x.png'
import icSolution2   from '@/assets/image/ic_solution_gold2.png'
import icSolution2x2 from '@/assets/image/ic_solution_gold2@2x.png'
import icSolution2x3 from '@/assets/image/ic_solution_gold2@3x.png'
import icSolution3   from '@/assets/image/ic_solution_gold3.png'
import icSolution3x2 from '@/assets/image/ic_solution_gold2@2x.png'
import icSolution3x3 from '@/assets/image/ic_solution_gold2@3x.png'

const SOLUTIONS = [
  {
    img: icSolution1, img2x: icSolution1x2, img3x: icSolution1x3,
    title: 'Khai thác và kết nối nguồn cung',
    desc: 'Kết nối nguồn cung chất lượng, kiểm định minh bạch và tối ưu chuỗi cung ứng từ khai thác đến phân phối.',
  },
  {
    img: icSolution2, img2x: icSolution2x2, img3x: icSolution2x3,
    title: 'Đầu tư và copy trade vàng',
    desc: 'Hỗ trợ đầu tư vàng với chiến lược linh hoạt, quản trị rủi ro và tối ưu lợi nhuận theo thời thị trường.',
  },
  {
    img: icSolution3, img2x: icSolution3x2, img3x: icSolution3x3,
    title: 'Phân tích dữ liệu và chiến lược',
    desc: 'Phân tích dữ liệu toàn cầu, nhận diện xu hướng và hỗ trợ quyết định đầu tư thông minh.',
  },
]

export function GoldSolutions() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Giải pháp nổi bật
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {SOLUTIONS.map(({ img, img2x, img3x, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="overflow-hidden flex flex-col"
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(246, 247, 249, 0.08)',
                background: 'rgba(11, 31, 58, 0.60)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="overflow-hidden" style={{ height: '250px' }}>
                <img
                  src={img}
                  srcSet={`${img} 1x, ${img2x} 2x, ${img3x} 3x`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="font-[Playfair_Display] font-bold text-2xl text-primary uppercase leading-snug"
                  style={{
                        background: 'var(--Main-Colors-Primary-Radius, radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%))',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'text-shimmer 2.8s ease-in-out infinite',
                  }}>
                  {title}
                </h3>
                <p className="mt-2 text-base text-text-secondary font-[Manrope] leading-relaxed">
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
