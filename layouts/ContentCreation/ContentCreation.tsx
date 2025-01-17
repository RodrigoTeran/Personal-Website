import Title from '@components/SectionTitle/SectionTitle'
import styles from './ContentCreation.module.scss'
import { AppContext } from '@app'
import { useContext, useEffect, useRef } from 'react'
import useTranslation from 'next-translate/useTranslation'

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
    <section className={styles.section}>
      <Title orientation="left">{t('title')}</Title>
    </section>
  )
}

export default ContentCreation
