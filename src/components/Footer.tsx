import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <h3>PAYAL<span>.</span></h3>
          <p>MCA Student | Aspiring IT Professional</p>
        </div>

        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/payal-belkhede-970731391"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:payalbelkhede23@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Payal Belkhede. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;