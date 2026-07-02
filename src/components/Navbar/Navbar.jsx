import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { links } from "../../constants/constants";
import { useScrolled } from "../../hooks/useScrolled";
import NavbarLogo from "./Components/NavbarLogo";
import NavbarToggle from "./Components/NavbarToggle";
import NavbarLinks from "./Components/NavbarLinks";

/**
 * Componente de barra de navegación que se muestra en la parte superior de la página.
 * Cambia su estilo al hacer scroll para mejorar la legibilidad y la experiencia de usuario.
 * Incluye un menú desplegable para dispositivos móviles, que se puede abrir y cerrar con un botón.
 * @returns {JSX.Element} El componente de barra de navegación.
 */
function Navbar() {
  
  // Indica si la página ha sido desplazada hacia abajo, usado para cambiar el estilo de la barra de navegación
  const scrolled = useScrolled(20);
  
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [open, setOpen] = useState(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>

        {/* Enlace de logo que lleva al inicio de la página, con un diseño que resalta el nombre del desarrollador y su especialización. */}
        <NavbarLogo />

        {/* Navegación principal con enlaces a las secciones del sitio, que se muestra de forma horizontal en pantallas grandes y como un menú desplegable en dispositivos móviles. */}
        <NavbarLinks links={links} open={open} onLinkClick={() => setOpen(false)} />

        {/* Botón de menú para dispositivos móviles, que alterna el estado 'open' para mostrar u ocultar la navegación. */}
        <NavbarToggle open={open} onToggle={() => setOpen((prev) => !prev)} />
        
      </div>
    </header>
  );
}

export default Navbar;
