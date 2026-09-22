import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // https://i.ibb.co.com/cSQdg7tf/mango-min.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
}

export default nextConfig
