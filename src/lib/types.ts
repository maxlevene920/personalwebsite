export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live?: string
  featured: boolean
  // Additional fields for detailed view
  longDescription?: string
  challenges?: string[]
  features?: string[]
  role?: string
  duration?: string
  teamSize?: string
  awards?: string[]
  assets?: ProjectAsset[]
}

export interface ProjectAsset {
  id: string
  type: 'image' | 'video'
  url: string
  filename: string
  description?: string
  uploadedAt: Date
}
