import { Link } from '@tanstack/react-router'
import { site } from '~/data/site'

// Client logo downloaded from Stitch (docs/design.md). Transparent PNG/SVG requested from client.
export function Logo({ className = 'h-10 w-auto' }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
      <img
        src="/brand/logo.webp"
        alt=""
        className={`${className} rounded`}
        width={192}
        height={144}
      />
      <span className="font-display tracking-[0.2em] text-sm md:text-base text-ink uppercase">
        Deepwater
      </span>
    </Link>
  )
}
