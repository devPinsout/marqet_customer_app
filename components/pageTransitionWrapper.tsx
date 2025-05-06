"use client";

import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
