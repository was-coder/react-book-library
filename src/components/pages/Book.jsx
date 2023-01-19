// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Book = ({ book }) => (
  <>
    <div className="booklist-div">
      <div>
        <h2 className="booklist-h2">{book.title}</h2>
        <span className="booklist-span">{book.author}</span>
      </div>

      <div>
        <NavLink className="btn link" id={book.id}>
          Remove Book
        </NavLink>
      </div>
    </div>
  </>
);

Book.defaultProps = {
  book: ''
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default Book;
