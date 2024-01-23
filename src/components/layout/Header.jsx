import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={'/'}>
        <h2>Logo</h2>
      </Link>
      <nav>
        <NavLink to='/'> Home</NavLink>
        <NavLink to='/about'> About</NavLink>
      </nav>
    </header>
  );
}
