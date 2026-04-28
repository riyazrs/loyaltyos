import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure no hardcoded localhost URLs leak into production
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? '',
  },
};

export default nextConfig;
