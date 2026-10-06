import styles from "../styles/Certifications.module.css";

function Certifications() {
  const certifications = [
    {
      title: "CSS Training",
      organization: "Spoken Tutorial – IIT Bombay",
      year: "2026",
      image: "/certificates/css-training.jpeg",
    },
    {
      title: "Java Full Stack Development",
      organization: "LitsBros. Pvt. Ltd.",
      year: "2026",
      image: "/certificates/java-full-stack.jpeg",
    },
    {
      title: "AI – Machine Learning in Practice",
      organization: "NXTGEN Intelligence AI Academy",
      year: "2026",
      image: "/certificates/ai-machine-learning.jpeg",
    },
    {
      title: "Employability Skill Job Ready Internship",
      organization: "EduSkills / AICTE",
      year: "2025",
      image: "/certificates/virtual-internship.jpeg",
    },
  ];

  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.heading}>
        <p>CERTIFICATIONS & ACHIEVEMENTS</p>

        <h2>
          My <span>Certifications</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.certificationGrid}>
        {certifications.map((certificate) => (
          <div className={styles.card} key={certificate.title}>
            <div className={styles.imageContainer}>
              <img
                src={certificate.image}
                alt={certificate.title}
              />
            </div>

            <div className={styles.cardContent}>
              <div>
                <h3>{certificate.title}</h3>

                <p>{certificate.organization}</p>
              </div>

              <span>{certificate.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;