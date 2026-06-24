import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { SectionBadge } from './HeroSection'
import { fadeUp, fadeLeft, staggerContainer, staggerItem, viewport } from '@/lib/motion'

const PROJECTS = [
  {
    name: 'Aurum Complex',
    location: 'TP. Hồ Chí Minh',
    gradient: 'from-secondary via-active/40 to-bg',
  },
  {
    name: 'AFT Tower',
    location: 'TP. Đà Nẵng',
    gradient: 'from-bg via-active/20 to-secondary',
  },
  {
    name: 'Golden Residences',
    location: 'Hà Nội',
    gradient: 'from-secondary via-primary/10 to-bg',
  },
]

const STATS = [
  { value: '7',  label: 'Địa bàn trọng điểm' },
  { value: '3+', label: 'Loại hình dự án' },
]

export function RealEstateSection() {
  const [active, setActive] = useState(0)
  const project = PROJECTS[active]

  return (
    <section className="py-0 bg-bg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

        {/* ── Left: Project showcase ───────────────────────── */}
        <motion.div
          className="relative"
          variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
        >
          {/* Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-700`} />
          {/* Architectural grid lines overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice">
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={i} x1={50 * i} y1="0" x2={50 * i} y2="560" stroke="white" strokeWidth="0.5"/>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={i} x1="0" y1={50 * i} x2="400" y2={50 * i} stroke="white" strokeWidth="0.5"/>
              ))}
              <rect x="60" y="80" width="280" height="400" stroke="#C6A15B" strokeWidth="1" fill="none" opacity="0.4"/>
              <rect x="100" y="120" width="200" height="320" stroke="#C6A15B" strokeWidth="0.5" fill="none" opacity="0.2"/>
            </svg>
          </div>

          {/* Project info card */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="rounded-xl border border-divider bg-bg/85 backdrop-blur-md p-4">
              <div className="text-[10px] font-bold tracking-[0.2em] text-text-disable font-[Manrope] uppercase mb-2">
                Dự án tiêu biểu
              </div>
              <div className="flex items-start gap-3">
                {/* Thumbnail placeholder */}
                <div className="size-14 rounded-lg bg-gradient-to-br from-primary/30 to-active/30 border border-primary/20 shrink-0 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>
                    <line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-text-primary font-[Manrope] tracking-wide">{project.name}</div>
                  <div className="flex items-center gap-1 mt-1 text-body-sm text-text-secondary">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {project.location}
                  </div>
                  <button className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-primary font-[Manrope] tracking-wide hover:gap-2 transition-all">
                    Xem chi tiết
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H5M9 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide dots */}
            <div className="flex gap-1.5 mt-3 justify-center">
              {PROJECTS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? 'w-5 h-1.5 bg-primary' : 'size-1.5 bg-text-disable/50'}`}/>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Content ───────────────────────────────── */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-14 py-16 bg-secondary/40"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}><SectionBadge>Lĩnh vực</SectionBadge></motion.div>

          <motion.h2 variants={fadeUp} className="mt-6 font-[Playfair_Display] font-bold text-text-primary">
            <span className="block text-3xl md:text-[2.4rem] leading-tight">Bất động sản</span>
            <span className="block text-3xl md:text-[2.4rem] leading-tight">và dự án</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-body-md text-text-secondary leading-relaxed max-w-115">
            Môi giới, phát triển dự án và bất động sản du lịch – nghỉ dưỡng tại các địa bàn trọng điểm. Tài sản thực làm nền tảng vay vốn và tạo dòng tiền ổn định cho hệ sinh thái.
          </motion.p>

          {/* Stats */}
          <motion.div variants={staggerContainer(0.08)} className="flex gap-8 mt-8">
            {STATS.map(({ value, label }) => (
              <motion.div key={label} variants={staggerItem} className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary font-[Manrope]">{value}</div>
                  <div className="text-body-sm text-text-secondary">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <Button variant="gold" size="md" icon={true}>Khám phá dự án</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
