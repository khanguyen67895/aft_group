import { motion } from 'framer-motion'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import { ResponsivePriceChart } from '@/components/common'
import icTitle3    from '@/assets/image/ic_title3.png'
import icBgGold    from '@/assets/image/ic_bg_gold.png'
import icBgGold2x  from '@/assets/image/ic_bg_gold@2x.png'
import icBgGold3x  from '@/assets/image/ic_bg_gold@3x.png'
import icField1    from '@/assets/image/ic_item_field1.png'
import icField2    from '@/assets/image/ic_item_field2.png'
import icField3    from '@/assets/image/ic_item_field3.png'
import icField4    from '@/assets/image/ic_item_field4.png'

const FEATURES = [
  { label: 'Giao dịch phái sinh', src: icField1 },
  { label: 'Copy trade vàng',     src: icField2 },
  { label: 'Mô hình P2P',        src: icField3 },
  { label: 'Trung tâm tài chính', src: icField4 },
]

export function FintechSection() {
  return (
    <section className="md:pt-20 pb-12 md:pb-20 bg-secondary">
      <div className="container mx-auto px-3 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Left column */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-col relative overflow-hidden rounded-2xl"
          >
            {/* Desktop: gold background image */}
            <div className="absolute inset-0 hidden md:block" style={{
              backgroundImage: `image-set(url(${icBgGold}) 1x, url(${icBgGold2x}) 2x, url(${icBgGold3x}) 3x)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            {/* Desktop overlay: fade the gold image into the card's navy at the edges */}
            <div className="absolute inset-0 hidden md:block" style={{
              background: 'radial-gradient(ellipse 55% 60% at 50% 45%, transparent 10%, rgba(11,31,58,0.55) 55%, rgba(11,31,58,0.92) 80%, var(--color-secondary) 100%)',
            }} />
            {/* Mobile: solid navy background, matches the section behind it */}
            <div className="absolute inset-0 md:hidden" style={{ background: 'var(--color-secondary)' }} />
            <div className="relative z-10 flex flex-col md:h-full px-3 py-5 md:p-7">
              <motion.div variants={fadeUp} className="self-start">
                <EditableImage id="home.fintech.img.title" fallbackSrc={icTitle3}
                  alt="Lĩnh vực" className="h-auto w-auto" />
              </motion.div>

              <motion.h2 variants={fadeUp}
                className="mt-5 font-[Playfair_Display] font-bold text-text-primary leading-tight"
              >
                <EditableText id="home.fintech.title1" fallbackVi="Hàng hóa phái sinh" as="span" className="block text-2xl md:text-[40px] uppercase" />
                <EditableText id="home.fintech.title2" fallbackVi="– Lõi Fintech" as="span" className="block text-2xl md:text-[40px] uppercase text-primary mt-1" />
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-base md:text-xl text-text-secondary leading-relaxed">
                <EditableText id="home.fintech.subtitle" fallbackVi="Mảng lõi của AFT: giao dịch hàng hóa phái sinh, copy trade vàng, mô hình P2P và trung tâm tài chính — vận hành bằng kỷ luật, dữ liệu và công nghệ riêng." />
              </motion.p>

              <motion.div variants={staggerContainer(0.07)} className="mt-6 lg:mt-auto grid grid-cols-2 lg:flex gap-3 lg:gap-4">
                {FEATURES.map(({ label, src }, i) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="flex flex-col items-center gap-2.5 px-3 py-4 border border-[rgba(39,148,219,0.20)] md:border-[rgba(246,247,249,0.10)]"
                    style={{
                      borderRadius: '16px',
                      background: 'rgba(11, 31, 58, 0.30)',
                      backdropFilter: 'blur(7px)',
                    }}
                  >
                    <EditableImage id={`home.fintech.img.features${i}`} fallbackSrc={src}
                      alt={label} className="size-10 object-contain" />
                    <EditableText
                      id={`home.fintech.features.${i}.label`} fallbackVi={label} as="span"
                      className="text-base font-semibold text-text-secondary font-[Manrope] text-center leading-snug"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile: gold image block below the features, blended into navy at the edges like desktop */}
              <div className="md:hidden relative h-56 overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: `image-set(url(${icBgGold}) 1x, url(${icBgGold2x}) 2x, url(${icBgGold3x}) 3x)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 60% 70% at 50% 50%, transparent 30%, rgba(11,31,58,0.55) 65%, var(--color-secondary) 100%)',
                }} />
              </div>
            </div>
          </motion.div>

          {/* Right column: price widget */}
          <ResponsivePriceChart />

        </div>
      </div>
    </section>
  )
}
