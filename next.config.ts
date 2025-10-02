import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: process.env.NODE_ENV === 'production',
  
  // Sanity Studio configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  
  // Ensure proper handling of studio routes
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/:path*',
      },
    ]
  },
};

export default nextConfig;
