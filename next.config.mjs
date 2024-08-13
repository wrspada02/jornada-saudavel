/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'archive.org',
      }
    ]
  }
};

export default nextConfig;
