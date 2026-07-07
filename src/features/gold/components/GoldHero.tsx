import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

import icBgGold   from '@/assets/image/ic_gold_page.png'
import icBgGold2x from '@/assets/image/ic_gold_page@2x.png'
import icBgGold3x from '@/assets/image/ic_gold_page@3x.png'

import icBgField      from '@/assets/image/ic_bg_field.png'
import icBgField2x    from '@/assets/image/ic_bg_field@2x.png'
import icBgField3x    from '@/assets/image/ic_bg_field@3x.png'

import icGold1   from '@/assets/image/ic_item_gold1.png'
import icGold1x2 from '@/assets/image/ic_item_gold1@2x.png'
import icGold1x3 from '@/assets/image/ic_item_gold1@3x.png'
import icGold2   from '@/assets/image/ic_item_gold2.png'
import icGold2x2 from '@/assets/image/ic_item_gold2@2x.png'
import icGold2x3 from '@/assets/image/ic_item_gold2@3x.png'
import icGold3   from '@/assets/image/ic_item_gold3.png'
import icGold3x2 from '@/assets/image/ic_item_gold3@2x.png'
import icGold3x3 from '@/assets/image/ic_item_gold3@3x.png'
import icGold4   from '@/assets/image/ic_item_gold4.png'
import icGold4x2 from '@/assets/image/ic_item_gold4@2x.png'
import icGold4x3 from '@/assets/image/ic_item_gold4@3x.png'

const STATS = [
  { value: '+54%',    label: 'Đã tăng của vàng năm 2025 — tài sản trụ cột toàn cầu.', src: icGold1, src2x: icGold1x2, src3x: icGold1x3 },
  { value: '24/7',    label: 'Theo dõi & vận hành dữ liệu thị trường quốc tế.',        src: icGold2, src2x: icGold2x2, src3x: icGold2x3 },
  { value: 'Au · Ag', label: 'Khai thác, đầu tư vàng — bạc và copy trade vàng.',       src: icGold3, src2x: icGold3x2, src3x: icGold3x3 },
  { value: '5.5K+',   label: 'Vùng giá vàng (USD/oz) được dự báo quanh 2030.',         src: icGold4, src2x: icGold4x2, src3x: icGold4x3 },
]

export function GoldHero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 pb-8">
      {/* Ambient gold glow background — smaller strip on mobile, full-bleed on desktop */}
      <div className="absolute inset-x-0 top-0 h-90 md:inset-0 md:h-auto pointer-events-none" style={{
        backgroundImage: `image-set(url(${icBgField}) 1x, url(${icBgField2x}) 2x, url(${icBgField3x}) 3x)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 30% at 30% 35%, transparent 0%, rgba(11,31,58,0.75) 155%, #0B1F3A 125%)',
      }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)} initial="hidden" animate="show"
        >
          <motion.h1 variants={fadeUp} className="font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase text-3xl md:text-[48px]">
            Vàng - Khai thác và giao dịch
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-xl text-text-primary">
            Khai thác bền vững - Giao dịch an toàn - Giá trị trường tồn
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left column */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer(0.1)} initial="hidden" animate="show"
          >
            <motion.p variants={fadeUp} className="text-base md:mt-0 -mt-12 md:text-xl text-text-secondary leading-relaxed max-w-140">
              Khai thác vàng, đầu tư vàng - bạc, copy trade vàng và truyền thông data quốc tế.
              Vàng là sợi chỉ vàng trong suốt, biến giá trị hữu hình thành niềm tin và di sản.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={staggerContainer(0.07)} className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map(({ value, label, src, src2x, src3x }) => (
                <motion.div key={value} variants={staggerItem}
                  className="flex md:flex-row flex-col md:items-center items-start gap-3 p-4 rounded-xl"
                  style={{ border: '1px solid rgba(246,247,249,0.10)', background: 'rgba(11,31,58,0.35)', backdropFilter: 'blur(12px)' }}
                >
                  <img src={src} srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`} alt={label} className="size-14 object-contain shrink-0" />
                  <div>
                    <span className="text-2xl font-bold text-text-secondary font-[Manrope]">{value}</span>
                    <p className="text-base text-text-secondary font-[Manrope] leading-snug mt-0.5">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: hero image */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            className="relative order-1 lg:order-2"
          >
            <img
              src={icBgGold}
              srcSet={`${icBgGold} 1x, ${icBgGold2x} 2x, ${icBgGold3x} 3x`}
              alt="Vàng AURUM"
              className="w-full h-86 md:mt-0 -mt-12 md:h-108 object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
