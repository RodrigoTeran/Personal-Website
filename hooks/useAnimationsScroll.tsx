import { Dispatch, SetStateAction, useEffect } from "react";
import { getTop } from "../functions/goTo";

export const useAnimationsScroll = (
  componentsList: Array<any>,
  screenPercentage: number,
  notAppearClass: string
) => {
  useEffect(() => {
    addClasses();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const addClasses = () => {
    for (var i = 0; i < componentsList.length; i++) {
      const htmlElement = componentsList[i].current;
      htmlElement.classList.add(notAppearClass);
      htmlElement.classList.add("notAppearing_transitions");
    }
  };

  const handleScroll = () => {
    try {
      for (var i = 0; i < componentsList.length; i++) {
        const top = getTop(componentsList[i].current);
        const htmlElement = componentsList[i].current;
        if (
          document.scrollingElement.scrollTop >=
          top - window.innerHeight * screenPercentage
        ) {
          // Remove class notAppear
          htmlElement.classList.remove(notAppearClass);
        }
      }
    } catch {}
  };
};

export const useAnimationsScrollWithState = (
  setAnimation: Dispatch<SetStateAction<boolean>>,
  screenPercentage: number,
  componentRef: any
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
      const top = getTop(componentRef.current);
      if (
        document.scrollingElement.scrollTop >=
        top - window.innerHeight * screenPercentage
      ) {
        setAnimation(true);
      }
    } catch {}
  };
};
