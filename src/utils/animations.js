export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export const glassCardHover = {
  rest: { scale: 1, boxShadow: '0 0 20px -5px rgba(167, 139, 250, 0.1)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 40px -10px rgba(167, 139, 250, 0.35)',
    transition: { duration: 0.3 },
  },
}

export const navLinkHover = {
  rest: { scale: 1, color: 'rgb(209, 213, 219)' },
  hover: { scale: 1.05, color: 'rgb(167, 139, 250)' },
}

export const sectionVariants = {
  offscreen: { opacity: 0, x: 80 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
}
