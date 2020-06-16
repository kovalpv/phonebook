import { combineReducers } from 'redux';
import { contactsReducer, contractsDefaultState } from '../containers/Contacts';

export const defaultState = {
  contracts: contractsDefaultState,
};

export default combineReducers({
  contacts: contactsReducer,
});
