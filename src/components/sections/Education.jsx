import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { education } from '../../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic background" />
        <motion.div
          className="grid gap-3 sm:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, staggerChildren: 0.06 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree + edu.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <GlassCard className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                  <div>
                    <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                    <p className="text-accent-secondary text-sm font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.location}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5">
                    <span className="text-accent-primary text-xs font-medium">{edu.period}</span>
                    {(edu.cgpa || edu.marks) && (
                      <span className="text-gray-400 text-xs">
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
