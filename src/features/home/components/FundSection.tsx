import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icTitle4       from '@/assets/image/ic_title4.png'
import icTitle4x2     from '@/assets/image/ic_title4@2x.png'
import icTitle4x3     from '@/assets/image/ic_title4@3x.png'
import icAnimationIdea from '@/assets/image/ic_animation_idea.gif'
import icItemIdea     from '@/assets/image/ic_item_idea.png'
import icItemIdea2x   from '@/assets/image/ic_item_idea@2x.png'
import icItemIdea3x   from '@/assets/image/ic_item_idea@3x.png'

const CRITERIA = [
  { key: 'O',  title: 'Opportunity', desc: 'Cơ hội thị trường thực, đủ lớn.' },
  { key: 'R',  title: 'Return',      desc: 'Hiệu quả vốn rõ ràng.' },
  { key: 'E',  title: 'Execution',   desc: 'Năng lực thực thi mạnh.' },
  { key: 'B',  title: 'Builder',     desc: 'Đội ngũ sáng lập bền chí.' },
  { key: 'R2', title: 'Resilience',  desc: 'Bền bỉ qua chu kỳ.' },
]

export function FundSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', desc: '' })
  const [active, setActive] = useState('O')

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1F3A 0%, #0B1F3A 25.13%, #14181F 83.48%)' }}>
      {/* Particle-like dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute size-1 rounded-full bg-primary/20"
            style={{
              left: `${10 + i * 4.5}%`,
              top: `${15 + (i % 5) * 18}%`,
              opacity: 0.3 + (i % 3) * 0.2,
            }} />
        ))}
      </div>

      {/* Gif lớn làm nền toàn section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-105 md:w-180 pointer-events-none select-none z-0">
        <img src={icAnimationIdea} alt="" className="w-full h-auto" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <img src={icTitle4} srcSet={`${icTitle4} 1x, ${icTitle4x2} 2x, ${icTitle4x3} 3x`}
              alt="Quỹ đầu tư mạo hiểm" className="h-auto w-auto mx-auto" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-4 font-[Playfair_Display] font-bold text-text-primary text-3xl md:text-[40px] lg:text-4xl">
            Rót vốn cho những <span className="text-primary">ý tưởng tiềm năng</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-3 text-base text-text-secondary max-w-140 mx-auto">
            Đồng hành cùng founder trong AI, chuyển đổi số và các mô hình mới — chọn deal theo nguyên tắc O.R.E.B.R minh bạch, kỷ luật.
          </motion.p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: O.R.E.B.R criteria ────────────────────── */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
            className="h-full"
          >
            <div className="relative h-full">
              {/* Timeline line: w-0.5 (2px), left-[5px] → center tại 6px = center của dot size-3 */}
              <div className="absolute left-1.25 top-3 bottom-3 w-0.5 bg-linear-to-b from-transparent via-primary to-transparent" />

              <motion.div
                className="flex flex-col gap-3"
                variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
              >
                {CRITERIA.map(({ key, title, desc }) => (
                  <motion.div key={key} variants={staggerItem}
                    className="flex items-center gap-5 cursor-pointer"
                    onClick={() => setActive(key)}>

                    {/* Dot */}
                    <div className={`relative z-10 size-3 rounded-full shrink-0 transition-all duration-300
                      bg-primary shadow-[0_0_10px_3px_rgba(212,175,55,0.45)]
                      ${active === key ? 'scale-125 shadow-[0_0_16px_5px_rgba(212,175,55,0.65)]' : ''}`} />

                    {/* Card */}
                    <div className="flex-1 border p-4 transition-all duration-300"
                      style={{ borderRadius: '16px 56px 56px 16px', border: '1px solid rgba(246, 247, 249, 0.10)' }}>
                      <div className="flex items-center gap-3">
                        <div className="relative size-14 shrink-0 flex items-center justify-center">
                          <img src={icItemIdea} srcSet={`${icItemIdea} 1x, ${icItemIdea2x} 2x, ${icItemIdea3x} 3x`}
                            alt="" className="absolute inset-0 size-full object-contain" />
                          <span className="relative text-[32px] font-extrabold font-[Manrope] text-text-primary">
                            {key === 'R2' ? 'R' : key}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-text-primary font-[Manrope] text-sm">{title}</div>
                          <div className="text-body-sm text-text-secondary">{desc}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Pitch form ────────────────────────────── */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport} className="h-full">
            <div className="rounded-2xl border border-divider p-7 h-full"
              style={{ background: 'rgba(11, 31, 58, 0.30)', boxShadow: '0 1px 20px 0 rgba(39, 148, 219, 0.16)' }}>
              <h3 className="text-h6 font-[Playfair_Display] text-text-primary mb-6 tracking-wide">
                Gửi pitch của bạn
              </h3>

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Tên dự án</label>
                  <input
                    type="text"
                    placeholder="Nhập tên dự án"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="09xx xxx xxx"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Email</label>
                    <input
                      type="email"
                      placeholder="Nhập email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Mô tả dự án</label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả ngắn về hình và vòng gọi vốn"
                    value={form.desc}
                    onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <Button variant="gold" size="md" icon={true} fullWidth>
                    Gửi pitch ngay
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
