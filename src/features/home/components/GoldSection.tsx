import { motion } from 'framer-motion'
import { SectionBadge } from './HeroSection'
import { fadeUp, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'

const STATS = [
  { value: '+54%',   label: 'Đã tăng của vàng năm 2025 — tài sản trụ cột toàn cầu.' },
  { value: '24/7',   label: 'Theo dõi & vận hành dữ liệu thị trường quốc tế.' },
  { value: 'Au · Ag', label: 'Khai thác, đầu tư vàng — bạc và copy trade vàng.' },
  { value: '5.5K+',  label: 'Vùng giá vàng (USD/oz) được dự báo quanh 2030.' },
]

export function GoldSection() {
  return (
    <section className="py-20 bg-bg relative overflow-hidden">

      {/* Warm gold glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Content ───────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp}><SectionBadge>Lĩnh vực</SectionBadge></motion.div>

            <motion.h2 variants={fadeUp} className="mt-6 font-[Playfair_Display] font-bold text-text-primary leading-tight">
              <span className="text-primary text-3xl md:text-4xl block">Vàng</span>
              <span className="text-3xl md:text-4xl block">– Khai thác và giao dịch</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-body-md text-text-secondary leading-relaxed max-w-120">
              Khai thác vàng, đầu tư vàng - bạc, copy trade vàng và truyền thông data quốc tế. Vàng là sợi chỉ vàng trong suốt, biến giá trị hữu hình thành niềm tin và di sản.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={staggerContainer(0.07)} className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <motion.div key={value} variants={staggerItem} className="p-4 rounded-xl border border-divider bg-bg-card hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-2 rounded-full bg-primary" />
                    <span className="text-xl font-bold text-primary font-[Manrope]">{value}</span>
                  </div>
                  <p className="text-body-sm text-text-secondary leading-snug">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Gold image placeholder ───────────────── */}
          <motion.div className="relative" variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />

            {/* Main image area */}
            <div className="relative rounded-2xl border border-primary/20 overflow-hidden">
              {/* Gold gradient background */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1000] via-[#2a1a00] to-[#0B1F3A] flex items-center justify-center relative">
                {/* Decorative gold bars SVG */}
                <svg viewBox="0 0 400 300" className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8EBC0"/>
                      <stop offset="40%" stopColor="#C09857"/>
                      <stop offset="100%" stopColor="#7a5c1e"/>
                    </linearGradient>
                    <linearGradient id="gold2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F0D080"/>
                      <stop offset="50%" stopColor="#A07830"/>
                      <stop offset="100%" stopColor="#5a3800"/>
                    </linearGradient>
                    <filter id="gold-glow">
                      <feGaussianBlur stdDeviation="8" result="blur"/>
                      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                    <radialGradient id="glow-bg" cx="60%" cy="60%" r="50%">
                      <stop offset="0%" stopColor="#C09857" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="400" height="300" fill="url(#glow-bg)"/>

                  {/* Gold bar 1 (back) */}
                  <g transform="translate(120,140) rotate(-15)" opacity="0.7">
                    <rect x="0" y="0" width="160" height="80" rx="4" fill="url(#gold2)"/>
                    <rect x="10" y="10" width="140" height="60" rx="2" fill="none" stroke="#F8EBC0" strokeWidth="0.5" opacity="0.4"/>
                    <text x="80" y="35" textAnchor="middle" fontSize="9" fill="#F8EBC0" fontFamily="serif" opacity="0.7">AURUM</text>
                    <text x="80" y="50" textAnchor="middle" fontSize="7" fill="#F8EBC0" fontFamily="serif" opacity="0.5">999.9 FINE GOLD</text>
                    <text x="80" y="62" textAnchor="middle" fontSize="7" fill="#F8EBC0" fontFamily="serif" opacity="0.5">1000g</text>
                  </g>

                  {/* Gold bar 2 (front-center) */}
                  <g transform="translate(80,110) rotate(-8)" filter="url(#gold-glow)">
                    <rect x="0" y="0" width="170" height="85" rx="4" fill="url(#gold1)"/>
                    <rect x="10" y="10" width="150" height="65" rx="2" fill="none" stroke="#F8EBC0" strokeWidth="0.8" opacity="0.5"/>
                    <text x="85" y="35" textAnchor="middle" fontSize="10" fill="#3a2000" fontFamily="serif" fontWeight="bold">AURUM</text>
                    <text x="85" y="50" textAnchor="middle" fontSize="8" fill="#3a2000" fontFamily="serif">999.9 FINE GOLD</text>
                    <text x="85" y="64" textAnchor="middle" fontSize="8" fill="#3a2000" fontFamily="serif">1000g</text>
                  </g>

                  {/* Gold bar 3 (side) */}
                  <g transform="translate(220,140) rotate(10)" opacity="0.6">
                    <rect x="0" y="0" width="140" height="70" rx="4" fill="url(#gold2)"/>
                  </g>

                  {/* Light rays */}
                  <g opacity="0.15">
                    <line x1="200" y1="0" x2="300" y2="300" stroke="#F8EBC0" strokeWidth="60"/>
                    <line x1="350" y1="0" x2="150" y2="300" stroke="#F8EBC0" strokeWidth="30"/>
                  </g>
                </svg>
              </div>

              {/* Label overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold text-primary font-[Manrope] tracking-widest">AURUM 999.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
