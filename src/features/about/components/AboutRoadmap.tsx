import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'

import icPhase1   from '@/assets/image/ic_about_phase1.png'
import icPhase1x2 from '@/assets/image/ic_about_phase1@2x.png'
import icPhase1x3 from '@/assets/image/ic_about_phase1@3x.png'

import icCheckbox   from '@/assets/image/ic_checkbox.png'
import icCheckbox2x from '@/assets/image/ic_checkbox@2x.png'
import icCheckbox3x from '@/assets/image/ic_checkbox@3x.png'

const PHASES = [
  {
    range: '2026 - 2028',
    label: 'Sinh đất vàng',
    img: icPhase1, img2x: icPhase1x2, img3x: icPhase1x3,
    heading: 'Đặt nền và tạo dòng tiền',
    desc: 'Ba năm đầu, AFT tập trung xây nền móng, thương hiệu và đội ngũ. Lấy thị trường hàng hóa phái sinh làm mũi nhọn, song song phát triển BĐS - môi giới - đào tạo.',
    items: [
      { title: 'Lõi fintech', desc: 'Thị trường hàng hóa phái sinh, copy trade vàng & truyền thông data quốc tế.' },
      { title: 'Tài sản thực', desc: 'Hợp tác tài sản để vay vốn, phát triển BĐS trọng điểm, đầu tư thiết bị dò vàng.' },
      { title: 'Nền tảng', desc: 'Hoàn thiện website & nhận diện, lập trung tâm đào tạo, cơ chế đối tác chiến lược.' },
    ],
  },
  {
    range: '2029 - 2032',
    label: 'Nền tảng hóa',
    img: icPhase1, img2x: icPhase1x2, img3x: icPhase1x3,
    heading: 'Mở rộng hệ sinh thái',
    desc: 'Giai đoạn hai, AFT mở rộng quy mô vận hành, chuẩn hóa quy trình và số hóa toàn bộ hệ sinh thái tài chính - tài sản - công nghệ.',
    items: [
      { title: 'Số hóa', desc: 'Ứng dụng AI, blockchain vào vận hành và quản trị rủi ro.' },
      { title: 'Mở rộng thị trường', desc: 'Phát triển mạng lưới đối tác và nhà đầu tư tại Đông Nam Á.' },
      { title: 'Chuẩn hóa', desc: 'Hoàn thiện khung quản trị, tuân thủ và báo cáo minh bạch.' },
    ],
  },
  {
    range: '2033 - 2035',
    label: 'Dẫn đầu di sản',
    img: icPhase1, img2x: icPhase1x2, img3x: icPhase1x3,
    heading: 'Kiến tạo di sản bền vững',
    desc: 'Giai đoạn cuối, AFT khẳng định vị thế tập đoàn tài chính số hàng đầu khu vực, tạo dựng di sản lâu dài cho đối tác và cộng đồng nhà đầu tư.',
    items: [
      { title: 'Vị thế dẫn đầu', desc: 'Trở thành hệ sinh thái tài chính - tài sản - công nghệ hàng đầu khu vực.' },
      { title: 'Giá trị bền vững', desc: 'Tối ưu hiệu suất đầu tư và tăng trưởng dài hạn cho cổ đông.' },
      { title: 'Di sản', desc: 'Xây dựng thế hệ lãnh đạo kế thừa và văn hóa doanh nghiệp bền vững.' },
    ],
  },
]

export function AboutRoadmap() {
  const [active, setActive] = useState(0)
  const phase = PHASES[active]

  return (
    <section className="relative z-10 overflow-hidden pb-16 md:mb-32 bg-transparent">
      {/* Top fade — blends into the bg-secondary section above */}
      <div
        className="absolute top-0 inset-x-0 h-52 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, transparent 100%)' }}
      />

      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-10"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Ba giai đoạn, một di sản
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-row rounded-tl-xl rounded-tr-xl overflow-hidden mb-0" style={{ border: '1px solid rgba(246,247,249,0.10)' }}>
          {PHASES.map((p, i) => (
            <button
              key={p.range}
              onClick={() => setActive(i)}
              className="flex-1 px-2 md:px-6 py-4 text-left transition-colors"
              style={{
                background: active === i ? 'rgba(21,79,133,0.55)' : 'transparent',
                borderLeft: i > 0 ? '1px solid rgba(246,247,249,0.10)' : 'none',
              }}
            >
              <div className="text-sm text-text-secondary font-[Manrope]">{p.range}</div>
              <div className={`text-xl mt-3 font-bold font-[Playfair_Display] uppercase text-primary`}>
                {p.label}
              </div>
            </button>
          ))}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden p-6 md:p-10 min-h-140 md:min-h-0"
            style={{
              borderRadius: '0 0 16px 16px',
              border: '1px solid rgba(246,247,249,0.10)',
              borderTop: 'none',
            }}
          >
            <img
              src={phase.img}
              srcSet={`${phase.img} 1x, ${phase.img2x} 2x, ${phase.img3x} 3x`}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.65) 50%, rgba(11,31,58,0.35) 100%)' }}
            />
            {/* Bottom fade — blends into the bg-bg section below */}
            <div
              className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)' }}
            />

            <div className="relative z-10 max-w-160">
              <h3 className="text-primary font-[Playfair_Display] font-bold text-xl md:text-2xl uppercase">
                {phase.heading}
              </h3>
              <p className="mt-3 text-base text-text-secondary font-[Manrope] leading-relaxed">
                {phase.desc}
              </p>
              <ul className="mt-5 space-y-3">
                {phase.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <img
                      src={icCheckbox}
                      srcSet={`${icCheckbox} 1x, ${icCheckbox2x} 2x, ${icCheckbox3x} 3x`}
                      alt=""
                      aria-hidden
                      className="w-7 h-7 shrink-0 mt-0.5"
                    />
                    <span className="text-sm md:text-base text-text-secondary font-[Manrope]">
                      <span className="font-bold text-text-primary">{item.title}</span> - {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
