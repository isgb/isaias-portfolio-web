import styles from "../../../styles/Hero.module.css";

/**
 * Componente de foto del héroe que muestra la foto de perfil con un diseño de tarjeta de vidrio.
 * Recibe la foto y el texto alternativo como props, y utiliza estilos para crear un efecto de brillo alrededor de la foto, así como una insignia que destaca los años de experiencia del desarrollador.
 * El diseño es moderno y atractivo, con un enfoque en la presentación visual de la foto de perfil del desarrollador.
 * @param {string} photo - La URL de la foto de perfil a mostrar.
 * @param {string} alt - El texto alternativo para la imagen, utilizado para accesibilidad y SEO.
 * @returns {JSX.Element} El componente de foto del héroe.
 */
function HeroPhoto({ photo, alt }) {
  return (
    <div className={styles.photoWrapper}>
      <div className={styles.glow} />
      <div className={styles.photoFrame}>
        <img src={photo} alt={alt} className={styles.avatar} />
      </div>
      {/* <div className={styles.badge}>
        <strong>+6</strong>
        <span>años de experiencia</span>
      </div> */}
    </div>
  );
}

export default HeroPhoto;
