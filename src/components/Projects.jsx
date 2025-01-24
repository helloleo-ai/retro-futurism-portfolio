import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design with modern animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Real-time data visualization dashboard",
      tech: ["TypeScript", "D3.js", "Firebase"],
      image: "/project3.jpg",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="h-64 bg-gray-800/50 relative overflow-hidden group-hover:bg-gray-700/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
