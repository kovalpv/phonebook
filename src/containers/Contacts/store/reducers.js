import reduceReducers from 'reduce-reducers';
import { combineReducers } from 'redux';
import {
  PHONE_BOOK_CONTACTS_CHANGED,
  PHONE_BOOK_CONTACTS_REQUEST,
  PHONE_BOOK_CONTACTS_SUCCESS,
  PHONE_BOOK_CONTACTS_FAILURE,
  PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED,
  PHONE_BOOK_COUNTRIES_PHONE_CODES_REQUEST,
  PHONE_BOOK_COUNTRIES_PHONE_CODES_SUCCESS,
  PHONE_BOOK_COUNTRIES_PHONE_CODES_FAILURE,
} from './types';
import {
  requestReducer,
  requestDefaultState,
  arrayDefaultState,
  arrayReducer,
} from '../../../common/reducers';

export const defaultState = {
  ...requestDefaultState,
  ...arrayDefaultState,
};

const contractsRequest = requestReducer({
  request: PHONE_BOOK_CONTACTS_REQUEST,
  success: PHONE_BOOK_CONTACTS_SUCCESS,
  failure: PHONE_BOOK_CONTACTS_FAILURE,
});

const contracts = arrayReducer({ changed: PHONE_BOOK_CONTACTS_CHANGED });

const countriesCodesRequest = requestReducer({
  request: PHONE_BOOK_COUNTRIES_PHONE_CODES_REQUEST,
  success: PHONE_BOOK_COUNTRIES_PHONE_CODES_SUCCESS,
  failure: PHONE_BOOK_COUNTRIES_PHONE_CODES_FAILURE,
});

const countriesCodes = arrayReducer({
  changed: PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED,
});

export default combineReducers({
  contracts: reduceReducers({ ...defaultState }, contractsRequest, contracts),
  countriesCodes: reduceReducers(
    { ...defaultState },
    countriesCodesRequest,
    countriesCodes,
  ),
});
