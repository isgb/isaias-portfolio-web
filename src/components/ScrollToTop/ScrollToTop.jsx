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
      ↑
    </button>
  );
}

export default ScrollToTop;
