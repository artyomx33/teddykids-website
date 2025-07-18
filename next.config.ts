/* ------------------------------------------------------------------
 *  Next.js Global Configuration
 *  – Performance-focused tweaks: compression, image optimisation,
 *    long-term caching headers, bundle-analyser, SWC minify, etc.
 * -----------------------------------------------------------------*/
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ↓ Enable gzip / brotli compression for all served assets */
  compress: true,

  /* ↓ Image optimisation: modern formats + sane device sizes */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640, 768, 1024, 1200, 1920],
    // Add any external domains here if images are hosted elsewhere
    // domains: ["cdn.example.com"],
  },

  /* ↓ Compiler & build optimisations */
  // Removed experimental `optimizeCss` option as it requires the
  // additional `critters` dependency and breaks the production build.

  /* ↓ Static export tweaks (when using `next export`) */
  output: "standalone",

  /* ↓ Custom HTTP headers for better caching */
  async headers() {
    return [
      {
        // Cache static assets & images for 1 year (immutable)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, immutable, s-maxage=31536000, stale-while-revalidate",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, immutable, s-maxage=31536000, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
