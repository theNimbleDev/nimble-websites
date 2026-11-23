'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useActiveBrand } from '@/hooks/useActiveBrand'

const Footer = () => {
  const { isReady, isMain, isNimbleDev, isNimbleAcademy } = useActiveBrand()

  if (!isReady) return null

  const brandLabel = isNimbleDev
    ? 'NimbleDev'
    : isNimbleAcademy
      ? 'NimbleAcademy'
      : 'theNimbles Group'
  const brandLogo = isNimbleDev ? '/NimbleDev.svg' : '/logo.svg'

  const companyLinks = isNimbleDev
    ? [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About Us' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact Us' }
      ]
    : isNimbleAcademy
      ? [
          { href: '/', label: 'Home' },
          { href: '/#about', label: 'About Us' },
          { href: '/#highlights', label: 'Highlights' },
          { href: '/portfolio', label: 'Our Portfolio' },
          { href: '/#contact', label: 'Contact Us' }
        ]
      : [
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About Us' },
          { href: '/contact', label: 'Contact' }
        ]

  const subBrandLinkGroups = [companyLinks.slice(0, 3), companyLinks.slice(3)]

  const ourCompanies = [
    { href: '/', label: 'NimbleDev', isAvailable: true },
    { href: '/', label: 'NimbleTrade', isAvailable: false },
    { href: '/', label: 'NimbleAcademy', isAvailable: true }
  ]

  return (
    <footer className="bg-[#151515] border-t border-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={brandLogo}
                width={32}
                height={32}
                alt={
                  isNimbleDev
                    ? 'nimbledev logo'
                    : isNimbleAcademy
                      ? 'nimbleacademy logo'
                      : 'nimblelogo'
                }
              />
              <span className="font-bold text-[#E5E5E5] text-lg">
                {isNimbleDev
                  ? 'NimbleDev'
                  : isNimbleAcademy
                    ? 'NimbleAcademy'
                    : 'theNimbles'}
              </span>
            </Link>
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              {isNimbleDev
                ? 'Engineering digital solutions through custom software, engineering outsourcing, and UI/UX product design.'
                : isNimbleAcademy
                  ? 'Empowering learners with practical, future-ready skills through mentoring, training and career-focused education.'
                  : 'The Nimbles Group is a forward-thinking business group driving innovation and creating opportunities across technology, trade and education.'}
            </p>
          </div>

          {isMain ? (
            <>
              <div>
                <h3 className="text-[#E5E5E5] font-semibold text-sm uppercase tracking-widest mb-6">
                  Explore
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#A3A3A3] hover:text-[#FF6600] transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#E5E5E5] font-semibold text-sm uppercase tracking-widest mb-6">
                  Our Companies
                </h3>
                <ul className="space-y-3">
                  {ourCompanies.map((company) => (
                    <li key={company.label}>
                      {company.isAvailable ? (
                        <Link
                          href={company.href}
                          className="text-[#A3A3A3] hover:text-[#FF6600] transition"
                        >
                          {company.label}
                        </Link>
                      ) : (
                        <span className="text-[#6B6B6B] cursor-not-allowed opacity-60">
                          {company.label} (Coming Soon)
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-[#E5E5E5] font-semibold text-sm uppercase tracking-widest mb-6">
                  Explore
                </h3>
                <ul className="space-y-3">
                  {subBrandLinkGroups[0].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#A3A3A3] hover:text-[#FF6600] transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#E5E5E5] font-semibold text-sm uppercase tracking-widest mb-6 opacity-0">
                  More
                </h3>
                <ul className="space-y-3">
                  {subBrandLinkGroups[1].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#A3A3A3] hover:text-[#FF6600] transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <div>
            <h3 className="text-[#E5E5E5] font-semibold text-sm uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-[#BDBDBD] text-sm">
                3, Oreofe Street, Off Obasanjo Farm Eledi, Ota, Ogun State
              </li>
              <li className="text-[#BDBDBD] text-sm">thenimbles24@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#383838] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A3A3A3] text-sm">
            © 2026 {brandLabel}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/_nimbledev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#FF6600] transition"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/nimbledev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-[#FF6600] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
