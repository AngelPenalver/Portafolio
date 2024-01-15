import styles from "./HomePage.module.css";
import Node from "./nodejs.png";
import React from "./react.png";
import Postgres from "./postgres.png";
import CSS from "./CSS.png";
import Title from "./Title/Title";
import GitHub from "./icons_banner/github.png";
import LinkedIn from "./icons_banner/linkedin.png";
import WhatsApp from "./icons_banner/whatsapp.png";
import Mail from "./icons_banner/mail.png";

function HomePage() {
  return (
    <div className={styles.div}>
      <div className={styles.contain}>
        <div className={`${styles.box1} animate__animated animate__backInLeft`}>
          <div className={styles.box1_Content}>
            <img src={CSS} alt="CSS" />
          </div>
        </div>
        <div
          className={`${styles.box2} animate__animated animate__bounceInRight`}
        >
          <div className={styles.box2_Content}>
            <img src={React} alt="React" />
          </div>
        </div>
        <div className={`${styles.box3} animate__animated  animate__backInUp`}>
          <div className={styles.box3_Content}>
            <img src={Node} alt="Node" />
          </div>
        </div>
        <div className={`${styles.box4} animate__animated animate__bounceInUp`}>
          <div className={styles.box4_Content}>
            <img src={Postgres} alt="Postgres" />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title />
        </div>
        <p
          id={styles.subtitle}
          className={"animate__animated animate__bounceInRight"}
        >
          Full Stack Developer
        </p>
        <div className={styles.banner} style={{ position: "sticky" }}>
          <ul className={"animate__animated animate__bounceInRight"}>
            <li>
              <a
                href="https://github.com/AngelPenalver"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/%C3%A1ngel-pe%C3%B1alver-926bba268/"
                title="Ir a LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="mailto:apenalver4@gmail.com"
                title="Enviar Correo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Mail} alt="Mail" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+584248189165"
                title="Enviar un WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.btns} animate__animated animate__bounceInUp`}>
          <button>
            <a
              href="https://drive.usercontent.google.com/download?id=14h151WyAK26muEPUmCMZhXynerIEgeGF&export=download&authuser=0&confirm=t&uuid=bdf384a7-2c84-4cd7-ad2d-05c991fc190f&at=APZUnTV5oRKKv1Ircqh-X5ghBo0O:1705339232744"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV English
            </a>
          </button>
          <button>
            <a
              href="https://drive.usercontent.google.com/download?id=1oY2m58fmqYLUIwyDaogyVdIJfkIWdFel&export=download&authuser=0&confirm=t&uuid=3016eddb-1c8f-4547-85fb-13b1d5b6f95f&at=APZUnTVqqlkZRJCPFMewEK0OT0gU:1705339448807"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV Spanish
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
