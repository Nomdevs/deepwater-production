import { Link } from '@tanstack/react-router'
import { site } from '~/data/site'
import { Button } from '~/components/ui/Button'

export function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl text-ink">
        {site.copy.notFound.heading}
      </h1>
      <p className="mt-4 text-ink-soft">{site.copy.notFound.body}</p>
      <div className="mt-8 flex justify-center gap-4">
        <Button variant="secondary" onClick={() => window.history.back()}>
          {site.copy.notFound.goBack}
        </Button>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded bg-ice px-5 py-2.5 text-sm font-semibold text-abyss shadow-glow transition hover:bg-white"
        >
          {site.copy.notFound.startOver}
        </Link>
      </div>
    </div>
  )
}
