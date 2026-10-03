import {
  ErrorComponent,
  Link,
  useLocation,
  useRouter,
} from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { site } from '~/data/site'
import { Button } from '~/components/ui/Button'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useLocation({
    select: (location) => location.pathname === '/',
  })

  console.error('DefaultCatchBoundary Error:', error)

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-24">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" onClick={() => router.invalidate()}>
          {site.copy.error.tryAgain}
        </Button>
        {isRoot ? (
          <Link
            to="/"
            className="inline-flex min-h-11 items-center rounded bg-ice px-5 py-2.5 text-sm font-semibold text-abyss shadow-glow transition hover:bg-white"
          >
            {site.copy.error.home}
          </Link>
        ) : (
          <Button variant="secondary" onClick={() => window.history.back()}>
            {site.copy.error.goBack}
          </Button>
        )}
      </div>
    </div>
  )
}
