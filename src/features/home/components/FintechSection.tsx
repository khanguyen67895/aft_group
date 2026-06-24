import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionBadge } from './HeroSection'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'

const FEATURES = [
  { label: 'Giao dịch phái sinh', icon: <SwapIcon /> },
  { label: 'Copy trade vàng',     icon: <CopyIcon /> },
  { label: 'Mô hình P2P',        icon: <NetworkIcon /> },
  { label: 'Trung tâm tài chính', icon: <BankIcon /> },
]

const TIME_RANGES = ['1D', '1W', '1M', '3M', '1Y', 'All']

const CHART_STATS = [
  { value: '54%',   label: 'Vàng 2025', sub: 'Tăng trưởng' },
  { value: '24/7',  label: 'Theo dõi thị trường', sub: 'Liên tục' },
  { value: '$300B+', label: 'Kinh tế số DNA', sub: 'Quy mô' },
]

export function FintechSection() {
  const [range, setRange] = useState('1D')

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ───────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp}><SectionBadge>Lĩnh vực</SectionBadge></motion.div>

            <motion.h2 variants={fadeUp} className="mt-6 font-[Playfair_Display] font-bold text-text-primary">
              <span className="block text-3xl md:text-4xl">Hàng hóa phái sinh</span>
              <span className="block text-3xl md:text-4xl text-primary mt-1">– Lõi Fintech</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-body-md text-text-secondary leading-relaxed max-w-120">
              Mảng lõi của AFT: giao dịch hàng hóa phái sinh, copy trade vàng, mô hình P2P và trung tâm tài chính — vận hành bằng kỷ luật, dữ liệu và công nghệ riêng.
            </motion.p>

            {/* Feature icons */}
            <motion.div variants={staggerContainer(0.07)} className="mt-8 grid grid-cols-2 gap-4">
              {FEATURES.map(({ label, icon }) => (
                <motion.div key={label} variants={staggerItem} className="flex items-center gap-3 p-3 rounded-xl border border-divider bg-bg/50 hover:border-primary/30 transition-colors">
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className="text-body-sm font-semibold text-text-secondary font-[Manrope]">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Price widget ──────────────────────────── */}
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
            className="rounded-2xl border border-divider bg-bg p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-body-sm text-text-secondary font-[Manrope] tracking-widest">XAU / USD</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-bold text-text-primary font-[Manrope]">5,591.15</span>
                  <span className="text-sm font-semibold text-green-400 font-[Manrope]">↑ 4.24%</span>
                  <span className="text-sm text-green-400 font-[Manrope]">+246.93</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-500/40 bg-green-500/10">
                <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-bold text-green-400 font-[Manrope]">Live</span>
              </div>
            </div>

            {/* Time range selector */}
            <div className="flex items-center gap-1 mb-5">
              {TIME_RANGES.map(r => (
                <button key={r} onClick={() => setRange(r)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold font-[Manrope] transition-all
                    ${range === r ? 'bg-primary text-zinc-900' : 'text-text-secondary hover:text-text-primary'}`}>
                  {r}
                </button>
              ))}
            </div>

            {/* Candlestick chart (SVG approximation) */}
            <div className="h-40 relative mb-4">
              <StaticCandleChart />
            </div>

            {/* Bottom divider */}
            <div className="h-px bg-divider mb-5" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {CHART_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-lg font-bold text-primary font-[Manrope]">{value}</div>
                  <div className="text-[10px] text-text-secondary font-[Manrope] mt-0.5 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Static candlestick chart ────────────────────────────────────── */
function StaticCandleChart() {
  const candles = [
    { o: 70, h: 20, l: 85, c: 65, bull: false },
    { o: 65, h: 15, l: 80, c: 55, bull: false },
    { o: 55, h: 30, l: 60, c: 48, bull: false },
    { o: 48, h: 45, l: 52, c: 40, bull: false },
    { o: 40, h: 38, l: 65, c: 35, bull: false },
    { o: 35, h: 30, l: 60, c: 25, bull: false },
    { o: 25, h: 22, l: 42, c: 18, bull: false },
    { o: 18, h: 15, l: 35, c: 22, bull: true },
    { o: 22, h: 10, l: 40, c: 28, bull: true },
    { o: 28, h: 5,  l: 50, c: 35, bull: true },
    { o: 35, h: 8,  l: 55, c: 42, bull: true },
    { o: 42, h: 15, l: 60, c: 50, bull: true },
    { o: 50, h: 20, l: 65, c: 45, bull: false },
    { o: 45, h: 30, l: 65, c: 38, bull: false },
    { o: 38, h: 25, l: 55, c: 44, bull: true },
    { o: 44, h: 15, l: 65, c: 55, bull: true },
    { o: 55, h: 8,  l: 72, c: 60, bull: true },
    { o: 60, h: 12, l: 75, c: 58, bull: false },
    { o: 58, h: 15, l: 70, c: 65, bull: true },
    { o: 65, h: 8,  l: 80, c: 72, bull: true },
  ]

  const W = 480, H = 140
  const candleW = 14, gap = 10

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      {/* Y axis grid lines */}
      {[25, 50, 75].map(y => (
        <line key={y} x1="0" y1={y * H / 100} x2={W} y2={y * H / 100}
          stroke="rgba(246,247,249,0.05)" strokeWidth="1" strokeDasharray="3 6"/>
      ))}

      {/* Dashed horizontal reference */}
      <line x1="0" y1={H * 0.4} x2={W} y2={H * 0.4}
        stroke="rgba(198,161,91,0.3)" strokeWidth="1" strokeDasharray="6 4"/>

      {/* Candles */}
      {candles.map((c, i) => {
        const x = 10 + i * (candleW + gap)
        const bodyTop = Math.min(c.o, c.c)
        const bodyH = Math.abs(c.o - c.c) || 2
        const color = c.bull ? '#22c55e' : '#ef4444'
        return (
          <g key={i}>
            <line x1={x + candleW / 2} y1={c.h * H / 100} x2={x + candleW / 2} y2={c.l * H / 100}
              stroke={color} strokeWidth="1.2"/>
            <rect x={x} y={bodyTop * H / 100} width={candleW} height={Math.max(bodyH, 2) * H / 100}
              fill={color} rx="1" opacity="0.85"/>
          </g>
        )
      })}

      {/* X axis time labels */}
      {['00:00', '03:00', '06:00', '09:00', '12:00', '15:00'].map((t, i) => (
        <text key={t} x={80 * i} y={H - 2} fontSize="9" fill="rgba(199,204,209,0.5)" fontFamily="Manrope">
          {t}
        </text>
      ))}
    </svg>
  )
}

/* ── Icons ─────────────────────────────────────────────────────────── */
function SwapIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round"><path d="M16 3l4 4-4 4"/><path d="M20 7H4"/><path d="M8 21l-4-4 4-4"/><path d="M4 17h16"/></svg>
}
function CopyIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
}
function NetworkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4l-3.5 5"/><path d="M12 11l3.5 5"/></svg>
}
function BankIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 10 5 3 19 3 19 10"/><line x1="9" y1="22" x2="9" y2="10"/><line x1="15" y1="22" x2="15" y2="10"/></svg>
}
