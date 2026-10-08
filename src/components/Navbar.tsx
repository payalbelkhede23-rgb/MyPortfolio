import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        PAYAL<span>.</span>
      </div>

      <nav className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#examination">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className={styles.hireButton}>
        Let's Talk
      </a>
    </header>
  );
}

export default Navbar;
