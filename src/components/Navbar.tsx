'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const getNavLinkClass = (path: string) => {
    return pathname === path
      ? 'text-primary-100 px-3 py-2 rounded-md text-sm font-medium'
      : 'hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium'
  }

  const getMobileNavLinkClass = (path: string) => {
    return pathname === path
      ? 'bg-primary-100 text-black px-3 py-2 rounded-full text-sm font-medium'
      : 'hover:bg-primary-100 hover:text-black px-3 py-2 rounded-full text-sm font-medium'
  }

  return (
    <>
      <nav className='md:bg-transparent bg-nav-100 border-b md:border-gray-700 border-primary-100 fixed w-full z-10 top-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
          <div className='flex justify-between h-16'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='text-xl font-bold'>
                <Image src='/logo.svg' width={50} height={50} alt='logo' />
              </Link>
            </div>
            <div className='hidden md:flex md:items-center md:space-x-4'>
              <Link href='/' className={getNavLinkClass('/')}>
                Home
              </Link>
              <Link href='/about' className={getNavLinkClass('/about')}>
                About Us
              </Link>
              <Link href='/contact' className={getNavLinkClass('/contact')}>
                Contact Us
              </Link>
              <Button
                radius='full'
                className='bg-primary-100 text-black shadow-lg'
              >
                Book a call
              </Button>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
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
        id='mobile-menu'
      >
        <div className='fixed flex flex-col w-full h-full p-5 space-y-1 sm:px-3 bg-nav-100 z-50'>
          <Link
            href='/'
            className={getMobileNavLinkClass('/')}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={getMobileNavLinkClass('/about')}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href='/contact'
            className={getMobileNavLinkClass('/contact')}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
