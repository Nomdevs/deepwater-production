import * as React from 'react'
import { cn } from '~/lib/cn'

type Tone = 'body' | 'soft' | 'muted' | 'meta'

const styles: Record<Tone, string> = {
  body: 'text-ink-soft leading-relaxed',
  soft: 'text-ink-soft',
  muted: 'text-ink-muted',
  meta: 'text-ink-muted uppercase tracking-[0.14em] text-xs font-semibold',
}

export function Text({
  tone = 'body',
  as: Tag = 'p',
  className,
  children,
}: {
  tone?: Tone
  as?: 'p' | 'span' | 'div'
  className?: string
  children: React.ReactNode
}) {
  return <Tag className={cn(styles[tone], className)}>{children}</Tag>
}
