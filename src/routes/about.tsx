import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { Badge } from '~/components/ui/Badge'
import { Portrait } from '~/components/media/Portrait'
import { StoryArc } from '~/components/sections/StoryArc'
import { CreditsTimeline } from '~/components/sections/CreditsTimeline'
import { PullQuote } from '~/components/sections/PullQuote'
import { ContactStrip } from '~/components/sections/ContactStrip'
import { about, aboutCopy } from '~/data/about'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      ...seo({
        title: 'About Derek H. Potts — Deepwater Productions',
        description:
          'Derek H. Potts is the founder and Managing Partner of Deepwater Productions, LLP — a producer, actor, attorney, podcast host, and agent.',
      }),
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Text tone="meta">{aboutCopy.meta}</Text>
            <Heading level="h1" className="mt-2">
              {about.name}
            </Heading>
            <Text tone="soft" className="mt-2">
              {about.title}
            </Text>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.roles.map((role) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </div>
            {about.bio.map((paragraph) => (
              <Text key={paragraph} className="mt-4 max-w-2xl">
                {paragraph}
              </Text>
            ))}
          </div>
          <Portrait name={about.name} />
        </div>
      </Section>
      <StoryArc />
      <CreditsTimeline />
      <PullQuote />
      <ContactStrip />
    </>
  )
}
