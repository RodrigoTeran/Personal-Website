import Info from './Info/Info'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'

export default function MyCareer() {
  const { t } = useTranslation('career')

  return (
    <section>
      <Title>{t('title')}</Title>
      <Info />
    </section>
  )
}
