import { Section } from '~/components/ui/Section'
import { Placeholder } from '~/components/ui/Placeholder'
import { about } from '~/data/about'

export function PullQuote() {
  return (
    <Section>
      <figure className="mx-auto max-w-3xl text-center">
        <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl">
          {about.pullQuote ?? <Placeholder label="pull quote" />}
        </blockquote>
        {about.pullQuote && (
          <figcaption className="mt-4 text-sm text-ink-muted">
            — {about.name}
          </figcaption>
        )}
      </figure>
    </Section>
  )
}
