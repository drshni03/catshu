import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <SectionTitle
        tag="Contact"
        title="Let's Build Something Together."
        subtitle="Whether it's an internship, collaboration or just a chat, I'd love to hear from you."
      />

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <div className={styles.left}>

          <h3>Say Hello 👋</h3>

          <p>
            Feel free to reach out anytime.
            I'm currently looking for internship opportunities
            and exciting projects.
          </p>

          <div className={styles.links}>

            <a
              href="mailto:darshniprakash3@gmail.com"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://github.com/drshni03"
              target="_blank"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/uthayadarshniprakash/"
              target="_blank"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </div>

        <div className={styles.right}>

          <div className={styles.catCard}>

            🐈

            <p>
              Thanks for visiting
              <br />
              CATSHU.
            </p>

          </div>

        </div>

      </motion.div>
    </section>
  );
}