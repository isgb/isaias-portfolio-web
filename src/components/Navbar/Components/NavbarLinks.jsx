import styles from "../../../styles/Navbar.module.css";

/**
 * Navegación principal con enlaces a las secciones del sitio, que se muestra
 * de forma horizontal en pantallas grandes y como un menú desplegable en
 * dispositivos móviles.
 * @param {Array} links - Lista de enlaces a mostrar, cada uno con `href` y `label`.
 * @param {boolean} open - Indica si el menú móvil está actualmente abierto.
 * @param {Function} onLinkClick - Función que se ejecuta al hacer clic en un enlace, usada para cerrar el menú móvil.
 * @returns {JSX.Element} El componente de enlaces de navegación.
 */
function NavbarLinks({ links, open, onLinkClick }) {
  return (
    <nav className={`${styles.links} ${open ? styles.open : ""}`}>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onLinkClick}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default NavbarLinks;
