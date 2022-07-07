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
  status: number
}
