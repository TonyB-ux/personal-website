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
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px'
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}
            >
              Tony bbsl
            </motion.div>
            <div style={{
              display: 'flex',
              gap: '32px'
            }}>
              <a href="#home" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>Home</a>
              <a href="#about" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>About</a>
              <a href="#projects" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>Projects</a>
              <a href="#contact" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          inset: 0
        }}>
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
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '256px',
              height: '256px',
              background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
              borderRadius: '50%',
              filter: 'blur(48px)'
            }}
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
            style={{
              position: 'absolute',
              bottom: '25%',
              right: '25%',
              width: '320px',
              height: '320px',
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '50%',
              filter: 'blur(48px)'
            }}
          />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1024px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '32px' }}
          >
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #ffffff, #e9d5ff, #a5f3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Tony Boche
            </h1>
            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              IT-Projektmanager & Kundenbetreuung
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto 48px auto',
              lineHeight: '1.7'
            }}>
              Spezialisiert auf ERP-Systeme, Webshop-Rollouts und Qualitätsmanagement in der Biobranche
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '48px',
              flexWrap: 'wrap'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(to right, #9333ea, #2563eb)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
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
      <section id="about" style={{
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '64px'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px'
            }}>
              Mein Werdegang
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Vom Kundensupport zum IT-Projektmanager – mit tiefem Verständnis für Kundenanforderungen und technische Lösungen
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}>
            {/* Aufgabenbereich 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                backdropFilter: 'blur(16px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #9333ea, #ec4899)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <FaCode style={{ color: 'white', fontSize: '24px' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>IT-Projektmanagement</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                Softwareumstellungen, Webshop-Rollouts für Lieferdienste und Einzelhandel, Koordination zwischen Entwicklerteam und Kunden
              </p>
            </motion.div>

            {/* Aufgabenbereich 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                backdropFilter: 'blur(16px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <FaPalette style={{ color: 'white', fontSize: '24px' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>Kundenbetreuung Großkunde</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                Operative Betreuung von Großkunden, Koordination von Anpassungen und neuen Anforderungen im System
              </p>
            </motion.div>

            {/* Aufgabenbereich 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                backdropFilter: 'blur(16px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(to right, #10b981, #059669)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <FaRocket style={{ color: 'white', fontSize: '24px' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>Qualitätsmanagement & Mitarbeiterführung</h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                Qualitätssicherung, Prozessoptimierung und erste Aufgaben in der Mitarbeiterführung
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center'
            }}
          >
            <div style={{
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '8px'
              }}>15+</div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.6)'
              }}>Webshop-Rollouts</div>
            </div>
            <div style={{
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '8px'
              }}>5+</div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.6)'
              }}>Jahre Biobranche</div>
            </div>
            <div style={{
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '8px'
              }}>4</div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.6)'
              }}>SQL-Datenbanken</div>
            </div>
            <div style={{
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '8px'
              }}>100%</div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.6)'
              }}>Kundenzufriedenheit</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '80px 0',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: '64px'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px'
            }}>
              Meine Projekte
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Erfolgreiche IT-Projekte und Systemimplementierungen in der Biobranche
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
