import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { skills, skillLevels } from '../../data/portfolioData'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '</>' },
  { key: 'styling', label: 'Styling & UI', icon: '◆' },
  { key: 'database', label: 'Database', icon: '▣' },
  { key: 'tools', label: 'Tools & Deploy', icon: '⚙' },
  { key: 'soft', label: 'Soft Skills', icon: '★' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, staggerChildren: 0.05 }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
            >
              <GlassCard className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent-primary text-lg">{cat.icon}</span>
                  <h3 className="text-accent-primary font-semibold text-sm">{cat.label}</h3>
                </div>
                {cat.key === 'soft' ? (
                  <div className="flex flex-wrap gap-1.5">
                    {skills[cat.key].map((s, i) => (
                      <motion.span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-accent-muted/20 text-accent-secondary text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-1.5">
                    {skills[cat.key].map((s) => {
                      const pct = skillLevels[s] ?? 85
                      return (
                        <li key={s} className="space-y-0.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-300">{s}</span>
                            {skillLevels[s] != null && (
                              <span className="text-accent-primary font-medium">{pct}%</span>
                            )}
                          </div>
                          {skillLevels[s] != null && (
                            <div className="h-1.5 rounded-full bg-dark-600 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-glow"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.03 }}
                              />
                            </div>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
