import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // replace with your GitHub repo name
  images: {
    unoptimized: true, // if using next/image
  },
};

export default nextConfig;
