import type { ReactNode } from 'react'
import videoCta from '@/assets/video/video_cta.mp4'

const TONE_CLASSES = {
  secondary: {
    vertical: 'bg-linear-to-b from-secondary from-40% via-bg/10 to-bg',
    horizontal: 'bg-linear-to-r from-secondary via-transparent to-secondary',
  },
  bg: {
    vertical: 'bg-linear-to-b from-bg from-20% via-bg/10 to-bg',
    horizontal: 'bg-linear-to-r from-bg via-transparent to-bg',
  },
}

interface VideoCtaBackgroundProps {
  children: ReactNode
  tone?: keyof typeof TONE_CLASSES
  heightClass?: string
  mobileHeightClass?: string
  /** TODO(mobile-asset): pass a lighter/mobile-optimized video once available — defaults to the same desktop file. */
  mobileSrc?: string
  verticalFade?: boolean
}

export function VideoCtaBackground({
  children,
  tone = 'secondary',
  heightClass = 'h-300',
  mobileHeightClass = 'h-140',
  mobileSrc = videoCta,
  verticalFade = true,
}: VideoCtaBackgroundProps) {
  const classes = TONE_CLASSES[tone]

  return (
    <div className="relative overflow-hidden">
      {/* Desktop video */}
      <video
        src={videoCta}
        autoPlay muted loop playsInline
        disablePictureInPicture
        className={`hidden md:block absolute bottom-0 left-0 w-full ${heightClass} object-cover object-bottom`}
      />
      {/* Mobile video — shorter height so it doesn't dominate/clip the shorter mobile section stack */}
      <video
        src={mobileSrc}
        autoPlay muted loop playsInline
        disablePictureInPicture
        className={`md:hidden absolute bottom-40 left-0 w-full ${mobileHeightClass} object-cover object-bottom`}
      />
      {verticalFade && <div className={`absolute inset-0 ${classes.vertical} pointer-events-none`} />}
      <div className={`absolute inset-0 ${classes.horizontal} pointer-events-none`} />
      {children}
    </div>
  )
}
