import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { PodcastTeaser } from '~/components/sections/PodcastTeaser'
import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Placeholder } from '~/components/ui/Placeholder'
import { podcast } from '~/data/podcast'

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
        <PodcastTeaser />
      </div>
      <Section>
        <Heading level="h2">Recent Episodes</Heading>
        <div className="mt-6">
          <Placeholder label="episode list / player embed" />
        </div>
      </Section>
    </>
  )
}
