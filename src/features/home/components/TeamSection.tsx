import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'
import icTitle5      from '@/assets/image/ic_title5.png'
import icDesTeam    from '@/assets/image/ic_des_team.png'
import icDesTeam2x  from '@/assets/image/ic_des_team@2x.png'
import icDesTeam3x  from '@/assets/image/ic_des_team@3x.png'
import icTitle5x2  from '@/assets/image/ic_title5@2x.png'
import icTitle5x3  from '@/assets/image/ic_title5@3x.png'
import icLeft      from '@/assets/image/ic_left.png'
import icLeft2x    from '@/assets/image/ic_left@2x.png'
import icLeft3x    from '@/assets/image/ic_left@3x.png'
import icRight     from '@/assets/image/ic_right.png'
import icRight2x   from '@/assets/image/ic_right@2x.png'
import icRight3x   from '@/assets/image/ic_right@3x.png'
import icAvatar1   from '@/assets/image/ic_avatar1.png'
import icAvatar1x2 from '@/assets/image/ic_avatar1@2x.png'
import icAvatar1x3 from '@/assets/image/ic_avatar1@3x.png'
import icAvatar2   from '@/assets/image/ic_avatar2.png'
import icAvatar2x2 from '@/assets/image/ic_avatar2@2x.png'
import icAvatar2x3 from '@/assets/image/ic_avatar2@3x.png'
import icAvatar3   from '@/assets/image/ic_avatar3.png'
import icAvatar3x2 from '@/assets/image/ic_avatar3@2x.png'
import icAvatar3x3 from '@/assets/image/ic_avatar3@3x.png'
import icAvatar4   from '@/assets/image/ic_avatar4.png'
import icAvatar4x2 from '@/assets/image/ic_avatar4@2x.png'
import icAvatar4x3 from '@/assets/image/ic_avatar4@3x.png'
import icAvatar5   from '@/assets/image/ic_avatar5.png'
import icAvatar5x2 from '@/assets/image/ic_avatar5@2x.png'
import icAvatar5x3 from '@/assets/image/ic_avatar5@3x.png'

const EXPERTS = [
  { name: 'Nguyễn Quang Việt', role: 'CEO, Founder', src: icAvatar1, src2x: icAvatar1x2, src3x: icAvatar1x3 },
  { name: 'Nguyễn Quân',       role: 'Co-Founder',   src: icAvatar2, src2x: icAvatar2x2, src3x: icAvatar2x3 },
  { name: 'Nguyễn Quân',       role: 'Co-Founder',   src: icAvatar3, src2x: icAvatar3x2, src3x: icAvatar3x3 },
  { name: 'AFT Member',        role: 'Co-Founder',   src: icAvatar4, src2x: icAvatar4x2, src3x: icAvatar4x3 },
  { name: 'AFT Member',        role: 'Co-Founder',   src: icAvatar5, src2x: icAvatar5x2, src3x: icAvatar5x3 },
]

export function TeamSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [autoKey, setAutoKey] = useState(0)
  const total = EXPERTS.length

  const prev = () => { setActiveIdx(i => (i - 1 + total) % total); setAutoKey(k => k + 1) }
  const next = () => { setActiveIdx(i => (i + 1) % total); setAutoKey(k => k + 1) }

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(i => (i + 1) % total), 3500)
    return () => clearInterval(t)
  }, [total, autoKey])

  return (
    <section className="pb-20 pt-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none"/>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left ─────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <img src={icTitle5} srcSet={`${icTitle5} 1x, ${icTitle5x2} 2x, ${icTitle5x3} 3x`}
                alt="Về chúng tôi" className="h-auto w-auto" />
            </motion.div>

            <motion.h2 variants={fadeUp}
              className="mt-5 font-[Playfair_Display] font-bold text-text-primary uppercase text-[40px] md:text-5xl leading-tight">
              Đội ngũ chuyên gia
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-xl text-text-secondary leading-relaxed max-w-110">
              Năm con người, một lời thề – đặt tổ chức lên trên cái tôi, đặt niềm tin trước lợi nhuận.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <img src={icDesTeam} srcSet={`${icDesTeam} 1x, ${icDesTeam2x} 2x, ${icDesTeam3x} 3x`}
                alt="" className="w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* ── Right: Fan carousel — ml-auto → sát phải ─── */}
          <div className="relative overflow-visible ml-auto" style={{ width: '480px' }}>

            {/* Nav arrows top-right */}
            <div className="absolute top-0 right-0 flex gap-2 z-20">
              <button onClick={prev} className="size-10 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <img src={icLeft} srcSet={`${icLeft} 1x, ${icLeft2x} 2x, ${icLeft3x} 3x`}
                  alt="Prev" className="size-full object-cover" />
              </button>
              <button onClick={next} className="size-10 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <img src={icRight} srcSet={`${icRight} 1x, ${icRight2x} 2x, ${icRight3x} 3x`}
                  alt="Next" className="size-full object-cover" />
              </button>
            </div>

            {/* Cards: 1 sliver trái + active + 3 phải, bottom-aligned */}
            <div className="relative mt-16" style={{ height: '460px' }}>
              {EXPERTS.map((expert, i) => {
                const raw = (i - activeIdx + total) % total
                // raw 0=active, 1-3=right, total-1=left sliver
                const pos = raw === total - 1 ? -1 : raw
                if (pos < -1 || pos > 3) return null

                //          left   active   +1    +2    +3
                const TX    = { '-1': -20, 0: 60,  1: 178, 2: 265, 3: 338 }
                const SCALE = { '-1': 0.82, 0: 1.0,  1: 0.82, 2: 0.72, 3: 0.64 }
                const ZIDX  = { '-1': 1,    0: 10,   1: 9,    2: 8,    3: 7   }

                const k = String(pos) as keyof typeof TX

                return (
                  <div key={i}
                    className="absolute top-0 left-0 cursor-pointer"
                    style={{
                      width: '320px',
                      height: '460px',
                      transform: `translateX(${TX[k]}px) scale(${SCALE[k]})`,
                      transformOrigin: 'bottom left',
                      zIndex: ZIDX[k],
                      transition: 'all 0.45s cubic-bezier(0.34, 1.2, 0.64, 1)',
                    }}
                    onClick={() => { setActiveIdx(i); setAutoKey(k2 => k2 + 1) }}
                  >
                    <ExpertCard expert={expert} isActive={pos === 0} />
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ExpertCard({ expert, isActive }: {
  expert: { name: string; role: string; src: string; src2x: string; src3x: string }
  isActive: boolean
}) {
  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden relative border transition-all duration-400
      ${isActive
        ? 'border-primary/50 shadow-[0_0_40px_rgba(198,161,91,0.25)]'
        : 'border-white/10'}`}>

      {/* Warm gradient bg (visible above photo if photo doesn't fill top) */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(198,161,91,0.35) 0%, rgba(11,31,58,0.9) 100%)' }} />

      {/* Avatar photo */}
      <img
        src={expert.src}
        srcSet={`${expert.src} 1x, ${expert.src2x} 2x, ${expert.src3x} 3x`}
        alt={expert.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Blue overlay cho non-active cards */}
      {!isActive && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(11,31,58,0.55) 0%, rgba(20,40,80,0.45) 100%)' }} />
      )}

      {/* Bottom name overlay */}
      <div className="absolute text-center bottom-0 inset-x-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pt-14 pb-4 px-4">
        <div className="font-bold text-white font-[Manrope] text-sm tracking-wide uppercase leading-tight">
          {expert.name}
        </div>
        <div className="text-[10px] text-white/60 font-[Manrope] tracking-widest uppercase mt-0.5">
          {expert.role}
        </div>
      </div>
    </div>
  )
}
