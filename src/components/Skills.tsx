import styles from "../styles/Skills.module.css";

function Skills() {
  const skills = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "HTML", category: "Web Development" },
    { name: "CSS", category: "Web Development" },
    { name: "JavaScript", category: "Web Development" },
    { name: "React", category: "Frontend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Git", category: "Version Control" },
  ];

  return (
    <section className={styles.skills} id="skills">

      <div className={styles.heading}>
        <p>MY EXPERTISE</p>

        <h2>
          Skills & <span>Technologies</span>
        </h2>
      </div>

      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>

            <div className={styles.icon}>
              {skill.name.charAt(0)}
            </div>

            <div className={styles.skillInfo}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;