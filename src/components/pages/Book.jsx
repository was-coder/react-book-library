// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { bookId, title, author } = book;

  return (
    <>
      <div className="booklist-div">
        <div>
          <h2 className="booklist-h2">{title}</h2>
          <span className="booklist-span">{author}</span>
        </div>
        <NavLink
          className="btn link"
          onClick={() => dispatch(removeBook(bookId))}
        >
          Remove Book
        </NavLink>
      </div>
    </>
  );
};

Book.defaultProps = {
  book: []
};

Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  )
};

// const mapDispatchToProps = (dispatch) => ({
//   deleteBook: (id) => dispatch(removeBook(id))
// });

export default Book;
