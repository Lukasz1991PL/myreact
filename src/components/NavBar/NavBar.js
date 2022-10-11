import { Container } from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <a href='/'>
            <i className='fa fa-tasks'></i>
          </a>
          <ul className={styles.navbar_items}>
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
                to='/favorite'
              >
                Favorite
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
          </ul>
        </div>
      </Container>
    </nav>
  );
};
