/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages : ["next-international", "international-type"],
  /* config options here */
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

export default nextConfig
