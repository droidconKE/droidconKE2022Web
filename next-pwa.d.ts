import type { PWAConfig } from 'next-pwa'

declare module 'next-pwa' {
  interface PWAConfig {
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

  export default function withPWA(config: PWAConfig): any
}
