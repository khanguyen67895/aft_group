import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icTitle3    from '@/assets/image/ic_title3.png'
import icTitle3x2  from '@/assets/image/ic_title3@2x.png'
import icTitle3x3  from '@/assets/image/ic_title3@3x.png'
import icBgGold    from '@/assets/image/ic_bg_gold.png'
import icBgGold2x  from '@/assets/image/ic_bg_gold@2x.png'
import icBgGold3x  from '@/assets/image/ic_bg_gold@3x.png'
import icField1    from '@/assets/image/ic_item_field1.png'
import icField1x2  from '@/assets/image/ic_item_field1@2x.png'
import icField1x3  from '@/assets/image/ic_item_field1@3x.png'
import icField2    from '@/assets/image/ic_item_field2.png'
import icField2x2  from '@/assets/image/ic_item_field2@2x.png'
import icField2x3  from '@/assets/image/ic_item_field2@3x.png'
import icField3    from '@/assets/image/ic_item_field3.png'
import icField3x2  from '@/assets/image/ic_item_field3@2x.png'
import icField3x3  from '@/assets/image/ic_item_field3@3x.png'
import icField4    from '@/assets/image/ic_item_field4.png'
import icField4x2  from '@/assets/image/ic_item_field4@2x.png'
import icField4x3  from '@/assets/image/ic_item_field4@3x.png'

const FEATURES = [
  { label: 'Giao dịch phái sinh', src: icField1, src2x: icField1x2, src3x: icField1x3 },
  { label: 'Copy trade vàng',     src: icField2, src2x: icField2x2, src3x: icField2x3 },
  { label: 'Mô hình P2P',        src: icField3, src2x: icField3x2, src3x: icField3x3 },
  { label: 'Trung tâm tài chính', src: icField4, src2x: icField4x2, src3x: icField4x3 },
]

const TIME_RANGES = ['1D', '1W', '1M', '3M', '1Y', 'All']

const CHART_STATS = [
  { value: '54%',    label: 'Vàng 2025' },
  { value: '24/7',   label: 'Theo dõi thị trường' },
  { value: '$300B+', label: 'Kinh tế số DNA' },
]

export function FintechSection() {
  const [range, setRange] = useState('1D')

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 items-stretch">

          {/* Left column */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-col relative overflow-hidden rounded-2xl"
            style={{
              backgroundImage: `image-set(url(${icBgGold}) 1x, url(${icBgGold2x}) 2x, url(${icBgGold3x}) 3x)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 55% 60% at 50% 45%, transparent 10%, rgba(11,31,58,0.55) 55%, rgba(11,31,58,0.92) 80%, #0B1F3A 100%)',
            }} />
            <div className="relative z-10 flex flex-col h-full">
              <motion.div variants={fadeUp} className="self-start">
                <img src={icTitle3} srcSet={`${icTitle3} 1x, ${icTitle3x2} 2x, ${icTitle3x3} 3x`}
                  alt="Lĩnh vực" className="h-auto w-auto" />
              </motion.div>

              <motion.h2 variants={fadeUp}
                className="mt-5 font-[Playfair_Display] font-bold text-text-primary leading-tight"
              >
                <span className="block text-[40px] md:text-5xl uppercase">Hàng hóa phái sinh</span>
                <span className="block text-[40px] md:text-5xl uppercase text-primary mt-1">– Lõi Fintech</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 text-xl text-text-secondary leading-relaxed">
                Mảng lõi của AFT: giao dịch hàng hóa phái sinh, copy trade vàng, mô hình P2P
                và trung tâm tài chính — vận hành bằng kỷ luật, dữ liệu và công nghệ riêng.
              </motion.p>

              <motion.div variants={staggerContainer(0.07)} className="mt-auto flex gap-4">
                {FEATURES.map(({ label, src, src2x, src3x }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="flex-1 flex flex-col items-center gap-2.5 px-3 py-4"
                    style={{
                      borderRadius: '16px',
                      border: '1px solid rgba(246, 247, 249, 0.10)',
                      background: 'rgba(11, 31, 58, 0.30)',
                      backdropFilter: 'blur(7px)',
                    }}
                  >
                    <img src={src} srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`}
                      alt={label} className="size-10 object-contain" />
                    <span className="text-base font-semibold text-text-secondary font-[Manrope] text-center leading-snug">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: price widget */}
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
            className="p-6 flex flex-col"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(246, 247, 249, 0.10)',
              background: 'rgba(11, 31, 58, 0.05)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="text-[14px] text-text-secondary font-[Manrope] tracking-widest">XAU / USD</div>
                <div className="flex items-baseline gap-3 mt-1.5">
                  <span className="text-5xl font-bold text-white font-[Playfair_Display]">5,591.15</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-400 font-[Manrope]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    4.24%
                  </span>
                  <span className="text-sm text-text-secondary font-[Manrope]">+246.93</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ border: '1px solid #F8E8C0' }}>
                <span className="size-2 rounded-full animate-pulse" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%)' }} />
                <span className="text-[14px] font-bold text-amber-400 font-[Manrope]">Live</span>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-5">
              {TIME_RANGES.map(r => (
                <button key={r} onClick={() => setRange(r)}
                  className={`px-3 py-1 text-xs font-bold font-[Manrope] transition-all ${range === r ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                  style={range === r ? {
                    borderRadius: '30px',
                    border: '1px solid #C6A15B',
                    background: 'rgba(198, 161, 91, 0.16)',
                  } : { borderRadius: '30px' }}>
                  {r}
                </button>
              ))}
            </div>

            <div className="min-h-52 z-10 mb-8">
              <StaticCandleChart />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {CHART_STATS.map(({ value, label }) => (
                <div key={label}
                  className="flex flex-col items-start gap-1 px-3 py-4"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(246, 247, 249, 0.10)',
                    background: 'rgba(11, 31, 58, 0.05)',
                    backdropFilter: 'blur(20px)',
                  }}>
                  <div className="text-2xl font-bold text-text-primary font-[Manrope]">{value}</div>
                  <div className="text-xs text-text-secondary font-[Manrope] leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function StaticCandleChart() {
  const candles = [
    // 00:00 start ~3.5K
    { o:42, h:56, l:32, c:52 }, { o:52, h:62, l:39, c:43 }, { o:43, h:57, l:34, c:54 },
    { o:54, h:64, l:40, c:43 }, { o:43, h:58, l:32, c:52 }, { o:52, h:62, l:38, c:41 },
    { o:41, h:57, l:33, c:54 }, { o:54, h:65, l:41, c:45 }, { o:45, h:59, l:35, c:54 },
    { o:54, h:64, l:41, c:45 },
    // 03:00 dip to ~2K
    { o:45, h:56, l:31, c:36 }, { o:36, h:49, l:23, c:28 }, { o:28, h:43, l:18, c:34 },
    { o:34, h:48, l:22, c:26 }, { o:26, h:41, l:16, c:32 }, { o:32, h:47, l:23, c:40 },
    { o:40, h:53, l:29, c:47 }, { o:47, h:58, l:35, c:52 }, { o:52, h:62, l:40, c:48 },
    { o:48, h:59, l:36, c:54 },
    // 06:00 rising ~4-5.5K
    { o:54, h:65, l:42, c:62 }, { o:62, h:72, l:50, c:65 }, { o:65, h:74, l:52, c:58 },
    { o:58, h:69, l:46, c:67 }, { o:67, h:77, l:55, c:73 }, { o:73, h:82, l:60, c:66 },
    { o:66, h:77, l:53, c:75 }, { o:75, h:85, l:63, c:80 }, { o:80, h:89, l:67, c:75 },
    { o:75, h:86, l:62, c:83 },
    // 09:00 accelerating to peak
    { o:83, h:93, l:74, c:89 }, { o:89, h:98, l:80, c:94 }, { o:94, h:100, l:84, c:87 },
    { o:87, h:98, l:81, c:96 }, { o:96, h:100, l:87, c:99 }, { o:99, h:100, l:90, c:100 },
    // 12:00 peak then drop
    { o:100, h:100, l:86, c:91 }, { o:91, h:99, l:80, c:83 }, { o:83, h:94, l:74, c:77 },
    { o:77, h:89, l:69, c:73 }, { o:73, h:84, l:61, c:65 }, { o:65, h:76, l:53, c:58 },
    { o:58, h:70, l:47, c:52 }, { o:52, h:65, l:43, c:62 }, { o:62, h:74, l:51, c:56 },
    { o:56, h:68, l:46, c:65 },
    // 15:00 partial recovery
    { o:65, h:77, l:54, c:74 }, { o:74, h:84, l:62, c:68 }, { o:68, h:80, l:57, c:77 },
    { o:77, h:88, l:66, c:82 }, { o:82, h:91, l:70, c:76 }, { o:76, h:86, l:64, c:71 },
    { o:71, h:82, l:60, c:79 }, { o:79, h:89, l:68, c:74 }, { o:74, h:85, l:63, c:81 },
    { o:81, h:91, l:69, c:76 },
  ].map(c => ({ ...c, bull: c.c >= c.o }))

  const W = 560, H = 230
  const labelW = 34, xAxisH = 20, topPad = 16
  const chartW = W - labelW - 4, chartH = H - xAxisH - topPad
  const N = candles.length
  const slotW = chartW / N
  const bW = Math.max(Math.floor(slotW * 0.72), 4)
  const yFn = (v: number) => topPad + (1 - v / 100) * chartH

  const yAxis = [
    { label: '8K', v: 96 }, { label: '6K', v: 72 },
    { label: '4K', v: 48 }, { label: '2K', v: 24 }, { label: '0', v: 3 },
  ]
  const xAxis = [
    { t: '00:00', i: 0 }, { t: '03:00', i: 10 }, { t: '06:00', i: 20 },
    { t: '09:00', i: 30 }, { t: '12:00', i: 36 }, { t: '15:00', i: N - 1 },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none" overflow="visible">
      {yAxis.map(({ label, v }) => (
        <g key={label}>
          <text x={labelW - 5} y={yFn(v) + 4}
            fontSize="9.5" fill="rgba(199,204,209,0.5)" fontFamily="Manrope" textAnchor="end">{label}</text>
          <line x1={labelW} y1={yFn(v)} x2={W - 4} y2={yFn(v)}
            stroke="rgba(246,247,249,0.07)" strokeWidth="1" strokeDasharray="4 7"/>
        </g>
      ))}

      <line x1={labelW} y1={yFn(87)} x2={W - 4} y2={yFn(87)}
        stroke="rgba(198,161,91,0.65)" strokeWidth="1.3" strokeDasharray="8 5"/>

      {candles.map((c, i) => {
        const cx  = labelW + (i + 0.5) * slotW
        const x   = cx - bW / 2
        const col = c.bull ? '#38bdf8' : '#fb923c'
        const bT  = yFn(Math.max(c.o, c.c))
        const bH  = Math.max(Math.abs(c.o - c.c) * chartH / 100, 2)
        return (
          <g key={i} style={{
            animation: 'chart-candle-in 0.5s ease both, chart-candle-bob 2.4s ease-in-out infinite',
            animationDelay: `${(0.03 + i * 0.016).toFixed(2)}s, ${(i * 0.08).toFixed(2)}s`,
          }}>
            <line x1={cx} y1={yFn(c.h)} x2={cx} y2={yFn(c.l)} stroke={col} strokeWidth="1.2" opacity="0.88"/>
            <rect x={x} y={bT} width={bW} height={bH} fill={col} opacity="0.9"/>
          </g>
        )
      })}

      {xAxis.map(({ t, i }) => (
        <text key={t} x={labelW + (i + 0.5) * slotW} y={H - 4}
          fontSize="9.5" fill="rgba(199,204,209,0.5)" fontFamily="Manrope" textAnchor="middle">{t}</text>
      ))}
    </svg>
  )
}
