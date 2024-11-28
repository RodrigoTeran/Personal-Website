import styles from './AboutMe.module.scss'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import Card from './Card/Card'
import { shadowAboutMe } from '@image-links'
import Image from '@image'

export default function AboutMe() {
  const { t } = useTranslation('about-me')
  return (
    <section className={styles.section}>
      <Title>{t('title')}</Title>
      <div className={styles.cards}>
        <Card cardType="career">{t('card-1')}</Card>
        <Card cardType="entrepreneurship">{t('card-2')}</Card>
        <Card cardType="content-creation">{t('card-3')}</Card>
        <div className={styles.shadow}>
          <Image src={shadowAboutMe} width={735} height={364} />
        </div>
      </div>
    </section>
  )
}
