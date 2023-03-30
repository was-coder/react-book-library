import React from 'react';
import Book from './Book';
import Form from './Form';

const bookList = [
  {
    bookId: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
  },
  {
    bookId: 2,
    title: 'Life is Good',
    author: "Adelakun Abdulwasi'"
  }
];

const Books = () => (
  <>
    <div className="container">
      <h1 className="booklist-header">List of Books</h1>

      <div className="booklist">
        {bookList.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>

      <Form />
    </div>
  </>
);

export default Books;
