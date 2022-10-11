import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import listsRedux from './listsRedux';
import cardsRedux from './cardsRedux';
import searchStringRedux from './searchStringRedux';
import columnsRedux from './columnsRedux';

//reducers

const subreducers = {
  lists: listsRedux,
  columns: columnsRedux,
  cards: cardsRedux,
  searchString: searchStringRedux,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
