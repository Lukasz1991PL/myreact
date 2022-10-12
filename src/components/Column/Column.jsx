import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
const Column = ({ icon, id, title }) => {
  const cards = useSelector((state) => getFilteredCards(state, id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon}></span>
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
