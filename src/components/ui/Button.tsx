import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'outline' | 'light' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant
  size?:      Size
  isLoading?: boolean
  fullWidth?: boolean
  /** true → default arrow icon, ReactNode → custom icon */
  icon?:      ReactNode | true
  shimmer?:   boolean
}

/* ─── Arrow icon ─────────────────────────────────────────────────── */
function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <rect x="4.5" y="4.5" width="11" height="11" rx="1.5"
        stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12 L12 8 M12 8 H9.2 M12 8 V10.8"
        stroke="currentColor" strokeWidth="1.7"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── Size config ────────────────────────────────────────────────── */
// c = chamfer depth at TL + BR (straight diagonal cut, px)
// r = convex border-radius at TR + BL (arc approximated in polygon, px)
const SIZES: Record<Size, { h: string; px: string; gap: string; text: string; c: number; r: number; icon: number }> = {
  sm: { h: 'h-10', px: 'px-5', gap: 'gap-2', text: 'text-base',   c: 6,  r: 5, icon: 15 },
  md: { h: 'h-12', px: 'px-7', gap: 'gap-2', text: 'text-xl', c: 8,  r: 6, icon: 17 },
  lg: { h: 'h-16', px: 'px-8', gap: 'gap-3', text: 'text-2xl',  c: 12, r: 8, icon: 22 },
}

/* ─── Shimmer ────────────────────────────────────────────────────── */
const SHIMMER_GRADIENT: Partial<Record<Variant, string>> = {
  gold:  'linear-gradient(105deg,transparent 15%,rgba(255,255,255,0.55) 50%,transparent 85%)',
  light: 'linear-gradient(105deg,transparent 15%,rgba(255,255,255,0.30) 50%,transparent 85%)',
}
const SHIMMER_DURATION: Partial<Record<Variant, string>> = {
  gold: '2.8s', light: '3.4s',
}

/* ─── Clip-path helpers ──────────────────────────────────────────── */
/**
 * Returns polygon points that approximate a 90° convex arc.
 *
 * TR — arc from (W-r, 0) → (W, r), centre (W-r, r):
 *   x = W - r*(1-cosθ) → calc(100% - r*(1-cos)px)
 *   y = r*(1+sinθ)
 *
 * BL — arc from (r, H) → (0, H-r), centre (r, H-r):
 *   x = r*(1+cosθ)
 *   y = H - r*(1-sinθ) → calc(100% - r*(1-sin)px)
 *
 * 4 steps → 5 sample points; max visual deviation < 0.12 px for r ≤ 8 px.
 */
function arcPoints(r: number, corner: 'tr' | 'bl', steps = 4): string[] {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const deg = corner === 'tr' ? -90 + 90 * i / steps : 90 + 90 * i / steps
    const rad = (deg * Math.PI) / 180
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    if (corner === 'tr') {
      return `calc(100% - ${(r * (1 - cos)).toFixed(3)}px) ${(r * (1 + sin)).toFixed(3)}px`
    } else {
      return `${(r * (1 + cos)).toFixed(3)}px calc(100% - ${(r * (1 - sin)).toFixed(3)}px)`
    }
  })
}

/**
 * Clip-path polygon:
 *   TL + BR — chamfered diagonal cut (depth c px)
 *   TR + BL — convex rounded arc (radius r px)
 */
function buildClipPath(c: number, r: number): string {
  const tr = arcPoints(r, 'tr')
  const bl = arcPoints(r, 'bl')
  return `polygon(${[
    `${c}px 0`,
    ...tr,
    `100% calc(100% - ${c}px)`,
    `calc(100% - ${c}px) 100%`,
    ...bl,
    `0 ${c}px`,
  ].join(', ')})`
}

/* ─── Component ──────────────────────────────────────────────────── */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'gold', size = 'md', isLoading, fullWidth, icon, shimmer, className, disabled, children, ...props },
    ref
  ) => {
    const cfg          = SIZES[size]
    const showShimmer  = shimmer ?? (variant === 'gold' || variant === 'light')
    const gradient     = SHIMMER_GRADIENT[variant]
    const duration     = SHIMMER_DURATION[variant] ?? '2.8s'
    const resolvedIcon = icon === true ? <ArrowIcon size={cfg.icon} /> : (icon ?? null)

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={{ clipPath: buildClipPath(cfg.c, cfg.r) }}
        className={cn(
          /* ── Layout ── */
          'relative overflow-hidden inline-flex items-center justify-center',
          'font-[Manrope] font-bold uppercase tracking-wider text-bg',
          'transition-all duration-300 cursor-pointer select-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          cfg.h, cfg.px, cfg.gap, cfg.text,

          /* ── Gold ── */
          variant === 'gold' && [
            /* drop-shadow instead of box-shadow: works correctly with clip-path */
            'drop-shadow-[0px_2px_12px_rgba(198,161,91,0.30)]',
            'hover:drop-shadow-[0px_3px_22px_rgba(198,161,91,0.50)]',
            'hover:brightness-105 active:brightness-95',
          ],

          /* ── Outline ── */
          variant === 'outline' && [
            'text-text-primary bg-secondary/55 border border-primary/45',
            'hover:border-primary hover:bg-primary-opacity active:brightness-90',
          ],

          /* ── Light ── */
          variant === 'light' && [
            'text-text-primary bg-text-primary/11 border border-text-primary/22',
            'hover:bg-text-primary/18 hover:border-text-primary/38 active:brightness-90',
          ],

          /* ── Ghost ── */
          variant === 'ghost' && [
            'text-text-secondary bg-transparent',
            'hover:text-text-primary hover:bg-divider',
          ],

          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Gold: radial gradient background */}
        {variant === 'gold' && (
          <span
            className="absolute inset-0"
            style={{ background: 'radial-gradient(at 50% 3%, #F8EBC0 0%, #C09857 100%)' }}
          />
        )}

        {/* Gold: soft-light glow blob (Figma: w-40 h-9 top-[-2px] mix-blend-soft-light blur-[20px]) */}
        {variant === 'gold' && (
          <span
            className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[56%] h-9 rounded-full blur-[20px] mix-blend-soft-light"
            style={{ background: 'rgba(255,242,170,0.75)' }}
          />
        )}

        {/* Shimmer streak */}
        {showShimmer && gradient && (
          <span style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <span style={{
              position: 'absolute', top: 0, bottom: 0, width: '50%',
              background: gradient,
              animation: `btn-shimmer ${duration} ease-in-out infinite`,
              willChange: 'transform',
            }} />
          </span>
        )}

        {/* Content */}
        <span className="relative z-10 inline-flex items-center gap-[inherit]">
          {isLoading && (
            <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          {children}
          {resolvedIcon}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
export { ArrowIcon }
