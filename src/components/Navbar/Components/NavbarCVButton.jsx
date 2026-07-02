import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import styles from '../../../styles/Navbar.module.css';

function NavbarCVButton() {
  const handleDownloadCV = () => {
    window.open('/isaias-portfolio-web/cv/CV_Isaias_Gaona.pdf', '_blank');
  };

  return (
    <button
      onClick={handleDownloadCV}
      className={styles.cvButton}
      aria-label="Descargar CV en PDF"
    >
      <HiOutlineArrowDownTray />
      CV
    </button>
  );
}

export default NavbarCVButton;
