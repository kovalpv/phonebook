import { requestReducer, requestDefaultState } from './requestReducer';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function initialReducer() {
  return requestReducer({
    request: REQUEST,
    success: SUCCESS,
    failure: FAILURE,
  });
}

describe('request reducer', () => {
  it('should return initial state', () => {
    const reducer = initialReducer();
    const state = reducer(undefined, {});
    expect(state).toEqual({
      fetch: false,
      error: null,
    });
  });

  it('should handle on REQUEST', () => {
    const reducer = initialReducer();
    const state = reducer(requestDefaultState, { type: REQUEST });
    expect(state).toEqual({
      fetch: true,
      error: null,
    });
  });

  it('should handle on SUCCESS', () => {
    const reducer = initialReducer();
    const state = reducer(requestDefaultState, { type: SUCCESS });
    expect(state).toEqual({
      fetch: false,
      error: null,
    });
  });

  it('should handle on FAILURE', () => {
    const reducer = initialReducer();
    const state = reducer(requestDefaultState, {
      type: FAILURE,
      error: 'ERROR: method not found',
    });
    expect(state).toEqual({
      fetch: false,
      error: 'ERROR: method not found',
    });
  });
});
