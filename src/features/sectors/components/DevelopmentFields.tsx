import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icTitle3    from '@/assets/image/ic_title3.png'
import icTitle3x2  from '@/assets/image/ic_title3@2x.png'
import icTitle3x3  from '@/assets/image/ic_title3@3x.png'
import icItemEco1 from '@/assets/image/ic_item_eco1.png'
import icItemEco2 from '@/assets/image/ic_item_eco2.png'
import icItemEco3 from '@/assets/image/ic_item_eco3.png'
import icItemEco4 from '@/assets/image/ic_item_eco4.png'
import icItemEco5 from '@/assets/image/ic_item_eco5.png'

interface Field {
  icon: string
  name: string
  short: string
  description: string
  highlights: string[]
}

const FIELDS: Field[] = [
  {
    icon: icItemEco1,
    name: 'Bất động sản',
    short: 'BĐS',
    description: 'Phát triển và đầu tư bất động sản cao cấp tại các địa bàn chiến lược trên toàn quốc.',
    highlights: ['Nhà ở cao cấp', 'BĐS nghỉ dưỡng', 'Thương mại dịch vụ'],
  },
  {
    icon: icItemEco3,
    name: 'Giao dịch hàng hóa',
    short: 'Hàng hóa',
    description: 'Kết nối giao dịch kim loại quý, năng lượng và nông sản với mạng lưới đối tác quốc tế.',
    highlights: ['Kim loại quý', 'Phái sinh XAU/USD', 'Copy trade vàng'],
  },
  {
    icon: icItemEco4,
    name: 'Thiết bị khai thác vàng',
    short: 'Khai thác',
    description: 'Cung cấp giải pháp và thiết bị khai thác vàng hiện đại, tối ưu hiệu suất vận hành.',
    highlights: ['Công nghệ hiện đại', 'Bảo trì chuyên sâu', 'Giải pháp toàn diện'],
  },
  {
    icon: icItemEco5,
    name: 'Quản lý tài sản',
    short: 'Tài sản',
    description: 'Quản lý danh mục đầu tư chuyên nghiệp, tối ưu hóa lợi nhuận và bảo toàn vốn.',
    highlights: ['Danh mục đa dạng', 'Kiểm soát rủi ro', 'Báo cáo minh bạch'],
  },
  {
    icon: icItemEco2,
    name: 'Viện nghiên cứu & Đào tạo',
    short: 'Đào tạo',
    description: 'Kiến tạo tri thức, nghiên cứu và đào tạo nguồn nhân lực chất lượng cao cho tương lai.',
    highlights: ['Nghiên cứu ứng dụng', 'Đào tạo chuyên gia', 'Hợp tác quốc tế'],
  },
]

export function DevelopmentFields() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-active/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-10 lg:gap-16 items-start">

          {/* Left — heading */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <img
                src={icTitle3} srcSet={`${icTitle3} 1x, ${icTitle3x2} 2x, ${icTitle3x3} 3x`}
                alt="Lĩnh vực" className="h-auto w-auto"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-[Playfair_Display] font-bold text-2xl md:text-h3 text-text-primary uppercase leading-tight"
            >
              Lĩnh vực<br />phát triển
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-48 h-0.5 my-6"
              style={{ background: 'linear-gradient(270deg, rgba(203,150,76,0.00) 3%, #DBAB59 96%)' }}
            />

            <motion.p variants={fadeUp} className="text-text-secondary text-base md:text-xl leading-relaxed">
              AFT Group không chỉ là một tập đoàn đầu tư — chúng tôi kiến tạo hệ sinh thái
              tài chính – tài sản – công nghệ toàn diện, kết nối sức mạnh từ 5 mảng lõi
              để tạo giá trị bền vững cho đối tác và nhà đầu tư.
            </motion.p>

            {/* Summary stats */}
            <motion.div variants={staggerContainer(0.07)} className="mt-8 flex gap-6">
              {[
                { value: '5', label: 'Mảng lõi' },
                { value: '10+', label: 'Năm kinh nghiệm' },
              ].map(({ value, label }) => (
                <motion.div key={label} variants={fadeUp} className="text-center">
                  <div className="text-3xl font-bold font-[Manrope] text-primary">{value}</div>
                  <div className="text-sm text-text-secondary font-[Manrope] mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — fields grid */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FIELDS.map((field) => (
              <motion.div
                key={field.name}
                variants={staggerItem}
                className="group flex flex-col gap-4 p-5 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  border: '1px solid rgba(246,247,249,0.08)',
                  background: 'rgba(11,31,58,0.40)',
                  backdropFilter: 'blur(12px)',
                }}
                whileHover={{ borderColor: 'rgba(198,161,91,0.30)', scale: 1.02 }}
              >
                {/* Icon + name row */}
                <div className="flex items-center gap-3">
                  <div
                    className="shrink-0 size-12 flex items-center justify-center rounded-xl"
                    style={{ background: 'rgba(198,161,91,0.12)', border: '1px solid rgba(198,161,91,0.20)' }}
                  >
                    <img src={field.icon} alt={field.name} className="size-7 object-contain" />
                  </div>
                  <div>
                    <div className="text-primary text-[11px] font-bold font-[Manrope] tracking-wider uppercase">
                      {field.short}
                    </div>
                    <div className="text-text-primary font-[Manrope] font-semibold text-sm leading-tight mt-0.5">
                      {field.name}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-[13px] font-[Manrope] leading-relaxed">
                  {field.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {field.highlights.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-[Manrope] text-text-secondary"
                      style={{
                        borderRadius: '4px',
                        border: '1px solid rgba(246,247,249,0.12)',
                        background: 'rgba(246,247,249,0.04)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* 5th card spans full width on sm */}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
