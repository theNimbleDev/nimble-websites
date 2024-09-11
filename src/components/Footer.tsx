'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/modules/footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  const [subdomain, setSubdomain] = useState<string | null>(null)

  useEffect(() => {
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

  return (
    <footer className="bg-white text-black">
      <div className={`${styles.parent}`}>
        <div className={`${styles.leftcol} p-4`}></div>
        <div
          className={`p-10 md:p-0 flex flex-col items-center md:items-stretch gap-7 md:gap-0 md:flex-row w-full`}
        >
          <div
            className={`w-full flex md:block justify-center  md:w-1/5 text-center  md:text-left border-r-0 md:border-r border-[#DCDCDC] md:py-20 md:px-6`}
          >
            <Link href="/">
              <Image
                src="/footer_logo.svg"
                width="174"
                height="61"
                alt="footer_logo"
                className="text-lg font-semibold md:mb-24"
              />
            </Link>

            <p className="text-xl hidden md:block  text-[#828282]">
              (c) 2024 theNimbles
            </p>
          </div>
          <div className="hidden md:block md:w-1/5 mxd:w-1/4 border-r-0 md:border-r border-[#DCDCDC] md:py-20 md:px-6">
            <h3 className="gradient-text mb-8 font-semibold text-3xl">
              Let’s Connect
            </h3>
            <p className="text-xl text-[#828282] leading-10	">
              3, oreofe street, off obasanjo farm eledi, Ota, Ogun State{' '}
              <span className="mxd:text-sm font-bold">info@nimbles.com</span>
            </p>
          </div>
          <div className="md:w-1/5 border-r-0 md:border-r border-[#DCDCDC] md:py-20 md:px-6">
            <h3 className="hidden md:block gradient-text mb-8 font-semibold text-3xl">
              Links
            </h3>

            <div className="flex flex-col text-center mxd:flex-col md:text-left md:flex-row gap-0 md:gap-6">
              {subdomain === 'nimbledev' ? (
                <>
                  <ul>
                    <li className="text-xl  text-[#828282] mb-4">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="text-xl text-[#828282] mb-4">
                      <Link href="/services">Service</Link>
                    </li>
                    <li className="text-xl text-[#828282] mb-4">
                      <Link href="/about">About Us</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-xl text-[#828282] mb-4">
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    {/* <li className="text-xl text-[#828282] mb-4">
                  <Link href="">Blog</Link>
                </li> */}
                    <li className="text-xl text-[#828282] mb-4">
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </>
              ) : (
                <ul>
                  <li className="text-xl  text-[#828282] mb-4">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-xl text-[#828282] mb-4">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-xl text-[#828282] mb-4">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-auto text-center md:text-left md:py-20 md:px-6 md:bg-[#fff9f4]	flex-1">
            <h3 className="gradient-text mb-8 font-semibold text-2xl md:text-3xl">
              Follow us
            </h3>
            <div className="flex gap-5 justify-center md:justify-normal mb-6 md:mb-0">
              <Link target="_blank" href="https://www.instagram.com/_nimbledev">
                <FaInstagram className="text-3xl text-red-700" />
              </Link>
              {/* <Link href="">
                <FaTwitter className="text-3xl" />
              </Link> */}
              <Link target="_blank" href="https://www.linkedin.com/company/nimbledev/">
                <FaLinkedin className="text-3xl text-blue-600" />
              </Link>
            </div>
            <p className="text-xl block md:hidden  text-[#828282]">
              (c) 2024 theNimbles
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
