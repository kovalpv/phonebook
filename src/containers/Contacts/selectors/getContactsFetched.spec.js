import getContactsFetched from './getContactsFetched';

describe('Contacts selector getContactsFetched', () => {
  it('should return fetched when contacts get from server', () => {
    const state = {
      contacts: {
        fetched: true,
      },
    };

    expect(getContactsFetched(state)).toBeTruthy();
  });
});
