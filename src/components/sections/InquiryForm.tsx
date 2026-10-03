import * as React from 'react'
import { Section } from '~/components/ui/Section'
import { Heading } from '~/components/ui/Heading'
import { Text } from '~/components/ui/Text'
import { Input, Textarea } from '~/components/ui/Input'
import { Button } from '~/components/ui/Button'
import { validateInquiry, type InquiryErrors } from '~/lib/validation'
import { site } from '~/data/site'

// Phase 1: submission is stubbed (docs/decisions.md D5). Turnstile hookup lands in Phase 2.
export function InquiryForm() {
  const [values, setValues] = React.useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState<InquiryErrors>({})
  const [sent, setSent] = React.useState(false)
  const copy = site.copy.form

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateInquiry(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  return (
    <Section>
      <div className="max-w-xl">
        <Text tone="meta">{copy.meta}</Text>
        <Heading level="h1" className="mt-2">
          {copy.heading}
        </Heading>
        <Text className="mt-4">{copy.intro}</Text>
        {sent ? (
          <Text tone="soft" className="mt-8 rounded border border-line bg-surface p-6">
            {copy.success}
          </Text>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
            <label className="block w-full">
              <span className="text-sm text-ink-soft">{copy.nameLabel}</span>
              <Input
                name="name"
                autoComplete="name"
                className="mt-1.5"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && (
                <Text tone="muted" className="mt-1 text-sm">{errors.name}</Text>
              )}
            </label>
            <label className="block w-full">
              <span className="text-sm text-ink-soft">{copy.emailLabel}</span>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1.5"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <Text tone="muted" className="mt-1 text-sm">{errors.email}</Text>
              )}
            </label>
            <label className="block w-full">
              <span className="text-sm text-ink-soft">{copy.messageLabel}</span>
              <Textarea
                name="message"
                className="mt-1.5"
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <Text tone="muted" className="mt-1 text-sm">{errors.message}</Text>
              )}
            </label>
            <Button type="submit" size="lg">
              {copy.submit}
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}
