import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewport } from '@/lib/motion'
import { EditableText, EditableImage } from '@/components/cms'
import icBgStats from '@/assets/image/ic_bg_stats.png'

const STATS = [
  { value: '15+',     label: 'Dự án thành công' },
  { value: '1.000+',  label: 'Khách hàng đồng hành' },
  { value: '500ha',   label: 'Diện tích phát triển' },
  { value: '10.000+', label: 'Ha tiềm năng khai thác' },
]

export function SectorsStats() {
  return (
    <section className="relative bg-bg overflow-hidden py-10 md:py-14">
      {/* Background */}
      <EditableImage
        id="sectors.stats.img.bg"
        fallbackSrc={icBgStats}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-bg/70 pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="flex flex-col items-center text-center py-6 px-4"
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(198,161,91,0.20)',
                background: 'rgba(11,31,58,0.50)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <EditableText
                id={`sectors.stats.item.${i}.value`}
                fallbackVi={value}
                as="span"
                className="font-[Manrope] font-bold text-3xl md:text-4xl"
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
                id={`sectors.stats.item.${i}.label`}
                fallbackVi={label}
                as="span"
                className="mt-2 text-sm md:text-base text-text-secondary font-[Manrope]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
