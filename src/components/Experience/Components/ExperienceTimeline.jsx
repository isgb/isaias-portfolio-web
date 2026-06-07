import styles from "../../../styles/Experience.module.css";

/**
 * Componente de línea de tiempo para mostrar la experiencia laboral o educativa en la sección de experiencia.
 * Recibe un array de objetos con la información de cada experiencia, que incluye el título del puesto o grado, la institución o empresa, el período de tiempo y una breve descripción de las responsabilidades o logros.
 * La línea de tiempo se presenta de manera vertical, con conectores visuales entre cada elemento para resaltar la progresión a lo largo del tiempo. El diseño utiliza tarjetas de vidrio para mejorar la legibilidad y el atractivo visual.
 * @param {Object[]} items - Array de objetos con la información de cada experiencia a mostrar en la línea de tiempo.
 * @returns  {JSX.Element} El componente de línea de tiempo de experiencia.
 */
function ExperienceTimeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={item.title} className={styles.row}>
          <div className={`glass-card ${styles.card}`}>
            <span className={styles.tag}>{item.type}</span>
            <h3>{item.title}</h3>
            <p className={styles.place}>{item.place}</p>
            <p className={styles.period}>{item.period}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
          {index < items.length - 1 && <div className={styles.connector} />}
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
