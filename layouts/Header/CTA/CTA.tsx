import Button from '@components/Button/Button'
import styles from './CTA.module.scss'
import useTranslation from 'next-translate/useTranslation'

export default function CTA() {
  const { t } = useTranslation('header')

  return (
    <div className={styles.cta}>
      <Button text={t('cta')} />
    </div>
  )
}
