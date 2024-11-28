import { ComponentProps } from 'react'
import styles from './SectionTitle.module.scss'

type Props = ComponentProps<'h2'>

export default function SectionTitle({ children, ...props }: Props) {
  return (
    <div className={styles.h2_wrapper}>
      <h2 className={styles.h2} {...props}>
        {children}
      </h2>
      <div className={styles.h2_underline}></div>
    </div>
  )
}
