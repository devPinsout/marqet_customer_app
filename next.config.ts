// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.ts
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

// Check if the environment is development
const isDev = process.env.NODE_ENV === 'development';

// Next.js configuration
const nextConfig: NextConfig = {
  // reactStrictMode: true,
  // Add other Next.js config options here
  // webpack(config) {
  //   // This is the right place to modify Webpack configuration
  //   return config;
  // }
};
// Export the configuration wrapped with PWA support
export default withPWA({
  ...nextConfig, // Spread the nextConfig to include all the original options
  dest: 'public', // Specifies where the service worker files are stored
  disable: isDev, // Disable PWA in development mode
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip waiting when the new service worker is ready
});





