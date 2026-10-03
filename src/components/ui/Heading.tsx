import * as React from 'react'
import { cn } from '~/lib/cn'

type Level = 'h1' | 'h2' | 'h3'

const styles: Record<Level, string> = {
  h1: 'font-display text-4xl md:text-6xl leading-tight',
  h2: 'font-display text-3xl md:text-4xl leading-tight',
  h3: 'font-display text-xl md:text-2xl leading-snug',
}

export function Heading({
  level = 'h2',
  className,
  children,
}: {
  level?: Level
  className?: string
  children: React.ReactNode
}) {
  const Tag = level
  return <Tag className={cn('text-ink', styles[level], className)}>{children}</Tag>
}
