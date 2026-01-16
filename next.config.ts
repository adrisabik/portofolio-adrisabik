import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Disable webpack extension for now as Velite is processed in prebuild
  /*
  webpack: (config) => {
    return config;
  },
  */
};

export default nextConfig;
