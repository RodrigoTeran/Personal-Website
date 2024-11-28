import styles from './AboutMe.module.scss'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import Card from './Card/Card'
import { shadowAboutMe } from '@image-links'
import Image from '@image'
import { useRef } from 'react'

export default function AboutMe() {
  const { t } = useTranslation('about-me')
  const cardsRef = useRef<HTMLDivElement | null>(null)

  return (
    <section className={styles.section}>
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
          <Image src={shadowAboutMe} width={735} height={364} />
        </div>
      </div>
    </section>
  )
}
