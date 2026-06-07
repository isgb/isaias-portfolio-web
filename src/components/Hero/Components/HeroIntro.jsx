import styles from '../../../styles/Hero.module.css';

/**
 * Componente de introducción del héroe que muestra una etiqueta y el nombre partido
 * en dos líneas, a modo de firma tipográfica superpuesta a la foto de perfil.
 * @returns {JSX.Element} El componente de introducción del héroe.
 */
function HeroIntro() {
  return (
    <div className={styles.signature}>
      <span className={styles.tag}>Isaías · Dev</span>
      <h1 className={styles.splitName}>
        <span>Isa</span>
        <span>ías</span>
      </h1>
    </div>
  );
}

export default HeroIntro;
