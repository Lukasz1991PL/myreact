import { Container } from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  <nav className={styles.navbar}>
    <Container>
      <a href='/'>
        <i className='fa fa-tasks'></i>
      </a>
      <ul>
        <li>
          {/* <NavLink className={({isActive)} => ? styles.linkActive : undefined} to='/'>Home</Navlink> */}
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/favourite'>Favourite</Link>
        </li>
      </ul>
    </Container>
  </nav>;
};
