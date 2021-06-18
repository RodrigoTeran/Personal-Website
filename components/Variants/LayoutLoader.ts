export const svgPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
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
    transition: { type: "tween", duration: 0.75 },
  },
};

export const infoVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.3, delay: 3.5 },
  },
  exit: {
    opacity: 0,
    scaleX: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};

export const h1Variants = {
  hidden: {
    width: 23,
    opacity: 1
  },
  visible: {
    width: 220,
    opacity: 1,
    transition: { type: "tween", duration: 1, delay: 3.5 },
  },
  exit: {
    width: 23,
    opacity: 0,
    transition: { type: "tween", duration: 0.75 },
  },
};
