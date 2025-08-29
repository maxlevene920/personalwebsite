'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, Code, Database, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { socialLinks } from '@/lib/social-links'

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const featuredWork = [
    {
      title: 'Cultivated Meat Platform',
      description: 'AI-powered platform for sustainable meat production',
      icon: Leaf,
      color: 'from-green-500/20 to-emerald-500/20',
      category: 'AI & Sustainability'
    },
    {
      title: 'Resale Automation',
      description: 'Automated platform for second-hand market optimization',
      icon: Code,
      color: 'from-blue-500/20 to-cyan-500/20',
      category: 'E-commerce & AI'
    },
    {
      title: 'Carbon Tracking Dashboard',
      description: 'Real-time carbon footprint monitoring and analytics',
      icon: Database,
      color: 'from-purple-500/20 to-pink-500/20',
      category: 'Climate Tech'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Introduction */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Hi, I'm{' '}
                <span className="text-primary">Max</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
                Scientist • Software Engineer • AI Innovator • Entrepreneur
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I design and build products at the crossroads of research, engineering, and artificial intelligence 
                from cultivated meat, to resale automation platforms, and carbon-tracking dashboards. 
                I'm passionate about solving real-world problems with tech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-8"
            >
              <button
                onClick={scrollToAbout}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={20} />
              </button>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-3 rounded-lg border border-border hover:bg-accent transition-colors duration-200"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Work Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Featured Work</h3>
              <p className="text-muted-foreground">Recent projects I've built</p>
            </div>

            <div className="space-y-4">
              {featuredWork.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                      <project.icon size={24} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h4>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
              >
                View all projects
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
