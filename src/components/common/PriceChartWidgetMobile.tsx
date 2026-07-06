import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeRight, viewport } from '@/lib/motion'
import { usePriceTicker } from '@/hooks/usePriceTicker'
import { TIME_RANGES, CHART_STATS } from './priceChartData'

/**
 * Mobile-only rendition of the price chart. Kept as a fully separate component
 * (not a set of `md:` overrides on PriceChartWidget) because the candle chart's
 * canvas layout — candle count, axis gutters, label positions — needs different
 * absolute numbers on narrow screens rather than scaled-down versions of the
 * desktop ones; trying to share one component made both breakpoints fragile.
 */
export function PriceChartWidgetMobile({ className = '' }: { className?: string }) {
  const [range, setRange] = useState('1D')
  const { price, absDelta, pctDelta, isUp } = usePriceTicker()

  return (
    <motion.div
      variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
      className={`p-3.5 flex flex-col ${className}`}
      style={{
        borderRadius: '14px',
        border: '1px solid rgba(246, 247, 249, 0.10)',
        background: 'rgba(11, 31, 58, 0.05)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-[11px] text-text-secondary font-[Manrope] tracking-widest">XAU / USD</div>
          <div className="flex flex-wrap items-baseline gap-1.5 mt-1">
            <span className="text-[28px] font-bold text-white font-[Manrope] tabular-nums leading-none">
              {price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`inline-flex items-center gap-1 text-xs font-semibold font-[Manrope] ${isUp ? 'text-green-400' : 'text-orange-400'}`}>
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden
                style={{ transform: isUp ? 'none' : 'scaleY(-1)' }}>
                <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {Math.abs(pctDelta).toFixed(2)}%
            </span>
          </div>
          <span className="text-xs text-text-secondary font-[Manrope] tabular-nums">
            {absDelta >= 0 ? '+' : '−'}{Math.abs(absDelta).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full shrink-0" style={{ border: '1px solid #F8E8C0' }}>
          <span className="size-1.5 rounded-full animate-pulse" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%)' }} />
          <span className="text-[11px] font-bold text-amber-400 font-[Manrope]">Live</span>
        </div>
      </div>

      {/* Time range: horizontal scroll so 6 buttons never clip/squeeze on narrow screens */}
      <div className="flex items-center gap-1 mb-3 overflow-x-auto scrollbar-hide -mx-1 px-1">
        {TIME_RANGES.map(r => (
          <button key={r} onClick={() => setRange(r)}
            className={`shrink-0 px-2.5 py-1 text-[11px] font-bold font-[Manrope] transition-all ${range === r ? 'text-primary' : 'text-text-secondary'}`}
            style={range === r ? {
              borderRadius: '30px',
              border: '1px solid #C6A15B',
              background: 'rgba(198, 161, 91, 0.16)',
            } : { borderRadius: '30px' }}>
            {r}
          </button>
        ))}
      </div>

      <div className="min-h-40 z-10 mb-3">
        <LiveCandleChartMobile />
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {CHART_STATS.map(({ value, label }) => (
          <div key={label}
            className="flex flex-col items-start gap-0.5 px-2 py-2.5 min-w-0"
            style={{
              borderRadius: '10px',
              border: '1px solid rgba(246, 247, 249, 0.10)',
              background: 'rgba(11, 31, 58, 0.05)',
              backdropFilter: 'blur(20px)',
            }}>
            <div className="text-sm font-bold text-text-primary font-[Manrope] truncate w-full">{value}</div>
            <div className="text-[9.5px] text-text-secondary font-[Manrope] leading-snug">{label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Y_LABELS = ['8K', '4K', '0']
const X_LABELS = [
  { t: '00:00', pct: 2 }, { t: '08:00', pct: 50 }, { t: '15:00', pct: 98 },
]
const LABEL_STYLE: React.CSSProperties = { color: 'rgba(199,204,209,0.5)', fontFamily: 'Manrope, sans-serif', fontSize: '10px', lineHeight: 1 }

function LiveCandleChartMobile() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width  = canvas.offsetWidth  * dpr
    canvas.height = canvas.offsetHeight * dpr
    const ctx = canvas.getContext('2d')!
    ctx.scale(dpr, dpr)

    // Fewer candles than desktop (18 vs 40) — on a ~300-340px canvas width, 40
    // candles from the desktop chart go sub-pixel thin and unreadable.
    const N = 18
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
      const padT = 8, padB = 5

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

      ctx.strokeStyle = 'rgba(199,204,209,0.07)'
      ctx.lineWidth   = 1
      for (let g = 0; g <= 2; g++) {
        const yy = padT + g * (H - padT - padB) / 2
        ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke()
      }

      ctx.beginPath()
      ctx.strokeStyle = 'rgba(198,161,91,0.3)'
      ctx.lineWidth   = 1.5
      for (let i = 0; i < cnt; i++) {
        const x = i * cw + cw / 2
        const y = Y(candles[i].close)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      for (let i = 0; i < cnt; i++) {
        const c   = candles[i]
        const x   = i * cw + cw / 2
        const col = c.close >= c.open ? '#C6A15B' : '#1C5D88'
        ctx.globalAlpha  = i === cnt - 1 ? 0.92 : 1
        ctx.strokeStyle  = col
        ctx.fillStyle    = col
        ctx.lineWidth    = 1
        ctx.beginPath(); ctx.moveTo(x, Y(c.high)); ctx.lineTo(x, Y(c.low)); ctx.stroke()
        const bw = Math.max(2.5, cw * 0.5)
        const yo = Y(c.open), yc = Y(c.close)
        ctx.fillRect(x - bw / 2, Math.min(yo, yc), bw, Math.max(2, Math.abs(yc - yo)))
        ctx.globalAlpha = 1
      }

      const lx = (cnt - 1) * cw + cw / 2
      const ly = Y(candles[cnt - 1].close)
      ctx.setLineDash([4, 4])
      ctx.strokeStyle = 'rgba(232,206,145,.45)'
      ctx.lineWidth   = 1
      ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(W, ly); ctx.stroke()
      ctx.setLineDash([])

      const pulse = 6 + Math.sin(now * 0.006) * 2.2
      const grd   = ctx.createRadialGradient(lx, ly, 0, lx, ly, pulse + 5)
      grd.addColorStop(0, 'rgba(244,230,190,.85)')
      grd.addColorStop(1, 'rgba(244,230,190,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(lx, ly, pulse + 5, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#F4E6BE'
      ctx.beginPath(); ctx.arc(lx, ly, 2.2, 0, Math.PI * 2); ctx.fill()

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="relative w-full" style={{ height: '168px' }}>
      {/* Y-axis labels — only 3 (top/mid/bottom) to avoid crowding a short chart */}
      <div className="absolute left-0 w-6" style={{ top: '8px', bottom: '18px' }}>
        {Y_LABELS.map((l, g) => (
          <span key={l} className="absolute right-0 -translate-y-1/2" style={{ ...LABEL_STYLE, top: `${g * 50}%` }}>{l}</span>
        ))}
      </div>

      {/* Canvas — narrower Y gutter (26px vs 34px desktop) to leave more room for candles */}
      <div className="absolute" style={{ left: '26px', top: 0, right: 0, bottom: '15px' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      {/* X-axis labels — only 3 to avoid overlap at ~320-375px widths */}
      <div className="absolute h-4" style={{ left: '26px', right: 0, bottom: 0 }}>
        {X_LABELS.map(({ t, pct }) => (
          <span key={t} className="absolute -translate-x-1/2" style={{ ...LABEL_STYLE, left: `${pct}%`, bottom: '2px' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
