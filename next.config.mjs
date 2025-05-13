/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep React Strict Mode enabled for better development experience
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com'],
    unoptimized: true,
  },
}

export default nextConfig
