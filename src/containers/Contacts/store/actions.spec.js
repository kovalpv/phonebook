import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import * as types from './actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Contacts setContacts', () => {
  it('should creates CONTACTS_CHANGED when setContacts', () => {
    const expectedActions = {
      type: types.CONTACTS_CHANGED,
      payload: [1, 2, 3],
    };
    const store = mockStore({ contacts: [] });

    expect(store.dispatch(actions.setContacts([1, 2, 3]))).toEqual(
      expectedActions,
    );
  });
});

describe('Contacts fetchContacts', () => {
  it('should creates actions chain when fetchContacts is successfully', () => {
    const expectedActions = [
      {
        type: types.CONTACTS_CHANGED,
        payload: [],
      },
      {
        type: types.CONTACTS_FETCH_REQUEST,
      },
      {
        type: types.CONTACTS_CHANGED,
        payload: [0, 1],
      },
      {
        type: types.CONTACTS_FETCH_SUCCESS,
      },
    ];

    const store = mockStore({
      items: [],
      fetching: false,
      error: null,
    });

    const fetchContactsApi = () => Promise.resolve([0, 1]);
    return store
      .dispatch(actions.fetchContacts(fetchContactsApi)())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create actions chain when fetchContacts failed', () => {
    const expectedActions = [
      {
        type: types.CONTACTS_CHANGED,
        payload: [],
      },
      {
        type: types.CONTACTS_FETCH_REQUEST,
      },
      {
        type: types.CONTACTS_FETCH_FAILURE,
        error: new Error('500 Internal Server Error'),
      },
    ];
    const fetchContactsApi = () =>
      Promise.reject(new Error('500 Internal Server Error'));

    const store = mockStore({
      items: [],
      fetching: false,
      error: null,
    });

    return store
      .dispatch(actions.fetchContacts(fetchContactsApi)())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
