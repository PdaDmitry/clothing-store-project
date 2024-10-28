import { Link } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.contRout}>
      <div>Routing</div>
      <nav>
        <ul className={css.contUl}>
          <li>
            <Link to="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={css.link}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
