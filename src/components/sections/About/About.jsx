import { motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Polaroid from "../../ui/Polaroid/Polaroid";
import StickyNote from "../../ui/StickyNote/StickyNote";

import styles from "./About.module.css";

import photo from "../../../assets/images/polaroid_hero.png";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SectionTitle
            tag="About"
            title="A little bit about me."
            subtitle="Hi! I'm Darshni, a Computer Science student who loves bringing ideas to life through code and thoughtful design. Whether it's building web applications, experimenting with AI, 
            or creating interactive experiences, I enjoy making technology feel approachable and enjoyable."
          />

          <p className={styles.description}>
            Beyond coding, I'm a huge fan of sitcom marathons, adorable plushies, hot chocolate on cozy evenings, 
            and of course anything cat-related. 
            CATSHU is my little corner of the internet where I share the things I love building.
          </p>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Polaroid
            image={photo}
            caption="catshu's desk ✦"
            angle="-2deg"
          />

          <div className={styles.noteOne}>
            <StickyNote
              text={"☕ Chocolate\n🐈 Cats\n💻 React"}
              color="mustard"
              angle="-6deg"
            />
          </div>

          <div className={styles.noteTwo}>
            <StickyNote
              text={"Currently building\nCATSHU"}
              color="terracotta"
              angle="5deg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}