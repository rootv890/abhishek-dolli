const container = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Reduced from 0.5 for a quicker cascade
      duration: 0.5, // Total duration of the show animation
      ease: "easeInOut", // Use an easing function for smooth transitions
      type: 'tween',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Adjust the duration of the item's entrance
      ease: "easeInOut", // Use an easing function for smooth transitions
    },
  },
};

export { container, item };
