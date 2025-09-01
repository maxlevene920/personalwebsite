'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowUpRight, Calendar, Users, Code, ChevronLeft, ChevronRight } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Project } from '../lib/types'
import { AssetGallery } from './AssetGallery'
import { useEffect } from 'react'

interface ProjectDialogProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  totalProjects: number
  currentProjectIndex: number
}

export function ProjectDialog({ 
  project, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  totalProjects, 
  currentProjectIndex 
}: ProjectDialogProps) {
  if (!project) return null

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          onPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          onNext()
          break
        case 'Escape':
          event.preventDefault()
          onClose()
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onNext, onPrevious, onClose])

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
        
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Navigation arrows - positioned outside the dialog */}
              {totalProjects > 1 && (
                <>
                  <button
                    onClick={onPrevious}
                    className={`fixed left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background hover:scale-110 transition-all duration-200 group shadow-lg border border-border z-60 ${
                      currentProjectIndex === 0 ? 'opacity-60' : 'opacity-100'
                    }`}
                    title="Previous project (←)"
                    aria-label="Go to previous project"
                  >
                    <ChevronLeft size={20} className="sm:w-7 sm:h-7 group-hover:text-primary transition-colors duration-200" />
                  </button>
                  <button
                    onClick={onNext}
                    className={`fixed right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background hover:scale-110 transition-all duration-200 group shadow-lg border border-border z-60 ${
                      currentProjectIndex === totalProjects - 1 ? 'opacity-60' : 'opacity-100'
                    }`}
                    title="Next project (→)"
                    aria-label="Go to next project"
                  >
                    <ChevronRight size={20} className="sm:w-7 sm:h-7 group-hover:text-primary transition-colors duration-200" />
                  </button>
                </>
              )}

              <div className="relative w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-muted overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ExternalLink size={32} className="text-primary" />
                        </div>
                        <p className="text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Close button */}
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors duration-200">
                      <X size={20} />
                    </button>
                  </Dialog.Close>
                  
                  {/* Project title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{project.title}</h2>
                        {totalProjects > 1 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {currentProjectIndex + 1} of {totalProjects}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <motion.div 
                  key={currentProjectIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  {/* Project metadata */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    {project.role && (
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{project.role}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <Code size={16} />
                        <span>Team: {project.teamSize}</span>
                      </div>
                    )}
                  </div>

                  {/* Project Gallery */}
                  {project.assets && project.assets.length > 0 && (
                    <AssetGallery assets={project.assets} />
                  )}

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">About this project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges */}
                  {project.challenges && project.challenges.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Challenges & Solutions</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Awards */}
                  {project.awards && project.awards.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Awards & Recognition</h3>
                      <ul className="space-y-2">
                        {project.awards.map((award, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-6 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-background border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-accent transition-colors duration-200"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                      >
                        <ArrowUpRight size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
