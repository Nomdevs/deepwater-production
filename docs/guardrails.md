## Anti-overengineering (hard rules)
1. Build only what scope.md lists. Anything else: stop and ask. No "nice to have" features.
2. No new dependency unless (a) the docs or CLI recommend it, or (b) it removes >50 lines of code. Log it in decisions.md first. Banned in Phase 1: state libraries, animation libraries, UI kits, CMS, ORM/DB, auth, i18n, testing frameworks, Storybook.
3. No abstraction until it has 2+ real uses. No generic wrappers, factories, HOCs, or config systems.
4. Animations: CSS transitions only; respect prefers-reduced-motion.
5. No backend beyond the contact form endpoint; stub it in Phase 1.
6. Files <150 lines; one component per file. Split before growing.
7. Smallest working solution first. If a solution needs more than ~3 new files or 1 new dependency, justify it in decisions.md before building.
8. Do not refactor or restyle working code unless asked.

## Anti-hallucination (hard rules)
1. Facts about Derek, Deepwater, films, podcast come ONLY from content.md. Never invent credits, dates, awards, quotes, bios, URLs, emails, phone numbers, addresses, or social handles.
2. Anything unknown is rendered as a visible "[PLACEHOLDER: description]" sourced from /src/data, and listed in the final report.
3. Write About/film copy in your own words from verified facts only. Do not copy IMDb text. Do not use IMDb images or third-party poster art.
4. Setup commands, flags, config keys, and APIs must come from the official docs or from running `--help`; if unsure, read the docs or ask. Never guess package names or versions: check with `npm view <pkg> version`.
5. Never claim something works without running it (build, typecheck, dev server).
6. If requirements conflict or are missing, ask one concise question instead of assuming. Record assumptions in decisions.md.
7. Final report must separate: Verified / Placeholder / Assumed.
