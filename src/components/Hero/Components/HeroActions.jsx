import styles from '../../../styles/Hero.module.css';

/**
 * Componente de acciones del héroe que muestra botones para Ver Proyectos y Contactarme.
 * @returns {JSX.Element} El componente de acciones del héroe.
 */
function HeroActions() {
  return (
    <div className={styles.actions}>
      <a href="#portafolio" className="btn btn-primary">
        Ver Proyectos
      </a>
      <a href="#contacto" className="btn btn-outline">
        Contactarme
      </a>
    </div>
  );
}

export default HeroActions;
