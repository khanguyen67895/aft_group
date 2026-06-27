import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewport } from '@/lib/motion'
import icBgVision    from '@/assets/image/ic_bg_vision.png'
import icBgVision2x  from '@/assets/image/ic_bg_vision@2x.png'
import icBgVision3x  from '@/assets/image/ic_bg_vision@3x.png'
import icItem1       from '@/assets/image/ic_item_vision1.png'
import icItem1x2     from '@/assets/image/ic_item_vision1@2x.png'
import icItem1x3     from '@/assets/image/ic_item_vision1@3x.png'
import icItem2       from '@/assets/image/ic_item_vision2.png'
import icItem2x2     from '@/assets/image/ic_item_vision2@2x.png'
import icSub1        from '@/assets/image/ic_subitem1.png'
import icSub1x2      from '@/assets/image/ic_subitem1@2x.png'
import icSub1x3      from '@/assets/image/ic_subitem1@3x.png'
import icSub2        from '@/assets/image/ic_subitem2.png'
import icSub2x2      from '@/assets/image/ic_subitem2@2x.png'
import icSub2x3      from '@/assets/image/ic_subitem2@3x.png'
import icSub3        from '@/assets/image/ic_subitem3.png'
import icSub3x2      from '@/assets/image/ic_subitem3@2x.png'
import icSub3x3      from '@/assets/image/ic_subitem3@3x.png'

type IconAsset = { src: string; x2: string; x3: string }

const CARDS = [
  { key: 'asset',  title: 'Tài sản',   icon: { src: icSub1, x2: icSub1x2, x3: icSub1x3 }, desc: 'Quản trị và phát triển tài sản, gia tăng giá trị dài hạn.' },
  { key: 'vision', title: 'Tầm nhìn',  icon: { src: icSub2, x2: icSub2x2, x3: icSub2x3 }, desc: 'Chiến lược bền vững, tạo giá trị vượt thời gian.' },
  { key: 'tech',   title: 'Công nghệ', icon: { src: icSub3, x2: icSub3x2, x3: icSub3x3 }, desc: 'Công nghệ tiên tiến, đổi mới không ngừng.' },
]

export function VisionSection() {
  const [active, setActive] = useState('vision')

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => {
        const i = CARDS.findIndex(c => c.key === prev)
        return CARDS[(i + 1) % CARDS.length].key
      })
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* BG image — chiều cao section = chiều cao tự nhiên ảnh, không bao giờ bị cắt */}
      <img
        src={icBgVision}
        srcSet={`${icBgVision} 1x, ${icBgVision2x} 2x, ${icBgVision3x} 3x`}
        alt=""
        className="w-full h-auto block"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 md:px-8">

        {/* Desktop */}
        <div className="hidden md:grid pb-40 grid-cols-3 items-center w-full max-w-7xl mx-auto">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('asset')}
          >
            <VisionCard {...CARDS[0]} isActive={active === 'asset'} floatDelay={0} />
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('vision')}
          >
            <VisionCard {...CARDS[1]} isActive={active === 'vision'} center floatDelay={0.9} />
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('tech')}
          >
            <VisionCard {...CARDS[2]} isActive={active === 'tech'} floatDelay={1.8} />
          </motion.div>
        </div>

        {/* Mobile */}
        <motion.div
          variants={staggerContainer(0.12)} initial="hidden" whileInView="show" viewport={viewport}
          className="flex flex-col items-center gap-4 md:hidden"
        >
          {CARDS.map(card => (
            <motion.div key={card.key} variants={fadeUp}
              className="cursor-pointer" onClick={() => setActive(card.key)}
            >
              <VisionCard {...card} isActive={active === card.key} center={card.key === 'vision'} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade → blend vào EcosystemSection (#0B1F3A) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B1F3A)' }}
      />
    </section>
  )
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const CSS_EASE = 'cubic-bezier(0.22,1,0.36,1)'
const TRANS_FULL = `opacity 0.65s ${CSS_EASE}, transform 0.65s ${CSS_EASE}`
const TRANS_OPACITY = `opacity 0.65s ${CSS_EASE}`

function VisionCard({ title, icon, desc, isActive, center, floatDelay = 0 }: {
  title: string; icon: IconAsset; desc: string; isActive: boolean; center?: boolean; floatDelay?: number
}) {
  const iconStyle: React.CSSProperties = {
    opacity:    isActive ? 1 : 0.55,
    transform:  isActive ? 'scale(1)' : 'scale(0.88)',
    transition: TRANS_FULL,
    willChange: 'opacity, transform',
  }
  const titleStyle: React.CSSProperties = {
    opacity:    isActive ? 1 : 0.6,
    transform:  isActive ? 'scale(1)' : 'scale(0.95)',
    transition: TRANS_FULL,
    willChange: 'opacity, transform',
    display: 'block',
  }
  const descStyle: React.CSSProperties = {
    opacity:    isActive ? 1 : 0.45,
    transition: TRANS_OPACITY,
    willChange: 'opacity',
  }

  return (
    <div
      style={{ animation: `vision-float 3s ease-in-out infinite ${floatDelay}s` }}
      className="cursor-pointer"
    >
      <motion.div
        animate={{ scale: isActive ? 1.06 : 0.97 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="relative"
      >
        <img
          src={center ? icItem2 : icItem1}
          srcSet={center
            ? `${icItem2} 1x, ${icItem2x2} 2x`
            : `${icItem1} 1x, ${icItem1x2} 2x, ${icItem1x3} 3x`}
          alt=""
          className={`block ${center ? 'w-84' : 'w-95'}`}
        />

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {center ? (
            <div className="flex flex-col items-center text-center gap-3 px-8">
              <img
                style={iconStyle}
                src={icon.src} srcSet={`${icon.src} 1x, ${icon.x2} 2x, ${icon.x3} 3x`}
                alt="" className="size-18.5 object-contain"
              />
              <span style={titleStyle} className="font-[Playfair_Display] font-bold text-text-primary text-2xl uppercase tracking-widest">
                {title}
              </span>
              <p style={descStyle} className="text-xl text-text-secondary leading-relaxed max-w-60">{desc}</p>
            </div>
          ) : (
            <div className="flex gap-4 items-center justify-center px-6 w-full">
              <img
                style={iconStyle}
                src={icon.src} srcSet={`${icon.src} 1x, ${icon.x2} 2x, ${icon.x3} 3x`}
                alt="" className="size-15 object-contain shrink-0"
              />
              <div className="flex flex-col items-start gap-2">
                <span style={titleStyle} className="font-[Playfair_Display] font-bold text-text-primary text-2xl">{title}</span>
                <p style={descStyle} className="text-base text-text-secondary leading-relaxed max-w-50">{desc}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
