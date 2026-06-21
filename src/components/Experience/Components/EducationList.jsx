import styles from "../../../styles/Experience.module.css";

/**
 * Lista de formación académica.
 * Cada elemento muestra la carrera o formación, la institución, la ubicación
 * (si existe) y el periodo de estudios.
 * @param {Object[]} items - Array de estudios a mostrar.
 * @returns {JSX.Element} Lista de tarjetas de educación.
 */
function EducationList({ items }) {
  return (
    <div className={styles.educationList}>
      {items.map((item) => (
        <div key={item.degree} className={`glass-card ${styles.educationCard}`}>
          <div className={styles.cardHeader}>
            <h3>{item.degree}</h3>
            <span className={styles.period}>{item.period}</span>
          </div>
          <p className={styles.company}>
            {item.institution}
            {item.location && (
              <span className={styles.location}> · {item.location}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EducationList;
