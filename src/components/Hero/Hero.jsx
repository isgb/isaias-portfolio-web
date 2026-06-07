import styles from "../../styles/Hero.module.css";
import perfilPhoto from "../../assets/images/perfil.jpg";
import { socials } from "../../constants/constants";
import HeroSocials from "./Components/HeroSocials";
import HeroPhoto from "./Components/HeroPhoto";
import HeroIntro from "./Components/HeroIntro";
import HeroDescription from "./Components/HeroDecription";
import HeroActions from "./Components/HeroActions";

/**
 * Componente de sección de héroe que presenta al desarrollador con una foto, un saludo, una breve descripción y enlaces a redes sociales.
 * El diseño utiliza un enfoque de tarjeta de vidrio para la foto y un estilo moderno para el texto y los enlaces.
 * @returns {JSX.Element} El componente de sección de héroe.
 */
function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          {/* Componente de introducción del héroe que muestra un saludo y el nombre. */}
          <HeroIntro />
          {/* Componente de descripción del héroe que muestra una breve introducción */}
          <HeroDescription />
          {/* Componente de acciones del héroe que muestra botones para Ver Proyectos y Contactarme */}
          <HeroActions />
          {/* Componente de redes sociales del héroe que muestra enlaces a las redes sociales */}
          <HeroSocials socials={socials} />
        </div>

        {/* Componente de foto del héroe que muestra la foto de perfil con un diseño de tarjeta de vidrio. */}
        <HeroPhoto photo={perfilPhoto} alt="Isaías, Full Stack Developer" />
      </div>
    </section>
  );
}

export default Hero;
