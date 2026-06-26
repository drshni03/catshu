import { motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import styles from "./Journey.module.css";

const timeline = [
  {
    year: "2022",
    title: "Foundation in Science",
    place: "Manipal International University",
  },
  {
    year: "2023",
    title: "Started Computer Science",
    place: "Universiti Teknologi Malaysia",
  },
  {
    year: "2026",
    title: "Built My First React Projects",
    place: "Web Development Journey",
  },
  {
    year: "2026",
    title: "AI • Unity • VR Projects",
    place: "Academic & Personal Projects",
  },
  {
    year: "2026",
    title: "Internship Journey",
    place: "Looking for exciting opportunities ✨",
  },
];

export default function Journey() {
  return (
    <section id="journey" className={styles.journey}>
      <SectionTitle
        tag="Journey"
        title="My Journey."
        subtitle="Every project, every challenge and every late-night debugging session has shaped the developer I am today."
      />

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <motion.div
            className={styles.item}
            key={item.year}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.left}>
              <div className={styles.dot}></div>
              {index !== timeline.length - 1 && (
                <div className={styles.line}></div>
              )}
            </div>

            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}