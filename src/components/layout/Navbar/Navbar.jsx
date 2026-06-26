import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <motion.span 
            className={styles.paw}
            whileHover={{ rotate: [-10, 15, -10, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            🐾
          </motion.span>
          <span className={styles.logoText}>catshu</span>
        </div>

        {/* Links */}
        <ul className={styles.links}>
          {links.map((link) => (
            <li
                key={link.label}
                className={styles.linkItem}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
            >
                <a href={link.href} className={styles.linkAnchor}>
                    {link.label}
                </a>

            <AnimatePresence>
    {hoveredLink === link.label && (
      <motion.div
        className={styles.underline}
        layoutId="navUnderline"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
      />
    )}
  </AnimatePresence>
</li>
          ))}
        </ul>

                {/* CTA Button */}
        <motion.a
          href="#contact"
          className={styles.button}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          Say Hi <span className={styles.arrow}>↗</span>
        </motion.a>

      </div>
    </motion.nav>
  );
}