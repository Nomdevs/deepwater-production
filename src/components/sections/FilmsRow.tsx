import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { PosterCard } from '~/components/media/PosterCard'
import { films } from '~/data/films'

export function FilmsRow() {
  return (
    <Section id="films">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Text tone="meta">Film & Television</Text>
          <Heading level="h2" className="mt-2">
            The Slate
          </Heading>
        </div>
        <LinkButton to="/films" variant="ghost">
          All Films
        </LinkButton>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {films.map((film) => (
          <PosterCard key={film.slug} film={film} />
        ))}
      </div>
    </Section>
  )
}
