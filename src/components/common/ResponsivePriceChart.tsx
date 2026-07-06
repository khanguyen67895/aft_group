import { useMediaQuery } from '@/hooks/useMediaQuery'
import { PriceChartWidget } from './PriceChartWidget'
import { PriceChartWidgetMobile } from './PriceChartWidgetMobile'

/**
 * Mounts exactly one of the desktop/mobile chart widgets based on viewport —
 * both run their own setInterval/requestAnimationFrame loop, so we avoid
 * mounting both at once behind CSS `hidden` (wastes CPU/battery for no reason).
 * Uses the same 768px `md:` breakpoint as the rest of the app's Tailwind classes.
 */
export function ResponsivePriceChart({ className = '' }: { className?: string }) {
  const isMdUp = useMediaQuery('(min-width: 768px)')
  return isMdUp
    ? <PriceChartWidget className={className} />
    : <PriceChartWidgetMobile className={className} />
}
