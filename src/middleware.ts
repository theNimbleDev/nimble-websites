import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request
  const hostname = headers.get('host')?.split(':')[0] ?? ''

  // Determine the environment
  const isLocalhost = hostname.endsWith('.localhost')
  const isProduction = hostname.endsWith('.thenimblesgrp.com')
  const isVercel = hostname.includes('.vercel.app')

  // Extract the subdomain
  let subdomain = ''
  if (isLocalhost || isVercel) {
    subdomain = hostname.split('.')[0] // nimbledev.localhost or nimbledev.vercel.app
  } else if (isProduction) {
    const parts = hostname.split('.')
    subdomain = parts.length > 2 ? parts[0] : '' // nimbledev.thenimblesgrp.com
  }

  // Redirect `/nimbledev` to `nimbledev.localhost:3000` or `nimbledev.thenimblesgrp.com`
  if (url.pathname === '/nimbledev' && subdomain !== 'nimbledev') {
    const redirectUrl = isProduction
      ? `https://nimbledev.thenimblesgrp.com`
      : `http://nimbledev.localhost:3000`
    return NextResponse.redirect(new URL(redirectUrl, request.url))
  }

  // Handle subdomain routing
  const subdomainPaths: { [key: string]: string } = {
    nimbledev: '/nimbledev',
    nimbletrade: '/nimbletrade'
  }

  if (subdomain in subdomainPaths) {
    if (url.pathname === '/') {
      url.pathname = subdomainPaths[subdomain]
    } else {
      url.pathname = `${subdomainPaths[subdomain]}${url.pathname}`
    }
  } else if (isProduction || isVercel || isLocalhost) {
    // Redirect to 404 for invalid paths
    if (
      url.pathname.startsWith('/nimbledev') ||
      url.pathname.startsWith('/nimbletrade')
    ) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }
  }

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
