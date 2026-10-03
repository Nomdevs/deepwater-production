import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/lib/seo'
import { InquiryForm } from '~/components/sections/InquiryForm'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Contact — Deepwater Productions',
        description:
          'Send an inquiry to Deepwater Productions about film, television, podcast, and press opportunities.',
      }),
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="pt-8 md:pt-12">
      <InquiryForm />
    </div>
  )
}
