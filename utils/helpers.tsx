export const isServer = typeof window === 'undefined'
export const isClient = typeof window !== 'undefined'
export const groupBy3 = arr => arr.reduce((acc, current, index) => (index % 3 ? acc[acc.length - 1].push(current) : acc.push([current])) && acc, [])
