/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
      {
        urlPattern: '/^https://fonts.googleapis.com/.*/i',
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-font-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
        // method: 'GET',
        // strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: /\.(?:mp4|webp)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-video-assets',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
      {
        urlPattern: '/^https://via.placeholder.com/*/i',
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-image-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
        // method: 'GET',
        // strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: '/^https://res.cloudinary.com/droidconke/*/i',
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-image-assets-1',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
        // method: 'GET',
        // strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: '/^https://sessionize.com/image*/i',
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-img-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
        // method: 'GET',
        // strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: '/^https://lh3.googleusercontent.com/*/i',
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-images-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
        // method: 'GET',
        // strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: `/^${process.env.NEXT_PUBLIC_API_BASE_URL}/*/i`,
        handler: 'NetworkFirst',
        // handler: 'StaleWhileRevalidate',
        // method: 'GET',
        options: {
          // cacheableResponse: { statuses: [0, 200, 201] },
          cacheName: 'api-data-sets',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
          },
        },
      },
    ],
  },
})
