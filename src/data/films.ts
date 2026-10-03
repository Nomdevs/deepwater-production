export type Film = {
  slug: string
  title: string
  year: string | null // null = year to be confirmed by client
  role: string | null
  actingRole: string | null
  note: string
  synopsis: string | null // null = placeholder synopsis until client supplies copy
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
  },
  {
    slug: 'the-last-astronaut',
    title: 'The Last Astronaut',
    year: '2019',
    role: 'Co-Producer',
    actingRole: 'Richard Bishop',
    note: '',
    synopsis: null,
  },
  {
    slug: 'burleson',
    title: 'Burleson',
    year: null,
    role: null,
    actingRole: null,
    note: 'A short western shot in Texas at Derek’s West Texas ranch.',
    synopsis: null,
  },
  {
    slug: 'the-four-aces',
    title: 'The Four Aces',
    year: null,
    role: null,
    actingRole: null,
    note: 'Directed by Derek’s son, Drake Potts.',
    synopsis: null,
  },
]
