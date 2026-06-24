import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionBadge } from './HeroSection'
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion'

const EXPERTS = [
  { name: 'Nguyễn Quang Việt', role: 'CEO, Founder', gradient: 'from-primary/30 via-active/20 to-secondary' },
  { name: 'Nguyễn Quân',       role: 'Co-Founder',  gradient: 'from-active/30 via-secondary to-bg' },
  { name: 'Nguyễn Quân',       role: 'Co-Founder',  gradient: 'from-secondary via-active/15 to-bg' },
  { name: 'AFT Member',        role: 'Co-Founder',  gradient: 'from-bg via-active/10 to-secondary' },
  { name: 'AFT Member',        role: 'Co-Founder',  gradient: 'from-secondary via-primary/10 to-bg' },
  { name: 'AFT Member',        role: 'Co-Founder',  gradient: 'from-active/20 via-secondary to-bg' },
]

export function TeamSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="py-20 bg-bg relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none"/>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Content ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <SectionBadge>Về chúng tôi</SectionBadge>
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-6 text-h3 font-[Playfair_Display] text-text-primary">
              Đội ngũ chuyên gia
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-body-md text-text-secondary leading-relaxed max-w-110">
              Sáu con người, một lời thề – đặt tổ chức lên trên cái tôi, đặt niềm tin trước lợi nhuận.
            </motion.p>

            {/* Quote block */}
            <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-primary/20 bg-bg-card-2 p-6 relative">
              <div className="absolute -top-3 left-6 text-primary text-3xl font-[Playfair_Display] leading-none">"</div>
              <blockquote className="text-body-md text-text-secondary leading-relaxed italic font-[Playfair_Display]">
                Không có lợi ích cá nhân nào lớn hơn lợi ích AFT. Chúng tôi cùng xây dựng một tổ chức dựa trên niềm tin, kỷ luật, trí tuệ và sự thịnh vượng bền vững.
              </blockquote>
              <footer className="mt-4 text-[10px] tracking-[0.2em] text-text-disable font-bold font-[Manrope] uppercase">
                — Lời thề sáu nhà sáng lập AFT
              </footer>
            </motion.div>

            {/* Expert names list */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-2">
              {EXPERTS.map((e, i) => (
                <button key={i} onClick={() => setActiveIdx(i)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all duration-200
                    ${activeIdx === i ? 'bg-primary/10 border border-primary/30' : 'border border-transparent hover:bg-bg-card/50'}`}>
                  <div className={`size-2 rounded-full transition-colors ${activeIdx === i ? 'bg-primary' : 'bg-text-disable'}`}/>
                  <div>
                    <div className={`text-sm font-bold font-[Manrope] transition-colors ${activeIdx === i ? 'text-primary' : 'text-text-secondary'}`}>
                      {e.name}
                    </div>
                    <div className="text-[11px] text-text-disable font-[Manrope] tracking-wide">{e.role}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Stacked expert cards ─────────────────── */}
          <motion.div
            className="flex justify-center lg:justify-end items-center"
            variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
          >
            <div className="relative w-70 h-100">
              {EXPERTS.map((expert, i) => {
                const offset    = i - activeIdx
                const absOffset = Math.abs(offset)
                const isActive  = i === activeIdx
                const scale     = isActive ? 1 : Math.max(0.75, 1 - absOffset * 0.06)
                const zIndex    = isActive ? 10 : 10 - absOffset
                const translateX = offset * 30
                const translateY = absOffset * 8
                const opacity   = absOffset > 2 ? 0 : Math.max(0.3, 1 - absOffset * 0.25)

                return (
                  <div key={i} onClick={() => setActiveIdx(i)}
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}>
                    <ExpertCard expert={expert} isActive={isActive} />
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ExpertCard({ expert, isActive }: {
  expert: { name: string; role: string; gradient: string }
  isActive: boolean
}) {
  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden border transition-all duration-400 relative
      ${isActive ? 'border-primary/60 shadow-[0_0_40px_rgba(198,161,91,0.2)]' : 'border-divider'}`}>
      <div className={`absolute inset-0 bg-linear-to-b ${expert.gradient}`} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`size-24 rounded-full border-2 flex items-center justify-center
          ${isActive ? 'border-primary/60' : 'border-divider'}`}
          style={{ background: 'linear-gradient(135deg, rgba(198,161,91,0.15), rgba(28,93,136,0.15))' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.2" opacity="0.6">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-bg via-bg/90 to-transparent pt-12 pb-6 px-5 text-center">
        {isActive && (
          <div className="text-[10px] font-bold tracking-[0.2em] text-text-disable font-[Manrope] uppercase mb-1">
            CEO • FOUNDER
          </div>
        )}
        <div className="font-bold text-text-primary font-[Manrope] text-sm tracking-wide">{expert.name}</div>
        <div className="text-[11px] text-text-secondary font-[Manrope] tracking-widest uppercase mt-0.5">{expert.role}</div>
      </div>
    </div>
  )
}
