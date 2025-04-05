import { useEffect, useRef, useState } from 'react'
import { getTop } from '@lib/goto'

export type ArrayElement = {
  element: HTMLDivElement | Element | null
  notAppearClass: string
  screenPercentage: number // From bottom (top: 1, bottom: 0)
}

interface IuseAnimationsScroll {
  (): {
    animate: ({}: Params) => void
  }
}

type Params = {
  componentsList: ArrayElement[]
  isBothSides?: boolean // Reload animation
  isClassesReverse?: boolean // Instead of removing... adding class
}

export const useAnimationsScroll: IuseAnimationsScroll = () => {
  const [canStartAnimation, setAanStartAnimation] = useState<boolean>(false)
  const componentsListRef = useRef<ArrayElement[]>([])
  const isBothSidesRef = useRef<boolean>(false)
  const isClassesReverseRef = useRef<boolean>(false)

  useEffect(() => {
    if (!canStartAnimation) return

    if (!isClassesReverseRef.current) {
      addClasses()
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [canStartAnimation])
  const animate = ({
    componentsList,
    isBothSides = false,
    isClassesReverse = false,
  }: Params): void => {
    setAanStartAnimation(true)
    componentsListRef.current = componentsList
    isBothSidesRef.current = isBothSides
    isClassesReverseRef.current = isClassesReverse
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
            if (isClassesReverseRef.current) {
              // Remove class notAppear
              htmlElement.classList.remove(notAppearClass)
            } else {
              // Add class notAppear
              htmlElement.classList.add(notAppearClass)
            }
          }
          continue
        }
        // Element is visible
        if (isClassesReverseRef.current) {
          // Add class notAppear
          htmlElement.classList.add(notAppearClass)
        } else {
          // Remove class notAppear
          htmlElement.classList.remove(notAppearClass)
        }
      }
    } catch {}
  }

  return {
    animate,
  }
}
