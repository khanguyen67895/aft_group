import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion'

import icBgEco1   from '@/assets/image/ic_item_ecosystem1.png'
import icBgEco1x2 from '@/assets/image/ic_item_ecosystem1@2x.png'
import icBgEco1x3 from '@/assets/image/ic_item_ecosystem1@3x.png'
import icBgEco2   from '@/assets/image/ic_item_ecosystem2.png'
import icBgEco2x2 from '@/assets/image/ic_item_ecosystem2@2x.png'
import icBgEco2x3 from '@/assets/image/ic_item_ecosystem2@3x.png'
import icBgEco3   from '@/assets/image/ic_item_ecosystem3.png'
import icBgEco3x2 from '@/assets/image/ic_item_ecosystem3@2x.png'
import icBgEco3x3 from '@/assets/image/ic_item_ecosystem3@3x.png'
import icBgEco4   from '@/assets/image/ic_item_ecosystem4.png'
import icBgEco4x2 from '@/assets/image/ic_item_ecosystem4@2x.png'
import icBgEco4x3 from '@/assets/image/ic_item_ecosystem4@3x.png'
import icBgEco5   from '@/assets/image/ic_item_ecosystem5.png'
import icBgEco5x2 from '@/assets/image/ic_item_ecosystem5@2x.png'
import icBgEco5x3 from '@/assets/image/ic_item_ecosystem5@3x.png'

import icItemIdea   from '@/assets/image/ic_item_idea.png'
import icItemIdea2x from '@/assets/image/ic_item_idea@2x.png'
import icItemIdea3x from '@/assets/image/ic_item_idea@3x.png'

import icCheckbox   from '@/assets/image/ic_checkbox.png'
import icCheckbox2x from '@/assets/image/ic_checkbox@2x.png'
import icCheckbox3x from '@/assets/image/ic_checkbox@3x.png'

interface SectorDetail {
  number: number
  title: string
  description: string
  features: string[]
  img: string; img2x: string; img3x: string
  reverse: boolean
  bgColor: string
}

const SECTORS: SectorDetail[] = [
  {
    number: 1,
    title: 'BẤT ĐỘNG SẢN',
    description:
      'Phát triển và đầu tư bất động sản cao cấp, tập trung vào vị trí chiến lược, pháp lý minh bạch, khai thác hiệu quả và gia tăng giá trị tài sản bền vững.',
    features: [
      'Phát triển bất động sản cao cấp',
      'Đầu tư chiến lược, tối ưu hóa lợi nhuận',
      'Quản trị rủi ro, gia tăng giá trị tài sản',
      'Đồng hành cùng khách hàng dài hạn',
    ],
    img: icBgEco1, img2x: icBgEco1x2, img3x: icBgEco1x3,
    reverse: false, bgColor: '#0B1527',
  },
  {
    number: 2,
    title: 'GIAO DỊCH HÀNG HÓA',
    description:
      'Kết nối giao dịch các loại hàng hóa chiến lược như kim loại quý, năng lượng, nông sản và nguyên liệu thô — tối ưu chuỗi cung ứng, kiểm soát rủi ro và tạo giá trị bền vững.',
    features: [
      'Giao dịch đa dạng: Kim loại, năng lượng, nông sản,...',
      'Mạng lưới đối tác quốc tế uy tín.',
      'Quản trị rủi ro chặt chẽ - minh bạch.',
      'Tối ưu chuỗi cung ứng và giá trị.',
    ],
    img: icBgEco2, img2x: icBgEco2x2, img3x: icBgEco2x3,
    reverse: true, bgColor: '#0B1527',
  },
  {
    number: 3,
    title: 'THIẾT BỊ KHAI THÁC VÀNG',
    description:
      'Cung cấp thiết bị và giải pháp khai thác vàng hiện đại, tối ưu hiệu suất vận hành, nâng cao độ bền thiết bị và đồng hành cùng doanh nghiệp trong các dự án khai khoáng.',
    features: [
      'Cung cấp thiết bị công nghệ hiện đại',
      'Dịch vụ bảo trì, bảo dưỡng chuyên sâu',
      'Tư vấn giải pháp khai thác tối ưu',
      'Đồng hành cùng đối tác trên mọi dự án',
    ],
    img: icBgEco3, img2x: icBgEco3x2, img3x: icBgEco3x3,
    reverse: false, bgColor: '#0B1527',
  },
  {
    number: 4,
    title: 'QUẢN LÝ TÀI SẢN',
    description:
      'Quản lý tài sản chuyên nghiệp, tối ưu hóa hiệu quả đầu tư và gia tăng giá trị bền vững.',
    features: [
      'Quản lý danh mục đầu tư đa dạng',
      'Phân tích chuyên sâu – ra quyết định tối ưu',
      'Kiểm soát rủi ro và bảo toàn vốn',
      'Đồng hành cùng khách hàng dài hạn',
    ],
    img: icBgEco4, img2x: icBgEco4x2, img3x: icBgEco4x3,
    reverse: true, bgColor: '#0B1527',
  },
  {
    number: 5,
    title: 'VIỆN NGHIÊN CỨU & ĐÀO TẠO',
    description:
      'Nơi kiến tạo tri thức, nghiên cứu và đào tạo nguồn nhân lực chất lượng cao cho tương lai bền vững.',
    features: [
      'Nghiên cứu chuyên sâu, ứng dụng thực tiễn',
      'Đào tạo chuyên gia và phát triển kỹ năng',
      'Hợp tác học thuật trong và ngoài nước',
      'Đóng góp cho cộng đồng và xã hội',
    ],
    img: icBgEco5, img2x: icBgEco5x2, img3x: icBgEco5x3,
    reverse: false, bgColor: '#0B1527',
  },
]

export function EcosystemDetailSections() {
  return (
    <div className="-mt-12 sm:-mt-28 lg:-mt-39 relative z-10">
      {SECTORS.map(sector => (
        <SectorSection key={sector.number} sector={sector} />
      ))}
    </div>
  )
}

function SectorSection({ sector }: { sector: SectorDetail }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: sector.bgColor, minHeight: '500px' }}
    >
      {/* Full-width background image */}
      <motion.img
        src={sector.img}
        srcSet={`${sector.img} 1x, ${sector.img2x} 2x, ${sector.img3x} 3x`}
        alt={sector.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      />

      {/* Mobile full overlay for readability */}
      <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: 'rgba(11,21,39,0.72)' }} />

      {/* Desktop gradient overlay – dense on text side, transparent on image side */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: sector.reverse
            ? `linear-gradient(to left, ${sector.bgColor} 0%, rgba(11,21,39,0.85) 40%, transparent 100%)`
            : `linear-gradient(to right, ${sector.bgColor} 0%, rgba(11,21,39,0.85) 40%, transparent 100%)`,
        }}
      />

      {/* Text content overlaid on the dark side */}
      <motion.div
        className={cn(
          'relative z-10 w-full lg:w-1/2 px-6 md:px-14 lg:px-16 xl:px-20 py-12 lg:py-24 flex flex-col justify-center',
          sector.reverse && 'lg:ml-auto'
        )}
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {/* Number badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <div className="relative w-21.5 h-21.5">
            <img
              src={icItemIdea}
              srcSet={`${icItemIdea} 1x, ${icItemIdea2x} 2x, ${icItemIdea3x} 3x`}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center font-[Manrope] font-bold text-white text-[52px] leading-none">
              {sector.number}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="font-[Playfair_Display] font-bold text-2xl md:text-h3 mb-4"
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
          {sector.title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-47.75 h-0.5 mb-6"
          style={{ background: 'linear-gradient(270deg, rgba(203, 150, 76, 0.00) 3.28%, #DBAB59 96.34%)' }}
        />

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-base md:text-xl leading-relaxed mb-6 max-w-full lg:max-w-120"
        >
          {sector.description}
        </motion.p>

        {/* Feature list */}
        <motion.ul variants={staggerContainer(0.07)} className="space-y-4">
          {sector.features.map((feat, i) => (
            <motion.li key={i} variants={fadeUp} className="flex items-center gap-3">
              <img
                src={icCheckbox}
                srcSet={`${icCheckbox} 1x, ${icCheckbox2x} 2x, ${icCheckbox3x} 3x`}
                alt=""
                aria-hidden
                className="w-5 h-5 shrink-0"
              />
              <span className="text-text-secondary text-base md:text-xl">{feat}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
