import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const booksList = useSelector((state) => state.booksReducer.present);

  return (
    <>
      <div className="container">
        <h1 className="booklist-header">List of Books</h1>

        <div className="booklist">
          {booksList.map((book) => (
            <Book book={book} key={book.bookId} />
          ))}
        </div>

        <Form />
      </div>
    </>
  );
};

export default Books;
