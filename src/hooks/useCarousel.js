import { useCallback, useRef, useState } from "react";
import { SWIPE_THRESHOLD } from "../constants/constants";
import { getTotalProjects } from "../utils/utils";

/**
 * Hook personalizado que encapsula el estado y los manejadores de navegación del carrusel
 * (índice activo, navegación circular, teclado y gestos táctiles).
 * @param {Array} projects - Lista de proyectos a mostrar en el carrusel.
 * @returns {{ activeIndex: number, total: number, active: object, goTo: Function, goPrev: Function, goNext: Function, handleKeyDown: Function, handleTouchStart: Function, handleTouchEnd: Function }}
 */
export function useCarousel(projects) {

  // Índice del proyecto actualmente activo en el carrusel
  const [activeIndex, setActiveIndex] = useState(0);
  // Referencia para almacenar la posición inicial del toque en dispositivos táctiles
  const touchStartX = useRef(null);

  // Total de proyectos en el carrusel, usado para calcular índices de navegación
  const total = getTotalProjects(projects);

  // Función para navegar a un índice específico, con manejo de wrap-around
  const goTo = useCallback((index) => {
    // Calcula el índice correcto usando módulo para permitir navegación circular
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  // Funciones para navegar al proyecto anterior o siguiente, usando goTo con índices ajustados
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  // Función para navegar al siguiente proyecto, incrementando el índice actual
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Manejadores de eventos para navegación por teclado y gestos táctiles
  const handleKeyDown = (event) => {
    // Permite navegar con las flechas izquierda y derecha, previniendo el comportamiento por defecto
    if (event.key === "ArrowLeft") {
      // Previene el desplazamiento de la página al usar las flechas
      event.preventDefault();
      // Navega al proyecto anterior
      goPrev();
      // Si se presiona la flecha derecha, navega al siguiente proyecto
    } else if (event.key === "ArrowRight") {
      // Previene el desplazamiento de la página al usar las flechas
      event.preventDefault();
      // Navega al siguiente proyecto
      goNext();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  const active = projects[activeIndex];

  return {
    activeIndex,
    total,
    active,
    goTo,
    goPrev,
    goNext,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
  };
}
