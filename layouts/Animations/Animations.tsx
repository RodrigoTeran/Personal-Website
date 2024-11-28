// Modules
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import styles from './Animations.module.scss'
import { AppContext } from '@app'
import { fadeVariants, loaderVariants } from '@lib/variants'
import Image from '@image'
import { MILISECONDS_LAYOUT_ANIMATION } from '@rules'
import { logo } from '@image-links'

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
    }, MILISECONDS_LAYOUT_ANIMATION)
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
          <Image
            src={logo}
            alt="Rodrigo Terán"
            width={100}
            height={100}
            priority
          />
          <h1>Rodrigo Terán</h1>
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
