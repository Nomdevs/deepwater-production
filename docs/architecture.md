Goal: clean, modular structure a new dev understands in 5 minutes.
src/
  routes/        # file-based routes; pages only compose sections
  components/
    ui/          # Button, LinkButton, Container, Section, Heading, Text, Card, Badge, Input, Textarea, Icon
    layout/      # SiteHeader, SiteFooter, Nav, PageShell
    media/       # HeroVideo, PosterCard, Portrait, Logo
    sections/    # HeroSection, FilmsRow, PodcastTeaser, ContactStrip, StoryArc, CreditsTimeline, PullQuote, InquiryForm
  data/          # typed content: site.ts, films.ts, podcast.ts, about.ts, nav.ts (all copy/links here, never inline in JSX)
  lib/           # cn helper, seo/meta helper, form validation
  styles/        # global.css + Tailwind theme tokens
public/  docs/
Rules:
1. One <Button> with variants (primary, secondary, ghost) and sizes; <LinkButton> reuses it. No ad-hoc button styling.
2. Design tokens only (Tailwind theme from design.md). No hard-coded hex in components.
3. Pages compose sections; sections compose ui components; content comes from /src/data.
4. One file per component, named export, typed props, accessible by default (semantic tags, aria, focus states).
5. One SEO/meta helper used by every route (title, description, OG).
6. Placeholders come from data files and render with a visible "PLACEHOLDER" style.
