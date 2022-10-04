import { PageTitle } from '../PageTitle/PageTitle';
import styles from '../Favourite/Favourite.scss';
export const Favourite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Favourite</PageTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam
        culpa iste autem, eum incidunt dolor, explicabo quia ab atque sapiente
        doloribus esse maiores sint necessitatibus repudiandae quibusdam dolorem
        inventore!
      </p>
    </div>
  );
};
