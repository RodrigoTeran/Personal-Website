import styles from './Entrepreneurship.module.scss'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import Image from '@image'
import Button from '@components/Button/Button'
import { RightArrow } from '@icon'
import { useRef, useContext, useEffect } from 'react'
import { AppContext } from '@app'
import { neoJausText, ytVideoPresentation } from '@image-links'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'

export default function Entrepreneurship() {
  const { refsDispatch } = useContext(AppContext)
  const { t } = useTranslation('entrepreneurship')
  const entrepreneurshipRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'entrepreneurship',
        ref: entrepreneurshipRef,
      },
    })
  }, [])

  const { animate } = useAnimationsScroll()

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: entrepreneurshipRef.current,
          screenPercentage: 0.5,
          notAppearClass: styles.notVisible,
        },
      ],
    })
  }, [])

  return (
    <section ref={entrepreneurshipRef} className={`${styles.section} ${styles.notVisible}`}>
      <Title orientation="right">{t('title')}</Title>
      <div className={styles.wrapper_title}>
        <h3>{t('subtitle')}</h3>
        <Image
          src={neoJausText}
          alt="NeoJaus"
          width={370}
          height={111}
          priority
        />
        <div className={styles.wrapper_video}>
          <div className={styles.wrapper_video_block_top}>
            <div className={styles.wrapper_video_block_top_solid}></div>
            <div className={styles.wrapper_video_block_top_points}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <iframe
            src={ytVideoPresentation}
            title="Rodrigo Terán"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className={styles.wrapper_video_block_bottom}>
            <div className={styles.wrapper_video_block_bottom_black}></div>
            <div className={styles.wrapper_video_block_bottom_lavender}></div>
          </div>
        </div>
        <div>
          <Button href='https://neojaus.com' text={t("cta")} className={styles.cta}>
            <RightArrow width={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
