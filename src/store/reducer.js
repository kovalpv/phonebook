import { combineReducers } from 'redux';
import { contactsReducer, contactsDefaultState } from '../containers/Contacts';

export const defaultState = {
  ...contactsDefaultState,
};

export default combineReducers({
  contacts: contactsReducer,
});
