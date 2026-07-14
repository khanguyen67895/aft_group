import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'
import icTitle5      from '@/assets/image/ic_title5.png'
import icDesTeam    from '@/assets/image/ic_des_team.png'
import icDesTeamMb  from '@/assets/image/ic_des_team_mb.png'
import icLeft      from '@/assets/image/ic_left.png'
import icRight     from '@/assets/image/ic_right.png'
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
import icAvatar6 from '@/assets/image/ic_avatar6@3x.png'
import icAvatar6x2 from '@/assets/image/ic_avatar6@3x.png'
import icAvatar6x3 from '@/assets/image/ic_avatar6@3x.png'

const EXPERTS = [
  { name: 'Nguyễn Đình Cương', role: 'Chairman/CEO', dept: '(Chủ tịch kiêm điều hành)', src: icAvatar6, src2x: icAvatar6x2, src3x: icAvatar6x3 },
  { name: 'Nguyễn Văn Nghuyện', role: 'COO',          dept: '(Vận hành)',                 src: icAvatar4, src2x: icAvatar4x2, src3x: icAvatar4x3 },
  { name: 'Nguyễn Hải Sơn',     role: 'CFO',          dept: '(Tài chính)',                src: icAvatar3, src2x: icAvatar3x2, src3x: icAvatar3x3 },
  { name: 'Nguyễn Quang Việt',  role: 'CDO',          dept: '(Chuyển đổi số, Công nghệ và Marketing)', src: icAvatar1, src2x: icAvatar1x2, src3x: icAvatar1x3 },
  { name: 'Nguyễn Anh Tuấn',    role: 'CLO',          dept: '(Pháp chế)',                 src: icAvatar2, src2x: icAvatar2x2, src3x: icAvatar2x3 },
  { name: 'Trần Đại Nghĩa',     role: 'CSO',          dept: '(Chiến lược)',               src: icAvatar5, src2x: icAvatar5x2, src3x: icAvatar5x3 },
]

interface TeamSectionProps {
  tone?: 'default' | 'blue'
}

export function TeamSection({ tone = 'default' }: TeamSectionProps) {
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
    <section className={cn('pb-6 md:pb-20 pt-8 relative overflow-hidden', tone === 'blue' && 'bg-secondary')}>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none"/>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left ─────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <EditableImage id="home.team.img.title" fallbackSrc={icTitle5} alt="Về chúng tôi" className="h-auto w-auto" />
            </motion.div>

            <motion.h2 variants={fadeUp}
              className="mt-5 font-[Playfair_Display] font-bold text-text-primary uppercase text-[30px] md:text-[40px] leading-tight">
              <EditableText id="home.team.title" fallbackVi="Đội ngũ chuyên gia" />
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-xl text-text-secondary leading-relaxed max-w-110">
              <EditableText id="home.team.subtitle" fallbackVi="Sáu con người, một lời thề – đặt tổ chức lên trên cái tôi, đặt niềm tin trước lợi nhuận." />
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <EditableImage id="home.team.img.description" fallbackSrc={icDesTeam} alt="" className="w-full h-auto hidden md:block" />
              <EditableImage id="home.team.img.description.mobile" fallbackSrc={icDesTeamMb} alt="" className="w-full h-auto md:hidden" />
            </motion.div>
          </motion.div>

          {/* ── Right: Fan carousel — desktop only ─── */}
          <div className="hidden lg:block relative overflow-visible ml-auto" style={{ width: '480px' }}>

            {/* Nav arrows top-right */}
            <div className="absolute top-0 right-0 flex gap-2 z-20">
              <button onClick={prev} className="size-10 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <EditableImage id="home.team.img.navprev" fallbackSrc={icLeft} alt="Prev" className="size-full object-cover" />
              </button>
              <button onClick={next} className="size-10 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <EditableImage id="home.team.img.navnext" fallbackSrc={icRight} alt="Next" className="size-full object-cover" />
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
                    className="absolute top-0 right-55 cursor-pointer"
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
                    <ExpertCard expert={expert} index={i} isActive={pos === 0} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Mobile: stacked fan carousel (mirrors desktop) ─── */}
          <div className="lg:hidden">
            <div className="relative" style={{ width: '82vw', maxWidth: '340px', height: '380px' }}>
              {EXPERTS.map((expert, i) => {
                const raw = (i - activeIdx + total) % total
                // raw 0=active, 1-2=stacked behind to the right
                const pos = raw > 2 ? -1 : raw
                if (pos < 0) return null

                //          active  +1    +2
                const TX    = { 0: 0,  1: 50,  2: 95 }
                const SCALE = { 0: 1.0, 1: 0.9, 2: 0.82 }
                const ZIDX  = { 0: 10,  1: 9,   2: 8   }

                const k = pos as keyof typeof TX

                return (
                  <div key={i}
                    className="absolute top-0 left-0 cursor-pointer"
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: `translateX(${TX[k]}px) scale(${SCALE[k]})`,
                      transformOrigin: 'bottom left',
                      zIndex: ZIDX[k],
                      transition: 'all 0.45s cubic-bezier(0.34, 1.2, 0.64, 1)',
                    }}
                    onClick={() => { setActiveIdx(i); setAutoKey(k2 => k2 + 1) }}
                  >
                    <ExpertCard expert={expert} index={i} isActive={pos === 0} />
                  </div>
                )
              })}
            </div>
            <div className="flex justify-start items-center gap-4 mt-4">
              <button onClick={prev} className="size-9 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <EditableImage id="home.team.img.navprev" fallbackSrc={icLeft} alt="Prev" className="size-full object-cover" />
              </button>
              <span className="text-sm font-[Manrope] font-semibold text-text-secondary tabular-nums">
                {activeIdx + 1}/{total}
              </span>
              <button onClick={next} className="size-9 rounded-full overflow-hidden shrink-0 transition-opacity hover:opacity-80">
                <EditableImage id="home.team.img.navnext" fallbackSrc={icRight} alt="Next" className="size-full object-cover" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ExpertCard({ expert, index, isActive }: {
  expert: { name: string; role: string; dept:string; src: string; src2x: string; src3x: string }
  index: number
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
      <EditableImage
        id={`home.team.member.${index}.avatar`}
        fallbackSrc={expert.src}
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
        <EditableText
          id={`home.team.member.${index}.name`}
          fallbackVi={expert.name}
          as="div"
          className="font-bold text-white font-[Manrope] text-xl tracking-wide uppercase leading-tight"
        />

        <EditableText
          id={`home.team.member.${index}.role`}
          fallbackVi={expert.role}
          as="div"
          className="text-[14px] md:text-[14px] text-text-secondary font-[Manrope] tracking-widest uppercase mt-1"
        />
        <EditableText
          id={`home.team.member.${index}.dept`}
          fallbackVi={expert.dept}
          as="div"
          className="text-[14px] md:text-[14px] text-text-secondary font-[Manrope] uppercase mt-0.5 leading-snug"
        />
      </div>
    </div>
  )
}
