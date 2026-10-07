import { defineConfig } from 'vitest/config'

// Unit tests for the pure helpers under utils/. They import from 'vitest'
// explicitly rather than using globals, so tsc checks them with no extra
// type configuration and nothing leaks into the Next build.
export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    environment: 'node',
  },
})
