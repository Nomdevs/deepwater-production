export type Film = {
  slug: string
  title: string
  year: string | null // null = year to be confirmed by client
  role: string | null
  actingRole: string | null
  note: string
  synopsis: string | null // null = placeholder synopsis until client supplies copy
  poster: string | null // Stitch concept art (credits stripped) until client supplies final art
}

// Facts verified per docs/content.md (IMDb mini bio). Nothing else is invented.
export const films: Array<Film> = [
  {
    slug: 'narco-sub',
    title: 'Narco Sub',
    year: '2021',
    role: 'Executive Producer · Story',
    actingRole: 'Richard Bishop, Director of the CIA',
    note: 'Also known as The Shipment.',
    synopsis: null,
    poster: '/posters/narco-sub.webp',
  },
  {
    slug: 'the-last-astronaut',
    title: 'The Last Astronaut',
    year: '2019',
    role: 'Co-Producer',
    actingRole: 'Richard Bishop',
    note: '',
    synopsis: null,
    poster: '/posters/the-last-astronaut.webp', // Stitch concept art; fabricated credits cropped per D11/D19
  },
  {
    slug: 'burleson',
    title: 'Burleson',
    year: null,
    role: null,
    actingRole: null,
    note: 'A short western shot in Texas at Derek’s West Texas ranch.',
    synopsis: null,
    poster: '/posters/burleson.webp',
  },
  {
    slug: 'the-four-aces',
    title: 'The Four Aces',
    year: null,
    role: null,
    actingRole: null,
    note: 'Directed by Derek’s son, Drake Potts.',
    synopsis: null,
    poster: '/posters/the-four-aces.webp',
  },
]

export const filmsCopy = {
  meta: 'Film & Television',
  homeHeading: 'The Slate',
  pageHeading: 'Films',
  pageIntro:
    'Feature films and shorts developed and produced by Deepwater Productions.',
  synopsisPlaceholder: (title: string) => `${title} synopsis`,
  actingRoleLabel: 'Acts as',
  posterArtPlaceholder: 'poster art',
  yearTbd: 'Year TBD',
}
