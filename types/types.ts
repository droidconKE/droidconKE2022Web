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

export interface ScheduleInterface {
  title: string
  description: string
  start_time: string
  start_date_time: string
  end_date_time: string
  end_time: string
  speakers: [
    {
      name: string
      tagline: string
      biography: string
      avatar: string
    }
  ]
  rooms: [
    {
      title: string
      id: number
    }
  ]
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
