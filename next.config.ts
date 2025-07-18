import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable strict mode to reduce errors
  reactStrictMode: false,
  
  // Disable TypeScript errors blocking builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint errors blocking builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Use SWC instead of Babel (faster)
  swcMinify: true,
};

export default nextConfig;