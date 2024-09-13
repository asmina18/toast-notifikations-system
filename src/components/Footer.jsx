import { NavLink } from "react-router-dom";
import style from "../styles/LayoutStyles.module.scss";

export function Footer() {
  return (
    <footer className={style.appFooter}>
      <div className={style.footerContainer}>
        <p>© 2024 Min Applikation. Alle rettigheder forbeholdes.</p>
        <nav className={style.footerNavigation}>
          <NavLink to="/privacy" className={style.footerLink}>Privatlivspolitik</NavLink>
          <NavLink to="/terms" className={style.footerLink}>Vilkår og Betingelser</NavLink>
          <NavLink to="/contact" className={style.footerLink}>Kontakt</NavLink>
        </nav>
      </div>
    </footer>
  );
}


