import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.flexHeader}`}>
        <Link to={'/'}>
          <h2 className={css.navLink}>Logo</h2>
        </Link>
        <nav>
          <NavLink className={css.navLink} to='/'>
            Home
          </NavLink>
          <NavLink className={css.navLink} to='/tours'>
            Tours
          </NavLink>
          <NavLink className={css.navLink} to='/about'>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
