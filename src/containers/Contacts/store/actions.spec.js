import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import * as types from './types';

const mockStore = configureStore([thunk]);

describe('fetchContacts', () => {
  it('should create PHONE_BOOK_CONTACTS_SUCCESS and empty array when fetching contacts has been done', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const expectedActions = [
      { type: types.PHONE_BOOK_CONTACTS_CHANGED, payload: [] },
      { type: types.PHONE_BOOK_CONTACTS_REQUEST },
      { type: types.PHONE_BOOK_CONTACTS_SUCCESS },
      { type: types.PHONE_BOOK_CONTACTS_CHANGED, payload: [] },
    ];

    const fetchContactsApi = () =>
      new Promise((resolve) => resolve({ data: [] }));
    const fetchContacts = actions.fetchContacts(fetchContactsApi);

    return store.dispatch(fetchContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create PHONE_BOOK_CONTACTS_FAILURE when fetching contacts has been failure', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const expectedActions = [
      { type: types.PHONE_BOOK_CONTACTS_CHANGED, payload: [] },
      { type: types.PHONE_BOOK_CONTACTS_REQUEST },
      {
        type: types.PHONE_BOOK_CONTACTS_FAILURE,
        error: '500 Internal Server Error',
      },
    ];

    const fetchContactsApi = () =>
      new Promise((resolve, reject) => reject('500 Internal Server Error'));
    const fetchContacts = actions.fetchContacts(fetchContactsApi);

    return store.dispatch(fetchContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchCountriesPhoneCodes', () => {
  it('should create PHONE_BOOK_COUNTRIES_PHONE_CODES_SUCCESS and empty array when fetching contacts has been done ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const expectedActions = [
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED, payload: [] },
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_REQUEST },
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_SUCCESS },
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED, payload: [] },
    ];
    const fetchCountriesPhoneCodesApi = () =>
      new Promise((resolve) => resolve({ data: [] }));
    const fetchCountriesPhoneCodes = actions.fetchCountriesPhoneCodes(
      fetchCountriesPhoneCodesApi,
    );

    return store.dispatch(fetchCountriesPhoneCodes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create PHONE_BOOK_COUNTRIES_PHONE_CODES_FAILURE when fetching countriesCodes has been failure', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const expectedActions = [
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED, payload: [] },
      { type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_REQUEST },
      {
        type: types.PHONE_BOOK_COUNTRIES_PHONE_CODES_FAILURE,
        error: '500 Internal Server Error',
      },
    ];

    const fetchCountriesPhoneCodesApi = () =>
      new Promise((resolve, reject) => reject('500 Internal Server Error'));
    const fetchCountriesPhoneCodes = actions.fetchCountriesPhoneCodes(fetchCountriesPhoneCodesApi);

    return store.dispatch(fetchCountriesPhoneCodes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
