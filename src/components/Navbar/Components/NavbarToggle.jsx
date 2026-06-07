import styles from "../../../styles/Navbar.module.css";

/**
 * Botón de menú para dispositivos móviles, que alterna la visibilidad de la
 * navegación. Tiene un diseño de hamburguesa con tres líneas y una etiqueta
 * accesible para describir su función.
 * @param {boolean} open - Indica si el menú móvil está actualmente abierto.
 * @param {Function} onToggle - Función que alterna el estado de apertura del menú.
 * @returns {JSX.Element} El componente de botón de menú móvil.
 */
function NavbarToggle({ open, onToggle }) {
  return (
    <button
      className={styles.toggle}
      aria-label="Abrir menú"
      aria-expanded={open}
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export default NavbarToggle;
