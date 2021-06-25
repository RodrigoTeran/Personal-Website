export const svgPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0,
    },
  },
};

export const loaderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", duration: 1.5, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.75, delay: .5 },
  },
};