import reducer from './reducer';

const defaultState = {};

describe('Reducer', () => {
  it('should return default state', () => {
    const state = reducer(undefined, { type: '@@redux/INIT' });
    expect(state).toEqual(defaultState);
  });
});
