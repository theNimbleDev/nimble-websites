'use client'
import { useEffect, useState } from 'react'
import NavItem from './NavItem'
import { Skeleton } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

interface NavItemsProps {
  mobile?: boolean
  closeMenu?: () => void
}

const NavItems: React.FC<NavItemsProps> = ({ mobile, closeMenu }) => {
  const path = usePathname()
  const [subdomain, setSubdomain] = useState<string | null>(null)

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

  const navItemsMain = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' }
  ]

  const navItemsNimbleDev = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' }
  ]

  const navItemsNimbleAcademy = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/#highlights', label: 'Higlights' },
    { href: '/portfolio', label: 'Our Portfolio' },
    { href: '/#contact', label: 'Contact Us' }
  ]

  let navItems = navItemsMain // default to main navigation

  if (subdomain === 'nimbledev') {
    navItems = navItemsNimbleDev
  }

  if (subdomain === 'nimbleacademy') {
    navItems = navItemsNimbleAcademy
  }

  return (
    <>
      {path ? (
        navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            mobile={mobile}
            closeMenu={closeMenu}
          />
        ))
      ) : (
        <>
          <Skeleton
            style={{ backgroundColor: 'white', opacity: '0.2' }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
          <Skeleton
            style={{ backgroundColor: 'white', opacity: '0.2' }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
          <Skeleton
            style={{ backgroundColor: 'white', opacity: '0.2' }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
        </>
      )}
    </>
  )
}

export default NavItems
