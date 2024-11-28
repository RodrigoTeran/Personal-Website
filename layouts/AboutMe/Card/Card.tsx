import { ComponentProps, CSSProperties } from 'react'
import styles from './Card.module.scss'
import { Plus } from '@icon'

type CARDS = 'career' | 'entrepreneurship' | 'content-creation'

const coords = new Map<CARDS, CSSProperties>()
coords.set('career', {
  top: '100px',
  left: '30px',
  zIndex: 1,
})
coords.set('entrepreneurship', {
  top: '0px',
  right: '30px',
  zIndex: 2,
})
coords.set('content-creation', {
  top: '200px',
  right: '60px',
  zIndex: 3,
})

interface CardProps {
  cardType: CARDS
}

type Props = ComponentProps<'button'> & CardProps

export default function Card({ children, cardType, ...props }: Props) {
  const getStyles = (): CSSProperties => {
    const myCoords: CSSProperties | undefined = coords.get(cardType)
    if (myCoords === undefined) return {}
    return myCoords
  }

  return (
    <div
      className={styles.card_wrapper}
      css-attr={cardType}
      style={getStyles()}
    >
      <div className={styles.card_shadow}></div>
      <button {...props} className={styles.card}>
        <div className={styles.card_text}>
          {children
            ?.toLocaleString()
            .split(';')
            .map((value: string, index: number) => {
              return <div key={index}>{value}</div>
            })}
        </div>
        <Plus width={63} />
      </button>
    </div>
  )
}
