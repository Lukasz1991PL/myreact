import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId &&
      //card.title.toLowerCase().includes(searchString.toLowerCase())
      strContains(card.title, searchString)
  );
export const getFilteredFavoriteCards = ({ cards }) => {
  console.log('chech cards', cards);
  return cards.filter((card) => card.isFavourite === true);
};

//actions
const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

//action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const toggleCardFavourites = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};
export default cardsReducer;
