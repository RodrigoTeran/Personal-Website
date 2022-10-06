export const getTop = (component: any): number => {
  // It computes the distance that exista bewteen a component and the top of the whole website
  try {
    if (document.scrollingElement) {
      return parseInt(
        component.getBoundingClientRect().top +
          document.scrollingElement.scrollTop
      );
    };
    
    return 0;
  } catch {
    // Error
    return 0;
  }
};
export const goto = (_ref: any): void => {
  /**
   * Is substract 100 beacuse that is the height of the nav
   * So, the nav doesnt interfer
   */
  const top = getTop(_ref.current) - 100;
  // No Error
  window.scroll({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};
