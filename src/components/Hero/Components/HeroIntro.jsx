import styles from '../../../styles/Hero.module.css';

/**
 * Componente de introducción del héroe que muestra un saludo y el nombre.
 * @returns {JSX.Element} El componente de introducción del héroe.
 */
function HeroIntro() {
  return (
    <>
      <p className={styles.greeting}>Hola, soy</p>
      <h1>
        <span className={styles.name}>Isaías</span>{' '}
        <span className={styles.role}>Full Stack Developer</span>
      </h1>
    </>
  );
}

export default HeroIntro;
