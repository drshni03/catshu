import { motion } from "framer-motion";
import Polaroid from "../../ui/Polaroid/Polaroid";
import StickyNote from "../../ui/StickyNote/StickyNote";
import polaroidImage from "../../../assets/images/polaroid_hero.png";
import styles from "./Hero.module.css";

// Subtle SVG Paw Print component
const PawPrint = ({ className, delay = 0 }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ delay, duration: 0.6, type: "spring" }}
  >
    <path d="M12 14c-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3z"/>
    <circle cx="7.5" cy="11.5" r="1.5" />
    <circle cx="10.5" cy="8.5" r="1.5" />
    <circle cx="13.5" cy="8.5" r="1.5" />
    <circle cx="16.5" cy="11.5" r="1.5" />
  </motion.svg>
);

export default function Hero() {
  // Stagger wrapper for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    },
  };

  return (
    <section className={styles.heroSection}>
      {/* Huge Background Typography */}
      <div className={styles.bgTypographyContainer}>
        <h1 className={styles.bgTypography}>catshu</h1>
      </div>

      {/* Background Decorative Paw Prints */}
      <PawPrint className={`${styles.bgPaw} ${styles.bgPaw1}`} delay={1.2} />
      <PawPrint className={`${styles.bgPaw} ${styles.bgPaw2}`} delay={1.4} />
      <PawPrint className={`${styles.bgPaw} ${styles.bgPaw3}`} delay={1.6} />

      <div className={styles.heroLayout}>
        {/* Left Column: Editorial Info */}
        <motion.div 
          className={styles.infoColumn}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Handcrafted Tape Tag */}
          <motion.div className={styles.tagWrapper} variants={itemVariants}>
            <span className={styles.paperTapeTag}>MY LITTLE CORNER</span>
            <span className={styles.tagDivider}>•</span>
            <span className={styles.tagSubtitle}>Darshni</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 className={styles.heading} variants={itemVariants}>
            Hello,
            <br />
            I'm <span className={styles.highlightText}>Darshni</span>.
          </motion.h2>

          {/* Cozy Intro Subheading */}
          <motion.p className={styles.subheading} variants={itemVariants}>
            Building projects, learning new technologies, and enjoying every step of the journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className={styles.ctaWrapper} variants={itemVariants}>
            
            
            <motion.a 
              href="#about" 
              className={styles.secondaryLink}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My journey <span className={styles.linkArrow}>→</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Layered Composition */}
        <div className={styles.collageColumn}>
          {/* Polaroid Frame */}
          <motion.div 
            className={styles.polaroidWrapper}
            initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
          >
            <Polaroid 
              image={polaroidImage} 
              caption="coding cozy with Shu 🐾" 
              angle="3deg"
              washiColor="mustard"
            />
          </motion.div>

          {/* Sticky Note 1: Mustard */}
          <motion.div 
            className={styles.sticky1Wrapper}
            initial={{ opacity: 0, x: 50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.6 }}
          >
            <StickyNote 
              text="Probably watching
                    Modern Family
                        instead of fixing
                    that one bug HEHE..."
              color="terracotta"
              angle="-4deg"
            />
          </motion.div>

          {/* Sticky Note 2: Terracotta */}
          <motion.div 
            className={styles.sticky2Wrapper}
            initial={{ opacity: 0, y: 50, rotate: 15 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ type: "spring", stiffness: 70, damping: 12, delay: 0.8 }}
          >
            <StickyNote 
              text="i like you if you like cats"
              color="mustard"
              angle="6deg"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollText}>scroll down</span>
        <motion.div 
          className={styles.scrollPaw}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🐾
        </motion.div>
      </motion.div>
    </section>
  );
}