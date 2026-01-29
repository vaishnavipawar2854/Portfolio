import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { achievements } from '../../data/portfolioData'

const icon = (path) => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
)

export default function Achievements() {
  const { publications, awards, certifications } = achievements

  return (
    <section id="achievements" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Publications, awards & certifications" />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, staggerChildren: 0.05 }}
        >
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
            <GlassCard className="p-4">
              <h3 className="text-accent-primary font-semibold text-sm mb-2.5 flex items-center gap-2">
                {icon("M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253")}
                Publications
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                {publications.map((p, i) => (
                  <li key={i} className="space-y-0.5">
                    <p className="font-medium text-white/90">{p.title}</p>
                    <p className="text-gray-500">{p.journal}</p>
                    <p className="text-accent-primary/80">{p.date}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }}>
            <GlassCard className="p-4">
              <h3 className="text-accent-primary font-semibold text-sm mb-2.5 flex items-center gap-2">
                {icon("M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z")}
                Awards
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {awards.map((a, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-accent-primary mt-0.5">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.1 }} className="sm:col-span-2 lg:col-span-1">
            <GlassCard className="p-4">
              <h3 className="text-accent-primary font-semibold text-sm mb-2.5 flex items-center gap-2">
                {icon("M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z")}
                Certifications
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-accent-primary mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
