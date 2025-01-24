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
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-7xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 background-animate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="h-[500px] bg-gray-900/50 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-all duration-700" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 background-animate">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-5 py-2.5 bg-blue-500/10 backdrop-blur-sm rounded-full text-blue-300 text-base font-medium border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-blue-400 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-300">
                        <span className="text-blue-500 text-2xl">•</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.link}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 background-animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-xl font-bold text-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
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
