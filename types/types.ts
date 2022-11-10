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
  sponsor_type: string
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
  avatar: string | null
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

export interface EventOrganizer {
  id: number
  name: string
  email: string
  description: string
  facebook: string
  twitter: string
  instagram: string
  logo: string
  slug: string
  status: string
  created_at: string
  upcoming_events_count: number
  total_events_count: number
}

export interface EventType {
  id: number
  name: string
  description: string
  slug: string
  status: boolean
}

export interface Settings {
  id: number
  message_before?: string
  message_after?: string
  event_id: number
  created_at: string
  updated_at: string
}

export interface CfsSettings {
  session_levels: string[]
  session_formats: string[]
}

export interface Cfs {
  open_date: string
  close_date: string
  support_email: string
  cfs_url: string
  cfs_settings: CfsSettings
}

export interface Event {
  id: number
  title: string
  description: string
  start_date: string
  end_date: string
  event_image: string
  venue_name: string
  venue_address: string
  venue_url: string
  venue_lat: string
  venue_lng: string
  status: string
  slug: string
  organizer: EventOrganizer
  event_type: EventType
  created_at: string
  settings: Settings
  all_tickets_count: number
  single_day_event: boolean
  min_ticket_price: number
  remaining_tickets: number
  cfs: Cfs
  rooms: Room[]
}
