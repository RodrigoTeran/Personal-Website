import styles from './Button.module.scss'
import { ComponentProps } from 'react'
import { RightArrow } from '@icon'

interface Props {
  text: string
}

type LinkProps = ComponentProps<'a'>
type ButtonProps = ComponentProps<'button'>
type OverlapProps = LinkProps & ButtonProps & Props

export default function Button({
  text,
  children = null,
  href,
  className,
  ...props
}: OverlapProps) {
  if (href !== null && href !== undefined) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className={`${styles.button} ${className}`}
        {...props}
      >
        {children === null ? (
          <div>
            <RightArrow width={12} />
          </div>
        ) : (
          <div>{children}</div>
        )}
        <div>{text}</div>
      </a>
    )
  }

  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children !== null && <div>{children}</div>}
      <div>{text}</div>
    </button>
  )
}
