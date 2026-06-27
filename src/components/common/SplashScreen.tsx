import { useEffect, useRef, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import splashVideo from '@/assets/video/video_splash.mp4'

interface SplashScreenProps {
  videoSrc?: string
  minDuration?: number
  maxDuration?: number
}

export function SplashScreen({
  videoSrc    = splashVideo,
  minDuration = 800,
  maxDuration = 8000,
}: SplashScreenProps) {
  const [gone, setGone]  = useState(false)
  const startedAt = useRef(Date.now())
  const dismissed = useRef(false)

  const dismiss = useCallback(() => {
    if (dismissed.current) return
    dismissed.current = true
    const wait = Math.max(0, minDuration - (Date.now() - startedAt.current))
    setTimeout(() => setGone(true), wait)
  }, [minDuration])

  useEffect(() => {
    const t = setTimeout(dismiss, maxDuration)
    return () => clearTimeout(t)
  }, [dismiss, maxDuration])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-9999 overflow-hidden bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } }}
        >
          <video
            autoPlay muted loop={false} playsInline
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={dismiss}
            onError={() => {}}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc.replace(/\.mp4$/i, '.webm')} type="video/webm" />
          </video>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg to-transparent pointer-events-none" />

          <button
            onClick={dismiss}
            className="absolute bottom-6 right-8 z-10 text-[10px] font-bold tracking-[0.25em] font-[Manrope] uppercase text-text-disable/50 hover:text-text-secondary transition-colors"
          >
            Bỏ qua
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
