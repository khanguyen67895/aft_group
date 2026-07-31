import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/lib/motion'
import { EditableText, EditableImage, EditableGalleryImage, AddGalleryImageButton } from '@/components/cms'
import { useContentStore } from '@/stores/content.store'

import icBgField   from '@/assets/image/ic_bg_field.png'
import icBgField2x from '@/assets/image/ic_bg_field@2x.png'
import icBgField3x from '@/assets/image/ic_bg_field@3x.png'

import slide1 from '@/assets/image/ic_about1.png'
import slide2 from '@/assets/image/ic_about2.png'
import slide3 from '@/assets/image/ic_about3.png'
import slide4 from '@/assets/image/ic_about4.png'
import slide5 from '@/assets/image/ic_about5.png'
import slide6 from '@/assets/image/ic_about6.png'
import slide7 from '@/assets/image/ic_about7.png'
import slide8 from '@/assets/image/ic_about8.png'
import slide9 from '@/assets/image/ic_about9.png'

const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]

const SLIDES_GALLERY_ID = 'about.hero.slides.extra'
const SLIDE_CLASSNAME = 'h-64 md:h-80 w-88 sm:w-md md:w-136 rounded-2xl object-cover shrink-0'
const EMPTY_IMAGES: string[] = []

export function AboutHero() {
  const extraSlides = useContentStore(state => state.content[SLIDES_GALLERY_ID]?.images ?? EMPTY_IMAGES)
  const allSlides = [
    ...SLIDES.map((src, index) => ({ kind: 'fixed' as const, index, src })),
    ...extraSlides.map((src, index) => ({ kind: 'extra' as const, index, src })),
  ]

  return (
    <section className="relative overflow-hidden bg-secondary pt-28">
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
            <EditableText id="about.hero.title" fallbackVi="Về chúng tôi" />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-base md:text-xl text-text-secondary">
            <EditableText id="about.hero.subtitle" fallbackVi="AFT Group hệ sinh thái Tài chính – Tài sản – Công nghệ. Tầm nhìn 2035." />
          </motion.p>
        </motion.div>
      </div>

      {/* Auto-scrolling image slideshow — full viewport width */}
      <motion.div
        className="relative z-10 w-full overflow-hidden"
        variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
      >
        <div className="flex gap-4 md:gap-8 w-max marquee-track" style={{ animationDuration: '60s' }}>
          {[...allSlides, ...allSlides].map((slide, i) =>
            slide.kind === 'fixed' ? (
              <EditableImage
                key={`fixed-${slide.index}-${i}`}
                id={`about.hero.slide.${slide.index}.img`}
                fallbackSrc={slide.src}
                alt=""
                className={SLIDE_CLASSNAME}
              />
            ) : (
              <EditableGalleryImage
                key={`extra-${slide.index}-${i}`}
                id={SLIDES_GALLERY_ID}
                index={slide.index}
                src={slide.src}
                alt=""
                className={SLIDE_CLASSNAME}
              />
            )
          )}
        </div>

        <AddGalleryImageButton id={SLIDES_GALLERY_ID} className="absolute top-4 right-4 z-20" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Description */}
        <motion.p
          className="mt-10 md:mt-12 max-w-3xl mx-auto text-center text-base md:text-xl text-text-secondary leading-relaxed"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
        >
          <EditableText id="about.hero.description" fallbackVi="AFT là tập đoàn công nghệ tài chính toàn cầu, tiên phong trong việc số hóa tài sản thực và ứng dụng công nghệ blockchain, AI, Data để tạo ra các giải pháp tài chính minh bạch - an toàn - hiệu quả. Kết nối giá trị toàn cầu với cơ hội tài chính cho mọi người. Kiến tạo hệ sinh thái tài chính mở, minh bạch và bền vững. Đồng hành cùng khách hàng trên hành trình tự do tài chính." />
        </motion.p>
      </div>
    </section>
  )
}
