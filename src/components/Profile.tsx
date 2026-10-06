import styles from "../styles/Profile.module.css";

function Profile() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <p className={styles.smallText}>HELLO, I'M</p>

        <h1>
          Payal <span>Belkhede</span>
        </h1>

        <h2>
          MCA Student <span>|</span> Aspiring IT Professional
        </h2>

        <p className={styles.description}>
          I am an MCA student passionate about technology and software
          development. I enjoy learning new technologies, building practical
          projects, and exploring opportunities in the IT industry.
        </p>

        <div className={styles.buttons}>
  <a href="#skills" className={styles.primaryButton}>
    Explore My Skills
  </a>

  <a href="#contact" className={styles.secondaryButton}>
    Contact Me
  </a>

  <a
    href="/certificates/Payal_Belkhede_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.resumeButton}
  >
    View Resume
  </a>
</div>
        <div className={styles.socialLinks}>
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

      <div className={styles.imageSection}>
        <div className={styles.imageGlow}>
          <div className={styles.profileImage}>
            <img
              src="/certificates/Profile.jpeg"
              alt="Payal Belkhede"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;