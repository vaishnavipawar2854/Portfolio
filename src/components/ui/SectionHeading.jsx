import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-8 md:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1.5 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">{subtitle}</p>
      )}
      <motion.div
        className="mt-3 w-12 h-0.5 bg-accent-primary rounded-full mx-auto shadow-glow-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ transformOrigin: 'center' }}
      />
    </motion.div>
  )
}
