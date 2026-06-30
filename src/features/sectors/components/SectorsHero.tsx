import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewport } from '@/lib/motion'

import icBgField      from '@/assets/image/ic_bg_field.png'
import icBgField2x    from '@/assets/image/ic_bg_field@2x.png'
import icBgField3x    from '@/assets/image/ic_bg_field@3x.png'
import icSubBgField   from '@/assets/image/ic_sub_bg_field.png'
import icSubBgField2x from '@/assets/image/ic_sub_bg_field@2x.png'
import icSubBgField3x from '@/assets/image/ic_sub_bg_field@3x.png'
import icField1    from '@/assets/image/ic_item_field1.jfif'
import icField2    from '@/assets/image/ic_item_field2.jfif'
import icField3    from '@/assets/image/ic_item_field3.jfif'
import icField4    from '@/assets/image/ic_item_field4.jfif'
import icField5    from '@/assets/image/ic_item_field5.jfif'
import icLeft    from '@/assets/image/ic_left.png'
import icLeft2x  from '@/assets/image/ic_left@2x.png'
import icLeft3x  from '@/assets/image/ic_left@3x.png'
import icRight   from '@/assets/image/ic_right.png'
import icRight2x from '@/assets/image/ic_right@2x.png'
import icRight3x from '@/assets/image/ic_right@3x.png'

const SLIDES = [
  { img: icField1, name: 'Aurum Complex',     location: 'TP. Hồ Chí Minh' },
  { img: icField2, name: 'AFT Riverside',     location: 'Đà Nẵng'         },
  { img: icField3, name: 'Golden Gate Tower', location: 'Hà Nội'          },
  { img: icField4, name: 'Binh Phuoc Land',  location: 'Bình Phước'      },
  { img: icField5, name: 'Ha Long Land',  location: 'Hạ Long'      },
]

const STATS = [
  { value: '15+',     unit: '',   label: 'Dự án đã và đang phát triển' },
  { value: '1.000+',  unit: '',   label: 'Sản phẩm đã bàn giao'        },
  { value: '500',    unit: '+ha', label: 'Quỹ đất phát triển'          },
  { value: '10.000+', unit: '',   label: 'Khách hàng đã phục vụ'       },
]

/*
  x = left edge offset from container-center (all cards anchored at left: 50%)
  gap = 10px between cards

  Center (w=484):  left=-242
  ±1    (w=210):   right edge of ±1-left  = -242-10 = -252  → left = -252-210 = -462
                   left  edge of ±1-right = +242+10 = +252
  ±2    (w=140):   right edge of ±2-left  = -462-10 = -472  → left = -472-140 = -612
                   left  edge of ±2-right = +252+210+10 = +472
  y = (600 - h) / 2  so cards are vertically centered in the 600px strip
*/
const SLOT: Record<number, { w: number; h: number; x: number; y: number; opacity: number; z: number }> = {
  [-2]: { w: 140, h: 244, x: -612, y: 178, opacity: 0.60, z: 1 },
  [-1]: { w: 210, h: 354, x: -462, y: 123, opacity: 0.82, z: 3 },
  [0]:  { w: 484, h: 600, x: -242, y: 0,   opacity: 1.00, z: 5 },
  [1]:  { w: 210, h: 354, x:  252, y: 123, opacity: 0.82, z: 3 },
  [2]:  { w: 140, h: 244, x:  472, y: 178, opacity: 0.60, z: 1 },
}

/* Arrow icon positions: sit at the inner boundary of the ±2 cards, overlapping them */
const ARROW_RIGHT_LEFT = 'calc(50% + 590px)'   /* right arrow left edge */
const ARROW_LEFT_LEFT  = 'calc(50% - 630px)'   /* left  arrow left edge */

function getSlot(index: number, active: number, total: number): number {
  let s = (index - active + total) % total
  if (s > Math.floor(total / 2)) s -= total
  return s
}

const AUTOPLAY_MS = 4000

export function SectorsHero() {
  const [active, setActive] = useState(0)
  const total = SLIDES.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(i => (i + 1) % total)
    }, AUTOPLAY_MS)
  }, [total])

  useEffect(() => {
    startAuto()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startAuto])

  const handlePrev = () => { setActive(i => (i - 1 + total) % total); startAuto() }
  const handleNext = () => { setActive(i => (i + 1) % total);         startAuto() }

  return (
    <section className="bg-secondary pt-24 pb-0">

      {/* ══ Upper zone — backgrounds confined here, do NOT bleed into Stats ══ */}
      <div className="relative overflow-hidden">

        {/* Landscape background */}
        <img
          src={icBgField}
          srcSet={`${icBgField} 1x, ${icBgField2x} 2x, ${icBgField3x} 3x`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          style={{ zIndex: 0, filter: 'brightness(0.4) blur(1px)' }}
        />
        {/* Blue-wave overlay — screen blend: black→transparent, blue beams visible */}
        <img
          src={icSubBgField}
          srcSet={`${icSubBgField} 1x, ${icSubBgField2x} 2x, ${icSubBgField3x} 3x`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-10"
          style={{ zIndex: 1, mixBlendMode: 'screen' }}
        />

        {/* Top fade: bg-secondary (#0B1F3A) → transparent */}
        <div
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ zIndex: 2, background: 'linear-gradient(to bottom, #0B1F3A 0%, transparent 100%)' }}
        />
        {/* Bottom fade: transparent → bg-secondary (#0B1F3A) */}
        <div
          className="absolute inset-x-0 bottom-0 h-100 pointer-events-none"
          style={{ zIndex: 2, background: 'linear-gradient(to top, #0B1F3A 0%, transparent 100%)' }}
        />

      {/* ── Title ─────────────────────────────────────── */}
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 mb-10"
      >
        <motion.h1
          variants={fadeUp}
          className="font-[Playfair_Display] font-bold text-3xl md:text-5xl text-text-primary uppercase tracking-wide"
        >
          Bất động sản – Dự án
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-3 text-base md:text-xl text-text-secondary font-[Manrope]">
          Kiến tạo không gian sống · Gia tăng giá trị bền vững
        </motion.p>
      </motion.div>

      {/* ── Carousel ──────────────────────────────────── */}
      <div className="relative" style={{ height: '600px' }}>

        {/* Left arrow — overlaps the ±2 left card */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute z-20 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center"
          style={{ left: ARROW_LEFT_LEFT }}
        >
          <img
            src={icLeft} srcSet={`${icLeft} 1x, ${icLeft2x} 2x, ${icLeft3x} 3x`}
            alt="prev" className="w-full h-full object-contain"
          />
        </button>

        {/* Slides */}
        {SLIDES.map((slide, i) => {
          const slot = getSlot(i, active, total)
          if (Math.abs(slot) > 2) return null
          const cfg = SLOT[slot]

          return (
            <motion.div
              key={slide.name}
              className="absolute top-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{ left: '50%' }}
              animate={{
                width:   cfg.w,
                height:  cfg.h,
                x:       cfg.x,
                y:       cfg.y,
                opacity: cfg.opacity,
                zIndex:  cfg.z,
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 30 }}
              onClick={() => { setActive(i); startAuto() }}
            >
              <img
                src={slide.img}
                srcSet={`${slide.img}`}
                alt={slide.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay: name + location on center card only */}
              {slot === 0 && (
                <div
                  className="absolute inset-0 flex items-center"
                  style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.18) 55%, transparent 100%)' }}
                >
                  <div className="w-full text-center pb-8 px-4">
                    <div className="font-[Playfair_Display] font-bold text-white text-[40px] uppercase tracking-wide">
                      {slide.name}
                    </div>
                    <div className="text-white text-2xl font-[Manrope] font-semibold mt-1.5 tracking-[0.2em] uppercase">
                      {slide.location}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}

        {/* Right arrow — overlaps the ±2 right card */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute z-20 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center"
          style={{ left: ARROW_RIGHT_LEFT }}
        >
          <img
            src={icRight} srcSet={`${icRight} 1x, ${icRight2x} 2x, ${icRight3x} 3x`}
            alt="next" className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* ── Description ───────────────────────────────── */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10 text-center mx-auto max-w-2xl px-6 mt-10 text-text-secondary text-base md:text-xl leading-relaxed font-[Manrope]"
      >
        <span className="text-text-primary font-semibold">AFT GROUP</span> phát triển và quản lý dự án bất động
        sản cao cấp, khu đô thị hiện đại và bất động sản công nghiệp. Chúng tôi kiến tạo không gian sống đẳng
        cấp, góp phần thúc đẩy phát triển kinh tế – xã hội bền vững.
      </motion.p>

      </div>{/* ── end upper zone ── */}

      {/* ── Stats ─────────────────────────────────────── */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10 mt-10"
      >
        {/* Top border – full width */}
        <div className="w-full h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />

        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {STATS.map(({ value, unit, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="flex items-baseline">
                  <span
                    className="font-[Manrope] font-bold text-[52px] md:text-4xl"
                    style={{
                      background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 50%, #C6A15B 75%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'text-shimmer 2.8s ease-in-out infinite',
                    }}
                  >
                    {value}
                  </span>
                  {unit && (
                    <span
                      className="font-[Manrope] font-bold text-xl md:text-2xl ml-0.5"
                      style={{
                        background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 50%, #C6A15B 75%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'text-shimmer 2.8s ease-in-out infinite',
                      }}
                    >
                      {unit}
                    </span>
                  )}
                </div>
                <span className="mt-1.5 text-xs md:text-base text-text-secondary font-[Manrope] leading-snug">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom border – full width */}
        <div className="w-full h-px" style={{ background: 'rgba(246,247,249,0.10)' }} />
      </motion.div>
    </section>
  )
}
