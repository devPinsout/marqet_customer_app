// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';
import { NextResponse } from 'next/server';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  experimental: {
  },
  async redirects() {
    return []
  },
  matcher: [
    '/'  
  ]
};

// Export with PWA plugin and middleware logic
export default withPWA({
  ...nextConfig,
  dest: 'public',
  disable: isDev,
  register: true,
  skipWaiting: true,
});

