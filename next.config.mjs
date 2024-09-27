/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      process.env.MICRO_CMS_IMAGE_DOMAIN,
      'images.unsplash.com',
    ],
  },
}

export default nextConfig
