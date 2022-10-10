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
        <button type='button' onClick={removedCard}>
          <span className='fa fa-trash'></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
