import styles from './Title.module.css'; // Asegúrate de tener tu archivo de estilos

const Title = () => {

  return (
    <div className={`${styles.contain} animate__animated animate__bounceInRight`}>
      {'Hi! I am Ángel'.split('').map((letra, index) => (
        <h1 key={index} className={styles.letra}>
          {letra}
        </h1>
      ))}
    </div>
  );
};

export default Title;

