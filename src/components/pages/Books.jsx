import React from 'react';
import { NavLink } from 'react-router-dom';
import Book from './Book';
import Form from './Form';

const bookList = [
  {
    id: 'book1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
  },
  {
    id: 'book2',
    title: 'Life is Good',
    author: "Adelakun Abdulwasi'"
  }
];

const Books = () => (
  <>
    <div className="container">
      <h1 className="booklist-header">List of Books</h1>

      {bookList.map((book) => (
        <div className="booklist" key={book.id}>
          <Book book={book} />
        </div>
      ))}

      <NavLink className="btn link">Remove Book</NavLink>

      <Form />
    </div>
  </>
);

export default Books;
