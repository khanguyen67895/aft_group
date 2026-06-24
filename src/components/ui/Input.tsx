import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-body-sm font-semibold text-text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg px-4 py-2.5 text-body-md bg-bg-card text-text-primary',
            'border border-divider placeholder:text-text-disable outline-none transition-colors',
            'focus:border-primary focus:ring-1 focus:ring-primary',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-caption text-red-400">{error}</p>}
        {hint && !error && <p className="text-caption text-text-disable">{hint}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
