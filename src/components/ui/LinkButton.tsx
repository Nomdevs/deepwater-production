import { Link } from '@tanstack/react-router'
import * as React from 'react'
import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from '~/components/ui/Button'

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  children,
}: {
  to: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  children: React.ReactNode
}) {
  return (
    <Link to={to} onClick={onClick} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  )
}
