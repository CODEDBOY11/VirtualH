import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  loading: boolean;
};

const Reveal = ({ children, delay = 0, loading }: RevealProps) => {
  return (
    <motion.div
      initial={false}
      animate={loading ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
