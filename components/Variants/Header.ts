export const buttonVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 200,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

export const buttonsContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "tween", delay: 0.5, duration: 1.2 },
  },
};
