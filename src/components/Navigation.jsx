
import { NavLink } from 'react-router-dom';
import style from "../styles/LayoutStyles.module.scss";

export const Navigation = () => {
  return (
    <header className={style.appHeader}>
      <div className={style.headerContainer}>
        <h1 className={style.logo}>Min Applikation</h1>
        <nav>
          <ul className={style.navList}>
            <li>
              <NavLink to="/hjem" className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}>
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}>
                Om Os
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? `${style.navLink} ${style.active}` : style.navLink}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};



