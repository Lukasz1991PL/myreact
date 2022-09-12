import styles from './List.module.scss';
import Column from '../Column/Column';
const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.header}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <Column title='Books' />
      <Column title='Movies' />
      <Column title='Games' />
    </div>
  );
};
export default List;
