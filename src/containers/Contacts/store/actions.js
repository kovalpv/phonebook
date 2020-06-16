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
import { fetchRequestAction } from '../../../common';

const setContacts = (contacts) => ({
  type: PHONE_BOOK_CONTACTS_CHANGED,
  payload: contacts,
});

const setCountriesCodes = (countriesPhoneCodes) => ({
  type: PHONE_BOOK_COUNTRIES_PHONE_CODES_CHANGED,
  payload: countriesPhoneCodes,
});

export const fetchContacts = (fetchContactsApi) => () => {
  return fetchRequestAction({
    api: fetchContactsApi,
    request: PHONE_BOOK_CONTACTS_REQUEST,
    success: PHONE_BOOK_CONTACTS_SUCCESS,
    failure: PHONE_BOOK_CONTACTS_FAILURE,
    initialValue: setContacts([]),
    setValue: (contracts) => setContacts(contracts),
  });
};

export const fetchCountriesPhoneCodes = (fetchCountriesPhoneCodesApi) => () => {
  return fetchRequestAction({
    api: fetchCountriesPhoneCodesApi,
    request: PHONE_BOOK_COUNTRIES_PHONE_CODES_REQUEST,
    success: PHONE_BOOK_COUNTRIES_PHONE_CODES_SUCCESS,
    failure: PHONE_BOOK_COUNTRIES_PHONE_CODES_FAILURE,
    initialValue: setCountriesCodes([]),
    setValue: (countriesPhoneCodes) => setCountriesCodes(countriesPhoneCodes),
  });
};
