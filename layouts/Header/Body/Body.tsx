import styles from './Body.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from '@image'
import { Github, Instagram, LinkedIn, YouTube } from '@icon'
import { imageHeader, neoJausText } from '@image-links'
import { youtube, github, linkedin, instagram } from '@links'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'
import { MutableRefObject, useEffect, useRef } from 'react'

interface BlockProps {
  textRef: string
  children: JSX.Element
  className: string
  _ref: MutableRefObject<HTMLDivElement | null>
}

function Block({ textRef, children, className, _ref }: BlockProps) {
  const { t } = useTranslation('header')

  return (
    <div ref={_ref} className={`${className} ${styles.block}`}>
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
  className: string
  _ref: MutableRefObject<HTMLDivElement | null>
}

function LeftBlock({ viewMode, _ref, className }: LeftBlockProps) {
  return (
    <Block
      _ref={_ref}
      className={`${styles.body_left} ${className} ${
        styles[`body_left_${viewMode}`]
      }`}
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
  const { animate } = useAnimationsScroll()
  const leftBlockRef = useRef<HTMLDivElement | null>(null)
  const leftMobileBlockRef = useRef<HTMLDivElement | null>(null)
  const rightBlockRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: leftBlockRef.current,
          screenPercentage: 0.4,
          notAppearClass: styles.notBlockLeft,
        },
        {
          element: leftMobileBlockRef.current,
          screenPercentage: 0.4,
          notAppearClass: styles.notBlockLeft,
        },
        {
          element: rightBlockRef.current,
          screenPercentage: 0.4,
          notAppearClass: styles.notBlockRight,
        },
        {
          element: imageRef.current,
          screenPercentage: 0.4,
          notAppearClass: styles.notImage,
        },
      ],
    })
  }, [])

  return (
    <div className={styles.body}>
      <LeftBlock
        className={styles.notBlockLeft}
        _ref={leftBlockRef}
        viewMode="pc"
      />
      <div
        ref={imageRef}
        className={`${styles.body_center} ${styles.notImage}`}
      >
        <Image
          src={imageHeader}
          alt="Rodrigo Terán"
          width={924}
          height={800}
          priority
        />
      </div>
      <LeftBlock
        className={styles.notBlockLeft}
        _ref={leftMobileBlockRef}
        viewMode="mobile"
      />
      <Block
        _ref={rightBlockRef}
        className={`${styles.body_right} ${styles.notBlockRight}`}
        textRef="right-description"
      >
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
