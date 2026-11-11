import type { NextConfig } from "next";

const desktopBuild = process.env.FAMILY_DESKTOP_BUILD === "1";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(desktopBuild
    ? {
        output: "export",
        assetPrefix: ".",
        distDir: ".next-family",
      }
    : {}),
};

export default nextConfig;