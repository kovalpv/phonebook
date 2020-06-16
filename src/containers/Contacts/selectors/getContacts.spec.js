import getContacts from './getContacts';

describe('getContract Selection', () => {
  it('should return array of contacts', () => {
    const state = {
      contacts: {
        data: [1, 2, 3],
      },
    };
    const contacts = getContacts(state);
    expect(contacts).toEqual([1, 2, 3]);
  });
});
