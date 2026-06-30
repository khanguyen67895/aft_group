import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'
import icLeft    from '@/assets/image/ic_left.png'
import icLeft2x  from '@/assets/image/ic_left@2x.png'
import icLeft3x  from '@/assets/image/ic_left@3x.png'
import icRight   from '@/assets/image/ic_right.png'
import icRight2x from '@/assets/image/ic_right@2x.png'
import icRight3x from '@/assets/image/ic_right@3x.png'
import icField1 from '@/assets/image/ic_item_field1.jfif'
import icField2 from '@/assets/image/ic_item_field2.jfif'
import icField3 from '@/assets/image/ic_item_field3.jfif'
import icField4 from '@/assets/image/ic_item_field4.jfif'

interface Project {
  img: string
  name: string
  location: string
  view: string
  area: string
  beds: number
  wc: number
  developer: string
  address: string
}

const PROJECTS: Project[] = [
  {
    img: icField1,
    name: 'S-Light Tower: Đà Nẵng',
    location: 'Đà Nẵng',
    view: 'View sông Sài Gòn',
    area: '57,6–89m²',
    beds: 2,
    wc: 2,
    developer: 'Tập đoàn AFT Group',
    address: 'Quận 7, TP. Hồ Chí Minh',
  },
  {
    img: icField2,
    name: 'AFT Riverside',
    location: 'Đà Nẵng',
    view: 'View sông Hàn',
    area: '65–95m²',
    beds: 2,
    wc: 2,
    developer: 'Tập đoàn AFT Group',
    address: 'Quận Sơn Trà, TP. Đà Nẵng',
  },
  {
    img: icField3,
    name: 'Golden Gate Tower',
    location: 'Hà Nội',
    view: 'View thành phố',
    area: '75,6–110m²',
    beds: 3,
    wc: 2,
    developer: 'Tập đoàn AFT Group',
    address: 'Cầu Giấy, TP. Hà Nội',
  },
  {
    img: icField4,
    name: 'Binh Phuoc Land',
    location: 'Bình Phước',
    view: 'View thiên nhiên',
    area: '500 ha',
    beds: 2,
    wc: 2,
    developer: 'Tập đoàn AFT Group',
    address: 'Đồng Phú, Bình Phước',
  },
]

const VISIBLE = 3

function IconEye() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
  )
}
function IconArea() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3L21 7L7 21L3 17L17 3Z" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 7L14.5 5.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 10L11.5 8.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 13L8.5 11.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 16L5.5 14.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
function IconBed() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C5.10457 11 6 11.8954 6 13V14H18V13C18 11.8954 18.8954 11 20 11C21.1046 11 22 11.8954 22 13V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V13C2 11.8954 2.89543 11 4 11Z" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 11V8C4 6.34315 5.34315 5 7 5H17C18.6569 5 20 6.34315 20 8V11" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 5V14" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
function IconWC() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12H20C20.5523 12 21 12.4477 21 13V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V13C3 12.4477 3.44772 12 4 12Z" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 12V5C6 3.89543 6.89543 3 8 3H11V5.25" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 21L5 19.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 21L19 19.5" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
function IconBuilding() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 21H21" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 21V7L13 3V21" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 21V11L13 7" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 8.99988V9.00988" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 11.9999V12.0099" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 14.9999V15.0099" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 17.9999V18.0099" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="11" r="3" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.657 16.657L13.414 20.9C12.6331 21.68 11.3679 21.68 10.587 20.9L6.343 16.657C3.21892 13.5327 3.21901 8.46747 6.34319 5.34334C9.46738 2.21921 14.5326 2.21921 17.6568 5.34334C20.781 8.46747 20.7811 13.5327 17.657 16.657V16.657Z" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export function FeaturedProjects() {
  const [start, setStart] = useState(0)
  const [dir, setDir] = useState(1)
  const maxStart = PROJECTS.length - VISIBLE

  const prev = () => { setDir(-1); setStart(s => Math.max(0, s - 1)) }
  const next = () => { setDir(1);  setStart(s => Math.min(maxStart, s + 1)) }

  const visible = PROJECTS.slice(start, start + VISIBLE)

  return (
    <section className="py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-45 md:px-50">

        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-10 md:mb-14"
        >
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase"
          >
            Các dự án tiêu biểu
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={start === 0}
            aria-label="Previous"
            className="absolute -left-6 md:-left-6 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <img src={icLeft} srcSet={`${icLeft} 1x, ${icLeft2x} 2x, ${icLeft3x} 3x`} alt="prev" className="w-full h-full object-contain" />
          </button>

          {/* 3 visible cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={start}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-3 gap-6"
              >
                {visible.map((project) => (
                  <div
                    key={project.name}
                    className="overflow-hidden max-w-102.75 rounded-2xl flex flex-col"
                    style={{
                      border: '1px solid rgba(246,247,249,0.08)',
                      background: 'rgba(11,31,58,0.60)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Image — no overlay */}
                    <div className="overflow-hidden" style={{ height: '276px' }}>
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Name — outside image, gold shimmer */}
                    <h3
                      className="font-[Playfair_Display] font-bold text-xl leading-tight px-4 pt-4 pb-1"
                      style={{
                        background: 'var(--Main-Colors-Primary-Radius, radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, var(--Miscellaneous-Button---Tinted-Fill, rgba(0, 122, 255, 0.15)) 100%))',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'text-shimmer 2.8s ease-in-out infinite',
                      }}
                    >
                      {project.name}
                    </h3>

                    {/* Specs */}
                    <div className="flex mt-4 flex-col gap-2.5 px-4 pb-4">
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
                          <IconEye /><span className="truncate">{project.view}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
                          <IconArea /><span className="truncate">{project.area}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
                          <IconBed /><span className="truncate">{project.beds} phòng ngủ</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
                          <IconWC /><span className="truncate">{project.wc} WC</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5 text-text-secondary text-base font-[Manrope]">
                        <IconBuilding />
                        <span>Chủ đầu tư: <span className="text-text-primary">{project.developer}</span></span>
                      </div>
                      <div className="flex items-start gap-1.5 text-text-secondary text-base font-[Manrope]">
                        <IconPin /><span>{project.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={start >= maxStart}
            aria-label="Next"
            className="absolute -right-6 md:-right-6 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <img src={icRight} srcSet={`${icRight} 1x, ${icRight2x} 2x, ${icRight3x} 3x`} alt="next" className="w-full h-full object-contain" />
          </button>
        </div>
      </div>
    </section>
  )
}
