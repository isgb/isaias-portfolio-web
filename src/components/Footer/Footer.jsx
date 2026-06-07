import styles from '../../styles/Footer.module.css';
import { getCurrentYear } from '../../utils/utils';

/**
 * El componente Footer es responsable de mostrar 
 * el pie de página del sitio web, que incluye información 
 * de derechos de autor y enlaces a redes sociales o contacto. 
 * Utiliza la función getCurrentYear para mostrar el año actual de forma dinámica, 
 * lo que garantiza que la información esté siempre actualizada sin necesidad de modificar el código cada año.
 * @returns {JSX.Element} El componente Footer con el año actual y enlaces de contacto.
 */
function Footer() {

  // Obtenemos el año actual para mostrarlo en el pie de página, 
  // lo que mantiene la información actualizada automáticamente 
  // cada año sin necesidad de editar el código.
  const year = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© {year} Isaías. Todos los derechos reservados.</p>
        <div className={styles.links}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:isaias@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
