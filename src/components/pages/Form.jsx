import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [newBook, setnewBook] = useState({
    bookId: nanoid(),
    title: '',
    author: ''
  });
  const dispatch = useDispatch();
  const { bookId, title, author } = newBook;

  const handleSubmit = (e) => {
    e.preventDefault();
    // getBook(state);
    dispatch(addBook(newBook));
    setnewBook((prevBook) => ({
      ...prevBook,
      bookId: '',
      title: '',
      author: ''
    }));
  };

  const handleBook = ({ target: { value, name } }) => {
    setnewBook((prevBook) => ({
      ...prevBook,
      bookId: nanoid(),
      [name]: value
    }));
  };

  // const handleAuthorChange = (e) => {
  //   setState({
  //     ...state,
  //     bookId: nanoid(),
  //     author: e.target.value
  //   });
  // };

  return (
    <>
      <div className="form-container">
        <h2 className="form-header">Add New Book</h2>
        <form action="POST" id="form" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title:
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                placeholder="Enter Title of book here..."
                required
                className="form-input"
                onChange={handleBook}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="author" className="form-label">
              Author:
              <input
                type="text"
                id="author"
                name="author"
                value={author}
                placeholder="Enter Author of book here..."
                required
                className="form-input"
                onChange={handleBook}
              />
            </label>
          </div>

          <div className="form-btn">
            {/* <NavLink className="btn link">Add Book</NavLink> */}
            <button
              type="submit"
              disabled={bookId === '' || title === '' || author === ''}
              className="btn link submit-input"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Form.defaultProps = {
  getBook: []
};

Form.propTypes = {
  getBook: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

// const mapDispatchToProps = (dispatch) => ({
//   getBook: (getForm) => dispatch(addBook(getForm))
// });

export default Form;
