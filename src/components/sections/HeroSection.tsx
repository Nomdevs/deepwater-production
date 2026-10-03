import { Container } from '~/components/ui/Container'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { Placeholder } from '~/components/ui/Placeholder'
import { HeroVideo } from '~/components/media/HeroVideo'
import { site } from '~/data/site'

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      <HeroVideo videoSrc={site.heroVideo} posterSrc={site.heroPoster}>
        <Container className="pb-20 pt-40 md:pb-28">
          <Text tone="meta" className="text-ice">
            {site.legalName}
          </Text>
          <Heading level="h1" className="mt-4 max-w-3xl">
            {site.tagline ?? <Placeholder label="tagline" className="align-middle" />}
          </Heading>
          <Text className="mt-6 max-w-xl text-lg">{site.description}</Text>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton to="/films" size="lg">
              Explore Films
            </LinkButton>
            <LinkButton to="/about" size="lg" variant="secondary">
              About Deepwater
            </LinkButton>
          </div>
        </Container>
      </HeroVideo>
    </section>
  )
}
