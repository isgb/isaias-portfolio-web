import styles from '../../styles/Technologies.module.css';
import { technologies } from '../../constants/constants';

/**
 * Componente de tecnologías que muestra una sección con las herramientas y tecnologías que el desarrollador utiliza en su trabajo diario.
 * Cada tecnología se muestra dentro de una tarjeta de vidrio, con un diseño limpio y moderno que se adapta a diferentes tamaños de pantalla.
 * El componente utiliza un diseño de cuadrícula para organizar las tarjetas de tecnología, con un espacio uniforme entre ellas para mejorar la legibilidad y el atractivo visual.
 * @returns {JSX.Element} El componente de tecnologías.
 */
function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <p className="section-subtitle">Herramientas con las que trabajo a diario</p>

        <div className={styles.grid}>
          {technologies.map(({ name, icon: Icon, color }) => (
            <div key={name} className={`glass-card ${styles.item}`}>
              <Icon className={styles.icon} style={{ color }} aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
