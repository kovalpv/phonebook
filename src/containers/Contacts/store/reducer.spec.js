import reducer from './reducer';
import * as types from './actionTypes';

const initialAction = { type: '@@redux/INIT' };

describe('Contacts reducer', () => {
  it('should return default state reducer', () => {
    const state = reducer(undefined, initialAction);
    expect(state).toEqual({
      items: [],
      fetching: false,
      error: null,
    });
  });

  it('should `fetching` && `error` updated when CONTACTS_FETCH_REQUEST', () => {
    const state = reducer(
      {
        items: [1],
        fetching: false,
        error: new Error('error'),
      },
      {
        type: types.CONTACTS_FETCH_REQUEST,
      },
    );
    expect(state).toEqual(
      expect.objectContaining({
        fetching: true,
        error: null,
      }),
    );
  });

  it('should `fetching` && `error` updated when CONTACTS_FETCH_SUCCESS', () => {
    const state = reducer(
      {
        items: [1, 2],
        fetching: true,
        error: 'error',
      },
      { type: types.CONTACTS_FETCH_SUCCESS },
    );
    expect(state).toEqual(
      expect.objectContaining({
        fetching: false,
        error: 'error',
      }),
    );
  });

  it('should `fetching` && `error` updated when CONTACTS_FETCH_FAILURE', () => {
    const state = reducer(
      {
        items: [0],
        fetching: true,
        error: null,
      },
      {
        type: types.CONTACTS_FETCH_FAILURE,
        error: new Error('oops something went wrong please try again later'),
      },
    );

    expect(state).toEqual(
      expect.objectContaining({
        fetching: false,
        error: new Error('oops something went wrong please try again later'),
      }),
    );
  });

  it('should `items` updated when action type CONTACTS_CHANGED', () => {
    const state = reducer(
      {
        items: [],
      },
      {
        type: types.CONTACTS_CHANGED,
        payload: [1, 2, 3],
      },
    );
    expect(state).toEqual(
      expect.objectContaining({
        items: [1, 2, 3],
      }),
    );
  });
});
