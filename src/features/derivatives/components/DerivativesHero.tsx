import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ResponsivePriceChart } from '@/components/common'
import { EditableText } from '@/components/cms'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'

import icBgField      from '@/assets/image/ic_bg_field.png'
import icBgField2x    from '@/assets/image/ic_bg_field@2x.png'
import icBgField3x    from '@/assets/image/ic_bg_field@3x.png'

const STATS = [
  { value: '10+',   label: 'Năm kinh nghiệm' },
  { value: '24/7',  label: 'Giao dịch thị trường' },
  { value: '100%',  label: 'Minh bạch dữ liệu' },
  { value: 'Tối ưu', label: 'Chiến lược đầu tư' },
]

export function DerivativesHero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 pb-0">
      {/* Ambient gold glow background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `image-set(url(${icBgField}) 1x, url(${icBgField2x}) 2x, url(${icBgField3x}) 3x)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 30% at 30% 35%, transparent 0%, rgba(11,31,58,0.75) 155%, #0B1F3A 125%)',
      }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-10 items-center pb-14">

          {/* Left column */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" animate="show"
          >
            <motion.h1 variants={fadeUp}
              className="mt-5 font-[Playfair_Display] text-center md:text-left font-bold text-text-primary leading-tight uppercase"
            >
              <span className="block text-3xl md:text-[48px]">
                <EditableText id="derivatives.hero.title1" fallbackVi="Hàng hóa phái sinh –" /> <br />
                <EditableText id="derivatives.hero.title2" fallbackVi="Lõi Fintech" />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-xl text-center md:text-left md:text-2xl text-text-primary leading-relaxed max-w-140">
              <EditableText id="derivatives.hero.subtitle" fallbackVi="Giao dịch chuyên nghiệp – Tối ưu lợi nhuận." />
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 text-base text-center md:text-left md:text-xl text-text-secondary leading-relaxed max-w-140">
              <EditableText id="derivatives.hero.description" fallbackVi="Mảng lõi của AFT: giao dịch hàng hóa phái sinh, copy trade vàng, mô hình P2P và trung tâm tài chính — vận hành bằng kỷ luật, dữ liệu và công nghệ riêng." />
            </motion.p>

            <motion.div variants={fadeUp} className="hidden md:block mt-8">
              <Button variant="gold" size="lg" icon={true}>
                <EditableText id="derivatives.hero.cta" fallbackVi="Hợp tác ngay" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column: shared live price chart widget */}
          <ResponsivePriceChart />

        </div>

        {/* Mobile-only: brand description above the stats row, centered */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="md:hidden text-center mx-auto max-w-140 text-base text-text-secondary leading-relaxed"
        >
          <EditableText id="derivatives.hero.statsDescription.brand" fallbackVi="AFT GROUP" as="span" className="text-text-primary font-semibold" />{' '}
          <EditableText
            id="derivatives.hero.statsDescription.body"
            fallbackVi="phát triển và quản lý dự án bất động sản cao cấp, khu đô thị hiện đại và bất động sản công nghiệp. Chúng tôi kiến tạo không gian sống đẳng cấp, góp phần thúc đẩy phát triển kinh tế – xã hội bền vững."
            as="span"
          />
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative z-10 mt-10"
        >
          <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
          <div className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div key={label} variants={fadeUp} className="flex flex-col items-center text-center">
                  <EditableText
                    id={`derivatives.hero.stat.${i}.value`}
                    fallbackVi={value}
                    className="font-[Manrope] font-bold text-[40px] md:text-4xl"
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
                    id={`derivatives.hero.stat.${i}.label`}
                    fallbackVi={label}
                    className="mt-1.5 text-base text-text-secondary font-[Manrope] leading-snug"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-screen relative left-1/2 right-1/2 mx-[-50vw] h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
        </motion.div>
      </div>
    </section>
  )
}
