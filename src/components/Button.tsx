'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  cta: string
  variant?: 'primary' | 'outline'
  href?: string
  blank?: string
  borderColor?: string
  className?: string
  dark?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  cta,
  variant = 'primary',
  href,
  blank,
  borderColor,
  className,
  dark = false,
  disabled = false
}) => {
  const router = useRouter()
  const handleClick = () => {
    if (href && !disabled) router.push(href)
  }

  const baseStyles =
    'flex items-center justify-center gap-2 text-sm font-medium rounded-md transition-all duration-200 px-6 py-3 min-h-[44px]'

  const primaryStyles =
    'bg-brand-orange text-[#151515] hover:bg-[#E65C00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'

  const outlineBaseStyles = dark
    ? 'border border-white text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
    : 'border border-brand-border text-brand-nearBlack hover:bg-brand-offWhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'

  const outlineStyles = `${outlineBaseStyles} ${borderColor ?? ''}`

  const disabledStyles = 'opacity-50 cursor-not-allowed'

  const classes = `${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles} ${disabled ? disabledStyles : ''} ${className ?? ''}`

  if (blank && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-disabled={disabled}
        aria-label={`${cta} (opens in a new tab)`}
      >
        {cta} <FiArrowUpRight className="ml-1" />
      </a>
    )
  }

  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {cta} <FiArrowUpRight className="ml-1" />
    </button>
  )
}

export default Button
