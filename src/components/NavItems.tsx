'use client'
import NavItem from './NavItem'
import { useActiveBrand } from '@/hooks/useActiveBrand'

interface NavItemsProps {
  mobile?: boolean
  closeMenu?: () => void
}

const NavItems: React.FC<NavItemsProps> = ({ mobile, closeMenu }) => {
  const { isNimbleDev, isNimbleAcademy } = useActiveBrand()

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
    { href: '/#highlights', label: 'Highlights' },
    { href: '/portfolio', label: 'Our Portfolio' },
    { href: '/#contact', label: 'Contact Us' }
  ]

  const navItems = isNimbleDev
    ? navItemsNimbleDev
    : isNimbleAcademy
      ? navItemsNimbleAcademy
      : navItemsMain

  return (
    <>
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          mobile={mobile}
          closeMenu={closeMenu}
        />
      ))}
    </>
  )
}

export default NavItems
