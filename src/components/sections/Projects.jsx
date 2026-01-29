import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" subtitle="Things I've built" />
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden hover:shadow-glow-sm">
                {p.image && (
                  <div className="block relative overflow-hidden rounded-t-2xl">
                    {p.links?.live ? (
                      <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="block relative">
                        <motion.img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-48 object-cover object-top"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                          <span className="text-accent-primary text-sm font-medium">View live →</span>
                        </div>
                      </a>
                    ) : (
                      <motion.img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-48 object-cover object-top"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </div>
                )}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-gray-400 text-xs flex-1 mb-2 leading-relaxed line-clamp-2">{p.description}</p>
                  {p.features && p.features.length > 0 && (
                    <ul className="space-y-0.5 mb-2 text-xs text-gray-500">
                      {p.features.slice(0, 2).map((f, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-accent-primary shrink-0">•</span>
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-xs text-gray-500 mb-2">
                    <span className="text-accent-primary/80">Tech:</span> {p.tech.join(' · ')}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(p.tags || p.tech).slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-accent-muted/20 text-accent-secondary text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto pt-2 border-t border-surface-glassBorder">
                    {p.links?.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-accent-primary hover:underline inline-flex items-center gap-1"
                      >
                        Live
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-gray-400 hover:text-accent-primary hover:underline inline-flex items-center gap-1"
                      >
                        GitHub
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
