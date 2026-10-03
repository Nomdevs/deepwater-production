Brand (from logo): DWP monogram made of a film strip with a water-ripple reflection; wide-tracked serif wordmark "DEEPWATER PRODUCTIONS". Logo files downloaded from Stitch 2026-10-03: /public/brand/logo38.jpg (456×341, dark navy background), /public/brand/social-profile.jpg (square). Request a transparent PNG/SVG from the client.

Palette (confirmed against Stitch screens + PRD, 2026-10-03):
- Background abyss navy #060F18 (Stitch "abyssal navy"); surface/elevated #0B1520–#111827 band.
- Brand deep navy #2B4A63 (logo navy).
- Accent ice blue #C5E8FA (CTAs, active nav, focus rings). WCAG AA contrast on dark.
- Text: off-white #F4F5F6 primary, #D1D5DB secondary, #9CA3AF muted/metadata.
Style: dark cinematic, large imagery, generous spacing, subtle motion only (scroll fade, poster hover, soft ripple accent). Cinematic framing motifs from Stitch PRD are flavor only (2.39:1 letterbox media frames, uppercase wide-tracked metadata caps for chips like year/role); keep them where cheap.

Type (confirmed against Stitch screens): elegant serif headings Playfair Display; clean sans body Plus Jakarta Sans (Stitch screens; supersedes Inter suggestion — see D9). Minimal weights.

UX: sticky minimal nav (Films, Podcast, About, Contact) + "Inquiries" CTA; large tap targets (44px+); keyboard accessible; semantic HTML. Mobile: condensed nav + optional bottom tab bar (Stitch mobile screens) — keep only if trivial.

Video: <video autoplay muted loop playsinline preload="metadata" poster>; hero.mp4 (+webm) in /public, ≤6 MB, no audio, 1080p max; smaller version or poster-only on mobile. Compress: ffmpeg -i in.mp4 -an -vf scale=1920:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4. Full trailers = YouTube/Vimeo click-to-play embeds, not hosted.
