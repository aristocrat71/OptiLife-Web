import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  /** Use a react-router <Link> for internal navigation instead of <a>. */
  router?: boolean
  id?: string
  className?: string
}

/**
 * The signature POP button: filled hero color, thick ink outline, hard offset
 * shadow that collapses on press (the "squish").
 */
export default function PopButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  router = false,
  id,
  className = '',
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border-[3px] border-ink ' +
    'shadow-pop transition-all duration-100 ease-out active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ' +
    'hover:-translate-y-0.5 whitespace-nowrap'

  const variants = {
    primary: 'bg-purple text-cream',
    ghost: 'bg-paper text-ink',
  }

  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (router) {
    return (
      <Link to={href} id={id} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} id={id} className={classes}>
      {children}
    </a>
  )
}
