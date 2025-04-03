import Title from '@components/SectionTitle/SectionTitle'
import styles from './ContentCreation.module.scss'
import stylesWrapper from '@styles/wrappers/wrappers.module.scss'
import { AppContext } from '@app'
import Image from '@image'
import {
  youtube,
  instagram,
  linkedin,
  blog,
  internships,
  interview,
  animation,
} from '@links'
import { LinkedIn, YouTube, Instagram, Wave, RightArrow } from '@icon'
import { Fragment, useContext, useEffect, useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Button from '@components/Button/Button'
import { blogLogo, socialMediaMe, ytAnimation, ytInternships, ytInterview, ytLogo } from '@image-links'

interface CardProps {
  img: string
  text: string
  cta: string
  href: string
}

function Card({ img, text, cta, href }: CardProps) {
  const { t } = useTranslation('content-creation')

  return (
    <div className={styles.card}>
      <Image src={img} width={308} height={173} priority />
      <div className={styles.card_inner}>
        <div className={styles.card_inner_text}>
          {t(text)
            .split(';')
            .map((element: string, index: number) => {
              const length = t(text).split(';').length

              return (
                <Fragment key={index}>
                  <div>{element}</div>
                  {index < length - 1 && <br />}
                </Fragment>
              )
            })}
        </div>
        <Button href={href} text={t(cta)} className={styles.card_inner_cta}>
          <RightArrow width={20} />
        </Button>
      </div>
    </div>
  )
}

function ContentCreation() {
  const { refsDispatch } = useContext(AppContext)
  const contentCreationRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation('content-creation')

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'content-creation',
        ref: contentCreationRef,
      },
    })
  }, [])

  return (
    <section ref={contentCreationRef} className={styles.section}>
      <Title orientation="left">{t('title')}</Title>
      <div className={styles.wrapper_top}>
        <div className={styles.wrapper_top_card}>
          <div className={styles.wrapper_top_card_info}>{t('card')}</div>
          <div className={styles.wrapper_top_card_ctas}>
            <a
              href={youtube}
              target="_blank"
              rel="noreferrer"
              className={styles.wrapper_top_card_ctas_yt}
            >
              <Image src={ytLogo} width={35} height={24} priority />
              YouTube
            </a>
            <a
              href={blog}
              target="_blank"
              rel="noreferrer"
              className={styles.wrapper_top_card_ctas_blog}
            >
              <Image
                src={blogLogo}
                width={27}
                height={19}
                priority
              />
              Blog
            </a>
          </div>
          <div className={styles.wrapper_top_card_dashed}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.wrapper_top_me}>
          <Image
            src={socialMediaMe}
            width={231}
            height={231}
            priority
          />
          <div className={styles.wrapper_top_me_links}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <LinkedIn />
            </a>
            <a href={youtube} target="_blank" rel="noreferrer">
              <YouTube />
            </a>
            <a href={instagram} target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_stories}>
        <Wave className={styles.wrapper_stories_wave} />
        <div
          className={`${stylesWrapper.wrapper} ${styles.wrapper_stories_inner}`}
        >
          <div className={styles.wrapper_stories_inner_title}>
            {t('stories')}
          </div>
          <div className={styles.cards}>
            <Card
              img={ytInternships}
              text="card-1"
              cta="cta-1"
              href={internships}
            />
            <Card
              img={ytInterview}
              text="card-2"
              cta="cta-2"
              href={interview}
            />
            <Card
              img={ytAnimation}
              text="card-3"
              cta="cta-3"
              href={animation}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCreation
