/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Watch @gusvega-dev packages in node_modules (symlinked via file: refs)
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules\/(?!@gusvega-dev)/,
        poll: 500,
      };
    }
    return config;
  },
};

export default nextConfig;
