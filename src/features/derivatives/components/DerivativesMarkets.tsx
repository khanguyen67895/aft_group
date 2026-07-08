import { motion } from 'framer-motion'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icBgMarkets    from '@/assets/image/ic_bg_markets.png'
import icBgMarkets_2x from '@/assets/image/ic_bg_markets@2x.png'
import icBgMarkets_3x from '@/assets/image/ic_bg_markets@3x.png'
import icSolution2   from '@/assets/image/ic_solution2.png'
import icSolution2_2x from '@/assets/image/ic_solution2@2x.png'
import icSolution2_3x from '@/assets/image/ic_solution2@3x.png'
import icMarkets1    from '@/assets/image/ic_markets1.png'
import icMarkets1_2x from '@/assets/image/ic_markets1@2x.png'
import icMarkets1_3x from '@/assets/image/ic_markets1@3x.png'
import icMarkets2    from '@/assets/image/ic_markets2.png'
import icMarkets2_2x from '@/assets/image/ic_markets2@2x.png'
import icMarkets2_3x from '@/assets/image/ic_markets2@3x.png'
import icMarkets3    from '@/assets/image/ic_markets3.png'
import icMarkets3_2x from '@/assets/image/ic_markets3@2x.png'
import icMarkets3_3x from '@/assets/image/ic_markets3@3x.png'
import icMarkets4    from '@/assets/image/ic_markets4.png'
import icMarkets4_2x from '@/assets/image/ic_markets4@2x.png'
import icMarkets4_3x from '@/assets/image/ic_markets4@3x.png'
import icMarkets5    from '@/assets/image/ic_markets5.png'
import icMarkets5_2x from '@/assets/image/ic_markets5@2x.png'
import icMarkets5_3x from '@/assets/image/ic_markets5@3x.png'

const MARKETS = [
  { icon: icSolution2, srcSet: `${icSolution2} 1x, ${icSolution2_2x} 2x, ${icSolution2_3x} 3x`, name: 'Vàng',         desc: 'Đầu tư, tích sản và phòng hộ rủi ro, tài sản trú ẩn an toàn.' },
  { icon: icMarkets1,  srcSet: `${icMarkets1} 1x, ${icMarkets1_2x} 2x, ${icMarkets1_3x} 3x`,     name: 'Bạc',         desc: 'Biến động mạnh hơn vàng, đa dạng hóa danh mục đầu tư.' },
  { icon: icMarkets2,  srcSet: `${icMarkets2} 1x, ${icMarkets2_2x} 2x, ${icMarkets2_3x} 3x`,     name: 'Dầu thô',     desc: 'Đầu tư và phòng hộ giá năng lượng.' },
  { icon: icMarkets3,  srcSet: `${icMarkets3} 1x, ${icMarkets3_2x} 2x, ${icMarkets3_3x} 3x`,     name: 'Khí tự nhiên', desc: 'Theo dõi biến động giá và phòng hộ chi phí.' },
  { icon: icMarkets4,  srcSet: `${icMarkets4} 1x, ${icMarkets4_2x} 2x, ${icMarkets4_3x} 3x`,     name: 'Nông sản',    desc: 'Đa dạng hóa danh mục hàng hóa và nguồn cung.' },
  { icon: icMarkets5,  srcSet: `${icMarkets5} 1x, ${icMarkets5_2x} 2x, ${icMarkets5_3x} 3x`,     name: 'Kim loại',    desc: 'Theo dõi nhu cầu sản xuất và chu kỳ kinh tế.' },
]

export function DerivativesMarkets() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative overflow-hidden p-6 md:p-10"
          style={{
            borderRadius: '24px',
            border: '1px solid rgba(246, 247, 249, 0.10)',
            backgroundColor: 'var(--color-secondary)',
          }}
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {/* Desktop: full-bleed cover image */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `image-set(url(${icBgMarkets}) 1x, url(${icBgMarkets_2x}) 2x, url(${icBgMarkets_3x}) 3x)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10">
            <motion.h2 variants={fadeUp} className="text-center md:text-left font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase mb-10">
              <EditableText id="derivatives.markets.title" fallbackVi="Danh mục thị trường trọng tâm" />
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
              variants={staggerContainer(0.06)}
            >
              {MARKETS.map(({ icon, name, desc }, i) => (
                <motion.div
                  key={name}
                  variants={staggerItem}
                  className="flex flex-col items-start md:items-center text-center gap-3 p-5"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(246, 247, 249, 0.15)',
                    background: 'rgba(11, 31, 58, 0.40)',
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <EditableImage id={`derivatives.markets.item.${i}.icon`} fallbackSrc={icon} alt={name} className="size-12 object-contain" />
                  <div>
                    <EditableText id={`derivatives.markets.item.${i}.name`} fallbackVi={name} as="div" className="text-base md:text-xl text-left md:text-center font-bold text-text-primary font-[Playfair_Display] uppercase tracking-wide" />
                    <EditableText id={`derivatives.markets.item.${i}.desc`} fallbackVi={desc} as="div" className="text-sm md:text-base text-left md:text-center text-text-secondary font-[Manrope] mt-1 leading-relaxed" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile: chart graphic below the cards, blended into the blue bg */}
            <div className="md:hidden relative -mx-6 -mb-6 mt-6">
              <div
                className="absolute inset-x-0 top-0 h-8 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, transparent 100%)' }}
              />
              <EditableImage
                id="derivatives.markets.mobileImage"
                fallbackSrc={icBgMarkets}
                alt=""
                className="w-full h-70 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
