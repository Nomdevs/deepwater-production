import { Card } from '~/components/ui/Card'
import { Badge } from '~/components/ui/Badge'
import { Placeholder } from '~/components/ui/Placeholder'
import { Text } from '~/components/ui/Text'
import type { Film } from '~/data/films'

// 2:3 poster card. Poster art is a client-supplied asset (docs/decisions.md D7);
// until then a branded placeholder panel is shown.
export function PosterCard({ film }: { film: Film }) {
  return (
    <Card className="group h-full">
      <div className="relative aspect-[2/3] bg-elevated">
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-6xl text-navy transition group-hover:text-ice-dim">
            {film.title.charAt(0)}
          </span>
        </div>
        <div className="absolute right-2 top-2">
          <Placeholder label="poster art" className="text-[10px] px-1.5 py-0.5" />
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg text-ink">{film.title}</h3>
          <Badge>{film.year ?? 'Year TBD'}</Badge>
        </div>
        {film.role && <Text tone="meta">{film.role}</Text>}
        {film.note && <Text tone="muted" className="text-sm">{film.note}</Text>}
      </div>
    </Card>
  )
}
