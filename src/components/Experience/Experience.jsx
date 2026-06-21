import styles from "../../styles/Experience.module.css";
import { experience, education } from "../../data/experienceData";
import ExperienceTimeline from "./Components/ExperienceTimeline";
import EducationList from "./Components/EducationList";

/**
 * Sección de experiencia y educación que muestra la trayectoria profesional
 * en una línea de tiempo y la formación académica en tarjetas, utilizando
 * datos reales centralizados en src/data/experienceData.js.
 * @returns {JSX.Element} El componente de experiencia y educación.
 */
function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia y Educación</h2>
        <p className="section-subtitle">Mi trayectoria como desarrollador</p>

        <h3 className={styles.groupTitle}>Experiencia Profesional</h3>
        <ExperienceTimeline items={experience} />

        <h3 className={styles.groupTitle}>Educación</h3>
        <EducationList items={education} />
      </div>
    </section>
  );
}

export default Experience;
