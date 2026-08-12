/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` emits a self-contained `out/` with no server runtime.
  output: 'export',
  // The static export has no Image Optimization server, so serve images as-is.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
