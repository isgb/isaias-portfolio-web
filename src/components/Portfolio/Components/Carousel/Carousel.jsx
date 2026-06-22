import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../../styles/Carousel.module.css";
import { projects } from "../../../../data/projects";

function Carousel() {
  return (
    <div className={styles.carousel}>
      <Swiper
        effect="coverflow"
        centeredSlides
        slidesPerView="auto"
        loop
        grabCursor
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Keyboard]}
        className={styles.swiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className={styles.slide}>
            {({ isActive }) => (
              <article
                className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
              >
                {isActive && (
                  <span className={styles.activeTag}>Proyecto destacado</span>
                )}
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
                  <div className={styles.cardLinks}>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Ver Demo →
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Código →
                    </a>
                  </div>
                </div>
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
