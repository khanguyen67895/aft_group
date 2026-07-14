import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'
import { EditableText, EditableImage } from '@/components/cms'
import icLeft  from '@/assets/image/ic_left.png'
import icRight from '@/assets/image/ic_right.png'
import icField1 from '@/assets/image/ic_field1.png'
import icField2 from '@/assets/image/ic_field2.jpg'
import icField3 from '@/assets/image/ic_field3.jpg'

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
    view: 'View sông Hàn',
    area: '57,6–89m²',
    beds: 2,
    wc: 2,
    developer: 'Tập đoàn Sun Group',
    address: 'Ngã tư đường Nguyễn Đình Thi - 29/3, Hòa Xuân, Đà Nẵng',
  },
  {
    img: icField2,
    name: 'AFT Riverside',
    location: 'Đà Nẵng',
    view: 'View bến du thuyền',
    area: '65–95m²',
    beds: 2,
    wc: 2,
    developer: 'Tập đoàn Sun Group',
    address: 'Sun Symphony Residence, Lê Văn Duyệt, phường Sơn Trà, TP.Đà Nẵng',
  },
  {
    img: icField3,
    name: 'Golden Gate Tower',
    location: 'Đà Nẵng',
    view: 'View thành phố',
    area: '75,6–110m²',
    beds: 3,
    wc: 2,
    developer: 'Địa ốc Foodinco',
    address: 'Số 58 Bạch Đằng, phường Hải Châu, TP.Đà Nẵng',
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

function ProjectCardContent({ project, index }: { project: Project; index: number }) {
  return (
    <>
      {/* Image — no overlay */}
      <div className="overflow-hidden h-56 md:h-69">
        <EditableImage
          id={`sectors.projects.item.${index}.img`}
          fallbackSrc={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Name — outside image, gold shimmer */}
      <EditableText
        id={`sectors.projects.item.${index}.name`}
        fallbackVi={project.name}
        as="h3"
        className="font-[Playfair_Display] font-bold text-xl leading-tight px-4 pt-4 pb-1"
        style={{
          background: 'var(--Main-Colors-Primary-Radius, radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%))',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'text-shimmer 2.8s ease-in-out infinite',
        }}
      />

      {/* Specs */}
      <div className="flex mt-4 flex-col gap-2.5 px-4 pb-4">
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
            <IconEye />
            <EditableText id={`sectors.projects.item.${index}.view`} fallbackVi={project.view} as="span" className="truncate" />
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
            <IconArea />
            <EditableText id={`sectors.projects.item.${index}.area`} fallbackVi={project.area} as="span" className="truncate" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
            <IconBed />
            <EditableText id={`sectors.projects.item.${index}.beds`} fallbackVi={`${project.beds} phòng ngủ`} as="span" className="truncate" />
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary text-base font-[Manrope] min-w-0">
            <IconWC />
            <EditableText id={`sectors.projects.item.${index}.wc`} fallbackVi={`${project.wc} WC`} as="span" className="truncate" />
          </div>
        </div>
        <div className="flex items-start gap-1.5 text-text-secondary text-base font-[Manrope]">
          <IconBuilding />
          <span>
            <EditableText id="sectors.projects.label.developer" fallbackVi="Chủ đầu tư:" as="span" />{' '}
            <EditableText id={`sectors.projects.item.${index}.developer`} fallbackVi={project.developer} as="span" className="text-text-primary" />
          </span>
        </div>
        <div className="flex items-start gap-1.5 text-text-secondary text-base font-[Manrope]">
          <IconPin />
          <EditableText id={`sectors.projects.item.${index}.address`} fallbackVi={project.address} as="span" />
        </div>
      </div>
    </>
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
    <section className="py-8 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-50">

        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div variants={fadeUp}>
            <EditableText
              id="sectors.projects.title"
              fallbackVi="Các dự án tiêu biểu"
              as="h2"
              className="mt-5 font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase"
            />
          </motion.div>
        </motion.div>

        {/* Carousel — desktop/tablet: 3-card grid + arrows */}
        <div className="relative hidden md:block">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={start === 0}
            aria-label="Previous"
            className="absolute -left-6 md:-left-6 top-1/2 -translate-y-1/2 z-10 size-10 flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <EditableImage id="sectors.projects.img.arrowPrev" fallbackSrc={icLeft} alt="prev" className="w-full h-full object-contain" />
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
                {visible.map((project, idx) => (
                  <div
                    key={project.name}
                    className="overflow-hidden max-w-102.75 rounded-2xl flex flex-col"
                    style={{
                      border: '1px solid rgba(246,247,249,0.08)',
                      background: 'rgba(11,31,58,0.60)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <ProjectCardContent project={project} index={start + idx} />
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
            <EditableImage id="sectors.projects.img.arrowNext" fallbackSrc={icRight} alt="next" className="w-full h-full object-contain" />
          </button>
        </div>

        {/* Carousel — mobile: horizontal scroll-snap, 1 card at a time (peek of next) */}
        <div className="md:hidden -mx-4 px-4">
          <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-4 pb-2">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.name}
                className="overflow-hidden shrink-0 snap-center w-[85vw] rounded-2xl flex flex-col"
                style={{
                  border: '1px solid rgba(246,247,249,0.08)',
                  background: 'rgba(11,31,58,0.60)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <ProjectCardContent project={project} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
