import * as React from 'react'
import { cn } from '~/lib/cn'
import { Container } from '~/components/ui/Container'

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <Container>{children}</Container>
    </section>
  )
}
