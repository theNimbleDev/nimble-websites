/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/nimbledev/:path*',
        destination: '/nimbledev/:path*',
      },
      {
        source: '/nimbletrade/:path*',
        destination: '/nimbletrade/:path*',
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
