'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { ProjectDialog } from './ProjectDialog'
import { Project } from '../lib/types'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleProjectClick = (project: Project, index: number) => {
    setSelectedProject(project)
    setCurrentProjectIndex(index)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedProject(null)
  }

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length
    setCurrentProjectIndex(nextIndex)
    setSelectedProject(projects[nextIndex])
  }

  const handlePreviousProject = () => {
    const prevIndex = currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
    setCurrentProjectIndex(prevIndex)
    setSelectedProject(projects[prevIndex])
  }

  const projects: Project[] = [
    {
      title: 'SeqSens',
      description: 'A langchain based tool for analyzing and predicting gene expression data.',
      longDescription: 'For biotech companies that are working with genomics data at scale, it is imperative that raw sequencing data is normalized and processed for downstream computational tasks in a timely manner.\n\nA tedious part of the process for bioinformatics analysis of gene expression data is matching control/perturbed sample splits for differential expression analysis. This often requires manual intervention from a bioinformatician to:\n\n- understand the experiment being conducted\n- understand which samples are control and which are perturbed\n- understand all possible splits of control/perturbed samples\n\nWith the rise of LLMs, we see an opportunity to automate this tedious, manual process. The metadata attached to gene expression profiling datasets is often free text and can be used as input to a fine-tuned LLM for summarization of the experimental procedures and automatic stratification of control/perturbed samples. This can increase the speed at which gene expression data is analyzed and free up bioinformaticians to perform more meaningful, high impact work.',
      image: '/projects/seqsens/SeqSensWinning.jpeg',
      technologies: ['Python', 'Streamlit', 'bs4', 'Pandas', 'LangChain', 'OpenAI API'],
      github: 'https://github.com/maxlevene920/SeqSense',
      featured: true,
      role: 'Developer',
      duration: '2 weeks',
      teamSize: '4',
      features: [
        'GEO Dataset Scraping',
        'AI-Powered Sample Classification',
        'User-Friendly Web Interface',
        'Command-Line Interface',
        'Fine-tuning Data Collection',
      ],
      challenges: [
        'Fine tuning the model to perform sample classification',
        'Crawling the GEO database to collect metadata',
      ],
      awards: [
        'Third Place Bio x AI Hackathon 2024'
      ],
      assets: [
        {
          id: 'seqsens-1',
          type: 'image',
          url: '/projects/seqsens/SeqSensphoto1.png',
          filename: 'SeqSensphoto1.png',
          description: "SeqSens Landing Page",
          uploadedAt: new Date('2024-01-15')
        },
        {
          id: 'seqsens-2',
          type: 'image',
          url: '/projects/seqsens/SeqSensphoto2_summary.png',
          filename: 'SeqSensphoto2_summary.png',
          description: "Dataset summary showing gene expression analysis results",
          uploadedAt: new Date('2024-01-16')
        },
        {
          id: 'seqsens-3',
          type: 'image',
          url: '/projects/seqsens/SeqSensPhoto3_classification.png',
          filename: 'SeqSensPhoto3_classification.png',
          description: "Classification results for data samples",
          uploadedAt: new Date('2024-01-17')
        },
        {
          id: 'seqsens-4',
          type: 'image',
          url: '/projects/seqsens/SeqSensWinning.jpeg',
          filename: 'SeqSensWinning.jpeg',
          description: "SeqSens team winning third place at Bio x AI Hackathon 2024",
          uploadedAt: new Date('2024-01-18')
        }
      ]
    },
    {
      title: 'Vamm.eco',
      description: 'A comprehensive AI-RAG based ESG Consultation for your new renewable energy projects.',
      longDescription: 'It is essential for potential projects to qualify for regional ESG requirements. Without meeting ESG requirements, projects will face roadblocks to getting funding, thus delaying deployment of impactful renewable energy technologies. To meet these requirements, project contractors consult with various consultants and engage in manual diligence. The diligence process takes extended amounts of time and is very expensive (1-3 years before building starts!). To accelerate this process, we created an all-in-one ESG consultant that gives an overall score based off general project information, and provides a more detailed analysis on Environmental, Social, and Governance implications for the project.',
      image: '/projects/vamm/groupphotovamm.jpeg',
      technologies: ['Docker', 'Streamlit', 'Supabase', 'crawl4ai', 'OpenAI API', 'LangChain'],
      github: 'https://github.com/maxlevene920/ClimateHackathon',
      live: 'https://www.loom.com/share/2fd0cb3184eb47bba61e463d0f9d18f7?sid=67884621-6544-4888-9200-fec88b1eefe1',
      featured: true,
      role: 'Developer',
      duration: '24 Hours',
      teamSize: '3 developers',
      features: [
        'Comprehensive ESG scoring based on project location and specifications',
        'Detailed analysis of Environmental, Social, and Governance implications',
        'Location-specific recommendations and requirements',
        'Real-time visualization of renewable energy projects',
        'Environmental Agent: Powered by biodiversity and geolocation data',
        'Social Agent: Leveraging census data and demographic marketing insights',
        'Governance Agent: Connected to permit and regulatory requirement databases',
        'RAG Agent utilizing vector database to retrieve relevant information and answer questions'
      ],
      challenges: [
        'Time-crunch to create a full-stack application in 24 hours',
        'Processing large amounts of data from multiple sources',
        'Response consistency, quality, and reliability from the model'
      ],
      awards: [
        "Third place Climate Hackathon for Renewable Energy",
      ],
      assets: [
        {
          id: 'taskapp-1',
          type: 'image',
          url: '/projects/task-management/kanban-board.png',
          filename: 'kanban-board.png',
          description: "Kanban board view with drag-and-drop functionality",
          uploadedAt: new Date('2024-02-10')
        },
        {
          id: 'taskapp-2',
          type: 'video',
          url: '/projects/task-management/demo-video.mp4',
          filename: 'demo-video.mp4',
          description: "Walkthrough of the task management application features",
          uploadedAt: new Date('2024-02-12')
        }
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
      ],
      awards: [
        "Featured in Weather App Showcase 2024",
        'Community Choice Award for Best Weather Interface'
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
      ],
      awards: [
        'Best Portfolio Design Award 2024',
        "Featured in Web Design Weekly"
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
      ],
      awards: [
        'Best Communication App Award 2024',
        "Featured in Developer Tools Monthly"
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
      ],
      awards: [
        'Best Food & Lifestyle App 2024',
        "Featured in App Store Editors Choice"
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
              onClick={() => handleProjectClick(project, index)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ExternalLink size={24} className="text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Project Preview</p>
                      </div>
                    </div>
                  )}
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
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-lg hover:bg-accent transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight size={16} />
                      {project.title === 'Vamm.eco' ? 'Link to Demo' : 'Live Demo'}
                    </a>
                  )}
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
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        totalProjects={projects.length}
        currentProjectIndex={currentProjectIndex}
      />
    </section>
  )
}
