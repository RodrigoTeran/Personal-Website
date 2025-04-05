import styles from './Header.module.scss'
import Title from './Title/Title'
import CTA from './CTA/CTA'
import Body from './Body/Body'
import More from './More/More'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '@app'

export default function Header() {
  const { refsDispatch } = useContext(AppContext)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'header',
        ref: headerRef,
      },
    })
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <Title />
      <Body />
      <CTA />
      <More />
    </header>
  )
}
