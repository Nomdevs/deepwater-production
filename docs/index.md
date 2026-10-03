# Deepwater Productions – Project Index
Purpose: modern, cinematic portfolio/brand site for Deepwater Productions, LLP (Texas-based film and TV production company founded by Derek H. Potts). Goal: credibility + inquiries. Phase 1 = demo for approval; Phase 2 = production build after approval.

Design source: Google Stitch project "Deepwater Productions Cinematic Experience" (id 12213407641303760630). Screens + PRD pulled 2026-10-03. Note: a stray amber/Syne design-system asset exists in the Stitch canvas but the generated screens + PRD use the navy/ice palette below — screens/PRD win (see D8, decisions.md).

Docs:
- index.md – this file
- guardrails.md – anti-overengineering and anti-hallucination rules (MANDATORY)
- scope.md – in/out of scope, pages
- design.md – brand, style, UX
- architecture.md – structure, component rules
- decisions.md – tech decisions (append only)
- content.md – verified facts, placeholders

Working rules (token-efficient):
- FIRST read the official docs: https://tanstack.com/start/latest/docs/framework/react/overview (Getting Started, hosting/Cloudflare pages). Do not rely on memory for setup or config.
- Scaffold with the official CLI (verify the current command in the docs; expected `npm create @tanstack/start@latest`). Use the CLI's built-in add-ons/flags for Tailwind and Cloudflare deployment if offered. Never hand-write config the CLI or docs provide.
- Prefer terminal commands over writing files by hand: scaffolding, installs, mkdir/touch, heredocs for docs, sed/rg for bulk edits, ffmpeg for video, `npm run build`, typecheck and lint to verify. Never print or re-read large files; use rg, head, wc.
- Small steps. After each step run build/typecheck, fix, then `git commit`.
