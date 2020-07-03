import * as types from './actionTypes';

export function setContacts(contacts) {
  return (dispatch) => {
    return dispatch({
      type: types.CONTACTS_CHANGED,
      payload: contacts,
    });
  };
}

export function fetchContacts(fetchContactsApi) {
  return () => (dispatch) => {
    dispatch({ type: types.CONTACTS_CHANGED, payload: [] });
    dispatch({ type: types.CONTACTS_FETCH_REQUEST });
    return fetchContactsApi()
      .then((data) => {
        dispatch({ type: types.CONTACTS_CHANGED, payload: data });
        dispatch({ type: types.CONTACTS_FETCH_SUCCESS });
      })
      .catch((error) =>
        dispatch({
          type: types.CONTACTS_FETCH_FAILURE,
          error,
        }),
      );
  };
}
