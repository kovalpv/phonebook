import reducer from './reducer';

const defaultState = {
  contacts: {
    fetching: false,
    items: [],
    error: null,
  },
};

describe('Reducer', () => {
  it('should return default state', () => {
    const state = reducer(undefined, { type: '@@redux/INIT' });
    expect(state).toEqual(defaultState);
  });
});
