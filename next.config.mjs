/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "ichef.bbci.co.uk",
    },
    {
      protocol: "https",
      hostname: "scontent.fdac13-1.fna.fbcdn.net",
    },
    {
      protocol: "https",
      hostname: "i.pinimg.com",
    },
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
  ],
},

  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
