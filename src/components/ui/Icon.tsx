import * as React from 'react'

const paths = {
  arrowRight: 'M5 12h14m-6-6 6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  play: 'M8 5v14l11-7z',
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
} as const

export type IconName = keyof typeof paths

export function Icon({
  name,
  className = 'w-5 h-5',
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  )
}
