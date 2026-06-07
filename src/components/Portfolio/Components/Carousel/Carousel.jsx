import styles from "../../../../styles/Carousel.module.css";
import { projects } from "../../../../data/projects";
import CarouselTrack from "./CarouselTrack";
import CarouselDots from "./CarouselDots";
import CarouselNavButton from "./CarouselNavButton";
import { useCarousel } from "../../../../hooks/useCarousel";

/**
 * Componente de carrusel para mostrar proyectos destacados en la sección de portafolio.
 * Permite navegar entre proyectos usando botones, teclado y gestos táctiles.
 * @returns {JSX.Element} El componente de carrusel.
 */
function Carousel() {
  // Estado y manejadores de navegación del carrusel encapsulados en un hook personalizado
  const {
    activeIndex,
    total,
    active,
    goTo,
    goPrev,
    goNext,
    handleKeyDown,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(projects);

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
        {/* Componente de botón de navegación del carrusel para ir al proyecto anterior, 
          con un icono de flecha y una etiqueta accesible. */}
        <CarouselNavButton
          direction="prev"
          onClick={goPrev}
          label="Proyecto anterior"
          icon="‹"
        />

          {/* Componente de pista del carrusel para mostrar los proyectos. */}
          <CarouselTrack
            projects={projects}
            activeIndex={activeIndex}
            total={total}
            goTo={goTo}
          />

        {/* Componente de botón de navegación del carrusel para ir al 
          siguiente proyecto, con un icono de flecha y una etiqueta accesible. */}
        <CarouselNavButton
          direction="next"
          onClick={goNext}
          label="Siguiente proyecto"
          icon="›"
        />
      </div>

      {/* Componente de puntos de navegación del carrusel, 
         que muestra un punto por cada proyecto y permite navegar 
         a un proyecto específico al hacer clic en su punto correspondiente. */}
      <CarouselDots projects={projects} activeIndex={activeIndex} goTo={goTo} />

      <p className={styles.srStatus} aria-live="polite">
        Mostrando proyecto {activeIndex + 1} de {total}: {active.title}
      </p>
    </div>
  );
}

export default Carousel;
