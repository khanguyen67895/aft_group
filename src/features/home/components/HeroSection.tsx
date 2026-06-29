import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { fadeUp, fadeIn, staggerContainer, staggerItem } from '@/lib/motion'
import heroVideo   from '@/assets/video/video_herobanner.mp4'
import heroVideoMb from '@/assets/video/video_herobanner_mb.mp4'
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
import icBgStats    from '@/assets/image/ic_bg_stats.png'
import icBgStats2x  from '@/assets/image/ic_bg_stats@2x.png'
import icBgStats3x  from '@/assets/image/ic_bg_stats@3x.png'
import logo01 from '@/assets/image/logo-01.png'
import logo02 from '@/assets/image/logo-02.png'
import logo03 from '@/assets/image/logo-03.png'
import logo04 from '@/assets/image/logo-04.png'
import logo05 from '@/assets/image/logo-05.png'
import logo06 from '@/assets/image/logo-06.png'
import logo07 from '@/assets/image/logo-07.png'
import logo08 from '@/assets/image/logo-08.png'
import logo09 from '@/assets/image/logo-09.png'
import logo10 from '@/assets/image/logo-10.png'
import logo11 from '@/assets/image/logo-11.png'
import logo12 from '@/assets/image/logo-12.png'
import logo13 from '@/assets/image/logo-13.png'
import logo14 from '@/assets/image/logo-14.png'
import logo15 from '@/assets/image/logo-15.png'
import logo16 from '@/assets/image/logo-16.png'
import logo17 from '@/assets/image/logo-17.png'
import logo18 from '@/assets/image/logo-18.png'
import logo19 from '@/assets/image/logo-19.png'
import logo20 from '@/assets/image/logo-20.png'

const PARTNER_LOGOS = [
  logo01, logo02, logo03, logo04, logo05,
  logo06, logo07, logo08, logo09, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
]

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


export function HeroSection() {
  return (
    <section className="relative md:min-h-screen flex flex-col overflow-hidden">

      {/* ── Background video ─────────────────────────────── */}
      <div className="absolute inset-0">
        {/* Desktop video */}
        <video autoPlay muted loop playsInline poster={heroImg}
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center">
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Mobile video */}
        <video autoPlay muted loop playsInline poster={heroImg}
          className="md:hidden absolute inset-0 w-full h-full object-cover object-center">
          <source src={heroVideoMb} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/20" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pb-6 md:pb-10 md:flex-1 flex flex-col mt-24 md:mt-40">
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
            <motion.span variants={fadeUp} className="block text-3xl md:text-5xl lg:text-6xl">
              KẾT NỐI GIÁ TRỊ
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-3xl md:text-5xl lg:text-[64px] mt-3"
              style={{
                background: 'linear-gradient(90deg, #C6A15B 25%, #F8EBC0 45%, #fff8e8 50%, #F8EBC0 55%, #C6A15B 75%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'text-shimmer 2.8s ease-in-out infinite',
                willChange: 'background-position',
                lineHeight: '1.35',
              }}
            >
              KIẾN TẠO TƯƠNG LAI
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="mt-5 text-xl text-text-primary max-w-full leading-relaxed">
            Hệ sinh thái Tài chính – Tài sản – Công nghệ. Tầm nhìn 2035.
          </motion.p>

          {/* Features */}
          <motion.div variants={staggerContainer(0.1)} className="mt-6 flex flex-row gap-3 sm:gap-6">
            {FEATURES.map(({ icon, title, desc }, i) => (
              <>
                <motion.div key={title} variants={staggerItem} className="flex-1 flex flex-col items-start gap-1 sm:gap-3">
                  <div className="flex items-center justify-start gap-2 sm:gap-3">
                    <div className="size-5 sm:size-6 rounded-lg flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div className="text-sm sm:text-xl font-bold font-[Playfair_Display] text-text-primary leading-tight">{title}</div>
                  </div>
                  <div className="text-xs sm:text-base text-text-secondary leading-snug">{desc}</div>
                </motion.div>
                {i < FEATURES.length - 1 && (
                  <div key={`sep-${i}`} className="w-px self-stretch" style={{ background: "radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(115, 115, 115, 0.00) 100%)" }} />
                )}
              </>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-6 md:mt-10">
            <Button variant="gold" size="lg" icon={true}
              className="h-11 px-5 text-sm gap-2 md:h-16 md:px-8 md:text-2xl md:gap-3">
              Kết nối hợp tác
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats card — full-width bottom ───────────── */}
      <motion.div
        className="absolute bottom-20 right-0 left-0 z-10 hidden lg:flex justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div
          className="flex w-1/2 mr-18 mb-8 justify-evenly"
          style={{
            backgroundImage: `image-set(url(${icBgStats}) 1x, url(${icBgStats2x}) 2x, url(${icBgStats3x}) 3x)`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {STATS.flatMap(({ value, label }, i) => [
            i > 0 && (
              <div key={`sep-${i}`} className="w-px h-10 self-center" style={{ background: 'linear-gradient(to bottom, transparent, rgba(217,217,217,0.4) 30%, rgba(217,217,217,0.4) 70%, transparent)' }} />
            ),
            <div key={label} className="flex flex-col items-center justify-center gap-1 text-center px-8 py-5">
              <span className="text-[40px] font-bold text-primary font-[Playfair_Display]">{value}</span>
              <span className="text-base text-text-secondary whitespace-nowrap">{label}</span>
            </div>,
          ]).filter(Boolean)}
        </div>
      </motion.div>

      {/* ── Partner logos marquee ─────────────────────────── */}
      <motion.div
        className="relative z-10 py-4 overflow-hidden"
        style={{ background: 'var(--color-bg-card, #0B1F3A)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex items-center gap-12 marquee-track w-max">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
            <img key={i} src={src} alt="" className="h-14 w-auto object-contain opacity-70" />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

