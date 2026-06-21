import styles from '../../../styles/Hero.module.css';

function HeroIntro() {
  return (
    <div className={styles.signature}>
      <span className={styles.tag}>Full Stack Developer</span>
      <h1 className={styles.splitName}>
        <span>Isa</span>
        <span>ías</span>
      </h1>
    </div>
  );
}

export default HeroIntro;
