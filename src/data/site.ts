export const site = {
  name: 'Deepwater Productions',
  legalName: 'Deepwater Productions, LLP',
  description:
    'Deepwater Productions, LLP is a Texas-based movie and television production company founded by Derek H. Potts.',
  // All values below are placeholders until the client confirms them (see docs/content.md).
  tagline: null as string | null,
  heroVideo: null as string | null, // /hero.mp4 once the client supplies footage
  heroPoster: null as string | null,
  contactEmail: null as string | null,
  contactPhone: null as string | null,
  socials: [
    { label: 'Instagram', href: null as string | null },
    { label: 'X / Twitter', href: null as string | null },
    { label: 'YouTube', href: null as string | null },
    { label: 'LinkedIn', href: null as string | null },
  ],
  footerBlurb:
    'A Texas-based film and television production company producing narrative features and the Potts Power Podcast.',
  copyright: `© ${new Date().getFullYear()} Deepwater Productions, LLP. All rights reserved.`,
  copy: {
    inquiriesCta: 'Inquiries',
    exploreFilms: 'Explore Films',
    aboutDeepwater: 'About Deepwater',
    allFilms: 'All Films',
    footerExplore: 'Explore',
    footerFollow: 'Follow',
    contactStrip: {
      meta: 'Inquiries',
      heading: 'Have a story worth telling?',
      body: 'Deepwater Productions welcomes film, television, and podcast inquiries.',
      cta: 'Get In Touch',
    },
    form: {
      meta: 'Contact',
      heading: 'Inquiries',
      intro:
        'For film, television, podcast, and press inquiries, send a message below.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submit: 'Send Inquiry',
      success:
        'Thank you — your message has been recorded. (Demo stub: no email is sent yet.)',
    },
    notFound: {
      heading: 'Page not found',
      body: 'The page you are looking for does not exist.',
      goBack: 'Go back',
      startOver: 'Start over',
    },
    error: {
      tryAgain: 'Try again',
      home: 'Home',
      goBack: 'Go back',
    },
  },
}
