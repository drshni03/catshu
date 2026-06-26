import { motion } from "framer-motion";
import styles from "./Polaroid.module.css";

export default function Polaroid({ image, caption, angle = "3deg", washiColor = "mustard" }) {
  const tapeColors = {
    mustard: styles.tapeMustard,
    terracotta: styles.tapeTerracotta,
    forest: styles.tapeForest,
  };

  return (
    <motion.div
      className={styles.polaroidContainer}
      style={{ "--rotate-angle": angle }}
      whileHover={{
        rotate: "0deg",
        scale: 1.04,
        y: -12,
        boxShadow: "0 25px 50px -12px rgba(30, 30, 30, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
    >
      {/* Washi Tape */}
      {washiColor && (
        <div className={`${styles.washiTape} ${tapeColors[washiColor] || ""}`} />
      )}

      <div className={styles.polaroidBody}>
        <div className={styles.imageContainer}>
          <img src={image} alt={caption} className={styles.image} />
          <div className={styles.imageOverlay} />
        </div>
        <div className={styles.caption}>
          {caption}
        </div>
      </div>
    </motion.div>
  );
}
