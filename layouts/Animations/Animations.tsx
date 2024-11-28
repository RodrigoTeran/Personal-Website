// Modules
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import styles from './Animations.module.scss'
import { AppContext } from '@app'

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

export const svgVariants = {
  hidden: {
    fill: '#00000000',
  },
  visible: {
    fill: '#43f7d58c',
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
  exit: {
    fill: '#00000000',
    transition: {
      duration: 1,
      delay: 0,
    },
  },
}

export const svgPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      delay: 0.25,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 1,
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
type Props = {
  children: any
}

export default function LayoutAnimation({ children }: Props) {
  const { isLayoutAnimationOpen, setIsLayoutAnimationOpen } =
    useContext(AppContext)
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (setIsLayoutAnimationOpen) setIsLayoutAnimationOpen(false)
      clearTimeout(timeOut)
    }, 3000)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {isLayoutAnimationOpen ? (
        <motion.div
          exit="exit"
          key="loader-layout"
          initial="hidden"
          animate="visible"
          variants={loaderVariants}
          className={styles.loader}
        >
          <div>HOLA :D</div>
        </motion.div>
      ) : (
        <motion.div
          variants={fadeVariants}
          exit="exit"
          key="layout"
          initial="hidden"
          animate="visible"
          className={styles.wrapper}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
