'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/NavItems'
import { useActiveBrand } from '@/hooks/useActiveBrand'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { isReady, isNimbleDev, isNimbleAcademy } = useActiveBrand()

  const brandLabel = isNimbleDev
    ? 'NimbleDev'
    : isNimbleAcademy
      ? 'NimbleAcad'
      : 'theNimbles'
  const brandLogo = '/logo.svg'
  const isAcademyBrand = isNimbleAcademy

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen) return

    const menuElement = menuRef.current
    const focusableElements = menuElement?.querySelectorAll<HTMLElement>(
      'a, button, input, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements?.[0]
    const lastElement = focusableElements?.[focusableElements.length - 1]

    firstElement?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeMenu])

  if (!isReady) return null

  return (
    <>
      <nav
        className={
          isAcademyBrand
            ? 'bg-white border-b border-[#E7E7E7] fixed w-full z-50 top-0'
            : 'bg-white border-b border-brand-border fixed w-full z-50 top-0'
        }
      >
        <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'}>
          <div
            className={
              isAcademyBrand
                ? 'flex justify-between h-20 items-center gap-4'
                : 'flex justify-between h-16 items-center'
            }
          >
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className={
                  isAcademyBrand
                    ? 'flex items-center gap-2'
                    : 'flex items-center gap-2'
                }
              >
                <Image
                  src={brandLogo}
                  width={isAcademyBrand ? 54 : 40}
                  height={isAcademyBrand ? 54 : 40}
                  alt={
                    isNimbleDev
                      ? 'nimbledev logo'
                      : isNimbleAcademy
                        ? 'nimbleacademy logo'
                        : 'nimblelogo'
                  }
                />
                <span
                  className={
                    isAcademyBrand
                      ? 'font-black text-[#FF6A00] text-lg leading-none tracking-tight'
                      : 'font-bold text-brand-nearBlack text-lg'
                  }
                >
                  {brandLabel}
                </span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavItems />
              <Link
                href={
                  isAcademyBrand
                    ? '/#contact'
                    : 'https://calendly.com/akpjunio4real/30min'
                }
                target={isAcademyBrand ? '' : '_blank'}
                className={
                  'px-6 py-3 bg-brand-orange text-brand-nearBlack rounded-md text-sm font-medium hover:opacity-90 transition'
                }
              >
                {isAcademyBrand ? 'Start Your Journey Now!' : 'Book a call'}
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-brand-nearBlack focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div
          ref={menuRef}
          className="fixed inset-0 flex flex-col w-full p-5 space-y-2 sm:px-3 bg-white z-50"
        >
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={brandLogo}
                width={32}
                height={32}
                alt={isNimbleDev ? 'nimbledev logo' : 'nimblelogo'}
              />
              <span className="font-bold text-brand-nearBlack text-lg">
                {brandLabel}
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="text-brand-nearBlack focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              aria-label="Close menu"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <NavItems mobile closeMenu={closeMenu} />
        </div>
      </div>
    </>
  )
}

export default Navbar
