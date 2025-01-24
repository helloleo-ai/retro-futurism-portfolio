import React from 'react'
import { motion } from 'framer-motion'

const ProjectPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js that allows users to create and manage their personal portfolios. Features include real-time updates, image optimization, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "#",
      github: "#",
      features: [
        "User authentication and authorization",
        "Real-time updates using WebSocket",
        "Image upload and optimization",
        "Responsive design for all devices",
        "Dark/Light theme support"
      ]
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design with modern animations. A social media dashboard that visualizes user engagement and content performance with interactive charts and graphs.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "D3.js", "Firebase"],
      image: "/project2.jpg",
      link: "#",
      github: "#",
      features: [
        "Interactive data visualizations",
        "Real-time analytics",
        "Custom animation system",
        "Responsive dashboard layout",
        "Export data in multiple formats"
      ]
    },
    {
      title: "Project 3",
      description: "Real-time data visualization dashboard for monitoring system performance and user behavior. Includes customizable widgets and automated reporting features.",
      tech: ["TypeScript", "D3.js", "Firebase", "Node.js", "Express"],
      image: "/project3.jpg",
      link: "#",
      github: "#",
      features: [
        "Real-time performance monitoring",
        "Customizable dashboard widgets",
        "Automated report generation",
        "Alert system configuration",
        "Historical data analysis"
      ]
    }
  ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="h-[400px] bg-gray-800/50 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-400">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-300">
                        <span className="text-blue-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.link}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-lg font-semibold background-animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
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

export default ProjectPage
