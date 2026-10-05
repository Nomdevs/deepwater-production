import { useEffect, useRef } from 'react'
import { Badge } from '~/components/ui/Badge'
import { Placeholder } from '~/components/ui/Placeholder'
import { Text } from '~/components/ui/Text'
import { filmsCopy, type Film } from '~/data/films'
import { showPlaceholders } from '~/data/site'

// Accessible film detail dialog: Escape/backdrop/close button to dismiss,
// body scroll locked, focus moved in on open and restored on close.
export function FilmModal({ film, onClose }: { film: Film; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null
    panelRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      trigger?.focus()
    }
  }, [onClose])

  const titleId = `film-modal-${film.slug}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-abyss/80 p-4"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="grid w-full max-w-3xl overflow-hidden rounded-lg border border-line bg-surface outline-none md:grid-cols-[240px_1fr]"
      >
        <div className="relative aspect-[2/3] bg-elevated md:aspect-auto">
          {film.poster ? (
            <img
              src={film.poster}
              srcSet={`${film.poster} 382w, ${film.poster.replace('.webp', '-764.webp')} 764w`}
              sizes="(min-width: 768px) 240px, 100vw"
              alt={`${film.title} — concept poster art`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`${film.title} — neutral concept-art placeholder`}
              className="flex h-full w-full items-center justify-center bg-(--gradient-hero)"
            >
              <span className="font-display text-6xl text-ice-dim">
                {film.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="relative space-y-4 p-6 md:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded border border-white/20 text-ink-muted transition-colors hover:border-ice/60 hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="flex flex-wrap items-center gap-3">
            <h2 id={titleId} className="font-display text-2xl text-ink">
              {film.title}
            </h2>
            {(showPlaceholders || (film.year && !film.year.includes('TBD'))) && (
              <Badge>{film.year ?? filmsCopy.yearTbd}</Badge>
            )}
          </div>
          {film.role && <Text tone="meta">{film.role}</Text>}
          {film.actingRole && (
            <Text tone="meta">
              {filmsCopy.actingRoleLabel} {film.actingRole}
            </Text>
          )}
          {film.note && (
            <Text tone="muted" className="text-sm">
              {film.note}
            </Text>
          )}
          {film.synopsis ? (
            <Text tone="muted">{film.synopsis}</Text>
          ) : (
            <Placeholder label={filmsCopy.synopsisPlaceholder(film.title)} />
          )}
        </div>
      </div>
    </div>
  )
}
