import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const { name, role, tagline, avatar, contact } = portfolioData
  const [avatarSrc, setAvatarSrc] = useState(avatar)

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16 relative overflow-hidden"
    >
      {/* Animated gradient orbs - increased size and more elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-glow/15 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-primary/30 rounded-full -z-10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        className="order-2 md:order-1 flex-1 text-center md:text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-accent-primary font-semibold mb-3 text-lg"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-accent-secondary mb-4"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.p>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {tagline}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-accent-primary text-white font-semibold text-lg shadow-glow-sm"
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px -5px rgba(167, 139, 250, 0.6)', y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-xl glass-card border border-surface-glassBorder font-semibold text-lg"
            whileHover={{ scale: 1.08, borderColor: 'rgba(167, 139, 250, 0.5)', boxShadow: '0 0 30px -8px rgba(167, 139, 250, 0.4)', y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/Vaishnavi_Pawar_Resume.pdf"
            download
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 30px rgba(139,92,246,0.7)',
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download CV
          </motion.a>
        </motion.div>
        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          variants={item}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:border-accent-primary/50"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card hover:border-accent-primary/50"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="order-1 md:order-2 flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute -inset-6 bg-accent-primary/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={avatarSrc}
          alt={name}
          onError={() => setAvatarSrc('/avatar-placeholder.svg')}
          className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-surface-glassBorder shadow-glow"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
