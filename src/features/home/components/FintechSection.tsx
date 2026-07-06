import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import { ResponsivePriceChart } from '@/components/common'
import icTitle3    from '@/assets/image/ic_title3.png'
import icTitle3x2  from '@/assets/image/ic_title3@2x.png'
import icTitle3x3  from '@/assets/image/ic_title3@3x.png'
import icBgGold    from '@/assets/image/ic_bg_gold.png'
import icBgGold2x  from '@/assets/image/ic_bg_gold@2x.png'
import icBgGold3x  from '@/assets/image/ic_bg_gold@3x.png'
import icField1    from '@/assets/image/ic_item_field1.png'
import icField1x2  from '@/assets/image/ic_item_field1@2x.png'
import icField1x3  from '@/assets/image/ic_item_field1@3x.png'
import icField2    from '@/assets/image/ic_item_field2.png'
import icField2x2  from '@/assets/image/ic_item_field2@2x.png'
import icField2x3  from '@/assets/image/ic_item_field2@3x.png'
import icField3    from '@/assets/image/ic_item_field3.png'
import icField3x2  from '@/assets/image/ic_item_field3@2x.png'
import icField3x3  from '@/assets/image/ic_item_field3@3x.png'
import icField4    from '@/assets/image/ic_item_field4.png'
import icField4x2  from '@/assets/image/ic_item_field4@2x.png'
import icField4x3  from '@/assets/image/ic_item_field4@3x.png'

const FEATURES = [
  { label: 'Giao dịch phái sinh', src: icField1, src2x: icField1x2, src3x: icField1x3 },
  { label: 'Copy trade vàng',     src: icField2, src2x: icField2x2, src3x: icField2x3 },
  { label: 'Mô hình P2P',        src: icField3, src2x: icField3x2, src3x: icField3x3 },
  { label: 'Trung tâm tài chính', src: icField4, src2x: icField4x2, src3x: icField4x3 },
]

export function FintechSection() {
  return (
    <section className="md:pt-20 pb-12 md:pb-20 bg-secondary">
      <div className="container mx-auto px-3 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 items-stretch">

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
            {/* Desktop overlay */}
            <div className="absolute inset-0 hidden md:block" style={{
              background: 'radial-gradient(ellipse 55% 60% at 50% 45%, transparent 10%, rgba(11,31,58,0.55) 55%, rgba(11,31,58,0.92) 80%, #0B1F3A 100%)',
            }} />
            {/* Mobile: solid dark background */}
            <div className="absolute inset-0 md:hidden" style={{ background: '#0B1527' }} />
            <div className="relative z-10 flex flex-col md:h-full px-3 py-5 md:p-7">
              <motion.div variants={fadeUp} className="self-start">
                <img src={icTitle3} srcSet={`${icTitle3} 1x, ${icTitle3x2} 2x, ${icTitle3x3} 3x`}
                  alt="Lĩnh vực" className="h-auto w-auto" />
              </motion.div>

              <motion.h2 variants={fadeUp}
                className="mt-5 font-[Playfair_Display] font-bold text-text-primary leading-tight"
              >
                <span className="block text-2xl md:text-[40px] uppercase">Hàng hóa phái sinh</span>
                <span className="block text-2xl md:text-[40px] uppercase text-primary mt-1">– Lõi Fintech</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-base md:text-xl text-text-secondary leading-relaxed">
                Mảng lõi của AFT: giao dịch hàng hóa phái sinh, copy trade vàng, mô hình P2P
                và trung tâm tài chính — vận hành bằng kỷ luật, dữ liệu và công nghệ riêng.
              </motion.p>

              <motion.div variants={staggerContainer(0.07)} className="mt-6 lg:mt-auto grid grid-cols-2 lg:flex gap-3 lg:gap-4">
                {FEATURES.map(({ label, src, src2x, src3x }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="flex flex-col items-center gap-2.5 px-3 py-4"
                    style={{
                      borderRadius: '16px',
                      border: '1px solid rgba(246, 247, 249, 0.10)',
                      background: 'rgba(11, 31, 58, 0.30)',
                      backdropFilter: 'blur(7px)',
                    }}
                  >
                    <img src={src} srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`}
                      alt={label} className="size-10 object-contain" />
                    <span className="text-base font-semibold text-text-secondary font-[Manrope] text-center leading-snug">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile: gold image below features */}
              <img
                src={icBgGold} srcSet={`${icBgGold} 1x, ${icBgGold2x} 2x, ${icBgGold3x} 3x`}
                alt=""
                className="md:hidden -mx-3 -mb-5 mt-4 w-[calc(100%+24px)] h-70 object-cover object-bottom"
              />
            </div>
          </motion.div>

          {/* Right column: price widget */}
          <ResponsivePriceChart />

        </div>
      </div>
    </section>
  )
}
