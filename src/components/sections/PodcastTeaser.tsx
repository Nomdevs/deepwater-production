import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { Placeholder } from '~/components/ui/Placeholder'
import { Button } from '~/components/ui/Button'
import { podcast, podcastCopy } from '~/data/podcast'

export function PodcastTeaser({
  headingLevel = 'h2',
}: {
  headingLevel?: 'h1' | 'h2'
}) {
  return (
    <Section id="podcast" className="bg-surface">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Text tone="meta">{podcastCopy.meta}</Text>
          <Heading level={headingLevel} className="mt-2">
            {podcast.title}
          </Heading>
          <Text tone="soft" className="mt-2">
            {podcastCopy.hostedByPrefix} {podcast.host}
          </Text>
          <Text className="mt-4">{podcast.description}</Text>
          <div className="mt-6">
            {podcast.latestEpisode.title ? (
              <Text tone="muted">{podcast.latestEpisode.title}</Text>
            ) : (
              <Placeholder label="latest episode" />
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {podcast.listenLinks.map((link) =>
              link.href ? (
                <Button
                  key={link.label}
                  variant="secondary"
                  onClick={() => window.open(link.href!, '_blank')}
                >
                  {link.label}
                </Button>
              ) : (
                <Placeholder
                  key={link.label}
                  label={podcastCopy.listenLinkPlaceholder(link.label)}
                />
              ),
            )}
          </div>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-lg border border-line bg-elevated">
          <div className="text-center">
            <span className="font-display text-8xl text-ice-dim">P³</span>
            <div className="mt-4">
              <Placeholder label={podcastCopy.artworkPlaceholder} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
