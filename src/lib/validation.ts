export type Inquiry = {
  name: string
  email: string
  message: string
}

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>

export function validateInquiry(input: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {}
  if (!input.name.trim()) errors.name = 'Name is required.'
  if (!input.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!input.message.trim()) errors.message = 'Message is required.'
  return errors
}
