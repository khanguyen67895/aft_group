import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionBadge } from './HeroSection'
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem, viewport } from '@/lib/motion'

interface Sector {
  id: string; label: string; shortLabel: string
  icon: React.ReactNode; description: string; bullets: string[]
}

const SECTORS: Sector[] = [
  { id: 'realestate', label: 'Bất động sản', shortLabel: 'BĐS', icon: <BuildingIcon />,
    description: 'Phát triển và đầu tư bất động sản cao cấp, mang lại giá trị bền vững và không gian sống đẳng cấp.',
    bullets: ['Phát triển dự án', 'Quản lý & vận hành', 'Đầu tư bền vững', 'Không gian sống đẳng cấp'] },
  { id: 'commodity', label: 'Giao dịch hàng hóa', shortLabel: 'Hàng hóa', icon: <GoldIcon />,
    description: 'Giao dịch hàng hóa phái sinh, copy trade vàng và các sản phẩm tài chính quốc tế hàng đầu.',
    bullets: ['Giao dịch phái sinh', 'Copy trade vàng', 'Thị trường quốc tế', 'Phân tích kỹ thuật'] },
  { id: 'mining', label: 'Thiết bị khai thác vàng', shortLabel: 'Khai thác', icon: <DrillIcon />,
    description: 'Cung cấp và vận hành thiết bị khai thác vàng công nghệ cao, tối ưu hiệu suất và chi phí.',
    bullets: ['Thiết bị chuyên dụng', 'Công nghệ hiện đại', 'Vận hành tối ưu', 'Bảo trì định kỳ'] },
  { id: 'asset', label: 'Quản lý tài sản', shortLabel: 'Tài sản', icon: <BriefcaseIcon />,
    description: 'Quản lý và phát triển danh mục tài sản đa dạng, tối ưu lợi nhuận và kiểm soát rủi ro.',
    bullets: ['Quản lý danh mục', 'Phân tích rủi ro', 'Tư vấn đầu tư', 'Báo cáo định kỳ'] },
  { id: 'education', label: 'Viện nghiên cứu & đào tạo', shortLabel: 'Đào tạo', icon: <BookIcon />,
    description: 'Nghiên cứu và đào tạo chuyên sâu về tài chính, đầu tư và quản trị doanh nghiệp.',
    bullets: ['Chương trình đào tạo', 'Nghiên cứu thị trường', 'Chứng chỉ quốc tế', 'Hội thảo chuyên gia'] },
]

export function EcosystemSection() {
  const [selected, setSelected] = useState('realestate')
  const current = SECTORS.find(s => s.id === selected)!

  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}><SectionBadge>Hệ sinh thái AFT</SectionBadge></motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 text-h3 font-[Playfair_Display] text-text-primary">
            Hệ sinh thái <span className="text-primary">AFT Holdings</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: donut chart */}
          <motion.div
            className="flex justify-center"
            variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
          >
            <DonutChart sectors={SECTORS} selected={selected} onSelect={setSelected} />
          </motion.div>

          {/* Right: detail card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              variants={fadeRight} initial="hidden" animate="show"
              exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="rounded-2xl border border-primary/30 bg-bg-card p-8">
                <div className="size-10 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold font-[Manrope]">
                    {SECTORS.findIndex(s => s.id === selected) + 1}
                  </span>
                </div>
                <h3 className="text-h5 font-[Playfair_Display] text-text-primary mb-3">{current.label}</h3>
                <p className="text-body-md text-text-secondary leading-relaxed mb-6">{current.description}</p>
                <div className="h-px bg-divider mb-6" />
                <motion.ul
                  className="flex flex-col gap-3"
                  variants={staggerContainer(0.07)} initial="hidden" animate="show"
                >
                  {current.bullets.map(b => (
                    <motion.li key={b} variants={staggerItem} className="flex items-center gap-3">
                      <div className="size-5 rounded flex items-center justify-center border border-primary/30 bg-primary/10 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5 2v6" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-body-sm text-text-secondary">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 h-40 rounded-xl bg-linear-to-br from-secondary to-active/30 flex items-center justify-center border border-divider">
                  <div className="text-primary/40 scale-150">{current.icon}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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

function DonutChart({ sectors, selected, onSelect }: { sectors: Sector[]; selected: string; onSelect: (id: string) => void }) {
  const cx = 180, cy = 180, ri = 68, ro = 155, N = sectors.length, gapDeg = 7, sweepDeg = 360 / N - gapDeg

  function donutPath(startDeg: number, endDeg: number) {
    const toRad = (d: number) => (d - 90) * Math.PI / 180
    const s = toRad(startDeg), e = toRad(endDeg), large = endDeg - startDeg > 180 ? 1 : 0
    const p = (r: number, a: number) => `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`
    return `M${p(ri, s)} L${p(ro, s)} A${ro} ${ro} 0 ${large} 1 ${p(ro, e)} L${p(ri, e)} A${ri} ${ri} 0 ${large} 0 ${p(ri, s)} Z`
  }

  function pos(midDeg: number, r: number) {
    const rad = (midDeg - 90) * Math.PI / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  return (
    <div className="hidden lg:block">
      <svg width="360" height="360" viewBox="0 0 360 360">
        {sectors.map((sector, i) => {
          const startDeg = i * (360 / N) + gapDeg / 2
          const endDeg   = startDeg + sweepDeg
          const midDeg   = startDeg + sweepDeg / 2
          const isSel    = sector.id === selected
          const icon     = pos(midDeg, (ri + ro) / 2)
          const label    = pos(midDeg, ro + 22)
          return (
            <g key={sector.id} onClick={() => onSelect(sector.id)} className="cursor-pointer">
              <path d={donutPath(startDeg, endDeg)}
                fill={isSel ? '#1C5D88' : '#0B1F3A'}
                stroke={isSel ? '#C6A15B' : 'rgba(246,247,249,0.08)'}
                strokeWidth={isSel ? 1.5 : 0.8}
                className="transition-all duration-300"
                style={{ filter: isSel ? 'drop-shadow(0 0 8px rgba(28,93,136,0.6))' : 'none' }}
              />
              <circle cx={icon.x} cy={icon.y} r="14"
                fill={isSel ? 'rgba(198,161,91,0.2)' : 'rgba(246,247,249,0.05)'}
                stroke={isSel ? '#C6A15B' : 'rgba(246,247,249,0.1)'} strokeWidth="1"/>
              <text x={icon.x} y={icon.y + 1} textAnchor="middle" dominantBaseline="middle"
                fontSize="10" fill={isSel ? '#C6A15B' : '#747474'} fontFamily="Manrope" fontWeight="bold">
                {sector.shortLabel.slice(0, 2).toUpperCase()}
              </text>
              <text x={label.x} y={label.y} textAnchor="middle" dominantBaseline="middle"
                fontSize="9" fill={isSel ? '#C6A15B' : '#C7CCD1'} fontFamily="Manrope" fontWeight="600">
                {sector.label.split(' ').slice(0, 2).join(' ')}
              </text>
            </g>
          )
        })}
        <circle cx={cx} cy={cy} r={ri - 4} fill="#0B1F3A" stroke="#C6A15B" strokeWidth="1" strokeOpacity="0.3"/>
        <circle cx={cx} cy={cy} r={ri - 12} fill="url(#eco-grad)" opacity="0.8"/>
        <text x={cx} y={cy - 6} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#C6A15B" fontFamily="Playfair Display" fontWeight="bold">AFT</text>
        <text x={cx} y={cy + 9} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="#C6A15B" fontFamily="Manrope" letterSpacing="2">HOLDINGS</text>
        <defs>
          <radialGradient id="eco-grad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function BuildingIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg> }
function GoldIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> }
function DrillIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> }
function BriefcaseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> }
function BookIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> }
