import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icItemIdea   from '@/assets/image/ic_item_idea.png'
import icItemIdea2x from '@/assets/image/ic_item_idea@2x.png'
import icItemIdea3x from '@/assets/image/ic_item_idea@3x.png'

const STEPS = [
  { title: 'Tiếp nhận hồ sơ',        desc: 'Tiếp nhận Pitch Deck và hồ sơ dự án. Sàng lọc theo các tiêu chí đầu tư ban đầu.' },
  { title: 'Thẩm định',              desc: 'Đánh giá toàn diện mô hình kinh doanh, đội ngũ sáng lập, thị trường, tài chính và tiềm năng.' },
  { title: 'Gặp gỡ & phân tích',     desc: 'Làm việc trực tiếp với Founder để xác minh thông tin, phân tích chiến lược và tiềm năng mở rộng.' },
  { title: 'Quyết định đầu tư',      desc: 'Hội đồng đầu tư xem xét kết quả thẩm định, đánh giá rủi ro và đưa ra quyết định đầu tư.' },
  { title: 'Đồng hành & thoái vốn',  desc: 'Hỗ trợ tăng trưởng và tối ưu giá trị đầu tư thông qua IPO, M&A hoặc chuyển nhượng.' },
]

export function FundProcess() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-left md:text-center mb-14"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Quy trình đầu tư
          </motion.h2>
        </motion.div>

        {/* Mobile/tablet: vertical timeline */}
        <motion.div className="md:hidden relative" variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}>
          <div className="absolute left-6.25 top-6 bottom-6 w-px bg-linear-to-b from-transparent via-primary to-transparent" />
          <div className="flex flex-col gap-8">
            {STEPS.map(({ title, desc }, i) => (
              <motion.div key={title} variants={staggerItem} className="relative flex gap-4">
                <div className="relative z-10 size-12.5 shrink-0 flex items-center justify-center">
                  <img
                    src={icItemIdea}
                    srcSet={`${icItemIdea} 1x, ${icItemIdea2x} 2x, ${icItemIdea3x} 3x`}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 size-full object-contain"
                  />
                  <span className="relative text-[30px] font-extrabold font-[Manrope] text-text-primary">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1">
                  <div className="text-xl font-bold text-text-primary font-[Playfair_Display] uppercase leading-snug">{title}</div>
                  <div className="mt-1 text-base text-text-secondary font-[Manrope] leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desktop: grid with numbered badges */}
        <motion.div
          className="hidden md:grid relative md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10"
          variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {/* Connecting line — desktop only, fades out at both edges */}
          <div className="hidden lg:block absolute inset-x-0 top-6 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(198,161,91,0.6) 8%, rgba(198,161,91,0.6) 92%, transparent 100%)',
            }} />

          {STEPS.map(({ title, desc }, i) => (
            <motion.div key={title} variants={staggerItem} className="relative flex flex-col items-center text-center gap-3 px-1">
              <div className="relative z-10 size-12.5 shrink-0 flex items-center justify-center">
                <img
                  src={icItemIdea}
                  srcSet={`${icItemIdea} 1x, ${icItemIdea2x} 2x, ${icItemIdea3x} 3x`}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 size-full object-contain"
                />
                <span className="relative text-[30px] font-extrabold font-[Manrope] text-text-primary">
                  {i + 1}
                </span>
              </div>
              <div>
                <div className="text-xl font-bold text-text-primary font-[Playfair_Display] uppercase leading-snug">{title}</div>
                <div className="mt-1 text-base text-text-secondary font-[Manrope] leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
