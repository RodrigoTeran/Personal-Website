export const svgPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: .5
    },
  },
};

export const loaderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", duration: 1.5, delay: .5 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

export const infoVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.3, delay: 2.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};
