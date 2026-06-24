import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { SectionBadge } from './HeroSection'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'

const CRITERIA = [
  {
    key: 'O',
    title: 'Opportunity',
    desc: 'Cơ hội thị trường thực, đủ lớn.',
    color: 'bg-primary text-zinc-900',
  },
  {
    key: 'R',
    title: 'Return',
    desc: 'Hiệu quả vốn rõ ràng.',
    color: 'bg-active text-white',
  },
  {
    key: 'E',
    title: 'Execution',
    desc: 'Năng lực thực thi mạnh.',
    color: 'bg-primary text-zinc-900',
  },
  {
    key: 'B',
    title: 'Builder',
    desc: 'Đội ngũ sáng lập bền chí.',
    color: 'bg-active text-white',
  },
  {
    key: 'R2',
    title: 'Resilience',
    desc: 'Bền bỉ qua chu kỳ.',
    color: 'bg-primary text-zinc-900',
  },
]

export function FundSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', desc: '' })
  const [active, setActive] = useState('O')

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div variants={fadeUp}><SectionBadge>Quỹ đầu tư mạo hiểm</SectionBadge></motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 font-[Playfair_Display] font-bold text-text-primary">
            <span className="block text-2xl md:text-3xl lg:text-4xl">Rót vốn cho những</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-primary mt-1">ý tưởng tiềm năng</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-body-md text-text-secondary max-w-140 mx-auto">
            Đồng hành cùng founder trong AI, chuyển đổi số và các mô hình mới — chọn deal theo nguyên tắc O.R.E.B.R minh bạch, kỷ luật.
          </motion.p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: O.R.E.B.R criteria ────────────────────── */}
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
          >
            {/* Vertical timeline */}
            <div className="relative pl-6">
              {/* Timeline line */}
              <div className="absolute left-5.5 top-4 bottom-4 w-px bg-linear-to-b from-primary via-active to-primary opacity-30" />

              <motion.div
                className="flex flex-col gap-4"
                variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
              >
                {CRITERIA.map(({ key, title, desc, color }) => (
                  <motion.div key={key} variants={staggerItem} className="relative flex items-start gap-4 cursor-pointer"
                    onClick={() => setActive(key)}>
                    {/* Timeline dot */}
                    <div className={`absolute -left-6 size-4 rounded-full border-2 transition-all duration-300
                      ${active === key ? 'border-primary bg-primary scale-125' : 'border-text-disable bg-bg'}`} />

                    {/* Card */}
                    <div className={`flex-1 rounded-xl border p-4 transition-all duration-300 cursor-pointer
                      ${active === key ? 'border-primary/50 bg-bg' : 'border-divider bg-bg/30 hover:border-divider'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`size-8 rounded-full flex items-center justify-center shrink-0 text-[13px] font-extrabold font-[Manrope] ${color}`}>
                          {key === 'R2' ? 'R' : key}
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
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="rounded-2xl border border-divider bg-bg p-7">
              <h3 className="text-h6 font-[Playfair_Display] text-text-primary mb-6 tracking-wide">
                Gửi pitch của bạn
              </h3>

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                {/* Project name */}
                <div>
                  <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Tên dự án</label>
                  <input
                    type="text"
                    placeholder="Nhập tên dự án"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full h-11 px-4 rounded-xl border border-divider bg-bg-card text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="09xx xxx xxx"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider bg-bg-card text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Email</label>
                    <input
                      type="email"
                      placeholder="Nhập email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider bg-bg-card text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-body-sm text-text-secondary mb-1.5 font-[Manrope]">Mô tả dự án</label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả ngắn về hình và vòng gọi vốn"
                    value={form.desc}
                    onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-divider bg-bg-card text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors resize-none"
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
