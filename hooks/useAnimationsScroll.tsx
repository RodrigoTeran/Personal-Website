import { useEffect } from "react";
import { getTop } from "../functions/goTo";

export const useAnimationsScroll = (
  componentsList: Array<any>,
  screenPercentage: number,
  notAppearClass: string
) => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    try {
      for (var i = 0; i < componentsList.length; i++) {
        const top = getTop(componentsList[i].current);
        if (
          document.scrollingElement.scrollTop >=
          top - window.innerHeight * screenPercentage
        ) {
          // Remove class notAppear
          const htmlElement = componentsList[i].current;
          htmlElement.classList.remove(notAppearClass);
        }
      }
    } catch {}
  };
};
