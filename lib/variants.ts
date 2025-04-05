export const fadeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0,
    },
  },
}

export const loaderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: 'tween', duration: 0.75, delay: 0.5 },
  },
}
export const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
}

export const elementVariants = {
  hidden: {
    scaleY: 0,
    originY: '100%',
    color: '#fff7f2',
  },
  visible: {
    scaleY: 1,
    originY: '100%',
    color: '#000',
    transition: { type: 'spring', stiffness: 200 },
  },
}
