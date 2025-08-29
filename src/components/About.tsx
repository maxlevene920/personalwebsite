'use client'

import { motion } from 'framer-motion'
import { User, Code, Coffee, Music } from 'lucide-react'

export function About() {
  const interests = [
    { icon: Code, label: 'Coding' },
    { icon: Coffee, label: 'Coffee' },
    { icon: Music, label: 'Music' },
    { icon: User, label: 'Learning' },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me a little better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
                With several years of experience in web development, I've worked on projects ranging from 
                small business websites to complex enterprise applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career focused on building 
                user-centered applications that solve real-world problems. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest technologies and best practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I'm always eager to learn and 
                take on new challenges.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                When I'm not coding, I enjoy:
              </h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:bg-accent transition-colors duration-200"
                  >
                    <interest.icon size={20} className="text-primary" />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-muted rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
                    <p className="text-sm text-muted-foreground">Frontend & Backend expertise</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <User size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">User Experience</h3>
                    <p className="text-sm text-muted-foreground">Creating intuitive interfaces</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Coffee size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Problem Solving</h3>
                    <p className="text-sm text-muted-foreground">Creative technical solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
