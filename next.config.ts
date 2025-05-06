// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// Next.js configuration
const nextConfig: NextConfig = {

};


export default withPWA({
  ...nextConfig, 
  dest: 'public',
  disable: isDev, 
  register: true, 
  skipWaiting: true, 
});





