import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { site } from '~/data/site'

export function ContactStrip() {
  return (
    <Section id="contact">
      <div className="rounded-lg border border-line bg-surface px-6 py-12 text-center md:px-12">
        <Text tone="meta">{site.copy.contactStrip.meta}</Text>
        <Heading level="h2" className="mx-auto mt-3 max-w-2xl">
          {site.copy.contactStrip.heading}
        </Heading>
        <Text className="mx-auto mt-4 max-w-xl">
          {site.copy.contactStrip.body}
        </Text>
        <div className="mt-8">
          <LinkButton to="/contact" size="lg">
            {site.copy.contactStrip.cta}
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
