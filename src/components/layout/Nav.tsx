import { Link } from '@tanstack/react-router'
import { navItems } from '~/data/nav'
import { cn } from '~/lib/cn'

export function Nav({
  className,
  listClassName,
  linkClassName,
  onNavigate,
}: {
  className?: string
  listClassName?: string
  linkClassName?: string
  onNavigate?: () => void
}) {
  return (
    <nav aria-label="Primary" className={className}>
      <ul className={cn('flex items-center gap-6 md:gap-8', listClassName)}>
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={onNavigate}
              activeProps={{ className: 'text-ice' }}
              className={cn(
                'inline-flex min-h-11 items-center text-sm uppercase tracking-[0.14em] text-ink-soft transition hover:text-ice',
                linkClassName,
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
