import Info from './Info/Info'
import Path from './Path/Path'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import { useRef, useContext, useEffect } from 'react'
import { AppContext } from '@app'
import styles from './MyCareer.module.scss'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'

export default function MyCareer() {
  const { refsDispatch } = useContext(AppContext)
  const myCareerRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation('career')

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'my-career-info',
        ref: myCareerRef,
      },
    })
  }, [])

  const { animate } = useAnimationsScroll()

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: myCareerRef.current,
          screenPercentage: 0.5,
          notAppearClass: styles.notVisible,
        },
      ],
    })
  }, [])

  return (
    <section ref={myCareerRef} className={`${styles.section} ${styles.notVisible}`}>
      <Title>{t('title')}</Title>
      <Info />
      <Path />
    </section>
  )
}
