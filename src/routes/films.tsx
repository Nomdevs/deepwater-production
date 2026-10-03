import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { PosterCard } from '~/components/media/PosterCard'
import { Placeholder } from '~/components/ui/Placeholder'
import { films, filmsCopy } from '~/data/films'

export const Route = createFileRoute('/films')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Films — Deepwater Productions',
        description:
          'Narrative feature films produced by Deepwater Productions, including Narco Sub, The Last Astronaut, Burleson, and The Four Aces.',
      }),
    ],
  }),
  component: FilmsPage,
})

function FilmsPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <Text tone="meta">{filmsCopy.meta}</Text>
      <Heading level="h1" className="mt-2">
        {filmsCopy.pageHeading}
      </Heading>
      <Text className="mt-4 max-w-2xl">{filmsCopy.pageIntro}</Text>
      <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {films.map((film) => (
          <article key={film.slug}>
            <PosterCard film={film} />
            <div className="mt-3">
              {film.synopsis ? (
                <Text tone="muted" className="text-sm">
                  {film.synopsis}
                </Text>
              ) : (
                <Placeholder label={filmsCopy.synopsisPlaceholder(film.title)} />
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
