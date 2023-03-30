import undoable from 'redux-undo';

// The Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (text) => ({
  type: ADD_BOOK,
  payload: text
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id
});
// The reducer
const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.bookId !== action.payload)];

    default:
      return state;
  }
};

const booksReducer = undoable(rootReducer, { limit: 5 });

export default booksReducer;
