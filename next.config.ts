import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/golan_sahara_landing' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
