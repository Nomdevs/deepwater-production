import { Placeholder } from '~/components/ui/Placeholder'
import { aboutCopy } from '~/data/about'

// Headshot placeholder until the client supplies a portrait (docs/content.md).
export function Portrait({ name }: { name: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line bg-elevated">
      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="font-display text-7xl text-ice-dim">
          {name
            .split(' ')
            .map((part) => part.charAt(0))
            .slice(0, 2)
            .join('')}
        </span>
        <Placeholder label={aboutCopy.portraitPlaceholder} />
      </div>
    </div>
  )
}
