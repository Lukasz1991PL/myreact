import { Container } from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <a href='/'>
          <i className='fa fa-tasks'></i>
        </a>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/favourites'
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
