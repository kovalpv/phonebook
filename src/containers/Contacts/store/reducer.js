import * as types from './actionTypes';

export const defaultState = {
  fetching: false,
  items: [],
  error: null,
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.CONTACTS_FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
      };
    case types.CONTACTS_FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case types.CONTACTS_CHANGED:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
