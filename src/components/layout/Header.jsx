import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.flexHeader}`}>
        <Link to={'/'}>
          <h2>Logo</h2>
        </Link>
        <nav>
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/about'> About</NavLink>
        </nav>
      </div>
    </header>
  );
}
