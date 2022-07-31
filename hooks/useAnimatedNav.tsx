// Modules
import { useEffect, useRef, useState } from "react";

interface AnimetedNav {
  ({
    sensible,
    minimumTop,
  }: {
    sensible?: number;
    minimumTop?: number;
  }): boolean;
}

export const useAnimatedNav: AnimetedNav = ({
  sensible = 10,
  minimumTop = 50,
}) => {
  const [openNav, setOpenNav] = useState<boolean>(true);
  const isScrollGoingDown = useRef<boolean>(false);
  const lastPositionScroll = useRef<number>(0);
  const scoreUp = useRef<number>(0);
  const scoreDown = useRef<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (): void => {
    if (
      document.scrollingElement &&
      document.scrollingElement.scrollTop >= lastPositionScroll.current
    ) {
      /**
       * The scroll bar goes down
       */
      isScrollGoingDown.current = true;
      /**
       * It adds points to the scoreDown ref and sets scoreUp to 0
       */
      scoreDown.current = scoreDown.current + 1;
      scoreUp.current = 0;
    } else {
      /**
       * The scroll bar goes up
       */
      isScrollGoingDown.current = false;
      /**
       * It adds points to the scoreUp ref and sets scoreDown to 0
       */
      scoreDown.current = 0;
      scoreUp.current = scoreUp.current + 1;
    }
    /**
     * The lastPositionScroll is updated
     */
    lastPositionScroll.current = document.scrollingElement
      ? document.scrollingElement.scrollTop
      : 0;

    if (
      document.scrollingElement &&
      document.scrollingElement.scrollTop <= minimumTop
    ) {
      /**
       * We have a minimum top, so no matter how much scoreDown and scoreUp
       * refs values are... from 0 to this minimun top the nav is going
       * to be open... so setOpenNav(true)
       */
      setOpenNav(true);
    } else {
      /**
       * If we are going down and the scoreDown is bigger than our sensibility
       * Then the nav hides... so setOpenNav(false)
       */
      if (isScrollGoingDown.current && scoreDown.current >= sensible) {
        setOpenNav(false);
      } else if (!isScrollGoingDown.current && scoreUp.current >= sensible) {
        /**
         * If we are going up and the scoreUp is bigger than our sensibility
         * Then the nav opens... so setOpenNav(true)
         */
        setOpenNav(true);
      }
    }
  };
  return openNav;
};