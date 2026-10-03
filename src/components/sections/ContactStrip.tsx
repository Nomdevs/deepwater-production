import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { LinkButton } from '~/components/ui/LinkButton'
import { site } from '~/data/site'

export function ContactStrip() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-lg border border-line">
        <img
          src={site.stillImage}
          alt=""
          loading="lazy"
          width={512}
          height={286}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-abyss/70" />
        <div className="relative bg-abyss/40 px-6 py-12 text-center md:px-12">
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
      </div>
    </Section>
  )
}
