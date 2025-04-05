import {
  ComponentProps,
  CSSProperties,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react'
import styles from './Card.module.scss'
import { Plus } from '@icon'
import { AppContext } from '@app'
import { Refs } from '@store/refs/refs.types'
import { goto } from '@lib/goto'

type CARDS = 'career' | 'entrepreneurship' | 'content-creation'
const cardTypesMapRef = new Map<CARDS, Refs>()
cardTypesMapRef.set('career', 'my-career-info')
cardTypesMapRef.set('entrepreneurship', 'entrepreneurship')
cardTypesMapRef.set('content-creation', 'content-creation')

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
  cardsRef: MutableRefObject<HTMLDivElement | null>
}

type Props = ComponentProps<'button'> & CardProps

export default function Card({
  children,
  cardType,
  cardsRef,
  ...props
}: Props) {
  const { refsState } = useContext(AppContext)
  const [x, setX] = useState<number>(-100)
  const [y, setY] = useState<number>(-100)
  const refOfCard = useRef<HTMLDivElement | null>(null)

  const mouseLeave = (): void => {
    setX(-100)
    setY(-100)
  }

  const mousemove = (e: MouseEvent): void => {
    if (refOfCard.current === null) return
    if (cardsRef.current === null) return

    const xParent = cardsRef.current.offsetLeft
    const yParent = cardsRef.current.offsetTop

    const x = e.pageX - xParent - refOfCard.current.offsetLeft
    const y = e.pageY - yParent - refOfCard.current.offsetTop

    setX(x - 100)
    setY(y - 100)
  }

  const addListeners = (): void => {
    if (refOfCard.current === null) return
    if (cardsRef.current === null) return
    refOfCard.current.addEventListener('mousemove', mousemove)
    refOfCard.current.addEventListener('mouseleave', mouseLeave)
  }
  const removeListeners = (): void => {
    if (refOfCard.current === null) return
    if (cardsRef.current === null) return
    refOfCard.current.removeEventListener('mousemove', mousemove)
    refOfCard.current.removeEventListener('mouseleave', mouseLeave)
  }

  useEffect(() => {
    addListeners()

    return () => {
      removeListeners()
    }
  }, [refOfCard.current])

  const getStyles = (): CSSProperties => {
    const myCoords: CSSProperties | undefined = coords.get(cardType)
    if (myCoords === undefined) return {}
    return myCoords
  }

  const onClick = (): void => {
    const refType: Refs | undefined = cardTypesMapRef.get(cardType)
    if (refType === undefined) return
    const refElement: MutableRefObject<any> | undefined = refsState.get(refType)
    if (refElement === undefined) return
    goto(refElement)
  }

  return (
    <div
      className={styles.card_wrapper}
      css-attr={cardType}
      style={getStyles()}
      ref={refOfCard}
    >
      <div className={styles.card_shadow}></div>
      <button {...props} className={styles.card} onClick={onClick}>
        <div
          style={{
            left: `${x}px`,
            top: `${y}px`,
          }}
          className={styles.selector}
        ></div>
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
