import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { PosterCard } from '~/components/media/PosterCard'
import { films, filmsCopy } from '~/data/films'
import { site } from '~/data/site'

export function FilmsRow() {
  return (
    <Section id="films">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Text tone="meta">{filmsCopy.meta}</Text>
          <Heading level="h2" className="mt-2">
            {filmsCopy.homeHeading}
          </Heading>
        </div>
        <LinkButton to="/films" variant="ghost">
          {site.copy.allFilms}
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
