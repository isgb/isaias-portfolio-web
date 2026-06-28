import styles from "../../styles/ScrollToTop.module.css";
import { useScrolled } from "../../hooks/useScrolled";

function ScrollToTop() {
  const visible = useScrolled(400);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      onClick={handleClick}
      aria-label="Volver arriba"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.arrow}
      >
        <path d="M12 5v14M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

export default ScrollToTop;
