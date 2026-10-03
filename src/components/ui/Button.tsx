import * as React from 'react'
import { cn } from '~/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-ice text-abyss font-semibold hover:bg-white shadow-glow transition',
  secondary:
    'border border-ink/20 text-ink hover:border-ice hover:text-ice transition',
  ghost: 'text-ink-soft hover:text-ice transition',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

// Single source of button styling, reused by <Button> and <LinkButton>.
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded min-h-11 cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  return <button className={buttonClasses(variant, size, className)} {...props} />
}
