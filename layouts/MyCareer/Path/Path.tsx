import styles from './Path.module.scss'
import { experienceStyles, IExperience, IParagraph } from './coords.styles'
import Image from '@image'
import useTranslation from 'next-translate/useTranslation'

export default function Path() {
  const { t } = useTranslation('career')

  return (
    <div className={styles.path}>
      {experienceStyles.map((element: IExperience, index: number) => {
        return (
          <div key={index} className={styles.row}>
            <div className={styles.display} style={element.display.styles}>
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

            <div style={element.title.styles}>
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
              />
            </div>

            {element.paragraphs.map((paragraph: IParagraph, pIndex: number) => {
              return (
                <p
                  className={styles.paragraph}
                  style={paragraph.styles}
                  key={pIndex}
                >
                  {t(paragraph.text)}
                </p>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
