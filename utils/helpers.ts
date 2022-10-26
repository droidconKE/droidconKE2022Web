import moment from 'moment'

export const isServer = typeof window === 'undefined'

export const isClient = typeof window !== 'undefined'

export const groupBy3 = (arr: string[]) =>
  arr.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: any[], current: string, index: number) =>
      (index % 3 ? acc[acc.length - 1].push(current) : acc.push([current])) &&
      acc,
    []
  )

export const humanReadable = (value: string) =>
  moment(value).format('MMM Do YY')

export const timeAm = (value: string) => moment(value).format('A')

export const timeDay = (value: string) => moment(value).format('DD')

export const time = (value: string) => moment(value).format('h:mm')

export const hour = (value: string) => moment(value).format('h:mm a')

export const truncateString = (str: string, num = 100) => {
  if (!str) return ''
  if (str.length <= num) {
    return str
  }
  return `${str.slice(0, num)}...`
}
