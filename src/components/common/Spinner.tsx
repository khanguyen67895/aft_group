import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = { sm: 'size-4', md: 'size-6', lg: 'size-10' }

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        'inline-block rounded-full border-2 border-primary border-t-transparent animate-spin',
        sizeMap[size],
        className
      )}
    />
  )
}
