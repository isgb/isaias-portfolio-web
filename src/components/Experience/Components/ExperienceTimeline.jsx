import styles from "../../../styles/Experience.module.css";
import {
  SiReact,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiAngular,
  SiSpring,
} from "react-icons/si";

// Iconos de marca para las tecnologías mencionadas en la experiencia laboral.
// React Native reutiliza el icono de React, ya que no existe un icono de marca propio.
const techIcons = {
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  "Java Spring": { icon: SiSpring, color: "#6DB33F" },
};

/**
 * Línea de tiempo de experiencia laboral.
 * Cada elemento muestra puesto, empresa, ubicación, periodo, un resumen breve,
 * los logros más relevantes y las tecnologías utilizadas.
 * @param {Object[]} items - Array de experiencias laborales a mostrar.
 * @returns {JSX.Element} Línea de tiempo de experiencia laboral.
 */
function ExperienceTimeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={item.role} className={styles.row}>
          <div className={`glass-card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <h3>{item.role}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.company}>
              {item.company}
              {item.location && (
                <span className={styles.location}> · {item.location}</span>
              )}
            </p>
            <p className={styles.summary}>{item.summary}</p>
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className={styles.techList}>
              {item.technologies.map((tech) => {
                const techIcon = techIcons[tech];
                return (
                  <span key={tech} className={styles.techBadge}>
                    {techIcon && (
                      <techIcon.icon
                        className={styles.techIcon}
                        style={{ color: techIcon.color }}
                        aria-hidden="true"
                      />
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          {index < items.length - 1 && <div className={styles.connector} />}
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
