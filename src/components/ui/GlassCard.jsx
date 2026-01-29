import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 shadow-glass ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { scale: 1.02, boxShadow: '0 0 40px -10px rgba(167, 139, 250, 0.25)' } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
