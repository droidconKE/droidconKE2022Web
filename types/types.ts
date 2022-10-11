export interface Organizer {
  name: string
  tagline: string
  link: string | undefined
  type: string
  bio: string | null
  twitter_handle: string | null
  designation: string
  photo: string
  created_at: string
}

export interface ErrorInterface {
  message: string
  status: number | string
}

export interface FilterInterface {
  [key: string]: string
}

export interface User {
  avatar: string
  created_at: string
  email: string
  gender: string | null
  name: string
}
