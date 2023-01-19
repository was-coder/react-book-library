import React from 'react';
import Book from './Book';
import Form from './Form';

const bookList = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
  },
  {
    id: 2,
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
          <Book book={book} key={book.id} />
        ))}
      </div>

      <Form book={bookList} />
    </div>
  </>
);

export default Books;
