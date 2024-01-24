import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  console.log('isMenuActive ===', isMenuActive);

  return (
    <header className={css.header}>
      <div className={`container ${css.flexHeader} ${isMenuActive ? css.menuActive : ''}`}>
        <Link to={'/'}>
          <h2 className={css.navLink}>Logo</h2>
        </Link>
        <nav className={`mainNav ${isMenuActive ? 'menuActive' : ''}`}>
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
        <button onClick={() => setIsMenuActive(!isMenuActive)} className='burger'>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </button>
      </div>
    </header>
  );
}
