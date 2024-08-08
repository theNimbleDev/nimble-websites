import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  // Define your environments
  const isLocalhost = hostname.endsWith('.localhost');
  const isProduction = hostname.endsWith('.thenimblesgrp.com');
  const isVercel = hostname.includes('.vercel.app');

  let subdomain = '';

  if (isLocalhost) {
    subdomain = hostname.split('.')[0]; // e.g., nimbledev.localhost -> nimbledev
  } else if (isProduction || isVercel) {
    subdomain = hostname.split('.')[0]; // e.g., nimbledev.thenimblesgrp.com -> nimbledev
  }

  // Map subdomains to their respective paths
  const subdomainPaths: { [key: string]: string } = {
    nimbledev: '/nimbledev',
    nimbletrade: '/nimbletrade',
  };

  // Handle subdomain routing
  if (subdomain in subdomainPaths) {
    if (url.pathname === '/') {
      url.pathname = subdomainPaths[subdomain];
    } else {
      url.pathname = `${subdomainPaths[subdomain]}${url.pathname}`;
    }
  } else if (isProduction || isVercel) {
    // Handle the root domain (thenimblesgrp.com or the corresponding Vercel domain)
    if (url.pathname.startsWith('/nimbledev') || url.pathname.startsWith('/nimbletrade')) {
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
