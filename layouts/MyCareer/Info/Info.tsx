import Image from '@image'
import { startImage, shadowCar } from '@image-links'
import styles from './Info.module.scss'
import useTranslation from 'next-translate/useTranslation'

export default function Info() {
  const { t } = useTranslation('career')

  return (
    <div className={styles.info}>
      <Image priority src={startImage} width={440} height={96.5} alt="Start" />
      <p css-attr="first">{t('p-1')}</p>
      <p>{t('p-2')}</p>
      <p>{t('p-3')}</p>
      <p css-attr="last">{t('p-4')}</p>
      <Image priority src={shadowCar} width={218} height={172} alt="The start" />
    </div>
  )
}
