import { motion } from 'framer-motion'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icBgGold    from '@/assets/image/ic_bg_section_gold.png'
import icGold1     from '@/assets/image/ic_item_gold1.png'
import icGold1x2   from '@/assets/image/ic_item_gold1@2x.png'
import icGold1x3   from '@/assets/image/ic_item_gold1@3x.png'
import icGold2     from '@/assets/image/ic_item_gold2.png'
import icGold2x2   from '@/assets/image/ic_item_gold2@2x.png'
import icGold2x3   from '@/assets/image/ic_item_gold2@3x.png'
import icGold3     from '@/assets/image/ic_item_gold3.png'
import icGold3x2   from '@/assets/image/ic_item_gold3@2x.png'
import icGold3x3   from '@/assets/image/ic_item_gold3@3x.png'
import icGold4     from '@/assets/image/ic_item_gold4.png'
import icGold4x2   from '@/assets/image/ic_item_gold4@2x.png'
import icGold4x3   from '@/assets/image/ic_item_gold4@3x.png'
import icTitle3    from '@/assets/image/ic_title3.png'

const STATS = [
  { value: '+54%',    label: 'Đã tăng của vàng năm 2025 — tài sản trụ cột toàn cầu.', src: icGold1, src2x: icGold1x2, src3x: icGold1x3 },
  { value: '24/7',    label: 'Theo dõi & vận hành dữ liệu thị trường quốc tế.',        src: icGold2, src2x: icGold2x2, src3x: icGold2x3 },
  { value: 'Au · Ag', label: 'Khai thác, đầu tư vàng — bạc và copy trade vàng.',       src: icGold3, src2x: icGold3x2, src3x: icGold3x3 },
  { value: '5.5K+',   label: 'Vùng giá vàng (USD/oz) được dự báo quanh 2030.',         src: icGold4, src2x: icGold4x2, src3x: icGold4x3 },
]

export function GoldSection() {
  return (
    <section className="py-8 md:py-28 lg:py-40 bg-bg relative overflow-hidden">
      <EditableImage id="home.gold.img.bg" fallbackSrc={icBgGold} alt="" className="absolute inset-x-0 bottom-12 w-full h-2/3 object-contain object-bottom pointer-events-none md:inset-0 md:bottom-auto md:h-full md:object-cover md:object-top" />

      {/* Warm gold glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Blue glow left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full rounded-full bg-blue-500/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Content ───────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp} className='relative'>
              <EditableImage id="home.gold.img.title" fallbackSrc={icTitle3} alt="Lĩnh vực" className="h-auto w-auto" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="relative gap-1 flex mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase">
              <EditableText id="home.gold.title.highlight" fallbackVi="Vàng" className="text-primary text-3xl md:text-[40px] block" />
              <EditableText id="home.gold.title.rest" fallbackVi="– Khai thác và giao dịch" className="text-3xl md:text-[40px] block" />
            </motion.h2>

            <motion.p variants={fadeUp} className="relative mt-5 text-body-md text-text-secondary leading-relaxed max-w-120">
              <EditableText id="home.gold.subtitle" fallbackVi="Khai thác vàng, đầu tư vàng - bạc, copy trade vàng và truyền thông data quốc tế. Vàng là sợi chỉ vàng trong suốt, biến giá trị hữu hình thành niềm tin và di sản." />
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={staggerContainer(0.07)} className="relative mt-8 grid grid-cols-2 gap-4">
              {STATS.map(({ value, label, src }, i) => (
                <motion.div key={value} variants={staggerItem}
                  className="flex flex-col md:flex-row items-start md:items-center gap-3 p-4 rounded-xl"
                  style={{ border: '1px solid rgba(246,247,249,0.10)', background: 'rgba(11,31,58,0.35)', backdropFilter: 'blur(12px)' }}
                >
                  <EditableImage id={`home.gold.stats.${i}.icon`} fallbackSrc={src} alt={label} className="size-14 object-contain shrink-0" />
                  <div>
                    <EditableText id={`home.gold.stats.${i}.value`} fallbackVi={value} className="text-2xl font-bold text-text-secondary font-[Manrope]" />
                    <EditableText id={`home.gold.stats.${i}.label`} fallbackVi={label} as="p" className="text-base text-text-secondary font-[Manrope] leading-snug mt-0.5" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
