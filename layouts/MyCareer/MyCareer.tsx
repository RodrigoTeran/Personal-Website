import Info from './Info/Info'
import Path from './Path/Path'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import { useRef, useContext, useEffect } from 'react'
import { AppContext } from '@app'
import styles from './MyCareer.module.scss'

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

  return (
    <section ref={myCareerRef} className={styles.section}>
      <Title>{t('title')}</Title>
      <Info />
      <Path />
    </section>
  )
}
