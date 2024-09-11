/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/nimbledev/:path*',
        has: [
          {
            type: 'host',
            value: 'nimbledev.thenimblesgrp.com'
          }
        ],
        destination: '/nimbledev/:path*'
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'thenimblesgrp.com'
          }
        ],
        destination: '/:path*'
      },
      {
        source: '/nimbletrade/:path*',
        has: [
          {
            type: 'host',
            value: 'nimbletrade.thenimblesgrp.com'
          }
        ],
        destination: '/nimbletrade/:path*'
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
