import type { Variants, Transition } from 'framer-motion'

/* ── Base transition ─────────────────────────────────────────────── */
export const ease = [0.25, 0.1, 0.25, 1] as const

export const transition: Transition = {
  duration: 0.6,
  ease,
}

/* ── Viewport options (reuse everywhere) ─────────────────────────── */
export const viewport = { once: true, margin: '-80px' } as const

/* ── Variants ────────────────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show:   { opacity: 1, x: 0, transition },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show:   { opacity: 1, x: 0, transition },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

/** Wrap children so they stagger one by one */
export const staggerContainer = (stagger = 0.1, delayStart = 0): Variants => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger, delayChildren: delayStart } },
})

/** Use inside a staggerContainer — each child fades up */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}
