import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { portfolioData, activities, languages } from '../../data/portfolioData'

export default function About() {
  const { summary } = portfolioData

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="A brief introduction" />
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: '0 0 40px -10px rgba(167, 139, 250, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-accent-primary font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">👋</span>
                  Summary
                </h3>
                <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                  {summary.map((para, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      {para}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-6">
                <h3 className="text-accent-primary font-semibold text-base mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  Activities
                </h3>
                <ul className="space-y-2.5 text-gray-300 text-sm">
                  {activities.map((a, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <span className="text-accent-primary mt-0.5">•</span>
                      <span>{a}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-6">
                <h3 className="text-accent-primary font-semibold text-base mb-3 flex items-center gap-2">
                  <span className="text-xl">🌍</span>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-accent-muted/20 text-accent-secondary text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(167, 139, 250, 0.3)' }}
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
