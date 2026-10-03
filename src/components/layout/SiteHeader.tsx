import * as React from 'react'
import { Logo } from '~/components/media/Logo'
import { Nav } from '~/components/layout/Nav'
import { LinkButton } from '~/components/ui/LinkButton'
import { Button } from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-abyss/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Logo />
        <div className="hidden items-center gap-6 md:flex">
          <Nav />
          <LinkButton to="/contact" size="md">
            Inquiries
          </LinkButton>
        </div>
        <Button
          variant="ghost"
          size="md"
          className="md:hidden px-3"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </Button>
      </div>
      {open && (
        <div className="border-t border-line bg-abyss px-6 pb-6 md:hidden">
          <Nav
            className="pt-2"
            linkClassName="w-full"
            onNavigate={() => setOpen(false)}
          />
          <LinkButton
            to="/contact"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Inquiries
          </LinkButton>
        </div>
      )}
    </header>
  )
}
