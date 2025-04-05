import { JSX } from 'react'
import styles from './Common.module.scss'
import wrapperStyles from '@styles/wrappers/wrappers.module.scss'

interface Props {
  children: JSX.Element
}

export default function Common({ children }: Props) {
  return (
    <main className={`${styles.main} ${wrapperStyles.wrapper}`}>
      {children}
    </main>
  )
}
