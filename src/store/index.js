import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { defaultState } from './reducer';

const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(reducer, defaultState);

export default store;
