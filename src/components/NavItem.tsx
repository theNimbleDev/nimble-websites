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
    return pathname === path || pathname.startsWith(path + '/')
      ? mobile
        ? 'bg-brand-orange text-[#151515] px-3 py-2 rounded-full text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
        : 'text-brand-orange px-3 py-2 rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
      : mobile
        ? 'hover:bg-brand-orange hover:text-white px-3 py-2 rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
        : 'hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
  }

  return (
    <Link href={href} className={getNavLinkClass(href)} onClick={closeMenu}>
      {label}
    </Link>
  )
}

export default NavItem
