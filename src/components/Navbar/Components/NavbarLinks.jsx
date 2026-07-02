import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import styles from "../../../styles/Navbar.module.css";

function NavbarLinks({ links, open, onLinkClick }) {
  const handleCVClick = (e) => {
    e.preventDefault();
    window.open('/isaias-portfolio-web/cv/CV_Isaias_Gaona.pdf', '_blank');
    onLinkClick();
  };

  return (
    <nav className={`${styles.links} ${open ? styles.open : ""}`}>
      {links.map((link) =>
        link.isCV ? (
          <button
            key={link.label}
            onClick={handleCVClick}
            className={styles.cvLink}
            aria-label={link.label}
          >
            <HiOutlineArrowDownTray />
            {link.label}
          </button>
        ) : (
          <a key={link.href} href={link.href} onClick={onLinkClick}>
            {link.label}
          </a>
        )
      )}
    </nav>
  );
}

export default NavbarLinks;
