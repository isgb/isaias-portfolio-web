import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { links } from "../../constants/constants";

/**
 * Componente de barra de navegación que se muestra en la parte superior de la página.
 * Cambia su estilo al hacer scroll para mejorar la legibilidad y la experiencia de usuario.
 * Incluye un menú desplegable para dispositivos móviles, que se puede abrir y cerrar con un botón.
 * @returns {JSX.Element} El componente de barra de navegación.
 */
function Navbar() {
  // Estado para indicar si la página ha sido desplazada hacia abajo, usado para cambiar el estilo de la barra de navegación
  const [scrolled, setScrolled] = useState(false);
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [open, setOpen] = useState(false);

  // Efecto para agregar un listener de scroll que actualiza el estado 'scrolled' según la posición de desplazamiento
  useEffect(() => {
    // Función para manejar el evento de scroll, actualiza 'scrolled' a true si se ha desplazado más de 20px, o a false si no
    const onScroll = () => setScrolled(window.scrollY > 20);
    // Agrega el listener de scroll al montar el componente y lo limpia al desmontar para evitar fugas de memoria
    window.addEventListener("scroll", onScroll);
    // Retorna una función de limpieza que elimina el listener de scroll cuando el componente se desmonta
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          Isaías<span>.dev</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.toggle}
          aria-label="Abrir menú"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
