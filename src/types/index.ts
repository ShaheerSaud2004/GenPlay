export interface WaitlistFormData {
  email: string
  name?: string
  role?: 'student' | 'educator' | 'indie' | 'other'
  engine?: 'Unity' | 'Godot' | 'Both'
  experience?: number
  useCase?: string
}

export interface ApiResponse {
  ok: boolean
  error?: string
  message?: string
}

export interface RoadmapItem {
  title: string
  description: string
  status: 'now' | 'next' | 'later'
  category?: string
}

export interface ChangelogEntry {
  date: string
  version?: string
  entries: string[]
}
