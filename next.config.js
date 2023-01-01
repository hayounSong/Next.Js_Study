const API_KEY = 'd694e0e93cf7e09038bd1dd7160e3088';
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
      {
        source: '/old-blog/:path',
        destination: '/new-sexy-blog/:path',
        permanent: false,
        //이런식으로 패턴 인식도 가능하다!
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
    //rewrites는, 유저를 redirect 시키긴하지만, url은 변하지 않는다!
  },
};

module.exports = nextConfig;
