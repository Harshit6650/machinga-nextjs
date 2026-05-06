import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/machinga-nextjs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
