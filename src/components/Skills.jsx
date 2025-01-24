import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git',
    'Python', 'SQL', 'MongoDB', 'AWS'
  ]

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-800 rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-lg font-semibold">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
