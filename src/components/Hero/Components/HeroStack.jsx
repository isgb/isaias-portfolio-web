import styles from "../../../styles/Hero.module.css";

/**
 * Componente que muestra una lista vertical de especialidades sobre el borde
 * izquierdo de la composición del héroe, estilo cartel editorial.
 * @param {string[]} items - Lista de especialidades a mostrar.
 * @returns {JSX.Element} El componente de lista de especialidades del héroe.
 */
function HeroStack({ items }) {
  return (
    <ul className={styles.stack}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default HeroStack;
