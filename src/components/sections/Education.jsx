import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { education } from '../../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic background" />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, staggerChildren: 0.15 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree + edu.period}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-accent-secondary text-base font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-accent-primary text-sm font-medium">{edu.period}</span>
                    {(edu.cgpa || edu.marks) && (
                      <span className="text-gray-400 text-sm">
                        {edu.cgpa ? `CGPA ${edu.cgpa}` : edu.marks}
                      </span>
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
