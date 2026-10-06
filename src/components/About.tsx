import styles from "../styles/About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>

        <div className={styles.aboutTitle}>
          <p>GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutIntro}>
            <span>01</span>

            <h3>
              Curious mind.
              <br />
              Continuous learner.
            </h3>
          </div>

          <div className={styles.aboutText}>
            <p>
              I am currently pursuing my Master of Computer Applications
              (MCA) and have a strong interest in technology and
              problem-solving.
            </p>

            <p>
              I enjoy learning new technologies, working on practical
              projects, and exploring different areas of the IT industry.
              My goal is to continuously improve my technical skills and
              build meaningful solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;