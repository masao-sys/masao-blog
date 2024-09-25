/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.MICRO_CMS_IMAGE_DOMAIN,
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig
