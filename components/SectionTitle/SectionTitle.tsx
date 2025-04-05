import { ComponentProps } from 'react'
import styles from './SectionTitle.module.scss'

interface Props extends ComponentProps<'h2'> {
  orientation?: 'left' | 'right'
}

export default function SectionTitle({
  children,
  orientation = 'left',
  ...props
}: Props) {
  return (
    <div className={`${styles.h2_wrapper} ${styles[orientation]}`}>
      <h2 className={styles.h2} {...props}>
        {children}
      </h2>
      <div className={styles.h2_underline}></div>
    </div>
  )
}
