import styles from "../../styles/Footer.module.css";
import { socials } from "../../constants/constants";
import { getCurrentYear } from "../../utils/utils";

function Footer() {
  const year = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; {year} Isaías. Todos los derechos reservados.</p>
        <div className={styles.links}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
