import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  out: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  in: {
    y: 30,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const Layout = ({ children }: { children: ReactNode }) => (
  <motion.div variants={variants} initial="in" animate="inactive" exit="out">
    {children}
  </motion.div>
);
export default Layout;
