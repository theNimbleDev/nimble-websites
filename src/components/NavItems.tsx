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

  const navItemsMain = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' }
  ]

  const navItemsNimbleDev = [
    { href: '/nimbledev', label: 'Home' },
    { href: '/nimbledev/services', label: 'Services' },
    { href: '/nimbledev/about', label: 'About Us' },
    { href: '/nimbledev/portfolio', label: 'Portfolio' },
    { href: '/nimbledev/contact', label: 'Contact Us' }
  ]

  const navItems = path.startsWith('/nimbledev')
    ? navItemsNimbleDev
    : navItemsMain

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
