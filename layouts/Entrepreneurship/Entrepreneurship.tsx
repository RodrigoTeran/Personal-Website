import styles from './Entrepreneurship.module.scss'
import Title from '@components/SectionTitle/SectionTitle'
import useTranslation from 'next-translate/useTranslation'
import Image from '@image'
import { useRef, useContext, useEffect } from 'react'
import { AppContext } from '@app'

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

  return (
    <section ref={entrepreneurshipRef} className={styles.section}>
      <Title orientation="right">{t('title')}</Title>
      <div className={styles.wrapper_title}>
        <h3>{t('subtitle')}</h3>
        <Image
          src="/images/neojaus-t.webp"
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
            src="https://www.youtube.com/embed/xuz2mG56gqw?si=kQfnOg78YBBzH1XI"
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
      </div>
    </section>
  )
}
