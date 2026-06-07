import styles from "../../../styles/Hero.module.css";

/**
 * Componente de redes sociales del héroe que muestra enlaces a las diferentes plataformas.
 * @param {Array} socials - Un array de objetos que representan las redes sociales.
 * @returns {JSX.Element} El componente de redes sociales del héroe.
 */
function HeroSocials({ socials }) {
  return (
    <div className={styles.socials}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className={styles.socialLink}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default HeroSocials;
