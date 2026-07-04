import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeRight, viewport } from '@/lib/motion'

const TIME_RANGES = ['1D', '1W', '1M', '3M', '1Y', 'All']

const CHART_STATS = [
  { value: '54%',    label: 'Vàng 2025' },
  { value: '24/7',   label: 'Theo dõi thị trường' },
  { value: '$300B+', label: 'Kinh tế số DNA' },
]

const REF_PRICE = 5344.22

export function PriceChartWidget({ className = '' }: { className?: string }) {
  const [range, setRange] = useState('1D')
  const [priceState, setPriceState] = useState({ current: 5591.15, prev: 5591.15 })

  useEffect(() => {
    const tick = setInterval(() => {
      setPriceState(s => {
        const next = +(Math.max(5100, Math.min(6400, s.current + (Math.random() - 0.46) * 5.5)).toFixed(2))
        return { current: next, prev: s.current }
      })
    }, 1100)
    return () => clearInterval(tick)
  }, [])

  const { current: price } = priceState
  const absDelta = +(price - REF_PRICE).toFixed(2)
  const pctDelta = +((absDelta / REF_PRICE) * 100).toFixed(2)
  const isUp     = absDelta >= 0

  return (
    <motion.div
      variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
      className={`p-4 md:p-6 flex flex-col ${className}`}
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(246, 247, 249, 0.10)',
        background: 'rgba(11, 31, 58, 0.05)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-start justify-between mb-4 md:mb-5">
        <div>
          <div className="text-[13px] text-text-secondary font-[Manrope] tracking-widest">XAU / USD</div>
          <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mt-1">
            <span className="text-[38px] md:text-5xl font-bold text-white font-[Manrope] tabular-nums leading-none">
              {price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`inline-flex items-center gap-1 text-sm font-semibold font-[Manrope] ${isUp ? 'text-green-400' : 'text-orange-400'}`}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                style={{ transform: isUp ? 'none' : 'scaleY(-1)' }}>
                <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {Math.abs(pctDelta).toFixed(2)}%
            </span>
            <span className="text-sm text-text-secondary font-[Manrope] tabular-nums">
              {absDelta >= 0 ? '+' : '−'}{Math.abs(absDelta).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0" style={{ border: '1px solid #F8E8C0' }}>
          <span className="size-2 rounded-full animate-pulse" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%)' }} />
          <span className="text-[13px] font-bold text-amber-400 font-[Manrope]">Live</span>
        </div>
      </div>

      <div className="flex items-center gap-0.5 md:gap-1 mb-4 md:mb-5">
        {TIME_RANGES.map(r => (
          <button key={r} onClick={() => setRange(r)}
            className={`px-2.5 md:px-3 py-1 text-xs font-bold font-[Manrope] transition-all ${range === r ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
            style={range === r ? {
              borderRadius: '30px',
              border: '1px solid #C6A15B',
              background: 'rgba(198, 161, 91, 0.16)',
            } : { borderRadius: '30px' }}>
            {r}
          </button>
        ))}
      </div>

      <div className="min-h-52 z-10 mb-4 md:mb-8">
        <LiveCandleChart />
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {CHART_STATS.map(({ value, label }) => (
          <div key={label}
            className="flex flex-col items-start gap-1 px-2.5 py-3 md:px-3 md:py-4"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(246, 247, 249, 0.10)',
              background: 'rgba(11, 31, 58, 0.05)',
              backdropFilter: 'blur(20px)',
            }}>
            <div className="text-xl md:text-2xl font-bold text-text-primary font-[Manrope]">{value}</div>
            <div className="text-[11px] md:text-xs text-text-secondary font-[Manrope] leading-snug">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Y_LABELS = ['8K', '6K', '4K', '2K', '0']
const X_LABELS = [
  { t: '00:00', pct: 1.25 }, { t: '03:00', pct: 18.75 }, { t: '06:00', pct: 36.25 },
  { t: '09:00', pct: 53.75 }, { t: '12:00', pct: 71.25 }, { t: '15:00', pct: 98.75 },
]
const LABEL_STYLE: React.CSSProperties = { color: 'rgba(199,204,209,0.5)', fontFamily: 'Manrope, sans-serif', fontSize: '16px', lineHeight: 1 }

function LiveCandleChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width  = canvas.offsetWidth  * dpr
    canvas.height = canvas.offsetHeight * dpr
    const ctx = canvas.getContext('2d')!
    ctx.scale(dpr, dpr)

    const N = 40
    type Candle = { open: number; close: number; high: number; low: number }
    const candles: Candle[] = []

    let price = 120
    for (let i = 0; i < N; i++) {
      const open  = price
      const close = Math.max(18, Math.min(232, open + (Math.random() - 0.45) * 6))
      candles.push({ open, close, high: Math.max(open, close) + Math.random() * 5, low: Math.min(open, close) - Math.random() * 5 })
      price = close
    }

    let minVal  = Math.min(...candles.map(c => c.low))  - 6
    let maxVal  = Math.max(...candles.map(c => c.high)) + 6
    let lastNew = performance.now()
    let rafId: number

    const draw = (now: number) => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      const padT = 10, padB = 6

      const cur = candles[candles.length - 1]
      cur.close = Math.max(18, Math.min(232, cur.close + (Math.random() - 0.5) * 2.6))
      cur.high  = Math.max(cur.high, cur.close)
      cur.low   = Math.min(cur.low,  cur.close)

      if (now - lastNew > 1300) {
        lastNew = now
        const open  = cur.close
        const close = Math.max(18, Math.min(232, open + (Math.random() - 0.45) * 6))
        candles.push({ open, close, high: Math.max(open, close) + Math.random() * 5, low: Math.min(open, close) - Math.random() * 5 })
        if (candles.length > N) candles.shift()
      }

      const tmin = Math.min(...candles.map(c => c.low))  - 6
      const tmax = Math.max(...candles.map(c => c.high)) + 6
      minVal += (tmin - minVal) * 0.08
      maxVal += (tmax - maxVal) * 0.08

      const cnt = candles.length
      const cw  = W / N
      const Y   = (v: number) => padT + (1 - (v - minVal) / (maxVal - minVal)) * (H - padT - padB)

      ctx.clearRect(0, 0, W, H)

      // Grid lines
      ctx.strokeStyle = 'rgba(199,204,209,0.07)'
      ctx.lineWidth   = 1
      for (let g = 0; g <= 4; g++) {
        const yy = padT + g * (H - padT - padB) / 4
        ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke()
      }

      // Close-price line
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(198,161,91,0.3)'
      ctx.lineWidth   = 1.5
      for (let i = 0; i < cnt; i++) {
        const x = i * cw + cw / 2
        const y = Y(candles[i].close)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Candles
      for (let i = 0; i < cnt; i++) {
        const c   = candles[i]
        const x   = i * cw + cw / 2
        const col = c.close >= c.open ? '#C6A15B' : '#1C5D88'
        ctx.globalAlpha  = i === cnt - 1 ? 0.92 : 1
        ctx.strokeStyle  = col
        ctx.fillStyle    = col
        ctx.lineWidth    = 1
        ctx.beginPath(); ctx.moveTo(x, Y(c.high)); ctx.lineTo(x, Y(c.low)); ctx.stroke()
        const bw = Math.max(2, cw * 0.55)
        const yo = Y(c.open), yc = Y(c.close)
        ctx.fillRect(x - bw / 2, Math.min(yo, yc), bw, Math.max(2, Math.abs(yc - yo)))
        ctx.globalAlpha = 1
      }

      // Dashed current-price line
      const lx = (cnt - 1) * cw + cw / 2
      const ly = Y(candles[cnt - 1].close)
      ctx.setLineDash([4, 4])
      ctx.strokeStyle = 'rgba(232,206,145,.45)'
      ctx.lineWidth   = 1
      ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(W, ly); ctx.stroke()
      ctx.setLineDash([])

      // Pulsing dot
      const pulse = 8 + Math.sin(now * 0.006) * 3
      const grd   = ctx.createRadialGradient(lx, ly, 0, lx, ly, pulse + 6)
      grd.addColorStop(0, 'rgba(244,230,190,.85)')
      grd.addColorStop(1, 'rgba(244,230,190,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(lx, ly, pulse + 6, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#F4E6BE'
      ctx.beginPath(); ctx.arc(lx, ly, 2.6, 0, Math.PI * 2); ctx.fill()

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="relative w-full" style={{ height: '248px' }}>
      {/* Y-axis labels — aligned to each grid line (0%, 25%, 50%, 75%, 100% of chart height) */}
      <div className="absolute left-0 w-8" style={{ top: '10px', bottom: '26px' }}>
        {Y_LABELS.map((l, g) => (
          <span key={l} className="absolute right-0 -translate-y-1/2" style={{ ...LABEL_STYLE, top: `${g * 25}%` }}>{l}</span>
        ))}
      </div>

      {/* Canvas — leaves room for Y labels left, X labels bottom */}
      <div className="absolute" style={{ left: '34px', top: 0, right: 0, bottom: '20px' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      {/* X-axis labels — positioned by % matching candle center positions */}
      <div className="absolute h-5" style={{ left: '34px', right: 0, bottom: 0 }}>
        {X_LABELS.map(({ t, pct }) => (
          <span key={t} className="absolute -translate-x-1/2" style={{ ...LABEL_STYLE, left: `${pct}%`, bottom: '3px' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
