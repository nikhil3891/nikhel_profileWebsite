import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed turbopack to avoid build conflicts on Vercel
  trailingSlash: true,  // Ensures URLs end with / for better routing
  experimental: {
    // Enable if using app directory features in Next.js 16
    ////appDir: true,
  },
};

export default nextConfig;