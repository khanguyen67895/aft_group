import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion'
import icTitle2    from '@/assets/image/ic_title2.png'
import icTitle2x2  from '@/assets/image/ic_title2@2x.png'
import icTitle2x3  from '@/assets/image/ic_title2@3x.png'
import icItemCenter from '@/assets/image/ic_item_center.png'
import icItemEco1 from '@/assets/image/ic_item_eco1.png'
import icItemEco2 from '@/assets/image/ic_item_eco2.png'
import icItemEco3 from '@/assets/image/ic_item_eco3.png'
import icItemEco4 from '@/assets/image/ic_item_eco4.png'
import icItemEco5 from '@/assets/image/ic_item_eco5.png'
import icEco1    from '@/assets/image/ic_ecosystem1.png'
import icEco1x2  from '@/assets/image/ic_ecosystem1@2x.png'
import icEco1x3  from '@/assets/image/ic_ecosystem1@3x.png'
import icEco2    from '@/assets/image/ic_ecosystem2.png'
import icEco2x2  from '@/assets/image/ic_ecosystem2@2x.png'
import icEco2x3  from '@/assets/image/ic_ecosystem2@3x.png'
import icEco3    from '@/assets/image/ic_ecosystem3.png'
import icEco3x2  from '@/assets/image/ic_ecosystem3@2x.png'
import icEco3x3  from '@/assets/image/ic_ecosystem3@3x.png'
import icEco4    from '@/assets/image/ic_ecosystem4.png'
import icEco4x2  from '@/assets/image/ic_ecosystem4@2x.png'
import icEco4x3  from '@/assets/image/ic_ecosystem4@3x.png'
import icEco5    from '@/assets/image/ic_ecosystem5.png'
import icEco5x2  from '@/assets/image/ic_ecosystem5@2x.png'
import icEco5x3  from '@/assets/image/ic_ecosystem5@3x.png'

interface Sector {
  id: string; label: string; shortLabel: string
  ecoIcon: string
  ecosystemImg: string; ecosystemImg2x: string; ecosystemImg3x: string
}

const SECTORS: Sector[] = [
  { id: 'realestate', label: 'Bất động sản',             shortLabel: 'BĐS',
    ecoIcon: icItemEco1, ecosystemImg: icEco1, ecosystemImg2x: icEco1x2, ecosystemImg3x: icEco1x3 },
  { id: 'commodity',  label: 'Giao dịch hàng hóa',       shortLabel: 'Hàng hóa',
    ecoIcon: icItemEco3, ecosystemImg: icEco2, ecosystemImg2x: icEco2x2, ecosystemImg3x: icEco2x3 },
  { id: 'mining',     label: 'Thiết bị khai thác vàng',  shortLabel: 'Khai thác',
    ecoIcon: icItemEco4, ecosystemImg: icEco3, ecosystemImg2x: icEco3x2, ecosystemImg3x: icEco3x3 },
  { id: 'asset',      label: 'Quản lý tài sản',          shortLabel: 'Tài sản',
    ecoIcon: icItemEco5, ecosystemImg: icEco4, ecosystemImg2x: icEco4x2, ecosystemImg3x: icEco4x3 },
  { id: 'education',  label: 'Viện nghiên cứu & đào tạo', shortLabel: 'Đào tạo',
    ecoIcon: icItemEco2, ecosystemImg: icEco5, ecosystemImg2x: icEco5x2, ecosystemImg3x: icEco5x3 },
]

export function EcosystemSection() {
  const [selected, setSelected] = useState(SECTORS[0].id)

  useEffect(() => {
    const t = setInterval(() => {
      setSelected(prev => {
        const i = SECTORS.findIndex(s => s.id === prev)
        return SECTORS[(i + 1) % SECTORS.length].id
      })
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const current = SECTORS.find(s => s.id === selected)!

  return (
    <section
      className="-mt-16 relative z-999"
      style={{ background: 'linear-gradient(180deg, transparent 0%, #0B1F3A 8%, #0B1F3A 100%, #14181F 83.48%)' }}
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <img src={icTitle2} srcSet={`${icTitle2} 1x, ${icTitle2x2} 2x, ${icTitle2x3} 3x`}
              alt="Hệ sinh thái AFT" className="h-auto w-auto mx-auto" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 text-h3 font-[Playfair_Display] text-text-primary">
            Hệ sinh thái <span className="text-primary">AFT Holdings</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: wheel */}
          <motion.div
            className="flex justify-center"
            variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
          >
            <EcosystemWheel sectors={SECTORS} selected={selected} onSelect={setSelected} />
          </motion.div>

          {/* Right: ecosystem image */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selected}
                src={current.ecosystemImg}
                srcSet={`${current.ecosystemImg} 1x, ${current.ecosystemImg2x} 2x, ${current.ecosystemImg3x} 3x`}
                alt={current.label}
                className="w-145 h-138 object-contain max-w-lg"
                initial={{ opacity: 0, scale: 0.96, x: 16 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile tabs */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="flex flex-wrap justify-center gap-2 mt-10 lg:hidden"
        >
          {SECTORS.map(s => (
            <button key={s.id} onClick={() => setSelected(s.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide font-[Manrope] transition-all
                ${selected === s.id ? 'bg-primary text-zinc-900' : 'border border-divider text-text-secondary hover:border-primary/40'}`}>
              {s.shortLabel}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EcosystemWheel({ sectors, selected, onSelect }: {
  sectors: Sector[]; selected: string; onSelect: (id: string) => void
}) {
  const cx = 300, cy = 300, ri = 119, ro = 344, N = sectors.length, gapDeg = 5
  const sweepDeg = 360 / N - gapDeg

  function donutPath(startDeg: number, endDeg: number, r_c: number = 12) {
    const toRad = (d: number) => (d - 90) * Math.PI / 180
    const α = toRad(startDeg), β = toRad(endDeg)
    const f = (n: number) => n.toFixed(2)
    const pf = (x: number, y: number) => `${f(x)} ${f(y)}`
    const large = sweepDeg > 180 ? 1 : 0
    const ca = Math.cos(α), sa = Math.sin(α), cb = Math.cos(β), sb = Math.sin(β)

    // 4 rounded corners (all 90° right-turns in screen space → sweep=1)
    // Corner A (inner-start): incoming=(sa,-ca) → outgoing=(ca,sa)
    const aSsx = cx + ri*ca - r_c*sa,  aSsy = cy + ri*sa + r_c*ca   // before A on inner arc
    const aSex = cx + (ri+r_c)*ca,      aSey = cy + (ri+r_c)*sa      // after A on radial
    // Corner B (outer-start): incoming=(ca,sa) → outgoing=(-sa,ca)
    const aBsx = cx + (ro-r_c)*ca,      aBsy = cy + (ro-r_c)*sa      // before B on radial
    const aBex = cx + ro*ca - r_c*sa,   aBey = cy + ro*sa + r_c*ca   // after B on outer arc
    // Corner C (outer-end): incoming=(-sb,cb) → outgoing=(-cb,-sb)
    const aCsx = cx + ro*cb + r_c*sb,   aCsy = cy + ro*sb - r_c*cb   // before C on outer arc
    const aCex = cx + (ro-r_c)*cb,      aCey = cy + (ro-r_c)*sb      // after C on radial
    // Corner D (inner-end): incoming=(-cb,-sb) → outgoing=(sb,-cb)
    const aDsx = cx + (ri+r_c)*cb,      aDsy = cy + (ri+r_c)*sb      // before D on radial
    const aDex = cx + ri*cb + r_c*sb,   aDey = cy + ri*sb - r_c*cb   // after D on inner arc

    return [
      `M${pf(aSex, aSey)}`,
      `L${pf(aBsx, aBsy)}`,
      `A${r_c} ${r_c} 0 0 1 ${pf(aBex, aBey)}`,
      `A${ro} ${ro} 0 ${large} 1 ${pf(aCsx, aCsy)}`,
      `A${r_c} ${r_c} 0 0 1 ${pf(aCex, aCey)}`,
      `L${pf(aDsx, aDsy)}`,
      `A${r_c} ${r_c} 0 0 1 ${pf(aDex, aDey)}`,
      `A${ri} ${ri} 0 ${large} 0 ${pf(aSsx, aSsy)}`,
      `A${r_c} ${r_c} 0 0 1 ${pf(aSex, aSey)}`,
      'Z',
    ].join(' ')
  }

  function pos(deg: number, r: number) {
    const rad = (deg - 90) * Math.PI / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  function splitToLines(label: string): string[] {
    const words = label.toUpperCase().split(' ')
    const lines: string[] = []
    for (let i = 0; i < words.length; i += 2)
      lines.push(words.slice(i, i + 2).join(' '))
    return lines
  }

  return (
    <div className="relative w-full max-w-160">
      <svg viewBox="-55 -55 710 710" className="w-full h-auto">
        <defs>
          <linearGradient id="eco-sel-fill" x1="0.5" y1="1" x2="0.5" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="11.73%" stopColor="#C6A15B" stopOpacity="0.7" />
            <stop offset="100%"   stopColor="#0B1F3A" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {sectors.map((sector, i) => {
          const midDeg   = i * (360 / N)
          const startDeg = midDeg - sweepDeg / 2
          const endDeg   = midDeg + sweepDeg / 2
          const isSel    = sector.id === selected

          const lines      = splitToLines(sector.label)
          // Bottom sectors (sin > 0.5): shift icon toward center so content sits higher
          const isBottom   = Math.sin((midDeg - 100) * Math.PI / 200) > 0.5
          const iconRadius = isBottom ? (ri + ro) / 2 - 20 : (ri + ro) / 1.8
          const iconPos    = pos(midDeg, iconRadius)
          const textX      = iconPos.x
          const textY0     = iconPos.y + 49 + 20      // icon bottom + gap
          const lineH      = 24

          return (
            <g key={sector.id} onClick={() => onSelect(sector.id)} className="cursor-pointer">
              <path
                d={donutPath(startDeg, endDeg)}
                style={{
                  fill: 'rgba(11,31,58,0.30)',
                  stroke: '#F8E8C0',
                  strokeWidth: '1.5',
                  strokeOpacity: 0.22,
                  mixBlendMode: 'screen',
                } as React.CSSProperties}
              />
              <path
                d={donutPath(startDeg, endDeg)}
                style={{
                  fill: 'url(#eco-sel-fill)',
                  stroke: '#F8E8C0',
                  strokeWidth: '2',
                  mixBlendMode: 'plus-lighter',
                  filter: 'drop-shadow(0 0.9px 18px rgba(255,255,255,0.25))',
                  opacity: isSel ? 1 : 0,
                  transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1)',
                } as React.CSSProperties}
              />
              <image
                href={sector.ecoIcon}
                x={iconPos.x - 49} y={iconPos.y - 49}
                width="98" height="98"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  opacity:    isSel ? 1 : 0.5,
                  filter:     isSel ? 'drop-shadow(0 2px 12px rgba(198,161,91,0.55)) brightness(1.12)' : 'none',
                  transition: 'opacity 0.5s ease, filter 0.5s ease',
                } as React.CSSProperties}
              />
              {lines.map((line, idx) => (
                <text
                  key={idx}
                  x={textX}
                  y={textY0 + idx * lineH}
                  textAnchor="middle" fontSize="22" fontFamily="Playfair_Display" fontWeight="700" letterSpacing="0.8"
                  style={{ fill: isSel ? '#F8EBC0' : '#8FA3BC', transition: 'fill 0.45s ease' } as React.CSSProperties}
                >{line}</text>
              ))}
            </g>
          )
        })}

        {/* Center image inside SVG so text can render on top */}
        <image
          href={icItemCenter}
          x={cx - ri} y={cy - ri}
          width={ri * 2} height={ri * 2}
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  )
}
