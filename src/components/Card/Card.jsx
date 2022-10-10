import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavourites } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({ title, isFavourite, id }) => {
  const dispatch = useDispatch();
  const classChange = () => {
    console.log('click2');
    dispatch(toggleCardFavourites(id));
  };
  console.log('title, isFavourite, id :>> ', title, isFavourite, id);
  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          type='button'
          onClick={classChange}
          className={clsx(isFavourite && styles.active)}
        >
          <span className='fa fa-star-o'></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
