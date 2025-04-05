import styles from './AboutMe.module.scss'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import Card from './Card/Card'
import { shadowAboutMe } from '@image-links'
import Image from '@image'
import { useRef, useContext, useEffect } from 'react'
import { AppContext } from '@app'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'

export default function AboutMe() {
  const { refsDispatch } = useContext(AppContext)
  const { t } = useTranslation('about-me')
  const aboutMeRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'about-me',
        ref: aboutMeRef,
      },
    })
  }, [])

  const { animate } = useAnimationsScroll()

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: aboutMeRef.current,
          screenPercentage: 0.2,
          notAppearClass: styles.notVisible,
        },
      ],
    })
  }, [])

  return (
    <section ref={aboutMeRef} className={`${styles.section} ${styles.notVisible}`}>
      <Title>{t('title')}</Title>
      <div ref={cardsRef} className={styles.cards}>
        <Card cardsRef={cardsRef} cardType="career">
          {t('card-1')}
        </Card>
        <Card cardsRef={cardsRef} cardType="entrepreneurship">
          {t('card-2')}
        </Card>
        <Card cardsRef={cardsRef} cardType="content-creation">
          {t('card-3')}
        </Card>
        <div className={styles.shadow}>
          <Image src={shadowAboutMe} width={735} height={364} priority />
        </div>
      </div>
    </section>
  )
}
