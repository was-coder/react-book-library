import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Form = ({ book }) => (
  <>
    <div className="form-container">
      <h2 className="form-header">Add New Book</h2>
      <form action="POST" id="form" className="form">
        <div className="form-group">
          <label htmlFor={book.title} className="form-label">
            Title:
            <input
              type="text"
              id={book.title}
              name={book.name}
              value={book.value}
              placeholder="Enter Title of book here..."
              className="form-input"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor={book.author} className="form-label">
            Author:
            <input
              type="text"
              id={book.author}
              name={book.name}
              value={book.value}
              placeholder="Enter Author of book here..."
              className="form-input"
            />
          </label>
        </div>

        <div className="form-btn">
          <NavLink className="btn link">Add Book</NavLink>
        </div>
      </form>
    </div>
  </>
);

Form.defaultProps = {
  book: ''
};

Form.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default Form;
