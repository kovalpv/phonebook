import getContacts from './getContacts';

describe('Contacts selector getContacts', () => {
  it('should return array of contacts', () => {
    const state = {
      contacts: {
        items: [],
      },
    };

    expect(getContacts(state)).toEqual([]);
  });
});
