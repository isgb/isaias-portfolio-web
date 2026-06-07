import { items } from "../../constants/constants";
import ExperienceTimeline from "./Components/ExperienceTimeline";

/**
 * Componente de experiencia que muestra una línea de tiempo con la trayectoria profesional y educativa del desarrollador.
 * Cada elemento de la línea de tiempo incluye el título del puesto o grado, la institución o empresa, el período de tiempo y una breve descripción de las responsabilidades o logros.
 * La línea de tiempo se presenta de manera vertical, con conectores visuales entre cada elemento para resaltar la progresión a lo largo del tiempo. El diseño utiliza tarjetas de vidrio para mejorar la legibilidad y el atractivo visual.
 * @returns {JSX.Element} El componente de experiencia con la línea de tiempo de trayectoria profesional y educativa.
 */
function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia y Educación</h2>
        <p className="section-subtitle">Mi trayectoria como desarrollador</p>

        {/* Componente de línea de tiempo que muestra la experiencia profesional y educativa */}
        <ExperienceTimeline items={items} />

      </div>
    </section>
  );
}

export default Experience;
