import styles from "../../../styles/Hero.module.css";

/**
 * Componente que muestra una palabra de fondo a gran escala, estilo cartel editorial,
 * usada como elemento decorativo detrás de la composición del héroe.
 * @param {string} text - El texto a mostrar como palabra de fondo.
 * @returns {JSX.Element} El componente de palabra de fondo del héroe.
 */
function HeroBigWord({ text }) {
  return (
    <span className={styles.bigWord} aria-hidden="true">
      {text}
    </span>
  );
}

export default HeroBigWord;
