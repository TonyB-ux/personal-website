'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaCode, FaPalette, FaRocket } from 'react-icons/fa'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white font-bold text-xl"
            >
              Tony bbsl
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
              Tony bbsl
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
              Crafting digital experiences that blend cutting-edge technology with beautiful design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-white/60 w-6 h-6" />
        </motion.div>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              I'm a passionate full-stack developer who transforms ideas into digital reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Skill Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <FaCode className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Development</h3>
              <p className="text-white/70 leading-relaxed">
                Building scalable applications with modern technologies like React, Node.js, and cloud platforms.
              </p>
            </motion.div>

            {/* Skill Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <FaPalette className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
              <p className="text-white/70 leading-relaxed">
                Creating intuitive and beautiful user experiences that delight users and drive engagement.
              </p>
            </motion.div>

            {/* Skill Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Optimization</h3>
              <p className="text-white/70 leading-relaxed">
                Optimizing applications for speed, accessibility, and seamless user experiences across all devices.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/60">Client Satisfaction</div>
            </div>
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/60">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Showcasing my latest work in web development and digital innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Large Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="md:col-span-2 backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <FaRocket className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">E-Commerce Platform</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    A full-stack e-commerce solution with real-time inventory management, secure payments, and advanced analytics. Built with modern technologies for optimal performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full border border-purple-400/30">Next.js</span>
                    <span className="px-3 py-1 bg-blue-500/30 text-blue-200 text-sm rounded-full border border-blue-400/30">TypeScript</span>
                    <span className="px-3 py-1 bg-green-500/30 text-green-200 text-sm rounded-full border border-green-400/30">Node.js</span>
                    <span className="px-3 py-1 bg-yellow-500/30 text-yellow-200 text-sm rounded-full border border-yellow-400/30">MongoDB</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    View Project
                  </motion.button>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl border border-white/20 flex items-center justify-center">
                    <div className="text-white/60 text-6xl">
                      <FaCode />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <FaPalette className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Design System</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                A comprehensive design system with reusable components, built for scalability and consistency across multiple products.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded-full">Storybook</span>
                <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full">Figma</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-300 hover:text-white transition-colors font-semibold"
              >
                Learn More →
              </motion.button>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Real-time analytics dashboard with interactive charts, data visualization, and automated reporting features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-green-500/30 text-green-200 text-xs rounded-full">D3.js</span>
                <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-yellow-500/30 text-yellow-200 text-xs rounded-full">Python</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-green-300 hover:text-white transition-colors font-semibold"
              >
                Learn More →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.a
                    whileHover={{ x: 10 }}
                    href="mailto:tony@example.com"
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-white/60">tony@example.com</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ x: 10 }}
                    href="https://linkedin.com/in/tonybbsl"
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaLinkedin className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-white/60">Connect with me</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ x: 10 }}
                    href="https://github.com/tonybbsl"
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-white/60">View my code</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors backdrop-blur-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors backdrop-blur-sm resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/60">
              2024 Tony bbsl. Crafted with passion and modern technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
