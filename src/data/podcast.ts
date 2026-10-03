export const podcast = {
  title: 'Potts Power Podcast',
  host: 'Derek H. Potts',
  description:
    'Founded and moderated by Derek H. Potts, the Potts Power Podcast interviews public figures and entrepreneurs about their paths to success.',
  // Listen links are placeholders until the client supplies them.
  listenLinks: [
    { label: 'Apple Podcasts', href: null as string | null },
    { label: 'Spotify', href: null as string | null },
    { label: 'YouTube', href: null as string | null },
  ],
  latestEpisode: {
    title: null as string | null,
    description: null as string | null,
  },
  creditEntry: { meta: 'Podcast', detail: 'Founder & Moderator' },
}

export const podcastCopy = {
  meta: 'Podcast',
  hostedByPrefix: 'Hosted by',
  artworkPlaceholder: 'podcast artwork',
  listenLinkPlaceholder: (label: string) => `${label} link`,
  episodesHeading: 'Recent Episodes',
  episodesPlaceholder: 'episode list / player embed',
}
