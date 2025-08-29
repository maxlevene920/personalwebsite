export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  featured: boolean
  // Additional fields for detailed view
  longDescription?: string
  challenges?: string[]
  features?: string[]
  role?: string
  duration?: string
  teamSize?: string
}
