import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, staggerContainer, viewport } from '@/lib/motion'

import videoAbout from '@/assets/video/video_about.mp4'

import icBgField   from '@/assets/image/ic_bg_field.png'
import icBgField2x from '@/assets/image/ic_bg_field@2x.png'
import icBgField3x from '@/assets/image/ic_bg_field@3x.png'

import icCheckbox   from '@/assets/image/ic_checkbox.png'
import icCheckbox2x from '@/assets/image/ic_checkbox@2x.png'
import icCheckbox3x from '@/assets/image/ic_checkbox@3x.png'

const FEATURES = [
  'Kết nối giá trị toàn cầu với cơ hội tài chính cho mọi người.',
  'Kiến tạo hệ sinh thái tài chính mở, minh bạch và bền vững.',
  'Đồng hành cùng khách hàng trên hành trình tự do tài chính.',
]

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 md:pb-24">
      {/* Ambient gold glow background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `image-set(url(${icBgField}) 1x, url(${icBgField2x}) 2x, url(${icBgField3x}) 3x)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 30% at 30% 35%, transparent 0%, rgba(11,31,58,0.75) 155%, #0B1F3A 125%)',
      }} />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)} initial="hidden" animate="show"
        >
          <motion.h1 variants={fadeUp} className="font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase text-3xl md:text-[48px]">
            Về chúng tôi
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-xl text-text-secondary">
            AFT Group hệ sinh thái Tài chính – Tài sản – Công nghệ. Tầm nhìn 2035.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video */}
          <motion.video
            src={videoAbout}
            autoPlay muted loop playsInline
            disablePictureInPicture
            className="w-full h-auto rounded-2xl object-cover"
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
          />

          {/* Content */}
          <motion.div
            variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
          >
            <motion.p variants={fadeUp} className="text-base md:text-xl text-text-secondary leading-relaxed">
              AFT là tập đoàn công nghệ tài chính toàn cầu, tiên phong trong việc số hóa tài sản
              thực và ứng dụng công nghệ blockchain, AI, Data để tạo ra các giải pháp tài chính
              minh bạch - an toàn - hiệu quả.
            </motion.p>

            <motion.ul variants={staggerContainer(0.07)} className="mt-6 space-y-4">
              {FEATURES.map((feat) => (
                <motion.li key={feat} variants={fadeUp} className="flex items-center gap-3">
                  <img
                    src={icCheckbox}
                    srcSet={`${icCheckbox} 1x, ${icCheckbox2x} 2x, ${icCheckbox3x} 3x`}
                    alt=""
                    aria-hidden
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="text-text-secondary text-base md:text-xl">{feat}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
