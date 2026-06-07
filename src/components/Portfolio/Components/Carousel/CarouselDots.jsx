import styles from '../../../../styles/Carousel.module.css';

function CarouselDots({ projects, activeIndex, goTo }) {
  return (
    <div className={styles.dots} role="tablist" aria-label="Seleccionar proyecto">
      {projects.map((project, index) => (
        <button
          key={project.title}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Ir al proyecto: ${project.title}`}
          className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
          onClick={() => goTo(index)}
        />
      ))}
    </div>
  );
}

export default CarouselDots;
