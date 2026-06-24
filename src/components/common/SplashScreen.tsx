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
          className="fixed inset-0 z-[9999] overflow-hidden bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } }}
        >
          <LogoFallback />

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

function LogoFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="size-130 rounded-full bg-primary/6 blur-[120px] splash-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="size-70 rounded-full bg-active/8 blur-[60px] splash-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative splash-logo-in">
        <svg width="200" height="200" viewBox="0 0 200 200" className="absolute -top-12.5 -left-12.5 splash-ring-cw">
          <circle cx="100" cy="100" r="92" fill="none" stroke="#C6A15B" strokeWidth="1" strokeDasharray="10 14" strokeOpacity="0.25" />
        </svg>
        <svg width="160" height="160" viewBox="0 0 160 160" className="absolute -top-7.5 -left-7.5 splash-ring-ccw">
          <circle cx="80" cy="80" r="72" fill="none" stroke="#1C5D88" strokeWidth="1" strokeDasharray="4 18" strokeOpacity="0.35" />
        </svg>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
          style={{ filter: 'drop-shadow(0 0 28px rgba(198,161,91,0.45))' }}>
          <circle cx="50" cy="50" r="48" stroke="#C6A15B" strokeWidth="0.8" strokeOpacity="0.35" />
          <path d="M50 17L80 70H20L50 17Z" fill="url(#sp-grad)" />
          <defs>
            <linearGradient id="sp-grad" x1="50" y1="17" x2="50" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8EBC0" /><stop offset="1" stopColor="#C09857" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2 splash-text-in">
        <div className="text-[22px] font-extrabold tracking-[0.35em] font-[Manrope] text-text-primary">
          AFT <span className="text-primary">GROUP</span>
        </div>
        <div className="text-[9px] tracking-[0.3em] text-text-disable font-[Manrope] uppercase">
          Accelerating Finance Through Trust
        </div>
      </div>

      <div className="mt-8 splash-line">
        <div className="w-20 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="mt-6 flex gap-1.5" style={{ animation: 'splash-text-in 0.6s ease-out 1.6s both' }}>
        {[0, 1, 2].map(i => (
          <div key={i} className="size-1 rounded-full bg-primary/60"
            style={{ animation: `splash-dot-blink 1.4s ease-in-out ${i * 0.25}s infinite` }} />
        ))}
      </div>
    </div>
  )
}
