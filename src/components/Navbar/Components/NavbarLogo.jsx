import styles from "../../../styles/Navbar.module.css";

/**
 * Enlace de logo que lleva al inicio de la página, con un diseño que resalta
 * el nombre del desarrollador y su especialización.
 * @returns {JSX.Element} El componente de logo de la barra de navegación.
 */
function NavbarLogo() {
  return (
    <a href="#hero" className={styles.logo}>
      Isaías<span>.dev</span>
    </a>
  );
}

export default NavbarLogo;
