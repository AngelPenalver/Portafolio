import styles from "./Projects.module.css";
import Pokemon from "./images/pokemon.png";
import Blocy from "./images/blocy.png";
import { IconCode } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { useState } from "react";
function Projects() {
  interface ProjectsAttributes {
    name: string;
    img: string;
    technologies: string[];
    deploy: string | null;
    gitHub: string;
  }

  const projects: ProjectsAttributes[] = [
    {
      name: "Blocy",
      img: Blocy,
      technologies: [
        "TypeScript",
        "React",
        "CSS",
        "ReduxToolkit",
        "Node.JS",
        "Express",
        "Sequelize",
        "PostgreSQL",
      ],
      deploy: "https://blocy.vercel.app/",
      gitHub: "https://github.com/AngelPenalver/Bloc",
    },
    {
      name: "Pokemons",
      img: Pokemon,
      technologies: [
        "JavaScript",
        "React",
        "Redux",
        "CSS",
        "Express",
        "Node.JS",
        "Sequelize",
        "PostgreSQL",
      ],
      deploy: null,
      gitHub: "https://github.com/AngelPenalver/pokemon",
    },
  ];

  const [change, setChange] = useState<Array<boolean>>(
    new Array(projects.length).fill(false)
  );
  const handleChange = (index: number) => {
    const newChange = [...change];
    newChange[index] = true;
    setChange(newChange);
  };

  const handleChangeFalse = (index: number) => {
    const newChange = [...change];
    newChange[index] = false;
    setChange(newChange);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h1>Projects</h1>
        <div>
          <ul>
            {projects?.map((project, index) => {
              return (
                <li key={index}>
                  {change[index] && (
                    <div
                      className={styles.imgChange}
                      onMouseLeave={() => handleChangeFalse(index)}
                    >
                      {project.gitHub && (
                        <a
                          href={project.gitHub}
                          title="Code"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconCode
                            style={{ width: "500px", height: "500px" }}
                          />
                        </a>
                      )}
                      {project.deploy && (
                        <a
                          href={project.deploy}
                          title="View"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconEye
                            style={{ width: "500px", height: "500px" }}
                          />
                        </a>
                      )}
                    </div>
                  )}
                  <img
                    src={project.img}
                    alt={project.name}
                    onMouseEnter={() => handleChange(index)}
                  />
                  <div className={styles.technologies}>
                    {project.technologies?.map((tec, tecIndex) => {
                      return <span key={tecIndex}>{tec}</span>;
                    })}
                  </div>
                  <h2>{project.name}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Projects;
