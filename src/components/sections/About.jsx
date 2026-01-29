import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { portfolioData, activities, languages } from '../../data/portfolioData'

export default function About() {
  const { summary } = portfolioData

  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="A brief introduction" />
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, staggerChildren: 0.05 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="md:col-span-2"
          >
            <GlassCard className="p-5">
              <h3 className="text-accent-primary font-semibold text-sm mb-2.5">Summary</h3>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                {summary.map((para, i) => (
                  <li key={i}>{para}</li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <GlassCard className="p-4">
              <h3 className="text-accent-primary font-semibold text-sm mb-2">Activities</h3>
              <ul className="space-y-1.5 text-gray-300 text-xs">
                {activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-accent-primary mt-0.5">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-4">
              <h3 className="text-accent-primary font-semibold text-sm mb-2">Languages</h3>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-accent-muted/20 text-accent-secondary text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
