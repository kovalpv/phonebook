const { arrayReducer, arrayDefaultState } = require('./arrayReducer');

describe('array reducer', () => {
  it('should return initial state', () => {
    const reducer = arrayReducer({ changed: 'ARRAY_CHANGED' });
    expect(reducer(undefined, {})).toEqual({ data: [] });
  });

  it('should handle ARRAY_CHANGED', () => {
    const reducer = arrayReducer({ changed: 'ARRAY_CHANGED' });

    expect(
      reducer(arrayDefaultState, {
        type: 'ARRAY_CHANGED',
        payload: [1, 2, 3],
      }),
    ).toEqual({ data: [1, 2, 3] });

    expect(
      reducer(arrayDefaultState, {
        type: 'ARRAY_CHANGED',
        payload: [],
      }),
    ).toEqual({ data: [] });
  });

  it('should handle default', () => {
    const reducer = arrayReducer({ changed: 'ARRAY_CHANGED' });
    expect(reducer(arrayDefaultState, { type: 'OTHER_ACTION' })).toEqual({
      data: [],
    });
  });
});
