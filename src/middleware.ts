import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  if (hostname === 'nimbledev.localhost') {
    if (url.pathname === '/') {
      url.pathname = '/nimbledev';
    } else {
      url.pathname = `/nimbledev${url.pathname}`;
    }
  } else if (hostname === 'nimbletrade.localhost') {
    if (url.pathname === '/') {
      url.pathname = '/nimbletrade';
    } else {
      url.pathname = `/nimbletrade${url.pathname}`;
    }
  } else {
    // If the path starts with nimbledev or nimbletrade on the main domain, return a 404 response
    if (url.pathname.startsWith('/nimbledev') || url.pathname.startsWith('/nimbletrade')) {
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
