'use client'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/NavItems'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const path = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`${
          isScrolled
            ? 'md:bg-nav-100 md:border-none'
            : 'md:bg-transparent md:border-gray-700'
        } bg-nav-100 border-b  border-primary-100 fixed w-full z-50 top-0`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href={path.startsWith('/nimbledev') ? '/nimbledev' : '/'}
                className="text-xl font-bold"
              >
                <Image src="/logo.svg" width={50} height={50} alt="logo" />
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItems />
              <Link
                href="https://calendly.com/akpjunio4real/30min"
                passHref
                target="_blank"
              >
                <Button
                  radius="full"
                  className="bg-primary-100 text-black shadow-lg"
                >
                  Book a call
                </Button>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
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
        className={`${isOpen ? 'block mt-16' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="fixed mt-1 flex flex-col w-full p-5 space-y-1 sm:px-3 bg-nav-100 z-50">
          <NavItems mobile closeMenu={closeMenu} />
        </div>
      </div>
    </>
  )
}

export default Navbar
