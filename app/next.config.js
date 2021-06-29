module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}
