import { Link } from '@tanstack/react-router'
import { site } from '~/data/site'

// Client logo downloaded from Stitch (docs/design.md). Transparent PNG/SVG requested from client.
export function Logo({ className = 'h-10 w-auto' }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
      <img
        src="/brand/logo38.jpg"
        alt=""
        className={`${className} rounded`}
        width={456}
        height={341}
      />
      <span className="font-display tracking-[0.2em] text-sm md:text-base text-ink uppercase">
        Deepwater
      </span>
    </Link>
  )
}
