'use client'
import NavItem from './NavItem'

interface NavItemsProps {
  mobile?: boolean
  closeMenu?: () => void
}

const NavItems: React.FC<NavItemsProps> = ({ mobile, closeMenu }) => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''

  const navItemsLocalhost = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' }
  ]

  const navItemsNimbleDev = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' }
  ]

  const navItems =
    hostname === 'nimbledev.localhost' ? navItemsNimbleDev : navItemsLocalhost

  return (
    <>
      {navItems.map(item => (
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
