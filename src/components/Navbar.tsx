'use client'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from '@/components/NavItems'
import { usePathname } from 'next/navigation'
import { MdArrowOutward } from 'react-icons/md'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [subdomain, setSubdomain] = useState<string | null>(null)

  const path = usePathname()

  useEffect(() => {
    // Extract the hostname and determine the subdomain
    const hostname = window.location.hostname
    const isLocalhost = hostname.endsWith('.localhost')
    const isVercel = hostname.includes('.vercel.app')
    const isProduction = hostname.endsWith('.thenimblesgrp.com')

    let subdomain = ''
    if (isLocalhost || isVercel) {
      subdomain = hostname.split('.')[0] // nimbledev.localhost or nimbledev.vercel.app
    } else if (isProduction) {
      const parts = hostname.split('.')
      subdomain = parts.length > 2 ? parts[0] : '' // nimbledev.thenimblesgrp.com
    }

    setSubdomain(subdomain)
  }, [])

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
        className={`${isScrolled
          ? `${subdomain === 'nimbleacademy' ? 'md:bg-white shadow-md md:border-none text-academy-black font-thin' : 'md:bg-nav-100 md:border-none'}`
          : `md:bg-transparent ${subdomain === 'nimbleacademy' ? 'md:border-none text-academy-black font-thin' : 'md:border-gray-700'}`
          } bg-nav-100 border-b  border-primary-100 fixed w-full z-50 top-0`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href={path.startsWith('/nimbledev') ? '/nimbledev' : '/'}
                className="text-xl font-bold text-primary-100"
              >
                {subdomain != 'nimbleacademy' ? <Image src="/logo.svg" width={50} height={50} alt="logo" /> : 'NimbleAcad'}
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItems />
              {subdomain != 'nimbleacademy' ? <Link
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
              </Link> : <Button as='a' target='blank' href='https://docs.google.com/forms/d/1U98Vv4H7JzG9VnuPmNiH_eHfWeiJZYRQlFueMboU_Xo/edit' endContent={<MdArrowOutward />} radius='none' className='text-white cursor-pointer bg-primary-100'>
                Start Your Journey Now!
              </Button>

              }
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className='text-white'
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
