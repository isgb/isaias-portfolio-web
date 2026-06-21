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

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <HeroBigWord text="Full Stack" />

      <div className={`container ${styles.content}`}>
        <div className={styles.identity}>
          <HeroStack items={["Frontend", "Backend", "Full Stack"]} />
          <HeroIntro />
          <HeroDescription />
          <HeroActions />
          <HeroSocials socials={socials} />
        </div>

        <HeroPhoto photo={perfilPhoto} alt="Isaías, Full Stack Developer" />
      </div>
    </section>
  );
}

export default Hero;
