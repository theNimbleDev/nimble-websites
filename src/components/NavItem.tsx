'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  label: string
  mobile?: boolean
  closeMenu?: () => void
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  mobile,
  closeMenu
}) => {
  const pathname = usePathname()

  const getNavLinkClass = (path: string) => {
    return pathname === path
      ? mobile
        ? 'bg-primary-100 text-black px-3 py-2 rounded-full text-sm font-medium'
        : 'text-primary-100 px-3 py-2 rounded-md text-sm font-medium'
      : mobile
      ? 'hover:bg-primary-100 hover:text-black px-3 py-2 rounded-full text-sm font-medium'
      : 'hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium'
  }

  return (
    <Link href={href} className={getNavLinkClass(href)} onClick={closeMenu}>
      {label}
    </Link>
  )
}

export default NavItem
