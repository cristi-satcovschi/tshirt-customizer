/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com", "ih1.redbubble.net"],
  },

  ...(process.env.NODE_ENV === "production" && {
    basePath: "/tshirt-customizer",
  }),

  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;
