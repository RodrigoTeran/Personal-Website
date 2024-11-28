import Button from '@components/Button/Button'
import styles from './CTA.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'
import { useEffect, useRef } from 'react'

export default function CTA() {
  const { t } = useTranslation('header')

  const { animate } = useAnimationsScroll()

  const ctaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: ctaRef.current,
          screenPercentage: 0.2,
          notAppearClass: styles.notCta,
        },
      ],
    })
  }, [])

  return (
    <div ref={ctaRef} className={`${styles.cta} ${styles.notCta}`}>
      <Button text={t('cta')} />
    </div>
  )
}
