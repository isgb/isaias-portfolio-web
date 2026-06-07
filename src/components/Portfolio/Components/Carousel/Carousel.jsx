import { useCallback, useRef, useState } from "react";
import styles from "../../../../styles/Carousel.module.css";
import { projects } from "../../../../data/projects";
import CarouselTrack from "./CarouselTrack";
import CarouselDots from "./CarouselDots";
import CarouselNavButton from "./CarouselNavButton";

// Umbral mínimo de desplazamiento para considerar un gesto como swipe
const SWIPE_THRESHOLD = 45;
// Total de proyectos en el carrusel, usado para calcular índices de navegación
const total = projects.length;

/**
 * Componente de carrusel para mostrar proyectos destacados en la sección de portafolio.
 * Permite navegar entre proyectos usando botones, teclado y gestos táctiles.
 * @returns {JSX.Element} El componente de carrusel.
 */
function Carousel() {
  // Índice del proyecto actualmente activo en el carrusel
  const [activeIndex, setActiveIndex] = useState(0);
  // Referencia para almacenar la posición inicial del toque en dispositivos táctiles
  const touchStartX = useRef(null);

  // Función para navegar a un índice específico, con manejo de wrap-around
  const goTo = useCallback((index) => {
    // Calcula el índice correcto usando módulo para permitir navegación circular
    setActiveIndex(((index % total) + total) % total);
  }, []);

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

  return (
    <div className={styles.carousel}>
      <div
        className={styles.viewport}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Proyectos destacados"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselNavButton
          direction="prev"
          onClick={goPrev}
          label="Proyecto anterior"
          icon="‹"
        />

        <CarouselTrack
          projects={projects}
          activeIndex={activeIndex}
          total={total}
          goTo={goTo}
        />

        <CarouselNavButton
          direction="next"
          onClick={goNext}
          label="Siguiente proyecto"
          icon="›"
        />
      </div>

      <CarouselDots 
        projects={projects} 
        activeIndex={activeIndex} 
        goTo={goTo} 
      />

      <p className={styles.srStatus} aria-live="polite">
        Mostrando proyecto {activeIndex + 1} de {total}: {active.title}
      </p>
    </div>
  );
}

export default Carousel;
