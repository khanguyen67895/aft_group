import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewport } from '@/lib/motion'

const CARDS = [
  { key: 'asset',  title: 'Tài sản',   icon: <BuildingIcon />, desc: 'Quản trị và phát triển tài sản, gia tăng giá trị dài hạn.' },
  { key: 'vision', title: 'Tầm nhìn',  icon: <PillarIcon />,   desc: 'Chiến lược bền vững, tạo giá trị vượt thời gian.' },
  { key: 'tech',   title: 'Công nghệ', icon: <ChipIcon />,     desc: 'Công nghệ tiên tiến, đổi mới không ngừng.' },
]

export function VisionSection() {
  const [active, setActive] = useState('vision')

  return (
    <section className="relative py-20 overflow-hidden bg-secondary">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-active/5 blur-[120px]" />
        <NetworkLines />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0">

          {/* Left card */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
            onClick={() => setActive('asset')}
            className={`cursor-pointer transition-all duration-300 ${active === 'asset' ? 'scale-105' : 'opacity-70 hover:opacity-90'}`}
          >
            <VisionCard {...CARDS[0]} isActive={active === 'asset'} />
          </motion.div>

          {/* Arrow L→C */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="hidden md:flex flex-col items-center gap-1 px-3 text-primary/50 text-xs font-bold tracking-widest"
          >
            <span>›</span><span>›</span><span>›</span>
          </motion.div>

          {/* Center card */}
          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
            onClick={() => setActive('vision')}
            className={`cursor-pointer transition-all duration-300 ${active === 'vision' ? 'scale-105' : 'opacity-70 hover:opacity-90'}`}
          >
            <VisionCard {...CARDS[1]} isActive={active === 'vision'} center />
          </motion.div>

          {/* Arrow C→R */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
            className="hidden md:flex flex-col items-center gap-1 px-3 text-primary/50 text-xs font-bold tracking-widest"
          >
            <span>‹</span><span>‹</span><span>‹</span>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
            onClick={() => setActive('tech')}
            className={`cursor-pointer transition-all duration-300 ${active === 'tech' ? 'scale-105' : 'opacity-70 hover:opacity-90'}`}
          >
            <VisionCard {...CARDS[2]} isActive={active === 'tech'} />
          </motion.div>
        </div>

        {/* Mobile stacked */}
        <motion.div
          variants={staggerContainer(0.12)} initial="hidden" whileInView="show" viewport={viewport}
          className="flex flex-col gap-4 md:hidden"
        >
          {CARDS.map(card => (
            <motion.div key={card.key} variants={fadeUp} onClick={() => setActive(card.key)}
              className={`cursor-pointer transition-all duration-300 ${active === card.key ? 'scale-[1.02]' : 'opacity-70'}`}>
              <VisionCard {...card} isActive={active === card.key} center={card.key === 'vision'} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dots */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="flex justify-center gap-2 mt-10"
        >
          {CARDS.map(card => (
            <button key={card.key} onClick={() => setActive(card.key)}
              className={`rounded-full transition-all duration-300 ${active === card.key ? 'w-6 h-2 bg-primary' : 'size-2 bg-text-disable'}`} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function VisionCard({ title, icon, desc, isActive, center }: {
  title: string; icon: React.ReactNode; desc: string; isActive: boolean; center?: boolean
}) {
  return (
    <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden p-6
      ${center ? 'py-10 md:py-14' : 'py-8'}
      ${isActive ? 'border-primary/60 bg-active/20 shadow-[0_0_30px_rgba(28,93,136,0.3)]' : 'border-divider bg-bg-card/60'}`}>
      {isActive && <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-primary/15 blur-2xl" />}
      <div className="flex flex-col items-center text-center gap-4 relative z-10">
        <div className={`flex items-center justify-center rounded-2xl border transition-colors duration-300
          ${center ? 'size-16' : 'size-12'}
          ${isActive ? 'border-primary/50 bg-primary/10' : 'border-divider bg-bg-card'}`}>
          {icon}
        </div>
        <div className={`font-[Playfair_Display] font-bold text-text-primary tracking-wide ${center ? 'text-2xl uppercase' : 'text-lg'}`}>
          {title}
        </div>
        <p className="text-body-sm text-text-secondary leading-relaxed max-w-50">{desc}</p>
      </div>
    </div>
  )
}

function NetworkLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
      <circle cx="600" cy="300" r="200" stroke="#1C5D88" strokeWidth="1" fill="none" strokeDasharray="4 8"/>
      <circle cx="600" cy="300" r="350" stroke="#1C5D88" strokeWidth="0.5" fill="none" strokeDasharray="2 12"/>
      <line x1="200" y1="300" x2="1000" y2="300" stroke="#C6A15B" strokeWidth="0.5" strokeDasharray="3 10"/>
      <line x1="600" y1="50" x2="600" y2="550" stroke="#C6A15B" strokeWidth="0.5" strokeDasharray="3 10"/>
    </svg>
  )
}

function BuildingIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="9" height="14"/><rect x="13" y="3" width="9" height="18"/></svg>
}
function PillarIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 10 5 3 19 3 19 10"/><line x1="9" y1="21" x2="9" y2="10"/><line x1="15" y1="21" x2="15" y2="10"/></svg>
}
function ChipIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><line x1="9" y1="7" x2="9" y2="3"/><line x1="15" y1="7" x2="15" y2="3"/><line x1="9" y1="21" x2="9" y2="17"/><line x1="15" y1="21" x2="15" y2="17"/><line x1="7" y1="9" x2="3" y2="9"/><line x1="7" y1="15" x2="3" y2="15"/><line x1="21" y1="9" x2="17" y2="9"/><line x1="21" y1="15" x2="17" y2="15"/></svg>
}
