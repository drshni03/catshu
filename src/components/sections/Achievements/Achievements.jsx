import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaStar } from "react-icons/fa";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import styles from "./Achievements.module.css";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Gold Award",
    subtitle: "INNOVEX 2026",
    description: "International Innovation Competition",
  },

  {
    icon: <FaAward />,
    title: "Gold Award",
    subtitle: "iGEN 2026",
    description: "International Innovation Competition",
  },

  {
    icon: <FaStar />,
    title: "Dean's List",
    subtitle: "2024 • 2025",
    description: "Universiti Teknologi Malaysia",
  },
];

export default function Achievements() {
  return (
    <section className={styles.section}>

      <SectionTitle
        tag="Achievements"
        title="Moments I'm Proud Of."
        subtitle="A few milestones that remind me every late night of debugging was worth it."
      />

      <div className={styles.grid}>
        {achievements.map((item, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <h4>{item.subtitle}</h4>

            <p>{item.description}</p>

          </motion.div>
        ))}
      </div>

    </section>
  );
}