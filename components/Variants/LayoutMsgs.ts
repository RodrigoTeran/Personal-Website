export const layoutMsgs = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { type: "tween"},
  },
};
