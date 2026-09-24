declare module 'next-pwa' {
  interface PWAConfig {
    dest?: string
    register?: boolean
    skipWaiting?: boolean
    disable?: boolean
    cacheOnFrontEndNav?: boolean
    runtimeCaching?: Array<{
      urlPattern: RegExp | string
      handler:
        | 'NetworkFirst'
        | 'CacheFirst'
        | 'NetworkOnly'
        | 'StaleWhileRevalidate'
      options?: {
        cacheName?: string
        expiration?: {
          maxEntries?: number
          maxAgeSeconds?: number
        }
        networkTimeoutSeconds?: number
      }
    }>
  }

  export default function withPWA(config?: PWAConfig): <T>(nextConfig?: T) => T
}
