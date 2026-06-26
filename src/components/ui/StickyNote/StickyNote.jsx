import { motion } from "framer-motion";
import styles from "./StickyNote.module.css";

export default function StickyNote({ text, color = "mustard", angle = "-2deg", className = "" }) {
  const noteColors = {
    mustard: styles.noteMustard,
    terracotta: styles.noteTerracotta,
    cream: styles.noteCream,
  };

  return (
    <motion.div
      className={`${styles.stickyNote} ${noteColors[color]} ${className}`}
      style={{ "--rotate-angle": angle }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        rotate: "0deg",
        boxShadow: "0 20px 30px rgba(30, 30, 30, 0.15)",
        zIndex: 30,
      }}
    >
      <div className={styles.pin} />
      <div className={styles.content}>
        {text}
      </div>
    </motion.div>
  );
}
