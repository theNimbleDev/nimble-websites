"use client"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { Skeleton } from "@nextui-org/react"

interface NavItemsProps {
  mobile?: boolean
  closeMenu?: () => void
}

const NavItems: React.FC<NavItemsProps> = ({ mobile, closeMenu }) => {
  const [hostname, setHostname] = useState("")

  useEffect(() => {
    setHostname(window.location.hostname)
  }, [])

  const navItemsLocalhost = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" }
  ]

  const navItemsNimbleDev = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact Us" }
  ]

  const navItems =
    hostname === "nimbledev.localhost" ? navItemsNimbleDev : navItemsLocalhost

  return (
    <>
      {hostname ? (
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
            style={{ backgroundColor: "white", opacity: "0.2" }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
          <Skeleton
            style={{ backgroundColor: "white", opacity: "0.2" }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
          <Skeleton
            style={{ backgroundColor: "white", opacity: "0.2" }}
            className="w-[100px] h-3 border-none rounded-lg"
          />
        </>
      )}
    </>
  )
}

export default NavItems
