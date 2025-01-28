import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "My Projects",
      description: "Description of My Projects",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project 1",
      description: "Description of Project 1",
      tech: ["React", "Node.js", "Express"],
      image: "/project1.jpg",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0" style={{ background: 'var(--retro-grid)' }} />
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center mb-20 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="chrome-text">Featured Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative backdrop-blur-sm border-2 border-[var(--neon-blue)] rounded-lg overflow-hidden"
                   style={{ boxShadow: 'var(--retro-glow)' }}>
                <div className="h-48 bg-[var(--accent-dark)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--retro-grid)] opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)] to-transparent" />
                </div>
                <div className="p-6 bg-[var(--primary-dark)]/90">
                  <h3 className="text-2xl font-bold mb-3 text-[var(--neon-blue)] tracking-wider">{project.title}</h3>
                  <p className="text-[var(--chrome)] mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} 
                            className="px-3 py-1 border border-[var(--neon-blue)] rounded-full text-[var(--neon-blue)] text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-block px-6 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-lg hover:bg-[var(--neon-blue)]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
