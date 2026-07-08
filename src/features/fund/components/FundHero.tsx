import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icTitle4   from '@/assets/image/ic_title4.png'

import icFundHero from '@/assets/image/ic_fund_hero.png'

import icBgField from '@/assets/image/ic_bg_field.png'

import icHero1 from '@/assets/image/ic_item_hero1.png'
import icHero2 from '@/assets/image/ic_item_hero2.png'
import icHero3 from '@/assets/image/ic_item_hero3.png'

const FEATURES = [
  { icon: icHero1, title: 'Kỷ luật đầu tư', desc: 'Quy trình chặt chẽ, minh bạch, kỷ luật.' },
  { icon: icHero2, title: 'Hỗ trợ toàn diện', desc: 'Đồng hành chiến lược, vận hành mở rộng.' },
  { icon: icHero3, title: 'Mạng lưới mạnh mẽ', desc: 'Kết nối hệ sinh thái AFT, đối tác và nhà đầu tư.' },
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
      {/* Background illustration — desktop only, bleeds on the right */}
      <EditableImage
        id="fund.hero.img.bg"
        fallbackSrc={icFundHero}
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
      />
      {/* Mobile: ambient glow background instead */}
      <EditableImage
        id="fund.hero.img.bgMobile"
        fallbackSrc={icBgField}
        alt=""
        className="md:hidden absolute top-1/2 -translate-y-3/4 w-full h-full object-cover opacity-35 pointer-events-none"
      />

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
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <EditableImage
              id="fund.hero.img.badge"
              fallbackSrc={icTitle4}
              alt="Quỹ đầu tư mạo hiểm"
              className="h-auto w-auto"
            />
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase text-center md:text-left"
          >
            <EditableText
              id="fund.hero.title1"
              fallbackVi="Kiến tạo tương lai "
              as="span"
              className="block text-3xl md:text-[48px]"
            />
            <EditableText
              id="fund.hero.title2"
              fallbackVi="cùng doanh nghiệp tiên phong"
              as="span"
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
            />
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-lg md:text-2xl font-semibold text-text-primary text-center md:text-left">
            <EditableText id="fund.hero.subtitle" fallbackVi="Đầu tư vào trí tuệ - Kiến tạo tương lai" />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 text-base md:text-xl text-text-secondary leading-relaxed max-w-200 text-center md:text-left">
            <EditableText
              id="fund.hero.description"
              fallbackVi="Chúng tôi đầu tư vào những doanh nghiệp tiên phong trong công nghệ và mô hình kinh doanh mới, có khả năng tạo ra ảnh hưởng lớn và tăng trưởng bền vững."
            />
          </motion.p>

          {/* Feature row */}
          <motion.div variants={staggerContainer(0.1)} className="mt-6 flex flex-row gap-3 sm:gap-6">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <>
                <motion.div key={title} variants={staggerItem} className="flex-1 flex flex-col items-start gap-1 sm:gap-3">
                  <div className="flex items-center justify-start gap-2 sm:gap-3">
                    <div className="size-5 md:size-7 rounded-lg flex items-center justify-center shrink-0">
                      <EditableImage
                        id={`fund.hero.feature.${i}.icon`}
                        fallbackSrc={icon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <EditableText
                      id={`fund.hero.feature.${i}.title`}
                      fallbackVi={title}
                      as="div"
                      className="text-sm sm:text-xl font-bold font-[Playfair_Display] text-text-primary leading-tight"
                    />
                  </div>
                  <EditableText
                    id={`fund.hero.feature.${i}.desc`}
                    fallbackVi={desc}
                    as="div"
                    className="text-xs sm:text-base text-text-secondary leading-snug"
                  />
                </motion.div>
                {i < FEATURES.length - 1 && (
                  <div key={`sep-${i}`} className="w-px self-stretch" style={{ background: "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(115, 115, 115, 0.00) 100%)" }} />
                )}
              </>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center md:justify-start">
            <Button variant="gold" size="md" icon={true} className="md:hidden relative z-30">
              <EditableText id="fund.hero.cta" fallbackVi="Gửi hồ sơ gọi vốn" />
            </Button>
            <Button variant="gold" size="lg" icon={true} className="hidden md:inline-flex">
              <EditableText id="fund.hero.cta" fallbackVi="Gửi hồ sơ gọi vốn" />
            </Button>
          </motion.div>

          {/* Mobile: hero illustration below the CTA button */}
          <motion.div variants={fadeUp} className="md:hidden relative -mx-4 mt-8">
            <EditableImage
              id="fund.hero.img.heroMobile"
              fallbackSrc={icFundHero}
              alt=""
              className="w-full h-90 object-cover"
            />
            {/* Blend into the section's blue bg at top and bottom — held solid a bit before fading, since the photo's own sky/floor tones don't match the bg color exactly */}
            <div
              className="absolute inset-x-0 -top-10 h-28 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, var(--color-secondary) 25%, transparent 100%)' }}
            />
            <div
              className="absolute inset-x-0 -bottom-20 h-60 pointer-events-none"
              style={{ background: 'linear-gradient(to top, var(--color-secondary) 0%, var(--color-secondary) 25%, transparent 100%)' }}
            />
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
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={`flex flex-col max-w-50 items-center text-center ${i === STATS.length - 1 ? 'col-span-2 md:col-span-1 mx-auto' : ''}`}
              >
                <EditableText
                  id={`fund.hero.stat.${i}.value`}
                  fallbackVi={value}
                  as="span"
                  className="font-[Manrope] font-bold text-3xl md:text-[52px]"
                  style={{
                    background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 50%, #C6A15B 75%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'text-shimmer 2.8s ease-in-out infinite',
                  }}
                />
                <EditableText
                  id={`fund.hero.stat.${i}.label`}
                  fallbackVi={label}
                  as="span"
                  className="mt-1.5 text-xs md:text-base text-text-secondary font-[Manrope] leading-snug"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
      </motion.div>
    </section>
  )
}
