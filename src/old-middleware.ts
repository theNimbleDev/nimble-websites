import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  const isLocalhost = hostname.endsWith('.localhost');
  const isProduction = hostname.endsWith('.thenimblesgrp.com');
  const isVercel = hostname.includes('.vercel.app');

  let subdomain = '';

  if (isLocalhost || isVercel) {
    subdomain = hostname.split('.')[0]; // nimbledev.localhost or nimbledev.vercel.app
  } else if (isProduction) {
    subdomain = hostname.split('.')[0]; // nimbledev.thenimblesgrp.com
  }

  const subdomainPaths: { [key: string]: string } = {
    nimbledev: '/nimbledev',
    nimbletrade: '/nimbletrade',
  };

  if (subdomain in subdomainPaths) {
    if (url.pathname === '/') {
      url.pathname = subdomainPaths[subdomain];
    } else {
      url.pathname = `${subdomainPaths[subdomain]}${url.pathname}`;
    }
  } else if (isProduction || isVercel) {
    if (url.pathname.startsWith('/nimbledev') || url.pathname.startsWith('/nimbletrade')) {
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
