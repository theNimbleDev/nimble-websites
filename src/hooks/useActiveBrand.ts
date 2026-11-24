'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export type Brand = 'main' | 'nimbledev' | 'nimbleacademy' | 'nimbletrade'

const resolveBrand = (hostname: string, currentPath: string): Brand => {
  const isLocalhost = hostname.endsWith('.localhost')
  const isVercel = hostname.includes('.vercel.app')
  const isProduction = hostname.endsWith('.thenimblesgrp.com')

  let subdomain = ''

  if (isLocalhost || isVercel) {
    subdomain = hostname.split('.')[0]
  } else if (isProduction) {
    const parts = hostname.split('.')
    subdomain = parts.length > 2 ? parts[0] : ''
  }

  const pathBrand = currentPath.startsWith('/nimbledev')
    ? 'nimbledev'
    : currentPath.startsWith('/nimbleacademy')
      ? 'nimbleacademy'
      : currentPath.startsWith('/nimbletrade')
        ? 'nimbletrade'
        : null

  return subdomain === 'nimbledev' || pathBrand === 'nimbledev'
    ? 'nimbledev'
    : subdomain === 'nimbleacademy' || pathBrand === 'nimbleacademy'
      ? 'nimbleacademy'
      : subdomain === 'nimbletrade' || pathBrand === 'nimbletrade'
        ? 'nimbletrade'
        : 'main'
}

export function useActiveBrand() {
  const pathname = usePathname()
  const [brand, setBrand] = useState<Brand>('main')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const nextBrand = resolveBrand(
      window.location.hostname.toLowerCase(),
      pathname || window.location.pathname
    )

    setBrand(nextBrand)
    setIsReady(true)
  }, [pathname])

  return {
    brand,
    isReady,
    isMain: brand === 'main',
    isNimbleDev: brand === 'nimbledev',
    isNimbleAcademy: brand === 'nimbleacademy',
    isNimbleTrade: brand === 'nimbletrade'
  }
}
