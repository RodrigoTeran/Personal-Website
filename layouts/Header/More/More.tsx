import styles from './More.module.scss'
import { ChevronDown } from '@icon'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'
import { useEffect, useRef, useState, useContext } from 'react'
import { goto } from '@lib/goto'
import { AppContext } from '@app'

export default function More() {
  const { refsState } = useContext(AppContext)
  const { animate: animate1 } = useAnimationsScroll()
  const { animate: animat2 } = useAnimationsScroll()
  const [hasBeenPressed, setHasBeenPressed] = useState<boolean>(false)
  const moreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate1({
      componentsList: [
        {
          element: moreRef.current,
          screenPercentage: 0,
          notAppearClass: styles.notMore,
        },
      ],
    })
    animat2({
      componentsList: [
        {
          element: moreRef.current,
          screenPercentage: 0.3,
          notAppearClass: styles.notAnymore,
        },
      ],
      isClassesReverse: true,
    })
  }, [])

  const goToNextSection = (): void => {
    setHasBeenPressed(true)
    goto(refsState.get('about-me'))
  }

  return (
    <div
      onClick={goToNextSection}
      ref={moreRef}
      className={`${styles.more} ${styles.notMore} ${
        hasBeenPressed && styles.notAnymore
      }`}
    >
      <ChevronDown height={20} />
    </div>
  )
}
