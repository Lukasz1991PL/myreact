import initialState from './initialState';
import { strContains } from '../utils/strContains';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';
import columnsReducer from './columnsReducer';

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
export const getAllColumns = (state) => {
  return state.columns;
};

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => {
  return state.lists;
};

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const toggleCardFavourites = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
