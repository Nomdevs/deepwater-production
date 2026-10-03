import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { Badge } from '~/components/ui/Badge'
import { films } from '~/data/films'
import { podcast } from '~/data/podcast'
import { aboutCopy } from '~/data/about'

export function CreditsTimeline() {
  const entries = [
    ...films.map((film) => ({
      label: film.title,
      meta: film.year ?? 'Year TBD',
      detail: film.role ?? film.note,
    })),
    {
      label: podcast.title,
      meta: podcast.creditEntry.meta,
      detail: podcast.creditEntry.detail,
    },
  ]

  return (
    <Section id="credits" className="bg-surface">
      <Text tone="meta">{aboutCopy.creditsMeta}</Text>
      <Heading level="h2" className="mt-2">
        {aboutCopy.creditsHeading}
      </Heading>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {entries.map((entry) => (
          <li
            key={entry.label}
            className="flex flex-wrap items-center justify-between gap-3 py-5"
          >
            <div>
              <h3 className="font-display text-xl text-ink">{entry.label}</h3>
              <Text tone="muted" className="mt-1 text-sm">
                {entry.detail}
              </Text>
            </div>
            <Badge>{entry.meta}</Badge>
          </li>
        ))}
      </ul>
    </Section>
  )
}
