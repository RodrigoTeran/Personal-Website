import { useEffect, useRef, useState } from 'react'

export type ArrayElement = {
  element: HTMLDivElement | Element | null
  notAppearClass: string
  screenPercentage: number // From bottom (top: 1, bottom: 0)
}

interface IuseAnimationsScroll {
  (): {
    animate: ({ componentsList, isBothSides }: Params) => void
  }
}

type Params = {
  componentsList: ArrayElement[]
  isBothSides?: boolean // Reload animation
}

const getTop = (component: any): number => {
  try {
    if (document.scrollingElement) {
      return parseInt(
        component.getBoundingClientRect().top +
          document.scrollingElement.scrollTop
      )
    }

    return 0
  } catch {
    return 0
  }
}

export const useAnimationsScroll: IuseAnimationsScroll = () => {
  const [canStartAnimation, setAanStartAnimation] = useState<boolean>(false)
  const componentsListRef = useRef<ArrayElement[]>([])
  const isBothSidesRef = useRef<boolean>(false)

  useEffect(() => {
    if (!canStartAnimation) return

    addClasses()
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [canStartAnimation])
  const animate = ({ componentsList, isBothSides = false }: Params): void => {
    setAanStartAnimation(true)
    componentsListRef.current = componentsList
    isBothSidesRef.current = isBothSides
  }
  const addClasses = () => {
    try {
      for (let i = 0; i < componentsListRef.current.length; i++) {
        const { element, notAppearClass }: ArrayElement =
          componentsListRef.current[i]
        const htmlElement = element

        if (!htmlElement) continue
        htmlElement.classList.add(notAppearClass)
      }
    } catch {}
  }

  const handleScroll = () => {
    try {
      for (let i = 0; i < componentsListRef.current.length; i++) {
        const { element, notAppearClass, screenPercentage }: ArrayElement =
          componentsListRef.current[i]

        const top = getTop(element)
        const htmlElement = element
        let percentage: number = 1 - screenPercentage
        if (0 > percentage || percentage > 1) {
          percentage = 0.5
        }

        if (!htmlElement) continue

        if (
          !(
            document.scrollingElement &&
            document.scrollingElement.scrollTop >=
              top - window.innerHeight * percentage
          )
        ) {
          // Element is not visible
          if (isBothSidesRef.current) {
            // Add class notAppear
            htmlElement.classList.add(notAppearClass)
          }
          continue
        }
        // Element is visible
        // Remove class notAppear
        htmlElement.classList.remove(notAppearClass)
      }
    } catch {}
  }

  return {
    animate,
  }
}
