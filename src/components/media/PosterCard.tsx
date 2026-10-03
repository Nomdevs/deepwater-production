import { Card } from '~/components/ui/Card'
import { Badge } from '~/components/ui/Badge'
import { Placeholder } from '~/components/ui/Placeholder'
import { Text } from '~/components/ui/Text'
import type { Film } from '~/data/films'
import { showPlaceholders } from '~/data/site'
import { filmsCopy } from '~/data/films'

// 2:3 poster card. Shows Stitch concept art when available; otherwise a branded
// placeholder panel until the client supplies final poster art (docs/decisions.md D11).
export function PosterCard({ film }: { film: Film }) {
  return (
    <Card className="group h-full">
      <div className="relative aspect-[2/3] bg-elevated">
        {film.poster ? (
          <img
            src={film.poster}
            alt={`${film.title} — concept poster art`}
            loading="lazy"
            width={382}
            height={512}
            className="h-full w-full object-cover transition duration-600 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              role="img"
              aria-label={`${film.title} — neutral concept-art placeholder`}
              className="flex h-full w-full items-center justify-center bg-(--gradient-hero)"
            >
              <span className="font-display text-6xl text-ice-dim transition group-hover:text-ice">
                {film.title.charAt(0)}
              </span>
            </div>
            <div className="absolute right-2 top-2">
              <Placeholder
                label={filmsCopy.posterArtPlaceholder}
                className="text-[10px] px-1.5 py-0.5"
              />
            </div>
          </>
        )}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg text-ink">{film.title}</h3>
          {(showPlaceholders || (film.year && !film.year.includes('TBD'))) && (
            <Badge>{film.year ?? filmsCopy.yearTbd}</Badge>
          )}
        </div>
        {film.role && <Text tone="meta">{film.role}</Text>}
        {film.note && (
          <Text tone="muted" className="text-sm">
            {film.note}
          </Text>
        )}
      </div>
    </Card>
  )
}
