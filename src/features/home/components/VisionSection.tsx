import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeLeft, fadeRight, scaleIn, viewport } from '@/lib/motion'
import icBgVision    from '@/assets/image/ic_bg_vision.png'
import icBgVisionMb    from '@/assets/image/ic_bg_vision_mb.png'
import icItem1       from '@/assets/image/ic_item_vision1.png'
import icItem2       from '@/assets/image/ic_item_vision2.png'
import icSub1        from '@/assets/image/ic_subitem1.png'
import icSub2        from '@/assets/image/ic_subitem2.png'
import icSub3        from '@/assets/image/ic_subitem3.png'

const CARDS = [
  { key: 'asset',  title: 'Tài sản',   icon: icSub1, desc: 'Quản trị và phát triển tài sản, gia tăng giá trị dài hạn.' },
  { key: 'vision', title: 'Tầm nhìn',  icon: icSub2, desc: 'Chiến lược bền vững, tạo giá trị vượt thời gian.' },
  { key: 'tech',   title: 'Công nghệ', icon: icSub3, desc: 'Công nghệ tiên tiến, đổi mới không ngừng.' },
]

export function VisionSection() {
  const [active, setActive] = useState('vision')
  const activeIdx = CARDS.findIndex(c => c.key === active)
  const mobileTrackRef = useRef<HTMLDivElement>(null)
  const programmaticUntil = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => {
        const i = CARDS.findIndex(c => c.key === prev)
        return CARDS[(i + 1) % CARDS.length].key
      })
    }, 3000)
    return () => clearInterval(t)
  }, [])

  // Keep the touch-scrollable mobile track in sync with the auto-rotating
  // active card (from autoplay above, or from a tap on a card).
  // Scrolls the track's own scrollLeft directly instead of card.scrollIntoView() —
  // scrollIntoView walks every scrollable ancestor including the page itself, so
  // once the user had scrolled past this section the background autoplay tick
  // would yank the whole page back up to "bring the card into view".
  // Uses getBoundingClientRect() (not card.offsetLeft) because the track itself
  // isn't a positioned element — offsetLeft would resolve against whatever
  // positioned ancestor is above it instead of the track, always computing ~0.
  useEffect(() => {
    const track = mobileTrackRef.current
    if (!track) return
    const card = track.children[activeIdx] as HTMLElement | undefined
    if (!card) return
    const delta = card.getBoundingClientRect().left - track.getBoundingClientRect().left
    const target = track.scrollLeft + delta - (track.clientWidth - card.clientWidth) / 2
    // Mute the onScroll → setActive sync below while this programmatic scroll is
    // in flight — otherwise every 'scroll' event fired mid-animation reads the
    // not-yet-arrived scrollLeft, recomputes `active` from it, and snaps it right
    // back to the old card, which cancels the scroll before it can go anywhere.
    programmaticUntil.current = Date.now() + 700
    track.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeIdx])

  // If the user swipes the track manually, snap `active` to whichever card
  // ends up nearest so the opacity/scale styling follows the drag.
  const handleMobileScroll = () => {
    if (Date.now() < programmaticUntil.current) return
    const track = mobileTrackRef.current
    if (!track) return
    const step = track.scrollWidth / CARDS.length
    const idx = Math.min(CARDS.length - 1, Math.max(0, Math.round(track.scrollLeft / step)))
    setActive(CARDS[idx].key)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Desktop BG */}
      <EditableImage id="home.vision.img.bgDesktop" fallbackSrc={icBgVision}
        alt="" className="hidden md:block w-full h-auto" />
      {/* Mobile BG */}
      <EditableImage id="home.vision.img.bgMobile" fallbackSrc={icBgVisionMb}
        alt="" className="md:hidden w-full h-auto" />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 overflow-hidden flex flex-col items-center justify-center md:px-8">

        {/* Desktop */}
        <div className="hidden md:grid pb-40 grid-cols-3 items-center w-full max-w-7xl mx-auto">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('asset')}
          >
            <VisionCard {...CARDS[0]} index={0} isActive={active === 'asset'} floatDelay={0} />
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('vision')}
          >
            <VisionCard {...CARDS[1]} index={1} isActive={active === 'vision'} center floatDelay={0.9} />
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
            className="flex justify-center cursor-pointer" onClick={() => setActive('tech')}
          >
            <VisionCard {...CARDS[2]} index={2} isActive={active === 'tech'} floatDelay={1.8} />
          </motion.div>
        </div>

        {/* Mobile: horizontal peek carousel — native scroll-snap for smooth touch drag */}
        <div className="w-full md:hidden pb-4">
          <div
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            className="flex items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
            style={{ paddingLeft: '22vw', paddingRight: '22vw', gap: '6vw' }}
          >
            {CARDS.map((card, i) => (
              <div
                key={card.key}
                className="shrink-0 snap-center flex justify-center cursor-pointer"
                style={{ width: '55vw' }}
                onClick={() => setActive(card.key)}
              >
                <VisionCard {...card} index={i} isActive={active === card.key} center floatDelay={0} />
              </div>
            ))}
          </div>
        </div>
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

function VisionCard({ title, icon, desc, isActive, center, floatDelay = 0, index }: {
  title: string; icon: string; desc: string; isActive: boolean; center?: boolean; floatDelay?: number; index: number
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
        <EditableImage
          id={center ? 'home.vision.img.cardFrameCenter' : 'home.vision.img.cardFrameSide'}
          fallbackSrc={center ? icItem2 : icItem1}
          alt=""
          className={`block max-w-full ${center ? 'w-84' : 'w-95'}`}
        />

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {center ? (
            <div className="flex flex-col items-center text-center gap-1.5 md:gap-3 px-4 md:px-8">
              <span style={iconStyle}>
                <EditableImage
                  id={`home.vision.img.cards.${index}.icon`}
                  fallbackSrc={icon}
                  alt="" className="size-10 md:size-18.5 object-contain"
                />
              </span>
              <EditableText
                id={`home.vision.cards.${index}.title`} fallbackVi={title}
                style={titleStyle} className="font-[Playfair_Display] font-bold text-text-primary text-sm md:text-2xl uppercase tracking-widest"
              />
              <EditableText
                id={`home.vision.cards.${index}.desc`} fallbackVi={desc} as="p"
                style={descStyle} className="text-xs md:text-xl text-text-secondary leading-snug max-w-[90%] md:max-w-60"
              />
            </div>
          ) : (
            <div className="flex gap-4 items-center justify-center px-6 w-full">
              <span style={iconStyle}>
                <EditableImage
                  id={`home.vision.img.cards.${index}.icon`}
                  fallbackSrc={icon}
                  alt="" className="size-15 object-contain shrink-0"
                />
              </span>
              <div className="flex flex-col items-start gap-2">
                <EditableText
                  id={`home.vision.cards.${index}.title`} fallbackVi={title}
                  style={titleStyle} className="font-[Playfair_Display] font-bold text-text-primary text-2xl"
                />
                <EditableText
                  id={`home.vision.cards.${index}.desc`} fallbackVi={desc} as="p"
                  style={descStyle} className="text-base text-text-secondary leading-relaxed max-w-50"
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
