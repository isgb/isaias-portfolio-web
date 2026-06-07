import styles from "../../styles/Hero.module.css";
import perfilPhoto from "../../assets/images/perfil.jpg";
import { socials } from "../../constants/constants";
import HeroSocials from "./Components/HeroSocials";
import HeroBigWord from "./Components/HeroBigWord";
import HeroStack from "./Components/HeroStack";
import HeroPhoto from "./Components/HeroPhoto";
import HeroIntro from "./Components/HeroIntro";
import HeroDescription from "./Components/HeroDecription";
import HeroActions from "./Components/HeroActions";

/**
 * Componente de sección de héroe que presenta al desarrollador como un cartel editorial:
 * una palabra de fondo a gran escala, una lista vertical de especialidades, la foto de
 * perfil, una firma tipográfica superpuesta y los enlaces a redes sociales en la esquina.
 * @returns {JSX.Element} El componente de sección de héroe.
 */
function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.poster}>
          {/* Palabra de fondo a gran escala, estilo cartel editorial */}
          <HeroBigWord text="Full Stack" />

          {/* Lista vertical de especialidades sobre el borde izquierdo */}
          <HeroStack items={["Front", "Back", "Full"]} />

          {/* Componente de foto del héroe que muestra la foto de perfil con un diseño de tarjeta de vidrio. */}
          <HeroPhoto photo={perfilPhoto} alt="Isaías, Full Stack Developer" />

          {/* Firma tipográfica superpuesta a la foto, estilo cartel editorial */}
          <HeroIntro />

          {/* Redes sociales sobre la esquina inferior de la composición */}
          <div className={styles.cornerSocials}>
            <HeroSocials socials={socials} />
          </div>
        </div>

        <div className={styles.text}>
          {/* Componente de descripción del héroe que muestra una breve introducción */}
          <HeroDescription />
          {/* Componente de acciones del héroe que muestra botones para Ver Proyectos y Contactarme */}
          <HeroActions />
        </div>
      </div>
    </section>
  );
}

export default Hero;
