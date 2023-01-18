import React from 'react';

const Form = (title, author) => (
  <>
    <div className="form-container">
      <h2 className="form-header">Add New Book</h2>
      <form action="POST" id="form" className="form">
        <div className="form-group">
          <label htmlFor={title} className="form-label">
            Title:
            <input
              type="text"
              id={title}
              placeholder="Enter Title of book here..."
              className="form-input"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor={author} className="form-label">
            Author:
            <input
              type="text"
              id={author}
              placeholder="Enter Author of book here..."
              className="form-input"
            />
          </label>
        </div>
      </form>
    </div>
  </>
);

export default Form;
