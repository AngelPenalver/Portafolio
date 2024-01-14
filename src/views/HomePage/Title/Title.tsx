import React, { useEffect, useState } from 'react';
import styles from './Title.module.css'; // Asegúrate de tener tu archivo de estilos

const Title = () => {
  const [active, setActive] = useState(false);

  const checkScroll = () => {
    if (window.scrollY >= 300) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <div className={active ? `${styles.contain} animate__animated animate__bounceOutRight`: `${styles.contain} animate__animated animate__bounceInRight`}>
      {'Hi! I am Ángel'.split('').map((letra, index) => (
        <h1 key={index} className={styles.letra}>
          {letra}
        </h1>
      ))}
    </div>
  );
};

export default Title;

