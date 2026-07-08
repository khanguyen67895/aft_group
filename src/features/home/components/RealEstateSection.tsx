import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icTitle3    from '@/assets/image/ic_title3.png'
import icBgLand      from '@/assets/image/ic_bg_land.png'
import icField1      from '@/assets/image/ic_item_field1.png'
import icField1x2    from '@/assets/image/ic_item_field1@2x.png'
import icField1x3    from '@/assets/image/ic_item_field1@3x.png'
import icItemProj    from '@/assets/image/ic_item_project.png'
import icItemProj2x  from '@/assets/image/ic_item_project@2x.png'
import icItemProj3x  from '@/assets/image/ic_item_project@3x.png'
import projThumb1 from '@/assets/image/ic_item_field1.jfif'
import projThumb2 from '@/assets/image/ic_item_field2.jfif'
import projThumb3 from '@/assets/image/ic_item_field3.jfif'
import projThumb4 from '@/assets/image/ic_item_field4.jfif'
import projThumb5 from '@/assets/image/ic_item_field5.jfif'

const STATS = [
  { value: '7',  label: 'Địa bàn trọng điểm', src: icField1,   src2x: icField1x2,   src3x: icField1x3   },
  { value: '3+', label: 'Loại hình dự án',    src: icItemProj, src2x: icItemProj2x, src3x: icItemProj3x },
]

const PROJECT_SLIDES = [
  { img: projThumb1, name: 'Aurum Complex',     location: 'TP. Hồ Chí Minh' },
  { img: projThumb2, name: 'AFT Riverside',     location: 'Đà Nẵng'         },
  { img: projThumb3, name: 'Golden Gate Tower', location: 'Hà Nội'          },
  { img: projThumb4, name: 'Binh Phuoc Land',   location: 'Bình Phước'      },
  { img: projThumb5, name: 'Ha Long Land',      location: 'Hạ Long'         },
]

function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.657 16.657L13.414 20.9C12.6331 21.68 11.3679 21.68 10.587 20.9L6.343 16.657C3.21892 13.5327 3.21901 8.46747 6.34319 5.34334C9.46738 2.21921 14.5326 2.21921 17.6568 5.34334C20.781 8.46747 20.7811 13.5327 17.657 16.657V16.657Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function RealEstateSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState(0)
  const [autoKey, setAutoKey] = useState(0)
  const total = PROJECT_SLIDES.length

  const goTo = (i: number) => { setActive(i); setAutoKey(k => k + 1) }

  // Only observe visibility — avoids burning main-thread/GPU time on the
  // auto-advancing blur-card carousel while it's scrolled off-screen.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-advance — shows one slide at a time, both mobile and desktop, only while in view
  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActive(i => (i + 1) % total), 3500)
    return () => clearInterval(t)
  }, [total, autoKey, inView])

  const current = PROJECT_SLIDES[active]

  return (
    <section ref={sectionRef} className="relative bg-bg overflow-hidden">
      {/* Full-section background — anchored left so buildings aren't cropped */}
      <EditableImage
        id="home.realestate.img.bg"
        fallbackSrc={icBgLand}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* Semi-transparent navy overlay on right — bg still visible through it */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] pointer-events-none" style={{
        background: 'linear-gradient(to right, transparent, rgba(11,31,58,0.78) 55%, rgba(11,31,58,0.88) 100%)',
      }} />

      <div className="relative grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-140">

        {/* Left: featured-project showcase — one slide visible at a time, auto-advancing */}
        <div className="order-2 lg:order-1 lg:flex lg:items-center lg:h-full">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-84 lg:h-100 lg:w-full lg:mr-10">

            {/* Info card overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-84 rounded-2xl p-4"
                style={{
                  border: '1px solid rgba(246,247,249,0.10)',
                  background: 'rgba(11,31,58,0.60)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <EditableText
                  id="home.realestate.badge.featured"
                  fallbackVi="Dự án tiêu biểu"
                  className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary bg-text-primary/10 rounded-full px-3 py-1"
                />

                <div className="flex items-center gap-3 mt-3">
                  <EditableImage
                    id={`home.realestate.projectslides.${active}.img`}
                    fallbackSrc={current.img}
                    alt={current.name}
                    className="size-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <EditableText
                      id={`home.realestate.projectslides.${active}.name`}
                      fallbackVi={current.name}
                      as="div"
                      className="font-[Playfair_Display] font-bold text-lg text-text-primary uppercase truncate"
                    />
                    <div className="flex items-center gap-1 mt-1 text-text-secondary text-sm font-[Manrope]">
                      <IconPin />
                      <EditableText
                        id={`home.realestate.projectslides.${active}.location`}
                        fallbackVi={current.location}
                        className="truncate uppercase tracking-wide"
                      />
                    </div>
                  </div>
                </div>

                <Button variant="gold" size="sm" icon={true} className="mt-4 w-full">
                  <EditableText id="home.realestate.button.viewdetail" fallbackVi="Xem chi tiết" />
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-10">
              {PROJECT_SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'w-5 bg-primary' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <motion.div
          className="order-1 lg:order-2 flex flex-col justify-center py-12 lg:py-16 px-4 md:px-8 lg:px-0 relative z-10"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <EditableImage id="home.realestate.img.title" fallbackSrc={icTitle3} alt="Lĩnh vực" className="h-auto w-auto" />
          </motion.div>

          <motion.h2 variants={fadeUp}
            className="mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight"
          >
            <EditableText id="home.realestate.title" fallbackVi="Bất động sản và dự án" className="block text-3xl md:text-[40px] uppercase" />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-xl text-text-secondary leading-relaxed max-w-lg">
            <EditableText
              id="home.realestate.subtitle"
              fallbackVi="Môi giới, phát triển dự án và bất động sản du lịch – nghỉ dưỡng tại các địa bàn trọng điểm. Tài sản thực làm nền tảng vay vốn và tạo dòng tiền ổn định cho hệ sinh thái."
            />
          </motion.p>

          <motion.div variants={staggerContainer(0.1)} className="flex flex-row gap-3 mt-8">
            {STATS.map(({ value, label, src }, i) => (
              <motion.div key={label} variants={staggerItem}
                className="flex items-center gap-3 px-4 py-3.5 flex-1 sm:flex-none sm:w-72"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(246,247,249,0.10)',
                  background: 'rgba(11,31,58,0.35)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <EditableImage
                  id={`home.realestate.stats.${i}.icon`}
                  fallbackSrc={src}
                  alt={label}
                  className="size-11 object-contain shrink-0"
                />
                <div>
                  <EditableText id={`home.realestate.stats.${i}.value`} fallbackVi={value} as="div" className="text-2xl font-bold text-text-primary font-[Manrope]" />
                  <EditableText id={`home.realestate.stats.${i}.label`} fallbackVi={label} as="div" className="text-base text-text-secondary font-[Manrope] leading-snug mt-0.5" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeRight} className="mt-10">
            <Button variant="gold" size="md" icon={true}>
              <EditableText id="home.realestate.button.explore" fallbackVi="Khám phá dự án" />
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
