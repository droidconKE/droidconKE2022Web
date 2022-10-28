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

export interface Sponsor {
  name: string
  tagline: string
  link: string | undefined
  logo: string
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

export interface Speaker {
  name: string
  tagline: string
  biography: string
  avatar: string
  twitter?: string
  facebook?: string
  linkedin?: string
  instagram?: string
  blog?: string
  company_website?: string
}

export interface Room {
  title: string
  id: number
}

export interface Session {
  id: number
  title: string
  description: string
  slug?: string
  session_format: string
  session_level: string
  session_image: string
  backgroundColor: string
  borderColor: string
  is_serviceSession: boolean
  is_keynote: boolean
  is_bookmarked: boolean
  start_date_time: string
  start_time: string
  end_date_time: string
  end_time: string
  speakers: Speaker[]
  rooms: Room[]
}

export interface Schedule {
  [key: string]: Session[]
}

export interface FeedbackError {
  feedback: string[]
  rating: string[]
}

export interface StarIconProps {
  isStar?: boolean
  session: Session
}
