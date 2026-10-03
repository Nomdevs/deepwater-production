import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'

export function ContactStrip() {
  return (
    <Section id="contact">
      <div className="rounded-lg border border-line bg-surface px-6 py-12 text-center md:px-12">
        <Text tone="meta">Inquiries</Text>
        <Heading level="h2" className="mx-auto mt-3 max-w-2xl">
          Have a story worth telling?
        </Heading>
        <Text className="mx-auto mt-4 max-w-xl">
          Deepwater Productions welcomes film, television, and podcast inquiries.
        </Text>
        <div className="mt-8">
          <LinkButton to="/contact" size="lg">
            Get In Touch
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
