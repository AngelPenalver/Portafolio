import styles from "./About.module.css";
import React from "./logos_banner/react.png";
import CSS from "./logos_banner/css.png";
import Redux from "./logos_banner/Redux.png";
import HTML from "./logos_banner/html.png";
import JS from "./logos_banner/js.png";
import Node from "./logos_banner/node.png";
import Express from "./logos_banner/express.png";
import SQL from "./logos_banner/sql.png";
import TS from "./logos_banner/typescript-icon.svg";
function About() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <h1>About me!</h1>
        <p>
          As a former Business Administration student, I have redirected my path
          towards web development, a field that I explore in a self-taught way.
          My participation in a bootcamp allowed me to develop soft skills and
          delve into emerging technologies. My learning is constant, and in my
          free time, I dedicate myself to discovering and mastering new
          technologies.
        </p>
        <h1>Technologies</h1>
        <div>
          <div className={styles.containerBaneer}>
            <h2>Front-End</h2>
            <div className={styles.banner}>
              <ul>
                <li>
                  <img src={TS} alt="TS" />
                  <p>TypeScript</p>
                </li>
                <li>
                  <img src={JS} alt="Js" />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src={React} alt="React" />
                  <p>React</p>
                </li>
                <li>
                  <img
                    src={Redux}
                    alt="Redux"
                    height="140vh"
                    style={{ width: "12vw" }}
                  />
                  <p>Redux</p>
                </li>
                <li>
                  <img src={CSS} alt="CSS" />
                  <p>CSS</p>
                </li>
                <li>
                  <img src={HTML} alt="HTML" />
                  <p>HTML</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.containerBaneer}>
            <h2>Back-End and DataBase</h2>
            <div className={styles.banner}>
              <ul>
                <li>
                  <img src={TS} alt="TS" />
                  <p>TypeScript</p>
                </li>
                <li>
                  <img src={JS} alt="JS" />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src={Node} alt="Node" />
                  <p>Node.JS</p>
                </li>
                <li>
                  <img src={Express} alt="Express" height="135vh" />
                  <p>Express.JS</p>
                </li>
                <li>
                  <img src={SQL} alt="SQL" />
                  <p>SQL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
