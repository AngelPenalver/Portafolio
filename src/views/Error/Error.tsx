import React from "react";
import styles from './Error.module.css'
const Error: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.contain}>
        <h1>
          Lo siento
        </h1>
        <p>
          Todavia no esta disponible la vista para dispositivos moviles
        </p>
      </div>
    </div>
  )
}
export default Error;
