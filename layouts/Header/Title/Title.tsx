import { useEffect, useRef } from 'react'
import styles from './Title.module.scss'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'

export default function Title() {
  const { animate } = useAnimationsScroll()

  const titleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: titleRef.current,
          screenPercentage: 0.4,
          notAppearClass: styles.notTitle,
        },
      ],
    })
  }, [])

  return (
    <div
      ref={titleRef}
      className={`${styles.title_wrapper} ${styles.notTitle}`}
    >
      <h1 className={styles.title}>
        Rodrigo Terán
        <br />
        Hernández
      </h1>
      <div className={styles.title_underline}></div>
    </div>
  )
}
