import styles from './Path.module.scss'
import { experienceStyles, IExperience, IParagraph } from './coords.styles'
import Image from '@image'
import useTranslation from 'next-translate/useTranslation'
import { carsLongPath } from '@image-links'

const DIMENSION_X = 1776
const DIMENSION_Y = 1569.6

export default function Path() {
  const { t } = useTranslation('career')

  return (
    <div
      className={styles.path}
      style={{
        height: `${DIMENSION_Y}px`,
      }}
    >
      <div
        style={{
          width: `${DIMENSION_X}px`,
          height: `${DIMENSION_Y}px`,
        }}
        className={styles.path_image}
      >
        <Image width={DIMENSION_X} height={DIMENSION_Y} src={carsLongPath} />
      </div>

      {experienceStyles.map((element: IExperience, index: number) => {
        return (
          <div
            key={index}
            className={styles.row}
            extra-css={`tag-row-${index}`}
            style={element.row.styles}
          >
            <div
              className={styles.display}
              style={element.display.styles}
              extra-css={`tag-id-${index}`}
            >
              <div className={styles.display_img}>
                <Image
                  width={306}
                  height={198}
                  src={element.display.src}
                  alt={t(element.title.text)}
                />
              </div>
              <div className={styles.display_text}>
                {t(element.display.text)}
              </div>
            </div>

            <div
              className={styles.title_wrapper}
              style={element.title.styles}
              extra-css={`tag-id-${index}`}
            >
              <div className={styles.title}>
                <div className={styles.title_stick}></div>
                <div className={styles.title_sign}>{t(element.title.text)}</div>
              </div>
            </div>

            <div
              className={styles.car}
              style={element.car.styles}
              extra-css={`tag-id-${index}`}
            >
              <Image
                width={85}
                height={99}
                src={element.car.src}
                alt={t(element.title.text)}
              />
            </div>

            {element.paragraphs.map((paragraph: IParagraph, pIndex: number) => {
              return (
                <div
                  className={styles.paragraph}
                  style={paragraph.styles}
                  key={pIndex}
                  extra-css={`tag-id-${index}`}
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
