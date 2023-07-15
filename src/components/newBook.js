import React from 'react';
import '../styles/newBook.css';

function AddBook() {
  return (
    <div className="form-wrapper">
      <h2 className="add-head">ADD NEW BOOK</h2>
      <form className="add-book">
        <input type="text" name="title" placeholder="Book Title" className="input-one" />
        <input type="text" name="author" placeholder="Book Author" className="input-two" />
        <button type="submit" className="add-button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;