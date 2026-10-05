import { useState, type ReactNode } from 'react'
import { Placeholder } from '~/components/ui/Placeholder'

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
      {muted ? (
        <path d="m16 9 6 6M22 9l-6 6" />
      ) : (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9.5 9.5 0 0 1 0 13" />
        </>
      )}
    </svg>
  )
}

// Video at every viewport; autoplays muted (browser policy) with a toggle
// to enable audio. Below 640px a portrait-cropped source keeps subjects
// in frame; the poster shows while the video loads.
export function HeroVideo({
  videoSrc,
  portraitSrc,
  posterSrc,
  children,
}: {
  videoSrc: string | null
  portraitSrc?: string | null
  posterSrc: string | null
  children: ReactNode
}) {
  const [muted, setMuted] = useState(true)
  const posterSmall = posterSrc?.replace('.webp', '-640.webp')
  return (
    <div className="absolute inset-0 overflow-hidden">
      {videoSrc ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          poster={posterSrc ?? undefined}
        >
          {portraitSrc && (
            <source src={portraitSrc} media="(max-width: 639px)" type="video/mp4" />
          )}
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : posterSrc ? (
        <img
          src={posterSrc}
          srcSet={posterSmall ? `${posterSmall} 640w, ${posterSrc} 1280w` : undefined}
          sizes="100vw"
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
      {videoSrc && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute hero video' : 'Mute hero video'}
          className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-abyss/60 text-ice transition-colors hover:border-ice/60 md:bottom-10 md:right-10"
        >
          <SpeakerIcon muted={muted} />
        </button>
      )}
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  )
}
