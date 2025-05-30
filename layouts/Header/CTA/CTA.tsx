import Button from '@components/Button/Button'
import styles from './CTA.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'
import { MutableRefObject, useContext, useEffect, useRef } from 'react'
import { AppContext } from '@app'
import { goto } from '@lib/goto'

export default function CTA() {
  const { t } = useTranslation('header')
  const { refsState } = useContext(AppContext);

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

  const onClickCTA = (): void => {
    const refElement: MutableRefObject<any> | undefined = refsState.get("contact-me");
    if (refElement === undefined) return
    goto(refElement)
  }

  return (
    <div ref={ctaRef} className={`${styles.cta} ${styles.notCta}`}>
      <Button onClick={onClickCTA} text={t('cta')} />
    </div>
  )
}
