import getContactsError from './getContactsError';

describe('Contacts selector getContactsError', () => {
  it('should return error from state', () => {
    const state = {
      contacts: {
        error: new Error('500 Internal Error'),
      },
    };

    expect(getContactsError(state)).toEqual(new Error('500 Internal Error'));
  });
});
