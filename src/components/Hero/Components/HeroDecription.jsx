import styles from "../../../styles/Hero.module.css";

/**
 * Componente de descripción del héroe que muestra una breve introducción sobre el
 * desarrollador y su enfoque en la construcción de aplicaciones web y móviles modernas,
 * escalables y centradas en la experiencia del usuario.
 * @returns
 */
function HeroDescription() {
  return (
    <p className={styles.description}>
      Construyo aplicaciones web y móviles modernas, escalables y centradas en
      la experiencia del usuario, desde la interfaz hasta la base de datos.
    </p>
  );
}

export default HeroDescription;
