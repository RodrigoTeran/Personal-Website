import styles from './Body.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from '@image'
import { Github, Instagram, LinkedIn, YouTube } from '@icon'
import { imageHeader, neoJausText } from '@image-links'
import { youtube, github, linkedin, instagram } from '@links'

interface BlockProps {
  textRef: string
  children: JSX.Element
  className: string
}

function Block({ textRef, children, className }: BlockProps) {
  const { t } = useTranslation('header')

  return (
    <div className={`${className} ${styles.block}`}>
      <div className={styles.block_text}>
        {t(textRef)
          .split(';')
          .map((value: string, index: number) => {
            return <div key={index}>{value}</div>
          })}
      </div>
      <div className={`${styles.block_dash}`}></div>
      <div>{children}</div>
    </div>
  )
}

interface LeftBlockProps {
  viewMode: 'pc' | 'mobile'
}

function LeftBlock({ viewMode }: LeftBlockProps) {
  return (
    <Block
      className={`${styles.body_left} ${styles[`body_left_${viewMode}`]}`}
      textRef="left-description"
    >
      <div className={styles.body_left_icons}>
        <a href={github} target="_blank" rel="noreferrer">
          <Github height={18} />
        </a>
        <a href={instagram} target="_blank" rel="noreferrer">
          <Instagram height={18} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <LinkedIn height={18} />
        </a>
        <a href={youtube} target="_blank" rel="noreferrer">
          <YouTube height={18} />
        </a>
      </div>
    </Block>
  )
}

export default function Body() {
  return (
    <div className={styles.body}>
      <LeftBlock viewMode="pc" />
      <div className={styles.body_center}>
        <Image
          src={imageHeader}
          alt="Rodrigo Terán"
          width={924}
          height={800}
          priority
        />
      </div>
      <LeftBlock viewMode="mobile" />
      <Block className={styles.body_right} textRef="right-description">
        <Image
          src={neoJausText}
          alt="NeoJaus"
          width={90}
          height={27}
          priority
        />
      </Block>
    </div>
  )
}
