import styles from './Header.module.scss'
import Title from './Title/Title'
import CTA from './CTA/CTA'
import Body from './Body/Body'

export default function Header() {
  return (
    <header className={styles.header}>
      <Title />
      <Body />
      <CTA />
    </header>
  )
}
