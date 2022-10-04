import { Container } from '../Container/Container';
import styles from './NavBar.module.scss';
export const NavBar = () => {
  <nav className={styles.navbar}>
    <Container>
      <a href='/'>
        <i className='fa fa-tasks'></i>
      </a>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/favourite'>Favourite</a>
        </li>
      </ul>
    </Container>
  </nav>;
};
