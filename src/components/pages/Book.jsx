// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book }) => (
  <>
    <div className="booklist-div">
      <h2 className="booklist-h2">{book.title}</h2>
      <span className="booklist-span">{book.author}</span>
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
