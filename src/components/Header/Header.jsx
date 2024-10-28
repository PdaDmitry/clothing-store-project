import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
  return (
    <header className={css.contRout}>
      <div>Routing</div>
      <nav>
        <ul className={css.contUl}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={buildLinkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
