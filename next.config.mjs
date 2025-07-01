const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'XsakesenseiX/' : '',
  basePath: isProd ? 'XsakesenseiX' : '',
  output: 'export'
};

export default nextConfig;