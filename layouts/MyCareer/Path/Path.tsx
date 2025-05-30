import styles from './Path.module.scss'
import { experienceStyles, IExperience, IParagraph } from './coords.styles'
import Image from '@image'
import useTranslation from 'next-translate/useTranslation'
import { useAnimationsScroll, ArrayElement } from '@hooks/useAnimationsScroll'
import { carsLongPath, carsSmallPath } from '@image-links'
import { useEffect, useRef } from 'react'

const DIMENSION_LONG_X = 1776
const DIMENSION_LONG_Y = 1569.6

const DIMENSION_SMALL_X = 183.1
const DIMENSION_SMALL_Y = 2009

export default function Path() {
  const { t } = useTranslation('career')
  const longPathRef = useRef<HTMLDivElement | null>(null)
  const { animate } = useAnimationsScroll()

  const getRowElements = (): ArrayElement[] => {
    const rows: ArrayElement[] = []

    for (let i = 0; i < experienceStyles.length; i++) {
      const rowTagId = `tag-row-${i}`
      const row: Element | null = document.querySelector(
        `[extra-css=${rowTagId}]`
      )

      if (row === null) continue

      rows.push({
        element: row,
        notAppearClass: styles.notRow,
        screenPercentage: 0.45,
      })
    }

    return rows
  }

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: longPathRef.current,
          screenPercentage: 0.45,
          notAppearClass: styles.notPath,
        },
        ...getRowElements(),
      ],
    })
  }, [])

  return (
    <div
      className={styles.path}
      style={{
        height: `${DIMENSION_LONG_Y}px`,
      }}
    >
      <div
        style={{
          width: `${DIMENSION_LONG_X}px`,
          height: `${DIMENSION_LONG_Y}px`,
        }}
        className={`${styles.path_image} ${styles.notPath}`}
        ref={longPathRef}
      >
        <Image
          width={DIMENSION_LONG_X}
          height={DIMENSION_LONG_Y}
          src={carsLongPath}
          priority
        />
      </div>
      <div
        style={{
          width: `${DIMENSION_SMALL_X}px`,
          height: `${DIMENSION_SMALL_Y}px`,
        }}
        className={styles.path_image_small}
      >
        <Image
          width={DIMENSION_SMALL_X}
          height={DIMENSION_SMALL_Y}
          src={carsSmallPath}
          priority
        />
      </div>
      {experienceStyles.map((element: IExperience, index: number) => {
        return (
          <div
            key={index}
            className={`${styles.row} ${styles.notRow}`}
            extra-css={`tag-row-${index}`}
            style={element.row.styles}
          >
            <div className={styles.display} style={element.display.styles}>
              <div className={styles.display_img}>
                <Image
                  width={306}
                  height={198}
                  src={element.display.src}
                  alt={t(element.title.text)}
                  priority
                />
              </div>
              <div className={styles.display_text}>
                {t(element.display.text)}
              </div>
            </div>

            <div className={styles.title_wrapper} style={element.title.styles}>
              <div className={styles.title}>
                <div className={styles.title_stick}></div>
                <div className={styles.title_sign}>{t(element.title.text)}</div>
              </div>
            </div>

            <div className={styles.car} style={element.car.styles}>
              <Image
                width={85}
                height={99}
                src={element.car.src}
                alt={t(element.title.text)}
                priority
              />
            </div>

            {element.paragraphs.map((paragraph: IParagraph, pIndex: number) => {
              return (
                <div
                  className={styles.paragraph}
                  style={paragraph.styles}
                  key={pIndex}
                >
                  {t(paragraph.text)}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
