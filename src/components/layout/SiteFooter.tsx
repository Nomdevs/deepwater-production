import { Link } from '@tanstack/react-router'
import { Logo } from '~/components/media/Logo'
import { Placeholder } from '~/components/ui/Placeholder'
import { site, showPlaceholders } from '~/data/site'
import { navItems } from '~/data/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {site.footerBlurb}
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {site.copy.footerExplore}
          </h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-ink-soft transition hover:text-ice"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {(showPlaceholders || site.socials.some((social) => social.href)) && <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {site.copy.footerFollow}
          </h2>
          <ul className="mt-4 space-y-2">
            {site.socials.filter((social) => showPlaceholders || social.href).map((social) => (
              <li key={social.label}>
                {social.href ? (
                  <a
                    href={social.href}
                    className="text-sm text-ink-soft transition hover:text-ice"
                  >
                    {social.label}
                  </a>
                ) : (
                  <Placeholder label={`${social.label} URL`} />
                )}
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>{site.copyright}</p>
          <p>{site.legalName} · Texas, USA</p>
        </div>
      </div>
    </footer>
  )
}
