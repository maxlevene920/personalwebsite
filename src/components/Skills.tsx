'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Zap,
  Code,
  FileCode,
  Server,
  FileText,
  GitBranch,
  Container
} from 'lucide-react'

export function Skills() {
  const [activeTab, setActiveTab] = useState('tech')

  const techSkills = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Python', icon: FileText },
        { name: 'TypeScript', icon: FileCode },
        { name: 'SQL', icon: Database },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Zap,
      skills: [
        { name: 'OpenAI', icon: Globe },
        { name: 'Anthropic', icon: Globe },
        { name: 'RAG', icon: FileText },
        { name: 'LLM Agents', icon: Code },
        { name: 'Vector Search', icon: Database },
        { name: 'LangChain', icon: Code },
      ]
    },
    {
      title: 'Frontend & Web',
      icon: Smartphone,
      skills: [
        { name: 'React', icon: Code },
        { name: 'Tailwind', icon: Palette },
        { name: 'Vercel', icon: Globe },
        { name: 'Streamlit', icon: FileText },
        { name: 'Mapbox', icon: Globe },
      ]
    },
    {
      title: 'Backend & Infrastructure',
      icon: Server,
      skills: [
        { name: 'Supabase', icon: Database },
        { name: 'REST APIs', icon: Code },
        { name: 'Docker', icon: Container },
        { name: 'GCP', icon: Globe },
        { name: 'AWS', icon: Globe },
        { name: 'Git', icon: GitBranch },
        { name: 'n8n', icon: Zap },
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      skills: [
        { name: 'Pandas', icon: FileText },
        { name: 'Plotly', icon: Palette },
        { name: 'PostgreSQL', icon: Database },
        { name: 'API Scraping', icon: Code },
        { name: 'Enrichment Pipelines', icon: FileText },
        { name: 'Data Visualization', icon: Palette },
      ]
    },
    {
      title: 'Business & Strategy',
      icon: Globe,
      skills: [
        { name: 'Customer Discovery', icon: FileText },
        { name: 'Iterative Prototyping', icon: Code },
        { name: 'GTM Pilots', icon: Globe },
        { name: 'Stakeholder Alignment', icon: FileText },
      ]
    }
  ]

  const biotechSkills = [
    {
      title: 'Laboratory Techniques',
      icon: FileText,
      skills: [
        { name: 'Cell Culture', icon: FileText },
        { name: 'Bacteria (C. Necator)', icon: FileText },
        { name: 'Plant Tissue Culture', icon: FileText },
        { name: 'Tissue Engineering', icon: FileText },
        { name: 'Lab Equipment Operation', icon: FileText },
        { name: 'BSL1 and BSL2 Certified', icon: FileText },
      ]
    },
    {
      title: 'Materials Science',
      icon: Database,
      skills: [
        { name: 'Biomaterials Development', icon: FileText },
        { name: 'Material Characterization', icon: FileText },
        { name: 'Hydrogels', icon: FileText },
        { name: 'Plant Based Fibers', icon: FileText },
      ]
    },
    {
      title: 'Research Methods',
      icon: Code,
      skills: [
        { name: 'Hypothesis Testing', icon: FileText },
        { name: 'Root Cause Analysis', icon: FileText },
        { name: 'Python', icon: FileCode },
        { name: 'C++', icon: FileCode },
        { name: 'AI Development', icon: Code },
        { name: 'CursorAI', icon: Code },
      ]
    },
    {
      title: 'Professional Tools',
      icon: Palette,
      skills: [
        { name: 'Microsoft Office Suite', icon: FileText },
        { name: 'Graphic Design', icon: Palette },
      ]
    }
  ]

  const skillCategories = activeTab === 'tech' ? techSkills : biotechSkills

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-muted/50 border border-border rounded-lg p-1">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tech
            </button>
            <button
              onClick={() => setActiveTab('biotech')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'biotech'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Biotech
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 border border-border rounded-lg p-3 hover:bg-muted hover:border-primary/20 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {skill.icon && (
                        <skill.icon size={16} className="text-primary" />
                      )}
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
