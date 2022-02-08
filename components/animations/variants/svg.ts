export const svgVariants = {
  hidden: {
    fill: "#00000000",
  },
  visible: {
    fill: "#43f7d58c",
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
  exit: {
    fill: "#00000000",
    transition: {
      duration: 1,
      delay: 0,
    },
  },
};

export const svgPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 1,
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
    transition: { type: "tween", duration: 1, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.75, delay: 0.5 },
  },
};
