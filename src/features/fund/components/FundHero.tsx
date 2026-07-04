import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icTitle4   from '@/assets/image/ic_title4.png'
import icTitle4x2 from '@/assets/image/ic_title4@2x.png'
import icTitle4x3 from '@/assets/image/ic_title4@3x.png'

import icFundHero   from '@/assets/image/ic_fund_hero.png'
import icFundHero2x from '@/assets/image/ic_fund_hero@2x.png'
import icFundHero3x from '@/assets/image/ic_fund_hero@3x.png'

import icHero1   from '@/assets/image/ic_item_hero1.png'
import icHero1x2 from '@/assets/image/ic_item_hero1@2x.png'
import icHero1x3 from '@/assets/image/ic_item_hero1@3x.png'
import icHero2   from '@/assets/image/ic_item_hero2.png'
import icHero2x2 from '@/assets/image/ic_item_hero2@2x.png'
import icHero2x3 from '@/assets/image/ic_item_hero2@3x.png'
import icHero3   from '@/assets/image/ic_item_hero3.png'
import icHero3x3 from '@/assets/image/ic_item_hero3@3x.png'

const FEATURES = [
  {
    icon: <img src={icHero1} srcSet={`${icHero1} 1x, ${icHero1x2} 2x, ${icHero1x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Kỷ luật đầu tư', desc: 'Quy trình chặt chẽ, minh bạch, kỷ luật.',
  },
  {
    icon: <img src={icHero2} srcSet={`${icHero2} 1x, ${icHero2x2} 2x, ${icHero2x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Hỗ trợ toàn diện', desc: 'Đồng hành chiến lược, vận hành mở rộng.',
  },
  {
    icon: <img src={icHero3} srcSet={`${icHero3} 1x, ${icHero3x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Mạng lưới mạnh mẽ', desc: 'Kết nối hệ sinh thái AFT, đối tác và nhà đầu tư.',
  },
]

const STATS = [
  { value: '150M+', label: 'Quy mô quỹ mục tiêu (2026-2028)' },
  { value: '30+',   label: 'Startup & doanh nghiệp được thẩm định mỗi năm' },
  { value: '15+',   label: 'Khoản đầu tư chiến lược đã triển khai' },
  { value: '2.5x',  label: 'Tỷ suất hoàn vốn mục tiêu (Target Multiple)' },
  { value: '6+',    label: 'Thị trường đầu tư tại Đông Nam Á' },
]

export function FundHero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 pb-0">
      {/* Background illustration — bleeds on the right */}
      <img
        src={icFundHero}
        srcSet={`${icFundHero} 1x, ${icFundHero2x} 2x, ${icFundHero3x} 3x`}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(11,31,58,0.94) 0%, rgba(11,31,58,0.65) 45%, transparent 100%)',
      }} />

      {/* Bottom fade: transparent → bg-secondary (#0B1F3A) */}
        <div
          className="absolute inset-x-0 bottom-0 h-100 pointer-events-none"
          style={{ zIndex: 2, background: 'linear-gradient(to top, #0B1F3A 40%, transparent 100%)' }}
        />

      <div className="relative z-10 container mx-auto px-4 md:px-8 pb-14">
        <motion.div
          className="max-w-220"
          variants={staggerContainer(0.1)} initial="hidden" animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <img
              src={icTitle4}
              srcSet={`${icTitle4} 1x, ${icTitle4x2} 2x, ${icTitle4x3} 3x`}
              alt="Quỹ đầu tư mạo hiểm"
              className="h-auto w-auto"
            />
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase"
          >
            <span className="block text-3xl md:text-[48px]">Kiến tạo tương lai </span>
            <span
              className="block text-3xl md:text-[40px] mt-3"
              style={{
                background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 45%, #fff8e8 50%, #F8EBC0 55%, #C6A15B 75%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'text-shimmer 2.8s ease-in-out infinite',
                willChange: 'background-position',
              }}
            >
              cùng doanh nghiệp tiên phong
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-lg md:text-2xl font-semibold text-text-primary">
            Đầu tư vào trí tuệ - Kiến tạo tương lai
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 text-base md:text-xl text-text-secondary leading-relaxed max-w-200">
            Chúng tôi đầu tư vào những doanh nghiệp tiên phong trong công nghệ và mô hình kinh
            doanh mới, có khả năng tạo ra ảnh hưởng lớn và tăng trưởng bền vững.
          </motion.p>

          {/* Feature row */}
          <motion.div variants={staggerContainer(0.1)} className="mt-6 flex flex-row gap-3 sm:gap-6">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <>
                <motion.div key={title} variants={staggerItem} className="flex-1 flex flex-col items-start gap-1 sm:gap-3">
                  <div className="flex items-center justify-start gap-2 sm:gap-3">
                    <div className="size-5 md:size-7 rounded-lg flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div className="text-sm sm:text-xl font-bold font-[Playfair_Display] text-text-primary leading-tight">{title}</div>
                  </div>
                  <div className="text-xs sm:text-base text-text-secondary leading-snug">{desc}</div>
                </motion.div>
                {i < FEATURES.length - 1 && (
                  <div key={`sep-${i}`} className="w-px self-stretch" style={{ background: "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(115, 115, 115, 0.00) 100%)" }} />
                )}
              </>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button variant="gold" size="lg" icon={true}>Gửi hồ sơ gọi vốn</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10"
      >
        <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {STATS.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col max-w-50 items-center text-center">
                <span
                  className="font-[Manrope] font-bold text-3xl md:text-[52px]"
                  style={{
                    background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 50%, #C6A15B 75%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'text-shimmer 2.8s ease-in-out infinite',
                  }}
                >
                  {value}
                </span>
                <span className="mt-1.5 text-xs md:text-base text-text-secondary font-[Manrope] leading-snug">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
      </motion.div>
    </section>
  )
}
