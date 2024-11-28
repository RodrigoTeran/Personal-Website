import styles from './Title.module.scss'
import { motion } from 'framer-motion'
import { containerVariants, elementVariants } from '@lib/variants'

export default function Title() {
  const title1 = 'Rodrigo Terán'
  const title2 = 'Hernández'

  return (
    <div className={`${styles.title_wrapper}`}>
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        <div>
          {title1.split('').map((char, index) => {
            if (index === 7) {
              return <br key={index} className={styles.brakeTitle} />
            }

            return (
              <motion.span
                whileHover={{ y: -30 }}
                variants={elementVariants}
                key={index}
                style={{
                  marginLeft: index == 8 ? '20px' : '',
                }}
              >
                {char}
              </motion.span>
            )
          })}
        </div>
        <div>
          {title2.split('').map((char, index) => {
            return (
              <motion.span
                whileHover={{ y: -30 }}
                variants={elementVariants}
                key={index}
              >
                {char}
              </motion.span>
            )
          })}
        </div>
      </motion.h1>
      <div className={styles.title_underline}></div>
    </div>
  )
}
