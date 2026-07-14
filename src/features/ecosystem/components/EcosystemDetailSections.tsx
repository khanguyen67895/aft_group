import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion'
import { EditableText, EditableImage } from '@/components/cms'

import icBgEco1 from '@/assets/image/ic_item_ecosystem1.png'
import icBgEco2 from '@/assets/image/ic_item_ecosystem2.png'
import icBgEco3 from '@/assets/image/ic_item_ecosystem3.png'
import icBgEco4 from '@/assets/image/ic_item_ecosystem4.png'
import icBgEco5 from '@/assets/image/ic_item_ecosystem5.png'

import icBgEco1Mb from '@/assets/image/ic_item_ecosystem1_mb.png'
import icBgEco2Mb from '@/assets/image/ic_item_ecosystem2_mb.png'
import icBgEco3Mb from '@/assets/image/ic_item_ecosystem3_mb.png'
import icBgEco4Mb from '@/assets/image/ic_item_ecosystem4_mb.png'
import icBgEco5Mb from '@/assets/image/ic_item_ecosystem5_mb.png'

import icItemIdea from '@/assets/image/ic_item_idea.png'

import icCheckbox from '@/assets/image/ic_checkbox.png'

interface SectorDetail {
  number: number
  title: string
  description: string
  features: string[]
  img: string
  imgMb: string
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
    img: icBgEco1,
    imgMb: icBgEco1Mb,
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
    img: icBgEco2,
    imgMb: icBgEco2Mb,
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
    img: icBgEco3,
    imgMb: icBgEco3Mb,
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
    img: icBgEco4,
    imgMb: icBgEco4Mb,
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
    img: icBgEco5,
    imgMb: icBgEco5Mb,
    reverse: false, bgColor: '#0B1527',
  },
]

export function EcosystemDetailSections() {
  return (
    <div className="-mt-12 sm:-mt-28 lg:-mt-39 relative z-10">
      {SECTORS.map((sector, i) => (
        <SectorSection key={sector.number} sector={sector} index={i} />
      ))}
    </div>
  )
}

function SectorSection({ sector, index }: { sector: SectorDetail; index: number }) {
  return (
    <section
      className="relative overflow-hidden lg:min-h-125"
      style={{ background: sector.bgColor }}
    >
      {/* Desktop: full-width background image */}
      <motion.div
        className="hidden lg:block absolute inset-0"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <EditableImage
          id={`ecosystem.detail.item.${index}.image`}
          fallbackSrc={sector.img}
          alt={sector.title}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

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
          <div className="relative w-16.5 h-16.5 md:w-21.5 md:h-21.5">
            <EditableImage
              id={`ecosystem.detail.item.${index}.badgeIcon`}
              fallbackSrc={icItemIdea}
              alt=""
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
          <EditableText id={`ecosystem.detail.item.${index}.title`} fallbackVi={sector.title} />
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-base md:text-xl leading-relaxed mb-6 max-w-full lg:max-w-120"
        >
          <EditableText id={`ecosystem.detail.item.${index}.description`} fallbackVi={sector.description} />
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="w-47.75 h-0.5 mb-6"
          style={{ background: 'linear-gradient(270deg, rgba(203, 150, 76, 0.00) 3.28%, #DBAB59 96.34%)' }}
        />

        {/* Feature list */}
        <motion.ul variants={staggerContainer(0.07)} className="space-y-4">
          {sector.features.map((feat, j) => (
            <motion.li key={j} variants={fadeUp} className="flex items-center gap-3">
              <EditableImage
                id={`ecosystem.detail.item.${index}.feature.${j}.icon`}
                fallbackSrc={icCheckbox}
                alt=""
                className="w-5 h-5 shrink-0"
              />
              <EditableText id={`ecosystem.detail.item.${index}.feature.${j}.text`} fallbackVi={feat} as="span" className="text-text-secondary text-base md:text-xl" />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Mobile: image below the content */}
      <div className="lg:hidden relative z-10 w-full h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <EditableImage
            id={`ecosystem.detail.item.${index}.image.mobile`}
            fallbackSrc={sector.imgMb}
            alt={sector.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Blend into section bg color at top and bottom */}
        <div
          className="absolute inset-x-0 top-0 h-10 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${sector.bgColor} 0%, transparent 100%)` }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${sector.bgColor} 0%, transparent 100%)` }}
        />
      </div>
    </section>
  )
}
