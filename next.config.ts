import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/droidconke/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'sessionize.com',
      },
    ],
  },
}

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // All pages are server-rendered, so a document request only ever happens on a
  // full load/refresh. Caching pages on front-end navigation is what makes an
  // offline refresh of a visited page work instead of erroring (#89).
  cacheOnFrontEndNav: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
    {
      // Video only — webp is an image format and belongs to the image route
      // below: Workbox takes the first matching route, so a webp here would
      // stay CacheFirst with no revalidation for a month, and a speaker
      // photo replaced at the same URL would never arrive.
      urlPattern: /\.mp4$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'media-assets',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-font-assets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        // A conference is 50+ speaker photos on top of session images and
        // sponsor logos; the entries now actually get written, so give the
        // LRU room before it starts evicting.
        expiration: {
          maxEntries: 128,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:js)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-js-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 1 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:css|less|scss)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-style-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 1 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:json|xml|csv|mp4)$/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'static-data-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 1 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\/api\/.*$/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 16,
          maxAgeSeconds: 1 * 24 * 60 * 60,
        },
      },
    },
    // The API base is a plain URL, but urlPattern reads it as a regular
    // expression — escape it, or a stray regex metacharacter in the deploy
    // env changes what this matches. And when the variable is missing at
    // build time, leave the route out entirely: an empty pattern matches
    // every request and funnels the whole site through a 16-entry cache.
    ...(process.env.NEXT_PUBLIC_API_BASE_URL
      ? [
          {
            urlPattern: new RegExp(
              `^${process.env.NEXT_PUBLIC_API_BASE_URL.replace(
                /[.*+?^${}()|[\]\\]/g,
                '\\$&'
              )}`
            ),
            handler: 'NetworkFirst' as const,
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 16,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ]
      : []),
    {
      urlPattern: /.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 1 * 24 * 60 * 60,
        },
      },
    },
  ],
})

export default pwaConfig(nextConfig)
