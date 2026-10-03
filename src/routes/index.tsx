import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { HeroSection } from '~/components/sections/HeroSection'
import { FilmsRow } from '~/components/sections/FilmsRow'
import { PodcastTeaser } from '~/components/sections/PodcastTeaser'
import { ContactStrip } from '~/components/sections/ContactStrip'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Deepwater Productions — Texas Film & Television',
        description:
          'Deepwater Productions, LLP — a Texas-based movie and television production company founded by Derek H. Potts.',
      }),
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <FilmsRow />
      <PodcastTeaser />
      <ContactStrip />
    </>
  )
}
