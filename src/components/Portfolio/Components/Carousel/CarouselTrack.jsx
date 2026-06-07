import styles from '../../../../styles/Carousel.module.css';

const MAX_VISIBLE_DISTANCE = 2;

const shortestOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
};

function CarouselTrack({ projects, activeIndex, total, goTo }) {
  return (
    <div className={styles.track}>
      {projects.map((project, index) => {
        const offset = shortestOffset(index, activeIndex, total);
        const distance = Math.min(Math.abs(offset), MAX_VISIBLE_DISTANCE);
        const isActive = offset === 0;

        return (
          <article
            key={project.title}
            className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
            style={{ '--offset': offset, '--distance': distance }}
            aria-roledescription="diapositiva"
            aria-label={`Proyecto ${index + 1} de ${total}: ${project.title}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={() => !isActive && goTo(index)}
          >
            {isActive && <span className={styles.activeTag}>Proyecto destacado</span>}
            <div className={styles.thumb} aria-hidden="true">
              <span>{project.title.charAt(0)}</span>
            </div>
            <div className={styles.body}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isActive ? 0 : -1}
                >
                  Ver Demo →
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isActive ? 0 : -1}
                >
                  Código →
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default CarouselTrack;
