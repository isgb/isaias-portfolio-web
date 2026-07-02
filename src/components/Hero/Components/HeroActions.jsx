import styles from '../../../styles/Hero.module.css';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';

function HeroActions() {
  const handleDownloadCV = () => {
    window.open('/isaias-portfolio-web/cv/CV_Isaias_Gaona.pdf', '_blank');
  };

  return (
    <div className={styles.actions}>
      <a href="#portafolio" className="btn btn-primary">
        Ver Proyectos
      </a>
      <a href="#contacto" className="btn btn-outline">
        Contactarme
      </a>
      <button onClick={handleDownloadCV} className="btn btn-secondary" aria-label="Descargar CV en PDF">
        <HiOutlineArrowDownTray style={{ marginRight: '6px' }} />
        Descargar CV
      </button>
    </div>
  );
}

export default HeroActions;
