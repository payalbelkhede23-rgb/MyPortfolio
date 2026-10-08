import styles from "../styles/Projects.module.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "CareConnect",
      subtitle:
        "Smart & Secure Digital Health Record Management System",
      description:
        "A digital health record management system designed to securely manage patient health information and provide controlled access to healthcare records.",
      technologies:
        "Java | Spring Boot | MySQL | REST APIs | JWT | React",
      status: "In Development",
    },
    {
      number: "02",
      title: "Online Village Survey System",
      subtitle:
        "Village & Family Survey Management System",
      description:
        "A web-based system developed to manage village, surveyor, family, and member information through an organized database and administrative interface.",
      technologies:
        "PHP | MySQL | HTML | CSS | JavaScript | XAMPP",
      status: "Completed",
    },
  ];

  return (
    <section className={styles.projects} id="projects">

      <div className={styles.heading}>
        <p>MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.projectGrid}>

        {projects.map((project) => (
          <div
            className={styles.projectCard}
            key={project.number}
          >

            <div className={styles.projectTop}>
              <span className={styles.number}>
                {project.number}
              </span>

              <span className={styles.status}>
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.technologies}>
              <strong>Technologies</strong>

              <p>{project.technologies}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
