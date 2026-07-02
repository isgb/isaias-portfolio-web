import styles from '../../../styles/Hero.module.css';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';

function HeroActions() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/isaias-portfolio-web/cv/CV_Isaias_Gaona.pdf';
    link.download = 'CV_Isaias_Gaona.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
