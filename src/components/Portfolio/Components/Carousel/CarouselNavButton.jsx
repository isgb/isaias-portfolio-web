import styles from '../../../../styles/Carousel.module.css';

function CarouselNavButton({ direction, onClick, label, icon }) {
  const directionClass = direction === 'prev' ? styles.navPrev : styles.navNext;

  return (
    <button
      type="button"
      className={`${styles.nav} ${directionClass}`}
      onClick={onClick}
      aria-label={label}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}

export default CarouselNavButton;
