import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Multiple lockfiles exist on this machine; pin Turbopack to this app root
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
