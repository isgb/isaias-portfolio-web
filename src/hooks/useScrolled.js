import { useEffect, useState } from "react";

/**
 * Hook personalizado que indica si la página ha sido desplazada hacia abajo
 * más allá de un umbral, útil para cambiar el estilo de la barra de navegación.
 * @param {number} [threshold=20] - Cantidad de píxeles de scroll a partir de la cual se considera "desplazado".
 * @returns {boolean} `true` si la página está desplazada más allá del umbral.
 */
export function useScrolled(threshold = 20) {

  // Estado para indicar si la página ha sido desplazada hacia abajo
  const [scrolled, setScrolled] = useState(false);

  // Efecto para agregar un listener de scroll que actualiza el estado 'scrolled' según la posición de desplazamiento
  useEffect(() => {
    // Función para manejar el evento de scroll, actualiza 'scrolled' a true si se ha desplazado más del umbral, o a false si no
    const onScroll = () => setScrolled(window.scrollY > threshold);
    // Agrega el listener de scroll al montar el componente y lo limpia al desmontar para evitar fugas de memoria
    window.addEventListener("scroll", onScroll);
    // Retorna una función de limpieza que elimina el listener de scroll cuando el componente se desmonta
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
