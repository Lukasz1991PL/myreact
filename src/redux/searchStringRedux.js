//actions
const createActionName = (actionName) => `app/searchstring/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

export const updateSearchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

// action creator
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
export default searchStringReducer;
