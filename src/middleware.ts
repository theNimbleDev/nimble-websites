import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request
  const hostname = headers.get('host')?.split(':')[0].toLowerCase() ?? ''

  const isLocalhost =
    hostname.endsWith('.localhost') || hostname === 'localhost'
  const isProduction =
    hostname === 'thenimblesgrp.com' || hostname.endsWith('.thenimblesgrp.com')
  const isVercel = hostname.includes('.vercel.app')

  let subdomain = ''
  if (isLocalhost || isVercel) {
    subdomain = hostname.split('.')[0]
  } else if (isProduction) {
    const parts = hostname.split('.')
    subdomain = parts.length > 2 ? parts[0] : ''
  }

  const getSubdomainUrl = (brand: 'nimbledev' | 'nimbleacademy') => {
    if (isLocalhost) {
      return `http://${brand}.localhost:3000${url.pathname === `/${brand}` ? '/' : url.pathname}`
    }

    if (isVercel) {
      if (hostname.startsWith(`${brand}.`)) {
        return `https://${hostname}${url.pathname}`
      }

      const firstPart = hostname.split('.')[0]
      const isSubdomainHost =
        firstPart === 'nimbledev' ||
        firstPart === 'nimbleacademy' ||
        firstPart === 'nimbletrade'
      const baseHost = isSubdomainHost
        ? hostname.split('.').slice(1).join('.')
        : hostname
      return `https://${brand}.${baseHost}${url.pathname === `/${brand}` ? '/' : url.pathname}`
    }

    return `https://${brand}.thenimblesgrp.com${url.pathname === `/${brand}` ? '/' : url.pathname}`
  }

  if (url.pathname === '/nimbledev' && subdomain !== 'nimbledev') {
    return NextResponse.redirect(
      new URL(getSubdomainUrl('nimbledev'), request.url)
    )
  }

  if (url.pathname === '/nimbleacademy' && subdomain !== 'nimbleacademy') {
    return NextResponse.redirect(
      new URL(getSubdomainUrl('nimbleacademy'), request.url)
    )
  }

  const subdomainPaths: { [key: string]: string } = {
    nimbledev: '/nimbledev',
    nimbletrade: '/nimbletrade',
    nimbleacademy: '/nimbleacademy'
  }

  if (subdomain in subdomainPaths) {
    if (url.pathname === '/') {
      url.pathname = subdomainPaths[subdomain]
    } else {
      url.pathname = `${subdomainPaths[subdomain]}${url.pathname}`
    }
  } else if (isProduction || isVercel || isLocalhost) {
    if (
      url.pathname.startsWith('/nimbledev') ||
      url.pathname.startsWith('/nimbletrade') ||
      url.pathname.startsWith('/nimbleacademy')
    ) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }
  }

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
