import { contacts, countriesPhoneCodes } from './fakes';

export function fetchContacts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: contacts });
    }, Math.random() * 200);
  });
}

export function fetchCountriesPhoneCodes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: countriesPhoneCodes });
    }, Math.random() * 200);
  });
}
