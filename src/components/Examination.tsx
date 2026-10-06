import styles from "../styles/Examination.module.css";

function Examination() {
  const education = [
    {
      year: "2027",
      degree: "Master of Computer Applications (MCA)",
      institute: "P. R. Pote Patil College of Engineering and Management, Amravati",
      board: "Postgraduate",
    },
    {
      year: "2025",
      degree: "B.Sc. Computer Science",
      institute: "SSSKR Innani Mahavidyalaya, Karanja Lad",
      board: "Sant Gadge Baba Amravati University",
    },
    {
      year: "2022",
      degree: "12th",
      institute: "Vidyabharti Junior College, Karanja Lad",
      board: "Higher Secondary",
    },
    {
      year: "2020",
      degree: "10th",
      institute: "Kankubai Girls High School, Karanja Lad",
      board: "Secondary School",
    },
  ];

  return (
    <section className={styles.examination} id="examination">
      <div className={styles.heading}>
        <p>MY EDUCATION</p>

        <h2>
          Education & <span>Examination</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.educationList}>
        {education.map((item) => (
          <div className={styles.educationCard} key={item.degree}>
            <div className={styles.year}>{item.year}</div>

            <div className={styles.details}>
              <h3>{item.degree}</h3>

              <p>{item.institute}</p>

              <span>{item.board}</span>
            </div>

            <div className={styles.level}>{item.degree.split(" ")[0]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Examination;