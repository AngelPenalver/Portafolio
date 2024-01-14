import styles from "./Certifications.module.css";
import English from "./images/english.png";
import Henry from "./images/henry.png";
function Certifications() {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h1>Certifications</h1>
        <div className={styles.certifications}>
          <ul>
            <li>
              <img src={English} alt="English" />
              <h2>English A1 (Beginner)</h2>
            </li>
            <li>
              <img src={Henry} alt="Henry" />
              <h2>Full Stack Developer</h2>
            </li>
          </ul>
        </div>
        <h1>Professional Experience</h1>
        <div className={styles.experience}>
          <ul>
            <li>
              <h2>Potenciar Solidario</h2>
              <h5>Full stack developers</h5>
              <h5>October 2023 - November 2023</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
