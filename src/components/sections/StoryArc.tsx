import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { about } from '~/data/about'

export function StoryArc() {
  return (
    <Section id="story">
      <Text tone="meta">The Story</Text>
      <Heading level="h2" className="mt-2">
        From the Courtroom to the Screen
      </Heading>
      <ol className="mt-12 space-y-10 border-l border-line pl-8">
        {about.storyArc.map((step, index) => (
          <li key={step.stage} className="relative">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-ice bg-abyss" />
            <Text tone="meta">
              Chapter {String(index + 1).padStart(2, '0')}
            </Text>
            <Heading level="h3" className="mt-1">
              {step.stage}
            </Heading>
            <Text className="mt-2 max-w-2xl">{step.copy}</Text>
          </li>
        ))}
      </ol>
    </Section>
  )
}
