export const getTop = (component: any): number => {
  try {
    if (document.scrollingElement) {
      return parseInt(
        component.getBoundingClientRect().top +
          document.scrollingElement.scrollTop
      )
    }

    return 0
  } catch {
    // Error
    return 0
  }
}

export const goto = (_ref: any): void => {
  const top = getTop(_ref.current) - 140
  window.scroll({
    top: top,
    left: 0,
    behavior: 'smooth',
  })
}
