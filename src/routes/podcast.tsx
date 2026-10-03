import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { PodcastTeaser } from '~/components/sections/PodcastTeaser'
import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Placeholder } from '~/components/ui/Placeholder'
import { podcast, podcastCopy } from '~/data/podcast'

export const Route = createFileRoute('/podcast')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Potts Power Podcast — Deepwater Productions',
        description: podcast.description,
      }),
    ],
  }),
  component: PodcastPage,
})

function PodcastPage() {
  return (
    <>
      <div className="pt-8 md:pt-12">
        <PodcastTeaser headingLevel="h1" />
      </div>
      <Section>
        <Heading level="h2">{podcastCopy.episodesHeading}</Heading>
        <div className="mt-6">
          <Placeholder label={podcastCopy.episodesPlaceholder} />
        </div>
      </Section>
    </>
  )
}
