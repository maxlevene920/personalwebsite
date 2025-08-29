'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { ProjectDialog } from './ProjectDialog'
import { Project } from '../lib/types'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedProject(null)
  }

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, and payment processing.',
      longDescription: 'This comprehensive e-commerce solution provides a complete online shopping experience with advanced features like real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles complex business logic including order management, customer accounts, and analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      role: 'Full Stack Developer',
      duration: '3 months',
      teamSize: 'Solo',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Order management and tracking',
        'Admin dashboard for inventory management',
        'Responsive design for all devices'
      ],
      challenges: [
        'Implementing secure payment processing while maintaining good UX',
        'Optimizing database queries for large product catalogs',
        'Creating a scalable architecture for future growth'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'A modern task management platform designed for teams to collaborate effectively. Features real-time updates, intuitive drag-and-drop interface, and comprehensive project tracking capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      role: 'Frontend Developer',
      duration: '2 months',
      teamSize: '3 developers',
      features: [
        'Real-time task updates and notifications',
        'Drag-and-drop task organization',
        'Team collaboration and comments',
        'Project progress tracking',
        'File attachments and sharing',
        'Mobile-responsive design'
      ],
      challenges: [
        'Implementing real-time updates without overwhelming the UI',
        'Creating smooth drag-and-drop interactions across different devices',
        'Optimizing performance with large task lists'
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather and forecasts using OpenWeatherMap API with interactive charts and maps.',
      longDescription: 'An elegant weather application that provides comprehensive weather information with beautiful visualizations. Features interactive charts, detailed forecasts, and location-based weather data.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      role: 'Frontend Developer',
      duration: '1 month',
      teamSize: 'Solo',
      features: [
        'Current weather display with detailed metrics',
        '7-day weather forecast',
        'Interactive charts and graphs',
        'Location-based weather data',
        'Responsive design for all devices',
        'Dark/light theme toggle'
      ],
      challenges: [
        'Integrating multiple weather APIs for comprehensive data',
        'Creating smooth animations for weather transitions',
        'Optimizing chart performance with real-time data'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations and a clean design.',
      longDescription: 'A personal portfolio website showcasing professional work and skills. Built with modern web technologies and featuring smooth animations, responsive design, and optimal performance.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      role: 'Full Stack Developer',
      duration: '2 weeks',
      teamSize: 'Solo',
      features: [
        'Responsive design for all devices',
        'Smooth page transitions and animations',
        'Interactive project showcase',
        'Contact form with validation',
        'SEO optimized',
        'Fast loading times'
      ],
      challenges: [
        'Creating engaging animations without affecting performance',
        'Ensuring accessibility across all devices',
        'Optimizing for search engines while maintaining design quality'
      ]
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, message history, and file sharing capabilities.',
      longDescription: 'A modern real-time messaging platform that enables users to communicate instantly with features like file sharing, message history, and user authentication.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      role: 'Full Stack Developer',
      duration: '1.5 months',
      teamSize: '2 developers',
      features: [
        'Real-time messaging with instant delivery',
        'User authentication and profiles',
        'File and image sharing',
        'Message history and search',
        'Online/offline status indicators',
        'Mobile-responsive design'
      ],
      challenges: [
        'Implementing real-time messaging with low latency',
        'Handling file uploads and storage efficiently',
        'Managing user authentication and security'
      ]
    },
    {
      title: 'Recipe Finder',
      description: 'A recipe discovery app that helps users find recipes based on available ingredients and dietary preferences.',
      longDescription: 'An intelligent recipe discovery platform that helps users find delicious recipes based on available ingredients, dietary restrictions, and personal preferences.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Spoonacular API', 'CSS3', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      role: 'Frontend Developer',
      duration: '1 month',
      teamSize: 'Solo',
      features: [
        'Ingredient-based recipe search',
        'Dietary preference filtering',
        'Recipe ratings and reviews',
        'Nutritional information display',
        'Save favorite recipes',
        'Shopping list generation'
      ],
      challenges: [
        'Integrating with external recipe APIs effectively',
        'Creating an intuitive search and filter system',
        'Optimizing for users with dietary restrictions'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:border-primary/50"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ExternalLink size={24} className="text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-lg hover:bg-accent transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-lg hover:bg-accent transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-xs font-medium rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  )
}
