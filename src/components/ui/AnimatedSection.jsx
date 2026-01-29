import { motion } from 'framer-motion'

const slideVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-16 md:py-24 px-4 md:px-8 lg:px-16 scroll-mt-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={slideVariants}
    >
      {children}
    </motion.section>
  )
}
