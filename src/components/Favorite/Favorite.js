import { PageTitle } from '../PageTitle/PageTitle';
import styles from '../Favorite/Favorite.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFilteredFavoriteCards } from '../../redux/cardsRedux';
export const Favorite = () => {
  const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));
  console.log(favoriteCards);

  if (favoriteCards.lenght === 0)
    return (
      <div className={styles.hero}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>There is no card!</p>
      </div>
    );

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.cardsWrapper}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              isFavorite={card.isFavorite}
              title={card.title}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};
export default Favorite;
