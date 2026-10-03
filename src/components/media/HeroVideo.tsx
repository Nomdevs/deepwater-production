import type { ReactNode } from 'react'
import { Placeholder } from '~/components/ui/Placeholder'

// Poster-only below 640px; desktop video uses the same poster while loading.
export function HeroVideo({
  videoSrc,
  posterSrc,
  children,
}: {
  videoSrc: string | null
  posterSrc: string | null
  children: ReactNode
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {videoSrc && posterSrc && (
        <img src={posterSrc} alt="" className="h-full w-full object-cover sm:hidden" />
      )}
      {videoSrc ? (
        <video
          className="hidden h-full w-full object-cover sm:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc ?? undefined}
          src={videoSrc}
        />
      ) : posterSrc ? (
        <img
          src={posterSrc}
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full bg-(--gradient-hero)" />
      )}
      <div className="absolute inset-0 bg-abyss/55" />
      {!videoSrc && !posterSrc && (
        <div className="absolute right-6 top-24 md:right-10">
          <Placeholder label="hero video reel (≤6 MB loop, 1080p max)" />
        </div>
      )}
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}
