import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, fadeIn, staggerContainer, staggerItem } from '@/lib/motion'
import heroVideo from '@/assets/video/video_herobanner.mp4'
import heroImg   from '@/assets/hero.png'
import icTitle1    from '@/assets/image/ic_title1.png'
import icTitle1x2  from '@/assets/image/ic_title1@2x.png'
import icTitle1x3  from '@/assets/image/ic_title1@3x.png'
import icHero1    from '@/assets/image/ic_item_hero1.png'
import icHero1x2  from '@/assets/image/ic_item_hero1@2x.png'
import icHero1x3  from '@/assets/image/ic_item_hero1@3x.png'
import icHero2    from '@/assets/image/ic_item_hero2.png'
import icHero2x2  from '@/assets/image/ic_item_hero2@2x.png'
import icHero2x3  from '@/assets/image/ic_item_hero2@3x.png'
import icHero3    from '@/assets/image/ic_item_hero3.png'
import icHero3x3  from '@/assets/image/ic_item_hero3@3x.png'

const STATS = [
  { value: '10+',  label: 'Năm kinh nghiệm' },
  { value: '50+',  label: 'Đối tác chiến lược' },
  { value: '100+', label: 'Dự án thành công' },
  { value: '20+',  label: 'Quốc gia đồng hành' },
]

const FEATURES = [
  {
    icon: <img src={icHero1} srcSet={`${icHero1} 1x, ${icHero1x2} 2x, ${icHero1x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Tầm nhìn', desc: 'Chiến lược bền vững, tạo giá trị vượt thời gian.',
  },
  {
    icon: <img src={icHero2} srcSet={`${icHero2} 1x, ${icHero2x2} 2x, ${icHero2x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Hợp tác', desc: 'Đồng hành cùng đối tác trên hành trình phát triển.',
  },
  {
    icon: <img src={icHero3} srcSet={`${icHero3} 1x, ${icHero3x3} 3x`} alt="" className="w-full h-full object-contain" />,
    title: 'Giá trị', desc: 'Tối ưu hiệu quả, kiến tạo lợi thế cạnh tranh.',
  },
]

const PARTNERS = [
  'Schneider Electric', 'Fasgreat', 'Hyundai TC Motor',
  'DEOCA', 'DIAGEO', 'SUZUKI', 'Schneider Electric', 'Fasgreat',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background video ─────────────────────────────── */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline poster={heroImg}
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pb-10 flex-1 flex flex-col justify-center">
        <motion.div
          className="max-w-170"
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeIn}>
            <img
              src={icTitle1}
              srcSet={`${icTitle1} 1x, ${icTitle1x2} 2x, ${icTitle1x3} 3x`}
              alt="Kiến tạo giá trị - Dẫn lối tương lai"
              className="h-auto w-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-6 font-[Playfair_Display] font-bold leading-[1.1] text-text-primary"
            variants={staggerContainer(0.08)}
          >
            <motion.span variants={fadeUp} className="block text-4xl md:text-5xl lg:text-6xl">
              Kết nối giá trị
            </motion.span>
            <motion.span variants={fadeUp} className="block text-4xl md:text-5xl lg:text-6xl text-primary mt-1">
              Kiến tạo tương lai
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="mt-5 text-body-lg text-text-secondary max-w-125 leading-relaxed">
            Hệ sinh thái Tài chính – Tài sản – Công nghệ. Tầm nhìn 2035.
          </motion.p>

          {/* Features */}
          <motion.div variants={staggerContainer(0.1)} className="mt-8 flex flex-col sm:flex-row gap-6">
            {FEATURES.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={staggerItem} className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary font-[Manrope]">{title}</div>
                  <div className="text-body-sm text-text-secondary mt-0.5 leading-snug">{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-10">
            <Button variant="gold" size="lg" icon={true}>Kết nối hợp tác</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 border-t border-divider bg-bg/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 text-center ${i < STATS.length - 1 ? 'lg:border-r lg:border-divider' : ''}`}>
              <span className="text-2xl md:text-3xl font-bold text-primary font-[Playfair_Display]">{value}</span>
              <span className="text-body-sm text-text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Partner logos marquee ─────────────────────────── */}
      <motion.div
        className="relative z-10 bg-secondary/50 border-t border-divider py-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex gap-12 marquee-track w-max">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <span key={i} className="text-body-sm font-semibold tracking-wider text-text-disable whitespace-nowrap font-[Manrope] uppercase flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary/40 inline-block" />
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ── Shared badge ──────────────────────────────────────────────────── */
export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-divider bg-bg-card-2 backdrop-blur-sm">
      <div className="size-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M5 1.5L8.5 8H1.5L5 1.5Z" fill="#C6A15B"/>
        </svg>
      </div>
      <span className="text-[10px] font-bold tracking-[0.15em] text-text-secondary uppercase font-[Manrope]">
        {children}
      </span>
    </div>
  )
}

