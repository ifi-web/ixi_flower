const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/ixi_flower' : '',
  assetPrefix: isProd ? '/ixi_flower/' : ''
}
