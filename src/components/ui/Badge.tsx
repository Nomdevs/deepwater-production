import * as React from 'react'
import { cn } from '~/lib/cn'

export function Badge({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-elevated text-ink-muted border border-line',
        className,
      )}
    >
      {children}
    </span>
  )
}
