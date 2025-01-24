import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "contact@example.com",
      icon: "📧"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      icon: "💼"
    },
    {
      title: "GitHub",
      value: "github.com/yourusername",
      icon: "💻"
    }
  ]

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Contact Information</h3>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="flex items-center space-x-4 bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">{method.icon}</span>
                <div>
                  <h4 className="text-lg font-medium text-gray-300">{method.title}</h4>
                  <p className="text-blue-400">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:outline-none backdrop-blur-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
