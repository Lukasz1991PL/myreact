import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavourites, removeCard } from '../../redux/cardsRedux';

import clsx from 'clsx';

const Card = ({ title, isFavourite, id }) => {
  const dispatch = useDispatch();
  const classChange = () => {
    dispatch(toggleCardFavourites(id));
  };
  const removedCard = () => {
    dispatch(removeCard(id));
  };
  console.log('isFavourite :>> ', isFavourite);
  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          type='button'
          onClick={classChange}
          className={clsx(styles.button_star, isFavourite && styles.active)}
        >
          <span className='fa fa-star-o'></span>
        </button>
        <button
          type='button'
          onClick={removedCard}
          className={styles.button_trash}
        >
          <span className='fa fa-trash'></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
