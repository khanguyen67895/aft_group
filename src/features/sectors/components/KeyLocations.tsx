import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icTitle3    from '@/assets/image/ic_title3.png'
import icTitle3x2  from '@/assets/image/ic_title3@2x.png'
import icTitle3x3  from '@/assets/image/ic_title3@3x.png'

interface City {
  name: string
  desc: string
  cx: number
  cy: number
  labelSide: 'left' | 'right'
}

const CITIES: City[] = [
  { name: 'Hà Nội',     desc: 'Thủ đô – Trung tâm chính trị',    cx: 82,  cy: 86,  labelSide: 'left'  },
  { name: 'Hải Phòng',  desc: 'Cảng biển quốc tế lớn nhất miền Bắc', cx: 106, cy: 90,  labelSide: 'right' },
  { name: 'Nghệ An',    desc: 'Trung tâm kinh tế Bắc Trung Bộ',   cx: 66,  cy: 140, labelSide: 'left'  },
  { name: 'Đà Nẵng',    desc: 'Thành phố đáng sống – du lịch biển', cx: 130, cy: 202, labelSide: 'right' },
  { name: 'Bình Phước', desc: 'Cửa ngõ Đông Nam Bộ – khu công nghiệp', cx: 90, cy: 298, labelSide: 'left'  },
  { name: 'TP. HCM',    desc: 'Đô thị lớn nhất – trung tâm tài chính', cx: 102, cy: 320, labelSide: 'right' },
  { name: 'Vũng Tàu',   desc: 'Thành phố biển – dầu khí & du lịch',   cx: 118, cy: 334, labelSide: 'right' },
]

/* Simplified Vietnam outline – viewBox 0 0 160 400 */
const VN_PATH =
  'M 72,5 C 82,2 96,10 110,24 L 118,42 120,60 118,78 112,94 ' +
  'L 108,110 106,126 C 112,136 120,148 126,158 L 130,174 134,190 132,206 ' +
  'L 134,222 138,240 136,256 132,272 126,288 120,306 ' +
  'L 110,318 C 116,326 118,332 116,340 L 108,352 96,362 80,374 66,378 52,368 40,356 ' +
  'C 30,340 25,324 28,308 L 34,292 38,278 36,262 ' +
  'C 34,248 32,234 30,220 L 28,206 28,190 ' +
  'C 30,174 32,158 34,142 L 36,126 38,110 38,94 40,80 ' +
  'C 42,64 44,48 52,34 L 60,20 68,10 Z'

export function KeyLocations() {
  return (
    <section className="py-16 md:py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={fadeUp} className="inline-block">
            <img
              src={icTitle3} srcSet={`${icTitle3} 1x, ${icTitle3x2} 2x, ${icTitle3x3} 3x`}
              alt="Lĩnh vực" className="h-auto w-auto mx-auto"
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-[Playfair_Display] font-bold text-2xl md:text-h3 text-text-primary uppercase"
          >
            Các địa bàn trọng điểm
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="w-48 h-0.5 mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, rgba(203,150,76,0.00) 3%, #DBAB59 50%, rgba(203,150,76,0.00) 97%)' }}
          />
          <motion.p variants={fadeUp} className="mt-5 text-text-secondary text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hiện diện tại 7 địa bàn chiến lược trải dài từ Bắc vào Nam, AFT Group kiến tạo
            mạng lưới đầu tư bất động sản rộng khắp Việt Nam.
          </motion.p>
        </motion.div>

        {/* Map + city list */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-center">

          {/* Left city list */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-3 lg:items-end"
          >
            {CITIES.filter(c => c.labelSide === 'left').map(city => (
              <motion.div
                key={city.name}
                variants={staggerItem}
                className="flex flex-col lg:items-end text-left lg:text-right p-4 rounded-xl max-w-xs"
                style={{
                  border: '1px solid rgba(246,247,249,0.08)',
                  background: 'rgba(11,31,58,0.40)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-2 lg:flex-row-reverse">
                  <span
                    className="size-2 rounded-full shrink-0"
                    style={{ background: 'radial-gradient(circle, #F8EBC0 0%, #C6A15B 100%)' }}
                  />
                  <span className="text-text-primary font-[Manrope] font-semibold text-sm">
                    {city.name}
                  </span>
                </div>
                <span className="text-text-secondary text-[12px] font-[Manrope] leading-snug mt-1">
                  {city.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Vietnam SVG map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mx-auto"
            style={{ width: '220px', height: '550px' }}
          >
            <svg
              viewBox="0 0 160 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Glow filter */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="mapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1C5D88" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Vietnam outline */}
              <path
                d={VN_PATH}
                fill="url(#mapGrad)"
                stroke="rgba(198,161,91,0.35)"
                strokeWidth="1.2"
              />

              {/* City pins */}
              {CITIES.map(city => (
                <g key={city.name} filter="url(#glow)">
                  {/* Pulse ring */}
                  <circle cx={city.cx} cy={city.cy} r="7" fill="rgba(198,161,91,0.12)" stroke="rgba(198,161,91,0.30)" strokeWidth="1" />
                  {/* Dot */}
                  <circle cx={city.cx} cy={city.cy} r="3.5" fill="#F8EBC0" />
                </g>
              ))}

              {/* Connecting lines (decorative) */}
              <path
                d="M 82,86 L 106,90 M 82,86 L 66,140 M 66,140 L 130,202"
                stroke="rgba(198,161,91,0.15)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
              />
              <path
                d="M 130,202 L 90,298 M 90,298 L 102,320 M 102,320 L 118,334"
                stroke="rgba(198,161,91,0.15)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
              />
            </svg>

            {/* Glow under map */}
            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(198,161,91,0.15) 0%, transparent 70%)' }}
            />
          </motion.div>

          {/* Right city list */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-3"
          >
            {CITIES.filter(c => c.labelSide === 'right').map(city => (
              <motion.div
                key={city.name}
                variants={staggerItem}
                className="flex flex-col p-4 rounded-xl max-w-xs"
                style={{
                  border: '1px solid rgba(246,247,249,0.08)',
                  background: 'rgba(11,31,58,0.40)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="size-2 rounded-full shrink-0"
                    style={{ background: 'radial-gradient(circle, #F8EBC0 0%, #C6A15B 100%)' }}
                  />
                  <span className="text-text-primary font-[Manrope] font-semibold text-sm">
                    {city.name}
                  </span>
                </div>
                <span className="text-text-secondary text-[12px] font-[Manrope] leading-snug mt-1 ml-4">
                  {city.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
