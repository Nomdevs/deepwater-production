import * as React from 'react'
import { cn } from '~/lib/cn'

export function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-lg bg-surface border border-line overflow-hidden transition hover:border-navy',
        className,
      )}
    >
      {children}
    </div>
  )
}
