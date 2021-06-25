export const layoutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      ease: "easeInOut",
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .5,
      ease: "easeInOut",
      delay: 0,
    },
  },
};
