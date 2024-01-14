import React, { useEffect, useState } from "react";
import GitHub from "../Icons/github.png";
import LinkedIn from "../Icons/linkedin.png";
import Mail from "../Icons/mail.png";
import WhatsApp from "../Icons/whatsapp.png";
import styles from "./MenuSocial.module.css";

const Social: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY < 470) {
        setActive(false);
      } else {
        setActive(true);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };

  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.banner} ${active ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp'}`}>
      <ul  className={
            !active
              ? `animate__animated animate__bounceOutUp`
              : `animate__animated animate__bounceInDown`
          }>
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
                href="https://www.linkedin.com/in/angel-pe%C3%B1alver-926bba268/"
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
    </div>
  );
};

export default Social;
