import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  //https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
