import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore
} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  booksReducer
});

const storage = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(rootReducer, storage, applyMiddleware(logger));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
