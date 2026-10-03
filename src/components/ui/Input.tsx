import * as React from 'react'
import { cn } from '~/lib/cn'

const base =
  'w-full rounded bg-surface border border-line px-4 py-3 text-ink placeholder:text-ink-muted focus:border-ice focus:outline-none transition'

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(base, className)} {...props} />
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(base, 'min-h-32', className)} {...props} />
}
