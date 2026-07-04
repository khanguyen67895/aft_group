import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
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

const SOLUTIONS = [
  { icon: icSolution1, srcSet: `${icSolution1} 1x, ${icSolution1_2x} 2x, ${icSolution1_3x} 3x`, title: 'Giao dịch phái sinh',   desc: 'Giao dịch chuyên nghiệp trên các thị trường hàng hóa phái sinh quốc tế, minh bạch và tối ưu lợi nhuận.' },
  { icon: icSolution2, srcSet: `${icSolution2} 1x, ${icSolution2_2x} 2x, ${icSolution2_3x} 3x`, title: 'Copy trade vàng',       desc: 'Sao chép chiến lược giao dịch từ chuyên gia, tối ưu hiệu suất đầu tư theo thời gian thực.' },
  { icon: icSolution3, srcSet: `${icSolution3} 1x, ${icSolution3_2x} 2x, ${icSolution3_3x} 3x`, title: 'Phân tích dữ liệu',     desc: 'Ứng dụng công nghệ và dữ liệu lớn để phân tích xu hướng, hỗ trợ ra quyết định đầu tư.' },
  { icon: icSolution4, srcSet: `${icSolution4} 1x, ${icSolution4_2x} 2x, ${icSolution4_3x} 3x`, title: 'Mô hình P2P',           desc: 'Kết nối trực tiếp nhà đầu tư, vận hành minh bạch, tối ưu chi phí giao dịch.' },
  { icon: icSolution5, srcSet: `${icSolution5} 1x, ${icSolution5_2x} 2x, ${icSolution5_3x} 3x`, title: 'Tư vấn quản trị rủi ro', desc: 'Đội ngũ chuyên gia đồng hành kiểm soát rủi ro, bảo vệ nguồn vốn đầu tư.' },
  { icon: icSolution6, srcSet: `${icSolution6} 1x, ${icSolution6_2x} 2x, ${icSolution6_3x} 3x`, title: 'Đào tạo và đồng hành',   desc: 'Chương trình đào tạo bài bản, đồng hành cùng nhà đầu tư trên hành trình phát triển.' },
]

export function DerivativesSolutions() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Giải pháp hàng hóa phái sinh toàn diện
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {SOLUTIONS.map(({ icon, srcSet, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex flex-col items-center gap-4 p-6"
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(246, 247, 249, 0.10)',
                background: 'rgba(11, 31, 58, 0.30)',
                backdropFilter: 'blur(7px)',
              }}
            >
              <img src={icon} srcSet={srcSet} alt={title} className="h-20 w-27 object-contain" />
              <div>
                <h3 className="font-[Playfair_Display] text-center font-bold text-xl text-text-primary uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-base text-center text-text-secondary font-[Manrope] leading-relaxed">
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
