import type { ReactNode } from 'react'
import { showPlaceholders } from '~/data/site'
import { cn } from '~/lib/cn'

// Visible marker for unverified/unfinished content (guardrails: anti-hallucination rule 2).
export function Placeholder({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children?: ReactNode
}) {
  if (!showPlaceholders) return null

  return (
    <span
      title={`Placeholder: ${label}`}
      className={cn(
        'inline-block rounded border border-dashed border-ice-dim/60 bg-elevated/60 px-2 py-1 text-ink-muted',
        className,
      )}
    >
      {children ?? `[PLACEHOLDER: ${label}]`}
    </span>
  )
}
