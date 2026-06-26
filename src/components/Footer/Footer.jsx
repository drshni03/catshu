import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <h2>catshu</h2>

      <p>
        Designed & Developed by Darshni © {new Date().getFullYear()}
      </p>

      <span>
        Made with 🤍 and supervised by kitty cats.
      </span>

    </footer>
  );
}