import { useSelector } from 'react-redux';
import styles from '../Lists/Lists.module.scss';
import { Link } from 'react-router-dom';
import ListForm from '../ListForm/ListForm';

export const Lists = () => {
  const lists = useSelector((state) => state.lists);
  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map((list) => {
        return (
          <Link
            key={list.id}
            to={`/list/${list.id}`}
            className={styles.listLink}
          >
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </Link>
        );
      })}
      <ListForm />
    </section>
  );
};
