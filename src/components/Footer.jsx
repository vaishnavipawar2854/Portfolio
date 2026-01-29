import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { name, contact } = portfolioData

  return (
    <motion.footer
      className="border-t border-surface-glassBorder py-5 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-accent-primary transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
